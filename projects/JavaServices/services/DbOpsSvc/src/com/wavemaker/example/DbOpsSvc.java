package com.wavemaker.example;

import com.wavemaker.runtime.javaservice.JavaServiceSuperClass;
import com.wavemaker.runtime.service.annotations.ExposeToClient;
import com.wavemaker.runtime.service.annotations.HideFromClient;

import com.wavemaker.runtime.RuntimeAccess;
import com.wavemaker.runtime.service.RuntimeService;
import com.wavemaker.runtime.service.TypedServiceReturn;

import com.custpurchasedb.data.Customer;


/**
 * This is a client-facing service class.  All
 * public methods will be exposed to the client.  Their return
 * values and parameters will be passed to the client or taken
 * from the client, respectively.  This will be a singleton
 * instance, shared between all requests. 
 * 
 * To log, call the superclass method log(LOG_LEVEL, String) or log(LOG_LEVEL, String, Exception).
 * LOG_LEVEL is one of FATAL, ERROR, WARN, INFO and DEBUG to modify your log level.
 * For info on these levels, look for tomcat/log4j documentation
 */
@ExposeToClient
public class DbOpsSvc extends JavaServiceSuperClass {
    /* Pass in one of FATAL, ERROR, WARN,  INFO and DEBUG to modify your log level;
     *  recommend changing this to FATAL or ERROR before deploying.  For info on these levels, look for tomcat/log4j documentation
     */
	//Dependency injected service
	private RuntimeService runtimeSvc;
	
	//String constants 
	private static final String COM_CUSTPURCHASEDB_DATA_CUSTOMER = "com.custpurchasedb.data.Customer";
	private static final String CUSTPURCHASE_DB = "custpurchaseDB";
	
    public DbOpsSvc() {
       super(INFO);
    }

    //This method gets the RuntimeService itself from RuntimeAccess, named runtimeService.
    public Customer updateCustomer(Customer customer){
		Customer updatedCustomer = null;
		log(INFO, "Updating customer: " + customer.getCompany());
		if(customer.getState().length() != 2){
			throw new RuntimeException("Invalid State length. Must be 2 digits only.");
		}
		try{
			//Get an instance of the RuntimeService, named runtimeService, from RuntimeAccess
			RuntimeService runtimeService = (RuntimeService)RuntimeAccess.getInstance().getServiceBean("runtimeService");
			
			//Use zero for index when calling update from java service
			TypedServiceReturn tsrCustomer = runtimeService.update(CUSTPURCHASE_DB, COM_CUSTPURCHASEDB_DATA_CUSTOMER,customer,0);
			updatedCustomer = (Customer)tsrCustomer.getReturnValue();
		} catch(Exception e) {
			log(ERROR, "There was a problem updating customer");
			e.printStackTrace();
		}
		return updatedCustomer;    
  } 

    //This method uses the injected instance of the RuntimeService, named runtimeSvc.
    public Customer updateCustomerInjected(Customer customer){
		Customer updatedCustomer = null;
		log(INFO, "Updating customer: " + customer.getCompany());
        if(customer.getState().length() != 2){
		    throw new RuntimeException("Invalid State length. Must be 2 digits only.");
		}
		try{
			//We already have runtimeSvc from injection, so we don't need to get it again.
			
			//Use zero for index when calling update from java service
			TypedServiceReturn tsrCustomer = runtimeSvc.update(CUSTPURCHASE_DB, COM_CUSTPURCHASEDB_DATA_CUSTOMER,customer,0);
			updatedCustomer = (Customer)tsrCustomer.getReturnValue();
		} catch(Exception e) {
			log(ERROR, "There was a problem updating customer");
			e.printStackTrace();
		}
		return updatedCustomer;    
  } 


	//Used by Spring to set runtimeSvc member 
	//See also DbOpsSvc.spring.xml
	@HideFromClient
	public void setRuntimeSvc(RuntimeService runtimeSvc){
		this.runtimeSvc = runtimeSvc;
	}

}
