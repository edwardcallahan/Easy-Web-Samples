dojo.declare("PageLazy", wm.Page, {
	start: function() {
		
	},
        buttonLazyLoadClick: function(inSender) {
        // causes a lazy load
        // note: department fetched only corresponds to selected item if grid is not sorted        
		this.employeeLiveVariable1.getItem(this.employeeDojoGrid.getSelectedIndex()).getValue("department");
	},
	"preferredDevice": "desktop",

	_end: 0
});