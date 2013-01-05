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

Main.widgets = {
varTemplateLogout: ["wm.LogoutVariable", {}, {}, {
input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
}],
imageList1: ["wm.ImageList", {"colCount":9,"height":16,"url":"lib/images/boolean/Signage/set.png","width":16}, {}],
genericDialog1: ["wm.GenericDialog", {"button1Close":true,"desktopHeight":"61px","height":"70px","modal":false,"noEscape":false,"title":"This is a Generic Dialog","userPrompt":"Hello WaveyWeb"}, {}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top"}, {}, {
panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","minHeight":600,"minWidth":900,"verticalAlign":"top","width":"75%"}, {}, {
panel1: ["wm.HeaderContentPanel", {"border":"0,0,1,0","borderColor":"#333333","height":"65px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,10","verticalAlign":"middle","width":"100%"}, {}, {
picture1: ["wm.Picture", {"height":"50px","source":"lib/wm/base/widget/themes/default/images/wmLogo.png","width":"62px"}, {}],
label3: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_20px","wm_FontSizePx_24px"]},"caption":"Hello WaveyWeb","height":"35px","padding":"4","width":"100%"}, {}],
panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"right","verticalAlign":"middle","width":"100%"}, {}, {
dojoMenu1: ["wm.DojoMenu", {"fullStructure":[{"label":"Help"},{"label":"About"},{"label":"Logout","onClick":"varTemplateLogout"}],"height":"24px","localizationStructure":{},"transparent":true,"width":"250px"}, {}]
}]
}],
panel2: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
tabLayers1: ["wm.TabLayers", {}, {}, {
layer1: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Localized ","horizontalAlign":"center","padding":"10","verticalAlign":"top"}, {"onShow":"layer1Show"}, {
button1: ["wm.Button", {"imageIndex":6,"imageList":"imageList1","margin":"4","width":"157px"}, {"onclick":"genericDialog1.show","onclick1":"layer2"}]
}],
layer2: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Connect","horizontalAlign":"center","verticalAlign":"top"}, {}, {
labelMouseOver: ["wm.Label", {"caption":"Hover Me","height":"131px","padding":"4","width":"637px"}, {}],
pageContainer1: ["wm.PageContainer", {"deferLoad":true,"pageName":"PageRichText","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}],
layer3: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Department","horizontalAlign":"center","verticalAlign":"top"}, {}, {
pageContainer3: ["wm.PageContainer", {"deferLoad":true,"pageName":"PageDepartment","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}],
layer4: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Lazy Loading","horizontalAlign":"center","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
pageContainer2: ["wm.PageContainer", {"deferLoad":true,"pageName":"PageLazy","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}]
}]
}],
panel6: ["wm.HeaderContentPanel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
picture2: ["wm.Picture", {"height":"100%","source":"lib/wm/base/widget/themes/default/images/wmSmallLogo.png","width":"24px"}, {}],
label2: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"caption":"Powered by WaveMaker","height":"100%","padding":"4"}, {}],
label1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"align":"right","caption":"Copyright 2012 [company name]","height":"100%","padding":"4","width":"100%"}, {}]
}]
}]
}]
};

Main.prototype._cssText = '';
Main.prototype._htmlText = '';