dojo.declare("PageItems", wm.Page, {
start: function() {
},
"preferredDevice": "tablet",
_end: 0
});

PageItems.widgets = {
itemLiveVariable1: ["wm.LiveVariable", {"type":"com.custpurchasedb.data.Item"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.custpurchasedb.data.Item","view":[{"caption":"Itemid","sortable":true,"dataIndex":"itemid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Itemname","sortable":true,"dataIndex":"itemname","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Price","sortable":true,"dataIndex":"price","type":"java.math.BigDecimal","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null}]}, {}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
custpurchaseDBLivePanel: ["wm.LivePanel", {"horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top"}, {}, {
itemDojoGrid: ["wm.List", {"_classes":{"domNode":["GridListStyle"]},"border":"1","columns":[{"show":false,"field":"itemid","title":"Itemid","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"itemname","title":"Itemname","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":false,"field":"price","title":"Price","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Itemid: \" + ${itemid} + \"</div>\"\n+ \"<div class='MobileRow'>Itemname: \" + ${itemname} + \"</div>\"\n+ \"<div class='MobileRow'>Price: \" + ${price} + \"</div>\"\n","mobileColumn":true}],"height":"100%","width":"200px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"itemLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
itemLiveForm1: ["wm.LiveForm", {"autoScroll":true,"enableTouchHeight":true,"height":"100%","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onSuccess":"itemLiveVariable1"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"itemDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
itemidEditor1: ["wm.Number", {"caption":"Itemid","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"itemid","height":"35px","readonly":true,"required":true,"width":"100%"}, {}],
itemnameEditor1: ["wm.Text", {"caption":"Itemname","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"itemname","height":"35px","readonly":true,"width":"100%"}, {}],
priceEditor1: ["wm.Number", {"caption":"Price","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"price","height":"35px","readonly":true,"required":true,"width":"100%"}, {}],
itemSpacer: ["wm.Spacer", {"height":"100%","width":"10px"}, {}],
itemLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","liveForm":"itemLiveForm1","operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton1: ["wm.Button", {"caption":"Save","height":"100%","margin":"4"}, {"onclick":"itemLiveForm1EditPanel.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"itemLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton1: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"itemLiveForm1EditPanel.cancelEdit"}]
}],
operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
newButton1: ["wm.Button", {"caption":"New","height":"100%","margin":"4"}, {"onclick":"itemLiveForm1EditPanel.beginDataInsert"}],
updateButton1: ["wm.Button", {"caption":"Update","height":"100%","margin":"4"}, {"onclick":"itemLiveForm1EditPanel.beginDataUpdate"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"itemLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}],
deleteButton1: ["wm.Button", {"caption":"Delete","height":"100%","margin":"4"}, {"onclick":"itemLiveForm1EditPanel.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"itemLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}]
};

PageItems.prototype._cssText = '';
PageItems.prototype._htmlText = '';