dojo.declare("Main", wm.Page, {
	"i18n": true,
	start: function() {
	    this.button1.setCaption(this.getDictionaryItem("SCRIPT_Main_continue_button_caption_term"));	
        this.connect(this.labelMouseOver.domNode, "onmouseover", this, "myMouseOverFunction");
	},
    myMouseOverFunction: function(){
        app.toastInfo("Hey, that tickles !");
    },
	"preferredDevice": "desktop",

	_end: 0
});