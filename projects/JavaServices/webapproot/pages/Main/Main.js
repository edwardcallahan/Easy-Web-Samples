dojo.declare("Main", wm.Page, {
	start: function() {
		
	},
	"preferredDevice": "desktop",

	getClientIpSVarResult: function(inSender, inDeprecated) {
        var address = inSender.getData().dataValue;
        if(address && address.length>1){
		    this.labelAddress.setCaption("Welcome: " + address);
            }
	},
	customerSaveButtonClick: function(inSender) {
		this.customerLiveForm1.populateDataOutput();
        this.updateCustomerSVar.update();
	},
	_end: 0
});