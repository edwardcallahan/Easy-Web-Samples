dojo.declare("PageRichText", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
_end: 0
});

PageRichText.widgets = {
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
label1: ["wm.Label", {"caption":"Welcome to page Rich Text","padding":"4","width":"498px"}, {}],
richText1: ["wm.RichText", {}, {}]
}]
};

PageRichText.prototype._cssText = '';
PageRichText.prototype._htmlText = '';