dojo.declare("Main", wm.Page, {
	start: function() {
		this.customerLiveForm1.liveSaving = false;
	},
	"preferredDevice": "desktop",

	svareCustomerSuccess: function(inSender, inDeprecated) {
        this.svarReadCustomer.update();
		
	},
	svarCustomerError: function(inSender, inError) {
		app.toastError(inError)
	},
	_end: 0
});