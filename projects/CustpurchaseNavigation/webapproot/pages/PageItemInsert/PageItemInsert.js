dojo.declare("PageItemInsert", wm.Page, {
	start: function() {
        //Start the user off in insert mode
        this.itemDBForm.beginDataInsert();	
	},
	"preferredDevice": "desktop",

	_end: 0
});