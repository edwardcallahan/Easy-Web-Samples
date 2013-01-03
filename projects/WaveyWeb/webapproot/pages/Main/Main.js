dojo.declare("Main", wm.Page, {
	"i18n": true,
	start: function() {
	    this.button1.setCaption(this.getDictionaryItem("SCRIPT_Main_continue_button_caption_term"));	
        this.connect(this.labelMouseOver.domNode, "onmouseover", this, "myMouseOverFunction");
	},
    
	layer1Show: function(inSender) {
      //this is using the log function defined in waveytools.js
      waveytools.logMessage("Now showing layer 1");
	},
    
    // this function was added manually
    // for use with connect in start(), above.
    myMouseOverFunction: function(){
        app.toastInfo("Hey, that tickles !");
    },
    
    "preferredDevice": "desktop",

	_end: 0
});
//added by import js library button in source editor
eval(wm.load("resources/javascript/waveytools.js"));