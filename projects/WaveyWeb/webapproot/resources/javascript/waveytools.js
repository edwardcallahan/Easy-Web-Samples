//  WaveyTools.js
//
//  Defines functions callable from multiple pages
//  Uses waveytools namespace, not the global namespace
//  example usage: waveytools.logMessage("Hello WaveyWeb");

var waveytools = new function() {
	
	//this function is exposed to page code
	this.logMessage = function(message) {
		//uses helperFunction, below
		helperFunction("WaveyTools logMessage: " + message.trim());
	};
	
	//this function is not exposed to page code
	var helperFunction = function(message){
		console.log("WaveyTools helperFunction: " + message);
	};

};