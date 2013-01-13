dojo.declare("PageDialogs", wm.Page, {
	start: function() {
		
	},

	buttonDateDialogClick: function(inSender) {
		var today = new Date();
        this.genericDialogModal.setUserPrompt("Today is: " + today.toDateString());
	},

	designableDialogUsingWidgetsClose: function(inSender, inWhy) {
		console.log("Designable dialog closed with favorite color of: " + this.textFavColor.getDataValue());
	},
	pageContainer1ItemDBFormInsertSuccess1: function(inSender) {
        var newItemName = inSender.page.itemDBForm.getDataOutput().getValue("itemname");
        if (newItemName!==undefined){
            console.log("Newly inserted item: " + newItemName);	
        }
	},
    
    "preferredDevice": "desktop",
        
	_end: 0
});