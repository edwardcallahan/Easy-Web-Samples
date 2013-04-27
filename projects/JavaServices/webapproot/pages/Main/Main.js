dojo.declare("Main", wm.Page, {
	start: function() {
		
	},
	"preferredDevice": "desktop",

	svarUpdateCustomerResult: function(inSender, inDeprecated) {
        //Clear the dirty flag so user is not asked to confirm having dataSet changed by update()
        this.customerDBForm.clearDirty();
        //Update the dataSet with updated data
		this.customerLiveVar.update();
	},
	svarUpdateCustomerError: function(inSender, inError) {
		app.toastError(inError);
	},
	_end: 0
});