dojo.declare("Main", wm.Page, {
	"preferredDevice": "tablet",

	purchaseLiveForm1Success1: function(inSender, inData) {
		this.serviceInputForm1Panel.setShowing(true);
	},
	purchaseLiveForm1BeginInsert: function(inSender) {
        this.serviceInputForm1Panel.setShowing(false);		
	},
	lineitemLiveVariableInsertSuccess1: function(inSender, inDeprecated) {
		this.serviceInputForm1.clearData();
	},
	_end: 0
});