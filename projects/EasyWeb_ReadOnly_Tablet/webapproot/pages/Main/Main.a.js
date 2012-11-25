dojo.declare("Main", wm.Page, {
start: function() {
},
"preferredDevice": "tablet",
_end: 0
});

Main.widgets = {
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
panel1: ["wm.Panel", {"height":"60px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
label1: ["wm.Label", {"caption":"Your Start Page","padding":"4","styles":{"fontWeight":"bold","fontSize":"16px","textAlign":"center"},"width":"100%"}, {}]
}],
panel2: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
layers1: ["wm.Layers", {"margin":"3,0,0,0"}, {}, {
layer1: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}],
layer2: ["wm.Layer", {"borderColor":"","caption":"layer2","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
label2: ["wm.Label", {"caption":"PageContainer1 is below this label","padding":"4","styles":{"fontWeight":"bold","fontSize":"16px","textAlign":"center"},"width":"100%"}, {}],
pageContainer1: ["wm.PageContainer", {"deferLoad":true}, {}]
}],
layer3: ["wm.Layer", {"borderColor":"","caption":"layer3","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
label3: ["wm.Label", {"caption":"PageContainer2 is below this label","padding":"4","styles":{"fontWeight":"bold","fontSize":"16px","textAlign":"center"},"width":"100%"}, {}],
pageContainer2: ["wm.PageContainer", {"deferLoad":true}, {}]
}]
}]
}],
panel3: ["wm.Panel", {"height":"54px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
toggleButtonPanel1: ["wm.ToggleButtonPanel", {"horizontalAlign":"left","manageHistory":true,"manageURL":true,"margin":"0,1,0,0","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"navButton1","targetProperty":"currentButton"}, {}]
}],
navButton1: ["wm.Button", {"border":"0,1,0,0","caption":"Layer One","height":"100%","margin":"0","width":"100%"}, {"onclick":"layer1"}],
navButton2: ["wm.Button", {"border":"0,1,0,0","caption":"Layer Two","height":"100%","margin":"0","width":"100%"}, {"onclick":"layer2"}],
navButton3: ["wm.Button", {"border":"0","caption":"Layer Three","height":"100%","margin":"0","width":"100%"}, {"onclick":"layer3"}]
}]
}]
}]
};

Main.prototype._cssText = '';
Main.prototype._htmlText = '';