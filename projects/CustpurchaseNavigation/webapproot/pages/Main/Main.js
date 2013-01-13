dojo.declare("Main", wm.Page, {
	start: function() {
		
	},
	"preferredDevice": "desktop",

    //Alert Events
    buttonAlertSimpleClick: function(inSender) {
		alert(this.textAlertMsg.getDataValue());
	},
	buttonAlertScriptClick: function(inSender) {
		app.alert(this.textAlertMsg.getDataValue());
	},
    buttonAlertUpdateClick: function(inSender) {
        var msg = "Important notice: " + this.textAlertMsg.getDataValue();  
        this.notificationCallAlert.setValue("input.data", {text: msg});      
        this.notificationCallAlert.update();
	},

    //Toast Events
    buttonToastScriptClick: function(inSender) {
        app.toastSuccess("Well done!");
    },
    buttonToastScriptAdvancedClick: function(inSender) {
	  if(app.toastDialog === undefined){
          app.createToastDialog();
      }
      app.toastDialog.showToast("Oops, something went wrong processing: " + this.textToastMsg.getDataValue(), 3000, "Error", "bottom center");	
    },
    
    //Confirmation Events
    buttonConfirmClick: function(inSender) {
		this.labelConfirmResult.setCaption("");
	},
	notificationCallConfirmOk: function(inSender, inResult) {
        this.labelConfirmResult.setCaption("OK, Great!");
	},
	notificationCallConfirmCancel: function(inSender) {
        this.labelConfirmResult.setCaption("Too bad. Maybe next time.");		
	},

	_end: 0
});