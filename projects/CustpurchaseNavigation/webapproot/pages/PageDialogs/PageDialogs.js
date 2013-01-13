dojo.declare("PageDialogs", wm.Page, {
	start: function() {
		
	},
	"preferredDevice": "desktop",

	buttonDateDialogClick: function(inSender) {
		var today = new Date();
        this.genericDialogModal.setUserPrompt("Today is: " + today.toDateString());
	},
	pageContainer1LayoutBox1Show: function(inSender /*,args*/) {
		debugger;
	},
	_end: 0
});