dojo.declare("Main", wm.Page, {
	"i18n": true,
	start: function() {
	    this.button1.setCaption(this.getDictionaryItem("SCRIPT_Main_continue_button_caption_term"));	
        this.connect(this.labelMouseOver.domNode, "onmouseover", this, "myMouseOverFunction");
	},
    
	layer1Show: function(inSender) {
	  //Your on show event code here
      logMessage("Now showing layer 1");
	},
    
    // This function was added by hand for use with connect, above.
    myMouseOverFunction: function(){
        app.toastInfo("Hey, that tickles !");
    },
    
    "preferredDevice": "desktop",

	_end: 0
});
eval(wm.load("resources/javascript/shared.js"));