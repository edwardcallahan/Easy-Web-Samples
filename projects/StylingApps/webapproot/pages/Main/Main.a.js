dojo.declare("Main", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
buttonDojoStyleClick: function(inSender) {
dojo.style("main_tabLayers1_decorator_button2",{"background-color":"#FF8700"});
},
_end: 0
});

Main.widgets = {
varTemplateLogout: ["wm.LogoutVariable", {}, {}, {
input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"center","layoutKind":"left-to-right","preferredDevice":"desktop","verticalAlign":"top"}, {}, {
panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","minHeight":600,"minWidth":900,"verticalAlign":"top","width":"75%"}, {}, {
panel1: ["wm.HeaderContentPanel", {"border":"0,0,1,0","borderColor":"#333333","height":"65px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,10","verticalAlign":"middle","width":"100%"}, {}, {
picture1: ["wm.Picture", {"border":"0","height":"50px","source":"lib/wm/base/widget/themes/default/images/wmLogo.png","width":"62px"}, {}],
label3: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_20px","wm_FontSizePx_24px"]},"border":"0","caption":"Styling Applications","height":"35px","padding":"4","width":"100%"}, {}],
panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"right","verticalAlign":"middle","width":"100%"}, {}, {
dojoMenu1: ["wm.DojoMenu", {"fullStructure":[{"label":"Help"},{"label":"About"},{"label":"Logout","onClick":"varTemplateLogout"}],"height":"24px","localizationStructure":{},"transparent":true,"width":"250px"}, {}]
}]
}],
panel2: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
tabLayers1: ["wm.TabLayers", {}, {}, {
layerSubThemes: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Sub Themes","horizontalAlign":"left","padding":"10","verticalAlign":"top"}, {}, {
MainContentPanel: ["wm.MainContentPanel", {"height":"125px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
labelMain: ["wm.Label", {"caption":"Main Content","padding":"4"}, {}],
text1: ["wm.Text", {"caption":"text1","dataValue":undefined,"displayValue":"","width":"100%"}, {}],
text2: ["wm.Text", {"caption":"text2","dataValue":undefined,"displayValue":"","width":"100%"}, {}],
text3: ["wm.Text", {"caption":"text3","dataValue":undefined,"displayValue":"","width":"100%"}, {}]
}],
EmphasizedContentPanel: ["wm.EmphasizedContentPanel", {"height":"125px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
labelEmphasized: ["wm.Label", {"caption":"Emphasized Content","padding":"4"}, {}],
text4: ["wm.Text", {"caption":"text4","dataValue":undefined,"displayValue":"","width":"100%"}, {}],
text5: ["wm.Text", {"caption":"text4","dataValue":undefined,"displayValue":"","width":"100%"}, {}],
text6: ["wm.Text", {"caption":"text6","dataValue":undefined,"displayValue":"","width":"100%"}, {}]
}],
HeaderContentPanel: ["wm.HeaderContentPanel", {"height":"125px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
labelMain2: ["wm.Label", {"caption":"Header Content","padding":"4"}, {}],
text7: ["wm.Text", {"caption":"text7","dataValue":undefined,"displayValue":"","width":"100%"}, {}],
text8: ["wm.Text", {"caption":"text8","dataValue":undefined,"displayValue":"","width":"100%"}, {}],
text9: ["wm.Text", {"caption":"text9","dataValue":undefined,"displayValue":"","width":"100%"}, {}]
}]
}],
layerCusstomizedPanels: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Customized Panels","horizontalAlign":"left","verticalAlign":"top"}, {}, {
CustomizedPanel: ["wm.Panel", {"height":"125px","horizontalAlign":"left","styles":{"backgroundGradient":{"direction":"horizontal","startColor":"#3737b9","endColor":"#011d65","colorStop":80},"color":"#f00000","textAlign":"center"},"verticalAlign":"top","width":"100%"}, {}, {
text10: ["wm.Text", {"caption":"text10","dataValue":undefined,"displayValue":"","width":"100%"}, {}],
text11: ["wm.Text", {"caption":"text11","dataValue":undefined,"displayValue":"","width":"100%"}, {}],
text12: ["wm.Text", {"caption":"text12","dataValue":undefined,"displayValue":"","width":"100%"}, {}]
}],
ClassPanel: ["wm.Panel", {"_classes":{"domNode":["CustomRedTextHorizGradientPanel"]},"height":"125px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
text13: ["wm.Text", {"caption":"text13","dataValue":undefined,"displayValue":"","width":"100%"}, {}],
text14: ["wm.Text", {"caption":"text14","dataValue":undefined,"displayValue":"","width":"100%"}, {}],
text15: ["wm.Text", {"caption":"text15","dataValue":undefined,"displayValue":"","width":"100%"}, {}]
}]
}],
layerCustom: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Custom","horizontalAlign":"left","verticalAlign":"top"}, {}, {
pageContainer2: ["wm.PageContainer", {"deferLoad":true,"height":"80px","pageName":"PageSearchEditor","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}],
buttonDojoStyle: ["wm.Button", {"caption":"Dojo Style ","margin":"4"}, {"onclick":"buttonDojoStyleClick"}],
pageContainer1: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"PageStyles","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}]
}]
}],
panel6: ["wm.HeaderContentPanel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
picture2: ["wm.Picture", {"border":"0","height":"100%","source":"lib/wm/base/widget/themes/default/images/wmSmallLogo.png","width":"24px"}, {}],
label2: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"border":"0","caption":"Powered by WaveMaker","height":"100%","padding":"4"}, {}],
label1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"align":"right","border":"0","caption":"Copyright 2012 [company name]","height":"100%","padding":"4","width":"100%"}, {}]
}]
}]
}]
};

Main.prototype._cssText = '';
Main.prototype._htmlText = '';