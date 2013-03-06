package com.calncal.dbservices;

import com.wavemaker.runtime.javaservice.JavaServiceSuperClass;
import com.wavemaker.runtime.service.annotations.ExposeToClient;

import com.wavemaker.runtime.RuntimeAccess;
import com.wavemaker.runtime.service.TypedServiceReturn;
import com.wavemaker.runtime.service.RuntimeService;
import com.wavemaker.runtime.security.SecurityService;

import com.wavemaker.common.WMRuntimeException;

import com.custpurchasedb.data.Customer;



@ExposeToClient
public class DbOpsSvc extends JavaServiceSuperClass {

//Dependency injected serrvices    
private RuntimeService runtimeSvc;
private SecurityService securitySvc;


public DbOpsSvc() {
       super(INFO);
    }

    public Customer updateCustomer(Customer customer){
        Customer updatedCustomer  = null;
        log(INFO, "Updating customer for user: " + securitySvc.getUserName());
        try{
            if(customer.getState().length() != 2){
                throw new RuntimeException("Invalid State length");
            }
            TypedServiceReturn tsrCustomer = runtimeSvc.update("custpurchaseDB", "com.custpurchasedb.data.Customer",customer,0);
            updatedCustomer = (Customer)tsrCustomer.getReturnValue();
        } catch(Exception e) {
            log(ERROR, "There was a problem updating customer");
            e.printStackTrace();
        }
        return updatedCustomer;	
    }
    
     public Customer insertCustomer (Customer customer) {
         String[] roles = securitySvc.getUserRoles();
         if(!roles[0].equals("admin")){
           throw new WMRuntimeException("Access Denied");  
         }
         Customer insertedCustomer  = null;
       try {
          TypedServiceReturn tsrCustomer = runtimeSvc.insert("custpurchaseDB", "com.custpurchasedb.data.Customer",customer);
          insertedCustomer = (Customer)tsrCustomer.getReturnValue();
          log(INFO, insertedCustomer.getCompany());
       } catch(Exception e) {
          log(ERROR, "Error inserting cusotmer", e);
          e.printStackTrace();
        }
        return insertedCustomer;	
    }
    
  
   //Used by Spring to inject runtimeSvc used for update 
   //See also DbOpsSvc.spring.xml
   public void setRuntimeSvc(RuntimeService runtimeSvc){
	   this.runtimeSvc = runtimeSvc;
   }

   public void setSecuritySvc(SecurityService securitySvc){
       this.securitySvc = securitySvc;
   }
}
