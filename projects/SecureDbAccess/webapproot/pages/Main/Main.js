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
	pageContainerAdminError: function(inSender, inErrorOrMessage) {
		app.toastError("Unable to display Admin page");
	},
	_end: 0
});