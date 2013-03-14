package com.wavemaker.example;

import java.util.Arrays;
import java.util.List;

import com.wavemaker.common.WMRuntimeException;

import com.wavemaker.runtime.javaservice.JavaServiceSuperClass;
//import com.wavemaker.runtime.RuntimeAccess; //not used 
import com.wavemaker.runtime.service.annotations.ExposeToClient;
import com.wavemaker.runtime.service.annotations.HideFromClient;
import com.wavemaker.runtime.service.response.LiveDataServiceResponse;
import com.wavemaker.runtime.service.PagingOptions;
import com.wavemaker.runtime.service.PropertyOptions;
import com.wavemaker.runtime.service.TypedServiceReturn;
import com.wavemaker.runtime.service.RuntimeService;
import com.wavemaker.runtime.security.SecurityService;


import com.custpurchasedb.data.Customer;

@ExposeToClient
public class SecureDbSvc extends JavaServiceSuperClass {

	private static final String COM_CUSTPURCHASEDB_DATA_CUSTOMER = "com.custpurchasedb.data.Customer";
	private static final String CUSTPURCHASE_DB = "custpurchaseDB";
	
	private static final String[] USER_OR_ADMIN_ROLE = {"userrole", "adminrole"};
	private static final String[] ADMIN_ROLE = {"adminrole"};
	
	//Dependency injected services    
	private RuntimeService runtimeSvc;
	private SecurityService securitySvc;
	
	public SecureDbSvc() {
		super(INFO);
	}

	public List<Customer> readCustomer(Customer customer, PropertyOptions propertyOptions, PagingOptions pagingOptions){
		roleCheck(USER_OR_ADMIN_ROLE);	
		List<Customer> customers  = null;
		LiveDataServiceResponse ldsResponse = null;
		log(INFO, "Reading customer for user: " + securitySvc.getUserName());
		try{
			if(propertyOptions == null){
				propertyOptions = new PropertyOptions();
			}
			if(pagingOptions == null){
				pagingOptions = new PagingOptions();
			}
			TypedServiceReturn tsrCustomer = runtimeSvc.read(CUSTPURCHASE_DB, COM_CUSTPURCHASEDB_DATA_CUSTOMER,customer,propertyOptions, pagingOptions);
			ldsResponse = (LiveDataServiceResponse)tsrCustomer.getReturnValue();
			customers = (List<Customer>)ldsResponse.getResult();
			} catch(Exception e) {
			log(ERROR, "There was a problem updating customer");
			e.printStackTrace();
		}
		return customers;    
	}

	public Customer updateCustomer(Customer customer){
		roleCheck(USER_OR_ADMIN_ROLE);	
		Customer updatedCustomer  = null;
		log(INFO, "Updating customer for user: " + securitySvc.getUserName());
		try{
			if(customer.getState().length() != 2){
				throw new RuntimeException("Invalid State length. Must be 2 digits only.");
			}
			//Use zero for index when calling update from java service
			TypedServiceReturn tsrCustomer = runtimeSvc.update(CUSTPURCHASE_DB, COM_CUSTPURCHASEDB_DATA_CUSTOMER,customer,0);
			updatedCustomer = (Customer)tsrCustomer.getReturnValue();
		} catch(Exception e) {
			log(ERROR, "There was a problem updating customer");
			e.printStackTrace();
		}
		return updatedCustomer;    
	}

	public Customer insertCustomer (Customer customer) {
		roleCheck(USER_OR_ADMIN_ROLE);		
		Customer insertedCustomer  = null;
		log(INFO, "Inserting customer for user: " + securitySvc.getUserName());
		try {
			TypedServiceReturn tsrCustomer = runtimeSvc.insert(CUSTPURCHASE_DB, COM_CUSTPURCHASEDB_DATA_CUSTOMER,customer);
			insertedCustomer = (Customer)tsrCustomer.getReturnValue();
			log(INFO, insertedCustomer.getCompany());
		} catch(Exception e) {
			log(ERROR, "Error inserting cusotmer", e);
			e.printStackTrace();
		}
		return insertedCustomer;	
	}

	public void deleteCustomer(Customer customer){
		roleCheck(ADMIN_ROLE);
		log(INFO, "Deleting customer for user: " + securitySvc.getUserName());
		try {
			runtimeSvc.delete(CUSTPURCHASE_DB, COM_CUSTPURCHASEDB_DATA_CUSTOMER, customer);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@HideFromClient	//WM-4704
	private void roleCheck(String[] requiredRoles){
		List<String> reqRoles = Arrays.asList(requiredRoles);
		List<String> roles = Arrays.asList(securitySvc.getUserRoles());
		for(String role : roles){
			for(String rRole : reqRoles){
                log(INFO, "Checking " + role + " for " + rRole);
				if(role.equals(rRole)){
					return;
				}
			}
		}
		log(ERROR, "User is not member of required role");
		throw new WMRuntimeException("Access is Denied");  
	}

	//Used by Spring to set runtimeSvc member 
	//See also SecureDbSvc.spring.xml
	@HideFromClient
	public void setRuntimeSvc(RuntimeService runtimeSvc){
		this.runtimeSvc = runtimeSvc;
	}

	//Used by Spring to set securitySvc member 
	//See also SecureDbSvc.spring.xml
	@HideFromClient
	public void setSecuritySvc(SecurityService securitySvc){
		this.securitySvc = securitySvc;
	}

}
