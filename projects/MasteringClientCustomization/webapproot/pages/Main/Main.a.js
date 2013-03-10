dojo.declare("Main", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
label5ReadOnlyNodeFormat: function(inSender, inValue) {
var now = new Date();
return("Application loaded at: " + now.toLocaleTimeString() + " on " + now.toLocaleDateString());
},
upButtonClick: function(inSender) {
try {
var thisControl = inSender.parent;
var newIndex = thisControl.parent.indexOfControl(thisControl) - 1;
if(newIndex >= 0){
thisControl.parent.moveControl(thisControl,(newIndex));
thisControl.reflowParent();
}
} catch(e) {
console.error('ERROR IN upButtonClick: ' + e);
}
},
customerDojoGrid1GridButtonClick: function(inSender, fieldName, rowData, rowIndex) {
inSender.setSelectedRow(rowIndex);
this.layer3.activate();
this.customerEditLiveForm1.beginDataUpdate();
},
customerDojoGrid1Select: function(inSender) {
this.layer2.activate();
},
customerEditLiveForm1BeforeServiceCall: function(inSender, inOperation, inData) {
if(inData.zip.toString().length!=5){
app.toastError("Zip code must be 5 digits only");
//Must be error of "Abort" to stop service call
throw new Error("Abort");
}
},
AddItemBttonClick: function(inSender) {
var name = this.newItemtext.getDataValue();
var panelName = "panel" + name;
var labelName = "label" + name;
var caption = "Item " + name;
var buttonName = "button" + name;
this.ItemListPanel.createComponent(panelName , "wm.Panel",{"height":"46px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"400px"}, {}, {
labelName: ["wm.Label", {"align":"center","caption":caption,"padding":"4"}, {}],
upButtonName: ["wm.Button", {"caption":"Move Up","margin":"4"}, {"onclick":"upButtonClick"}]
});
this.ItemListPanel.reflow();
},
_end: 0
});

Main.widgets = {
varTemplateLogout: ["wm.LogoutVariable", {}, {}, {
input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
}],
customerLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"type":"com.custpurchasedb.data.Customer"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.custpurchasedb.data.Customer","view":[{"caption":"Custid","sortable":true,"dataIndex":"custid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Company","sortable":true,"dataIndex":"company","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Address","sortable":true,"dataIndex":"address","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"City","sortable":true,"dataIndex":"city","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"State","sortable":true,"dataIndex":"state","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Zip","sortable":true,"dataIndex":"zip","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Imageurl","sortable":true,"dataIndex":"imageurl","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"Twitter","sortable":true,"dataIndex":"twitter","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null}]}, {}]
}],
lineitemLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"type":"com.custpurchasedb.data.Lineitem"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"customerDojoGrid1.selectedItem","targetProperty":"filter.purchase.customer"}, {}]
}],
liveView: ["wm.LiveView", {"dataType":"com.custpurchasedb.data.Lineitem","related":["purchase","purchase.customer","item"],"view":[{"caption":"Lineitemid","sortable":true,"dataIndex":"lineitemid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":5000,"subType":null,"widthUnits":"px"},{"caption":"Quantity","sortable":true,"dataIndex":"quantity","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":5001,"subType":null,"widthUnits":"px"},{"caption":"Orderdate","sortable":true,"dataIndex":"purchase.orderdate","type":"java.util.Date","displayType":"Date","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":6001},{"caption":"Itemname","sortable":true,"dataIndex":"item.itemname","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":7001},{"caption":"Price","sortable":true,"dataIndex":"item.price","type":"java.math.BigDecimal","displayType":"Number","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":7002},{"caption":"Custid","sortable":true,"dataIndex":"purchase.customer.custid","type":"java.lang.Integer","displayType":"Number","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":8000},{"caption":"Company","sortable":true,"dataIndex":"purchase.customer.company","type":"java.lang.String","displayType":"Text","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":8001},{"caption":"Address","sortable":true,"dataIndex":"purchase.customer.address","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":8002},{"caption":"City","sortable":true,"dataIndex":"purchase.customer.city","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":8003},{"caption":"State","sortable":true,"dataIndex":"purchase.customer.state","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":8004},{"caption":"Zip","sortable":true,"dataIndex":"purchase.customer.zip","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":8005},{"caption":"Imageurl","sortable":true,"dataIndex":"purchase.customer.imageurl","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":8006},{"caption":"Twitter","sortable":true,"dataIndex":"purchase.customer.twitter","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":8007}]}, {}]
}],
customerDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","desktopHeight":"288px","height":"288px","title":"customer","width":"500px"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
customerLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"218px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"customerLivePanel1.popupLiveFormSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"customerDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
custidEditor1: ["wm.Number", {"caption":"Custid","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"custid","height":"26px","required":true,"width":"100%"}, {}],
companyEditor1: ["wm.Text", {"caption":"Company","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"company","height":"26px","required":true,"width":"100%"}, {}],
addressEditor1: ["wm.Text", {"caption":"Address","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"address","height":"26px","width":"100%"}, {}],
cityEditor1: ["wm.Text", {"caption":"City","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"city","height":"26px","width":"100%"}, {}],
stateEditor1: ["wm.Text", {"caption":"State","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"state","height":"26px","width":"100%"}, {}],
zipEditor1: ["wm.Text", {"caption":"Zip","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"zip","height":"26px","width":"100%"}, {}],
imageurlEditor1: ["wm.Text", {"caption":"Imageurl","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"imageurl","height":"26px","width":"100%"}, {}],
twitterEditor1: ["wm.Text", {"caption":"Twitter","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"twitter","height":"26px","width":"100%"}, {}]
}]
}],
buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
customerSaveButton: ["wm.Button", {"caption":"Save","height":"100%","margin":"4"}, {"onclick":"customerLiveForm1.saveDataIfValid"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"customerLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
customerCancelButton: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"customerDialog.hide","onclick1":"customerLiveForm1.cancelEdit"}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"center","layoutKind":"left-to-right","preferredDevice":"desktop","verticalAlign":"top"}, {}, {
panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","minHeight":600,"minWidth":900,"verticalAlign":"top","width":"75%"}, {}, {
panel1: ["wm.HeaderContentPanel", {"border":"0,0,1,0","borderColor":"#333333","height":"65px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,10","verticalAlign":"middle","width":"100%"}, {}, {
picture1: ["wm.Picture", {"height":"50px","source":"lib/wm/base/widget/themes/default/images/wmLogo.png","width":"62px"}, {}],
label3: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_20px","wm_FontSizePx_24px"]},"caption":"Chapter 11 - Mastering Client Customization","display":undefined,"height":"35px","padding":"4","width":"646px"}, {}],
panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"right","verticalAlign":"middle","width":"100%"}, {}, {
dojoMenu1: ["wm.DojoMenu", {"fullStructure":[{"label":"Help"},{"label":"About"},{"label":"Logout","onClick":"varTemplateLogout"}],"height":"24px","localizationStructure":{},"transparent":true,"width":"250px"}, {}]
}]
}],
panel2: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
tabLayers1: ["wm.TabLayers", {}, {}, {
layer1: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Customers","horizontalAlign":"left","padding":"10","verticalAlign":"top"}, {}, {
customerDojoGrid1: ["wm.DojoGrid", {"columns":[{"show":false,"field":"custid","title":"Custid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"company","title":"Company","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"address","title":"Address","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"city","title":"City","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"state","title":"State","width":"100px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"zip","title":"Zip","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"imageurl","title":"Imageurl","width":"80px","align":"center","formatFunc":"wm_image_formatter","formatProps":{"width":80,"height":80},"editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"twitter","title":"Twitter","width":"100%","align":"left","formatFunc":"wm_link_formatter","formatProps":{"prefix":"http://twitter.com/"},"editorProps":{"restrictValues":true},"expression":"\"@\" + ${twitter}","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","editorProps":{"restrictValues":true},"expression":"\"<div class='MobileRowTitle'>Company: \" + ${company} + \"</div>\"\n+ \"<div class='MobileRow'>Address: \" + ${address} + \"</div>\"\n+ \"<div class='MobileRow'>City: \" + ${city} + \"</div>\"\n+ \"<div class='MobileRow'>State: \" + ${state} + \"</div>\"\n+ \"<div class='MobileRow'>Zip: \" + ${zip} + \"</div>\"\n+ \"<div class='MobileRow'>Imageurl: \" + wm.List.prototype.imageFormatter({\"width\":80,\"height\":80}, null,null,null,${imageurl}) + \"</div>\"\n","mobileColumn":true},{"show":true,"field":"Edit","title":"Edit","width":"80%","align":"center","formatFunc":"wm_button_formatter","editorProps":{"restrictValues":true},"expression":"\"Update \" + ${company}","isCustomField":true,"mobileColumn":false}],"dsType":"com.custpurchasedb.data.Customer","height":"100%","margin":"4","minDesktopHeight":60}, {"onGridButtonClick":"customerDojoGrid1GridButtonClick","onSelect":"customerDojoGrid1Select"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"customerLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}]
}],
layer2: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Orders","horizontalAlign":"center","verticalAlign":"top"}, {}, {
label4: ["wm.Label", {"align":"center","height":"47px","padding":"4","styles":{"fontSize":"26px","fontWeight":"bolder"},"width":"418px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"customerDojoGrid1.selectedItem.company","targetProperty":"caption"}, {}]
}]
}],
orderDojoGrid1: ["wm.DojoGrid", {"columns":[{"show":false,"field":"lineitemid","title":"Lineitemid","width":"80px","align":"right","formatFunc":"","formatProps":null,"editorProps":null,"mobileColumn":false},{"show":true,"field":"purchase.orderdate","title":"Orderdate","width":"100px","align":"center","formatFunc":"wm_date_formatter","formatProps":{"useLocalTime":true,"formatLength":"medium","dateType":"date"},"editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"item.itemname","title":"Itemname","width":"100%","align":"left","formatFunc":"","formatProps":null,"editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"quantity","title":"Quantity","width":"80px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","editorProps":{"restrictValues":true},"expression":"\"<div class='MobileRowTitle'>Orderdate: \" + wm.List.prototype.dateFormatter({\"useLocalTime\":true,\"formatLength\":\"medium\",\"dateType\":\"date\"}, null,null,null,${purchase.orderdate}) + \"</div>\"\n+ \"<div class='MobileRow'>Itemname: \" + ${item.itemname} + \"</div>\"\n+ \"<div class='MobileRow'>Quantity: \" + ${quantity} + \"</div>\"\n+ \"<div class='MobileRow'>Price: \" + wm.List.prototype.currencyFormatter({\"currency\":\"USD\",\"dijits\":2}, null,null,null,${item.price}) + \"</div>\"\n","mobileColumn":true},{"show":true,"field":"item.price","title":"Price","width":"80px","align":"right","formatFunc":"wm_currency_formatter","formatProps":{"currency":"USD","dijits":2},"editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"Line Total","title":"Line Total","width":"100px","align":"right","formatFunc":"wm_currency_formatter","formatProps":{"currency":"USD","dijits":2},"editorProps":{"restrictValues":true},"expression":"${quantity} * ${item.price}","isCustomField":true,"mobileColumn":false},{"show":false,"field":"purchase.customer.custid","title":"Purchase.customer.custid","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"purchase.customer.company","title":"Purchase.customer.company","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":false,"field":"purchase.customer.address","title":"Purchase.customer.address","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":false,"field":"purchase.customer.city","title":"Purchase.customer.city","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":false,"field":"purchase.customer.state","title":"Purchase.customer.state","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":false,"field":"purchase.customer.zip","title":"Purchase.customer.zip","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":false,"field":"purchase.customer.imageurl","title":"Purchase.customer.imageurl","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":false,"field":"purchase.customer.twitter","title":"Purchase.customer.twitter","width":"100%","displayType":"Text","align":"left","formatFunc":""}],"dsType":"com.custpurchasedb.data.Lineitem","height":"100%","margin":"4","minDesktopHeight":60,"singleClickEdit":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lineitemLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}]
}],
layer3: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Edit","horizontalAlign":"left","verticalAlign":"top"}, {}, {
customerEditLiveForm1: ["wm.LiveForm", {"fitToContentHeight":true,"height":"242px","horizontalAlign":"left","readonly":true,"verticalAlign":"top"}, {"onBeforeServiceCall":"customerEditLiveForm1BeforeServiceCall"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"customerDojoGrid1.selectedItem","targetProperty":"dataSet"}, {}]
}],
custidEditor2: ["wm.Number", {"caption":"Custid","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"custid","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
companyEditor2: ["wm.Text", {"caption":"Company","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"company","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
addressEditor2: ["wm.Text", {"caption":"Address","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"address","height":"26px","readonly":true,"width":"100%"}, {}],
cityEditor2: ["wm.Text", {"caption":"City","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"city","height":"26px","readonly":true,"width":"100%"}, {}],
stateEditor2: ["wm.Text", {"caption":"State","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"state","height":"26px","readonly":true,"width":"100%"}, {}],
zipEditor2: ["wm.Text", {"caption":"Zip","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"zip","height":"26px","readonly":true,"width":"100%"}, {}],
imageurlEditor2: ["wm.Text", {"caption":"Imageurl","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"imageurl","height":"26px","readonly":true,"regExp":"^(https?|file)://.+$","width":"100%"}, {}],
twitterEditor2: ["wm.Text", {"caption":"Twitter","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"twitter","height":"26px","readonly":true,"width":"100%"}, {}],
customerEditLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","liveForm":"customerEditLiveForm1","operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton1: ["wm.Button", {"caption":"Save","height":"100%","margin":"4"}, {"onclick":"customerEditLiveForm1EditPanel.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"customerEditLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton1: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"customerEditLiveForm1EditPanel.cancelEdit"}]
}],
operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
newButton1: ["wm.Button", {"caption":"New","height":"100%","margin":"4"}, {"onclick":"customerEditLiveForm1EditPanel.beginDataInsert"}],
updateButton1: ["wm.Button", {"caption":"Update","height":"100%","margin":"4"}, {"onclick":"customerEditLiveForm1EditPanel.beginDataUpdate"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"customerEditLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}],
deleteButton1: ["wm.Button", {"caption":"Delete","height":"100%","margin":"4"}, {"onclick":"customerEditLiveForm1EditPanel.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"customerEditLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}],
layer4: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Dynamic Content","horizontalAlign":"center","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
AddItemBttonPanel: ["wm.Panel", {"height":"32px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"400px"}, {}, {
newItemtext: ["wm.Text", {"caption":"Item Name","dataValue":"","displayValue":"","required":true}, {}],
AddItemBtton: ["wm.Button", {"caption":"Add Item","margin":"4"}, {"onclick":"AddItemBttonClick"}]
}],
ItemListPanel: ["wm.Panel", {"height":"100%","horizontalAlign":"center","verticalAlign":"top","width":"100%"}, {}, {
panel4: ["wm.Panel", {"height":"46px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"400px"}, {}, {
label6: ["wm.Label", {"align":"center","caption":"Item 1","padding":"4"}, {}],
upButton1: ["wm.Button", {"caption":"Move Up","margin":"4"}, {"onclick":"upButtonClick"}]
}],
panel7: ["wm.Panel", {"height":"46px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"400px"}, {}, {
label7: ["wm.Label", {"align":"center","caption":"Item 2","padding":"4"}, {}],
upButton2: ["wm.Button", {"caption":"Move Up","margin":"4"}, {"onclick":"upButtonClick"}]
}],
panel8: ["wm.Panel", {"height":"46px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"400px"}, {}, {
label8: ["wm.Label", {"align":"center","caption":"Item 3","padding":"4"}, {}],
upButton3: ["wm.Button", {"caption":"Move Up","margin":"4"}, {"onclick":"upButtonClick"}]
}],
panel9: ["wm.Panel", {"height":"46px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"400px"}, {}, {
label9: ["wm.Label", {"align":"center","caption":"Item 4","padding":"4"}, {}],
upButton4: ["wm.Button", {"caption":"Move Up","margin":"4"}, {"onclick":"upButtonClick"}]
}],
panel10: ["wm.Panel", {"height":"46px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"400px"}, {}, {
label10: ["wm.Label", {"align":"center","caption":"Item 5","padding":"4"}, {}],
upButton5: ["wm.Button", {"caption":"Move Up","margin":"4"}, {"onclick":"upButtonClick"}]
}]
}]
}]
}]
}],
panel6: ["wm.HeaderContentPanel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
picture2: ["wm.Picture", {"height":"100%","source":"lib/wm/base/widget/themes/default/images/wmSmallLogo.png","width":"24px"}, {}],
label2: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"caption":"Powered by WaveMaker","height":"100%","padding":"4"}, {}],
label5: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_20px"]},"align":"center","caption":"Date and Time Go HERE","display":"label5ReadOnlyNodeFormat","height":"100%","padding":"4","width":"200%"}, {}],
label1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"align":"right","caption":"Copyright 2012 [company name]","height":"100%","padding":"4","width":"100%"}, {}]
}]
}]
}]
};

Main.prototype._cssText = '';
Main.prototype._htmlText = '';