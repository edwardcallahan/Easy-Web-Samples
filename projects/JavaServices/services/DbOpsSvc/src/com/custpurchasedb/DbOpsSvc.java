package com.custpurchasedb;

import com.wavemaker.runtime.javaservice.JavaServiceSuperClass;
import com.wavemaker.runtime.service.annotations.ExposeToClient;

import com.custpurchasedb.CustpurchaseDB;
import com.custpurchasedb.data.*;

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
	
	private CustpurchaseDB custpurchaseDB;

	/* Pass in one of FATAL, ERROR, WARN,  INFO and DEBUG to modify your log level;
     *  recommend changing this to FATAL or ERROR before deploying.  For info on these levels, look for tomcat/log4j documentation
     */
    public DbOpsSvc() {
       super(INFO);
    }
    
    //Uses injected custpurchaseDB
    public Customer updateCustomer(Customer customer){
        if(customer.getState().length() != 2){
            throw new RuntimeException("Invalid State length");
        }
    	return (Customer)custpurchaseDB.update(customer); 	
    }
    
  
   //Used by Spring to inject CustpurchaseDB used for update 
   //See also DbOpsSvc.spring.xml
   public void setCustpurchaseDB(CustpurchaseDB custpurchaseDB){
	   this.custpurchaseDB = custpurchaseDB;
   }

}
