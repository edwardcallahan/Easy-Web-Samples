dojo.declare("Main", wm.Page, {
	start: function() {
		
	},
	"preferredDevice": "desktop",

	saveButton1Click: function(inSender) {
        var form = this.customerLiveForm1;
		form.populateDataOutput()
        console.log("operation: " + form.operation);
    	if (form.operation == "insert")
			this.insertCustomerSvar.update();
		if (form.operation == "update")
    		this.updateCustomerSvar.update();
        form.endEdit();
	},
	insertCustomerSvarError: function(inSender, inError) {
		app.alert(inError);
	},
	_end: 0
});