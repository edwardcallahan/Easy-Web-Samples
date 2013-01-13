dojo.declare("PageMobile", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
_end: 0
});

PageMobile.widgets = {
navigationCall1: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Main\"","targetProperty":"pageName"}, {}]
}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"center","verticalAlign":"top"}, {}, {
label1: ["wm.Label", {"autoSizeWidth":true,"caption":"Put the Mobile Version of Application Here","height":"27px","padding":"4","styles":{"fontSize":"24px"},"width":"508px"}, {}],
button1: ["wm.Button", {"caption":"Return to Application","margin":"4","width":"170px"}, {"onclick":"navigationCall1"}]
}]
};

PageMobile.prototype._cssText = '';
PageMobile.prototype._htmlText = '';