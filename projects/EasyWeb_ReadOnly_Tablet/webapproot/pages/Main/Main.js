dojo.declare("Main", wm.Page, {
	start: function() {
		
	},
	"preferredDevice": "tablet",

    // Database value does not contain @, add it
	labelTwitterReadOnlyNodeFormat: function(inSender, inValue) {
		return("@" + inValue);
	},
	_end: 0
});