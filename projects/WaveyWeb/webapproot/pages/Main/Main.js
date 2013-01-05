dojo.declare("Main", wm.Page, {
	"i18n": true,
	start: function() {
        //sets the caption on localized layer using dictionary
	    this.button1.setCaption(this.getDictionaryItem("SCRIPT_Main_continue_button_caption_term"));
        //connect mouseover event on connect layer to myMouseOverFunction, below
        this.connect(this.labelMouseOver.domNode, "onmouseover", this, "myMouseOverFunction");
	},
    
    //uses g the log function defined in resource file, waveytools.js
    layer1Show: function(inSender) {
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