dojo.declare("PageAbout", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
_end: 0
});

PageAbout.widgets = {
layoutBox1: ["wm.Layout", {"horizontalAlign":"center","verticalAlign":"top"}, {}, {
htmlAbout: ["wm.Html", {"html":"resources/htmlcontent/About_Content.html","minDesktopHeight":15}, {}]
}]
};

PageAbout.prototype._cssText = '';
PageAbout.prototype._htmlText = '';