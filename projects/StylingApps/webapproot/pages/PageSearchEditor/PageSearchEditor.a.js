dojo.declare("PageSearchEditor", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
_end: 0
});

PageSearchEditor.widgets = {
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
label1: ["wm.Label", {"caption":"Search Editor from Template","padding":"4"}, {}],
panel15: ["wm.Panel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
text1: ["wm.Text", {"dataValue":undefined,"displayValue":"","placeHolder":"Search","resetButton":true,"width":"100%"}, {}],
picture5: ["wm.Picture", {"border":"0","height":"16px","source":"lib/images/silkIcons/zoom.png","width":"16px"}, {}]
}]
}]
};

PageSearchEditor.prototype._cssText = '';
PageSearchEditor.prototype._htmlText = '';