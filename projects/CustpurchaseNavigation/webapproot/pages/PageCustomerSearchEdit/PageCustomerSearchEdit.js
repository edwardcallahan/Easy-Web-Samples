dojo.declare("PageCustomerSearchEdit", wm.Page, {
    
    //variable used to hold custid, if found by start, -1 otherwise
    selectedCustomerID: -1, 
    
    //inBackState and inLocationState were added to the start function as params 
	 start: function(inBackState, inLocationState) { 
        if (inLocationState !== undefined) {
            var selCustID = inLocationState[this.getRuntimeId()] .custid;
            if (selCustID !== undefined) {
                this.selectedCustomerID = selCustID;
            }
        }
	},
    
    customerDojoGridSelectionChange: function(inSender) {
        var custid = inSender.selectedItem.getValue("data.custid");
        var company = this.customerDojoGrid.selectedItem.getValue("data.company");
	    app.addHistory({id: this.getRuntimeId(),
                options:{custid: custid},
                title:company});	
	},
    
    //Requires 6.5.2 with studio patches 
    generateStateUrl: function(inLocationState) {
        var custid = this.customerDojoGrid.selectedItem.getValue("data.custid");
        if(custid !== undefined){
            inLocationState[this.getRuntimeId()] = {"custid": custid}; 
        }
    },
        
	customerLiveVariable1Success: function(inSender, inDeprecated) {
        if(this.selectedCustomerID !== -1){
            var query = {custid:this.selectedCustomerID};
            this.customerDojoGrid.selectByQuery(query);
            this.selectedCustomerID = -1;
        }
	},
    
    "preferredDevice": "desktop",
	
    _end: 0
});