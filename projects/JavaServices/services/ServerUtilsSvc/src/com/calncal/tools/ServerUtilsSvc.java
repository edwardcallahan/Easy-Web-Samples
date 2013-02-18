package com.calncal.tools;

import com.wavemaker.runtime.RuntimeAccess;
import com.wavemaker.runtime.javaservice.JavaServiceSuperClass;
import com.wavemaker.runtime.service.annotations.ExposeToClient;

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
public class ServerUtilsSvc extends JavaServiceSuperClass {
	
	private RuntimeAccess runtimeAccess;
	
    /* Pass in one of FATAL, ERROR, WARN,  INFO and DEBUG to modify your log level;
     *  recommend changing this to FATAL or ERROR before deploying.  For info on these levels, look for tomcat/log4j documentation
     */
    public ServerUtilsSvc() {
       super(INFO);
    }
    
    /**
     *  Get IP address of client
     *  Takes optional Integer to specify return for demo purposes
     **/
   public String getClientIP(Integer country) {
       String result  = "0:0:0:0:0";
        try {
         if (country == null || country == 0) {    
          result = runtimeAccess.getRequest().getRemoteAddr();
          log(INFO, "Actual address from request: " + result);
         }
         else if (country == 1){
           result = "110.232.96.128"; //KR
         }
         else if (country == 2 || result.contains("0:0:0:0:0")){
             result = "212.58.244.58"; //UK, default
         }   
            log(INFO, "Now serving: " +  result);  
       } catch(Exception e) {
          log(ERROR, "There was a problem getting client IP address", e);
       }
       return result;
    }  

    public void setRuntimeAccess(RuntimeAccess runtimeAccess){
 	   this.runtimeAccess = runtimeAccess;
    }

}
