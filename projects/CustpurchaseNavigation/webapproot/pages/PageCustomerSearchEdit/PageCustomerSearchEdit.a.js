dojo.declare("PageCustomerSearchEdit", wm.Page, {
//variable used to hold custid, if found by start, -1 otherwise
selectedCustomerID: -1,
//inBackState and inLocationState were added to the start function as params
start: function(inBackState, inLocationState) {
if (inLocationState !== undefined) {
var selCustID = inLocationState[this.getRuntimeId()] .custid;
if (selCustID !== undefined) {
this.selectedCustomerID = selCustID;
}
}
},
customerDojoGridSelectionChange: function(inSender) {
var custid = inSender.selectedItem.getValue("data.custid");
var company = this.customerDojoGrid.selectedItem.getValue("data.company");
app.addHistory({id: this.getRuntimeId(),
options:{custid: custid},
title:company});
},
//Requires 6.5.2 with studio patches
generateStateUrl: function(inLocationState) {
var custid = this.customerDojoGrid.selectedItem.getValue("data.custid");
inLocationState[this.getRuntimeId()] = {"custid": custid};
},
customerLiveVariable1Success: function(inSender, inDeprecated) {
if(this.selectedCustomerID !== -1){
var query = {custid:this.selectedCustomerID};
this.customerDojoGrid.selectByQuery(query);
this.selectedCustomerID = -1;
}
},
"preferredDevice": "desktop",
_end: 0
});

PageCustomerSearchEdit.widgets = {
customerLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","type":"com.custpurchasedb.data.Customer"}, {"onSuccess":"customerLiveVariable1Success"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"textCustomerSearch.dataValue","targetProperty":"filter.company"}, {}]
}],
liveView: ["wm.LiveView", {"dataType":"com.custpurchasedb.data.Customer","view":[{"caption":"Custid","sortable":true,"dataIndex":"custid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Company","sortable":true,"dataIndex":"company","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Address","sortable":true,"dataIndex":"address","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"City","sortable":true,"dataIndex":"city","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"State","sortable":true,"dataIndex":"state","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Zip","sortable":true,"dataIndex":"zip","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Imageurl","sortable":true,"dataIndex":"imageurl","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"Twitter","sortable":true,"dataIndex":"twitter","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null}]}, {}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"center","verticalAlign":"top"}, {}, {
custpurchaseDBLivePanel: ["wm.LivePanel", {"horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top"}, {}, {
customerDojoGridPanel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"200px"}, {}, {
customerDojoGrid: ["wm.DojoGrid", {"columns":[{"show":false,"field":"custid","title":"Custid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"company","title":"Company","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"address","title":"Address","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"city","title":"City","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"state","title":"State","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"zip","title":"Zip","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"imageurl","title":"Imageurl","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"twitter","title":"Twitter","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"","mobileColumn":false},{"show":true,"field":"customCompanyCity","title":"Company","width":"100%","align":"left","editorProps":{"restrictValues":true},"expression":"${company}  + \" of \" +${city}","isCustomField":true}],"dsType":"com.custpurchasedb.data.Customer","height":"100%","localizationStructure":{},"margin":"4"}, {"onSelectionChange":"customerDojoGridSelectionChange"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"customerLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}]
}],
customerLiveForm1: ["wm.LiveForm", {"autoScroll":true,"height":"100%","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onSuccess":"customerLiveVariable1"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"customerDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
pictureCustomer: ["wm.Picture", {"height":"160px","width":"160px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"imageurlEditor1.dataValue","targetProperty":"source"}, {}]
}]
}],
custidEditor1: ["wm.Number", {"caption":"Custid","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"custid","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
companyEditor1: ["wm.Text", {"caption":"Company","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"company","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
addressEditor1: ["wm.Text", {"caption":"Address","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"address","height":"26px","readonly":true,"width":"100%"}, {}],
cityEditor1: ["wm.Text", {"caption":"City","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"city","height":"26px","readonly":true,"width":"100%"}, {}],
stateEditor1: ["wm.Text", {"caption":"State","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"state","height":"26px","readonly":true,"width":"100%"}, {}],
zipEditor1: ["wm.Text", {"caption":"Zip","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"zip","height":"26px","readonly":true,"width":"100%"}, {}],
imageurlEditor1: ["wm.Text", {"caption":"Imageurl","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"imageurl","height":"26px","readonly":true,"width":"100%"}, {}],
twitterEditor1: ["wm.Text", {"caption":"Twitter","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"twitter","height":"26px","readonly":true,"width":"100%"}, {}],
customerSpacer: ["wm.Spacer", {"height":"100%","width":"10px"}, {}],
customerLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","liveForm":"customerLiveForm1","operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton1: ["wm.Button", {"caption":"Save","height":"100%","margin":"4"}, {"onclick":"customerLiveForm1EditPanel.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"customerLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton1: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"customerLiveForm1EditPanel.cancelEdit"}]
}],
operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
newButton1: ["wm.Button", {"caption":"New","height":"100%","margin":"4"}, {"onclick":"customerLiveForm1EditPanel.beginDataInsert"}],
updateButton1: ["wm.Button", {"caption":"Update","height":"100%","margin":"4"}, {"onclick":"customerLiveForm1EditPanel.beginDataUpdate"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"customerLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}],
deleteButton1: ["wm.Button", {"caption":"Delete","height":"100%","margin":"4"}, {"onclick":"customerLiveForm1EditPanel.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"customerLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}]
};

PageCustomerSearchEdit.prototype._cssText = '';
PageCustomerSearchEdit.prototype._htmlText = '';