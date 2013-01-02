dojo.declare("Page2", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
_end: 0
});

Page2.widgets = {
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
label1: ["wm.Label", {"caption":"Welcome to page 2","padding":"4","width":"498px"}, {}],
richText1: ["wm.RichText", {}, {}]
}]
};

Page2.prototype._cssText = '';
Page2.prototype._htmlText = '';