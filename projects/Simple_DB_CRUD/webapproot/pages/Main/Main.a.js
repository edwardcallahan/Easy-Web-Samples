dojo.declare("Main", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
_end: 0
});

Main.widgets = {
employeeLiveVariable1: ["wm.LiveVariable", {"type":"com.hrdb.data.Employee"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.hrdb.data.Employee","view":[{"caption":"Eid","sortable":true,"dataIndex":"eid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Firstname","sortable":true,"dataIndex":"firstname","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Lastname","sortable":true,"dataIndex":"lastname","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Street","sortable":true,"dataIndex":"street","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"City","sortable":true,"dataIndex":"city","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"State","sortable":true,"dataIndex":"state","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Zip","sortable":true,"dataIndex":"zip","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"Birthdate","sortable":true,"dataIndex":"birthdate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},{"caption":"Picurl","sortable":true,"dataIndex":"picurl","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},{"caption":"Twitterid","sortable":true,"dataIndex":"twitterid","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9,"subType":null},{"caption":"Tenantid","sortable":true,"dataIndex":"tenantid","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":10,"subType":null}]}, {}]
}],
employeeLiveVariable2: ["wm.LiveVariable", {"type":"com.hrdb.data.Employee"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.hrdb.data.Employee","view":[{"caption":"Eid","sortable":true,"dataIndex":"eid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Firstname","sortable":true,"dataIndex":"firstname","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Lastname","sortable":true,"dataIndex":"lastname","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Street","sortable":true,"dataIndex":"street","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"City","sortable":true,"dataIndex":"city","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"State","sortable":true,"dataIndex":"state","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Zip","sortable":true,"dataIndex":"zip","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"Birthdate","sortable":true,"dataIndex":"birthdate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},{"caption":"Picurl","sortable":true,"dataIndex":"picurl","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},{"caption":"Twitterid","sortable":true,"dataIndex":"twitterid","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9,"subType":null},{"caption":"Tenantid","sortable":true,"dataIndex":"tenantid","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":10,"subType":null}]}, {}]
}],
departmentDialog: ["wm.DesignableDialog", {"desktopHeight":"300px","height":"300px","title":"Edit Department","width":"500px","containerWidgetId":"containerWidget","buttonBarId":"buttonBar"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
departmentLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"218px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"hrdbLivePanel.popupLiveFormSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"departmentDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
nameEditor1: ["wm.Text", {"caption":"Name","captionSize":"140px","changeOnKey":true,"dataValue":"Professional Services","emptyValue":"emptyString","formField":"name","height":"26px","width":"100%"}, {}],
budgetEditor1: ["wm.Number", {"caption":"Budget","captionSize":"140px","changeOnKey":true,"dataValue":806984,"emptyValue":"zero","formField":"budget","height":"26px","width":"100%"}, {}],
q1Editor1: ["wm.Number", {"caption":"Q1","captionSize":"140px","changeOnKey":true,"dataValue":201746,"emptyValue":"zero","formField":"q1","height":"26px","width":"100%"}, {}],
q2Editor1: ["wm.Number", {"caption":"Q2","captionSize":"140px","changeOnKey":true,"dataValue":201746,"emptyValue":"zero","formField":"q2","height":"26px","width":"100%"}, {}],
q3Editor1: ["wm.Number", {"caption":"Q3","captionSize":"140px","changeOnKey":true,"dataValue":177536,"emptyValue":"zero","formField":"q3","height":"26px","width":"100%"}, {}],
q4Editor1: ["wm.Number", {"caption":"Q4","captionSize":"140px","changeOnKey":true,"dataValue":225955,"emptyValue":"zero","formField":"q4","height":"26px","width":"100%"}, {}],
deptcodeEditor1: ["wm.Text", {"caption":"Deptcode","captionSize":"140px","changeOnKey":true,"dataValue":"PS","emptyValue":"emptyString","formField":"deptcode","height":"26px","width":"100%"}, {}],
locationEditor1: ["wm.Text", {"caption":"Location","captionSize":"140px","changeOnKey":true,"dataValue":"San Francisco","emptyValue":"emptyString","formField":"location","height":"26px","width":"100%"}, {}]
}]
}],
buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
departmentSaveButton: ["wm.Button", {"caption":"Save","height":"100%","margin":"4"}, {"onclick":"departmentLiveForm1.saveDataIfValid"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"departmentLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
departmentCancelButton: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"departmentDialog.hide","onclick1":"departmentLiveForm1.cancelEdit"}]
}]
}],
employeeDialog: ["wm.DesignableDialog", {"desktopHeight":"340px","height":"340px","title":"employee","width":"500px","containerWidgetId":"containerWidget1","buttonBarId":"buttonBar"}, {}, {
containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
employeeLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"244px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"hrdbLivePanel.popupLiveFormSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"employeeDojoGrid1.selectedItem","targetProperty":"dataSet"}, {}]
}],
firstnameEditor1: ["wm.Text", {"caption":"Firstname","captionSize":"140px","changeOnKey":true,"dataValue":"","emptyValue":"emptyString","formField":"firstname","height":"26px","width":"100%"}, {}],
lastnameEditor1: ["wm.Text", {"caption":"Lastname","captionSize":"140px","changeOnKey":true,"dataValue":"","emptyValue":"emptyString","formField":"lastname","height":"26px","width":"100%"}, {}],
streetEditor1: ["wm.Text", {"caption":"Street","captionSize":"140px","changeOnKey":true,"dataValue":"","emptyValue":"emptyString","formField":"street","height":"26px","width":"100%"}, {}],
cityEditor1: ["wm.Text", {"caption":"City","captionSize":"140px","changeOnKey":true,"dataValue":"","emptyValue":"emptyString","formField":"city","height":"26px","width":"100%"}, {}],
stateEditor1: ["wm.Text", {"caption":"State","captionSize":"140px","changeOnKey":true,"dataValue":"","emptyValue":"emptyString","formField":"state","height":"26px","width":"100%"}, {}],
zipEditor1: ["wm.Text", {"caption":"Zip","captionSize":"140px","changeOnKey":true,"dataValue":"","emptyValue":"emptyString","formField":"zip","height":"26px","width":"100%"}, {}],
birthdateEditor1: ["wm.DateTime", {"caption":"Birthdate","captionSize":"140px","dateMode":"Date","emptyValue":"zero","formField":"birthdate","height":"26px","width":"100%"}, {}],
picurlEditor1: ["wm.Text", {"caption":"Picurl","captionSize":"140px","changeOnKey":true,"dataValue":"","emptyValue":"emptyString","formField":"picurl","height":"26px","width":"100%"}, {}],
twitteridEditor1: ["wm.Text", {"caption":"Twitterid","captionSize":"140px","changeOnKey":true,"dataValue":"","emptyValue":"emptyString","formField":"twitterid","height":"26px","width":"100%"}, {}]
}]
}],
buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
employeeSaveButton: ["wm.Button", {"caption":"Save","height":"100%","margin":"4"}, {"onclick":"employeeLiveForm1.saveDataIfValid"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"employeeLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
employeeCancelButton: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"employeeDialog.hide","onclick1":"employeeLiveForm1.cancelEdit"}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"center","layoutKind":"left-to-right","preferredDevice":"desktop","verticalAlign":"top"}, {}, {
panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","minHeight":600,"minWidth":900,"verticalAlign":"top","width":"75%"}, {}, {
panel1: ["wm.HeaderContentPanel", {"border":"0,0,1,0","borderColor":"#333333","height":"65px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,10","verticalAlign":"middle","width":"100%"}, {}, {
picture1: ["wm.Picture", {"height":"50px","source":"lib/wm/base/widget/themes/default/images/wmLogo.png","width":"62px"}, {}],
label3: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_20px","wm_FontSizePx_24px"]},"caption":"Simple Database CRUD","height":"35px","padding":"4","width":"100%"}, {}],
panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"right","verticalAlign":"middle","width":"100%"}, {}, {
dojoMenu1: ["wm.DojoMenu", {"fullStructure":[{"label":"About","separator":undefined,"defaultLabel":"About","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":undefined,"onClick":undefined,"children":[]}],"height":"24px","localizationStructure":{},"transparent":true,"width":"250px"}, {}]
}]
}],
panel2: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
tabLayers1: ["wm.TabLayers", {}, {}, {
layer2: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Editable Grid","horizontalAlign":"left","verticalAlign":"top"}, {}, {
hrdbLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"employeeDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}]
}],
employeeDojoGrid: ["wm.DojoGrid", {"columns":[{"show":false,"field":"eid","title":"Eid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"firstname","title":"Firstname","width":"100%","align":"left","formatFunc":"","fieldType":"dojox.grid.cells._Widget","mobileColumn":false},{"show":true,"field":"lastname","title":"Lastname","width":"100%","align":"left","formatFunc":"","fieldType":"dojox.grid.cells._Widget","mobileColumn":false},{"show":true,"field":"picurl","title":"Picture","width":"100%","align":"left","formatFunc":"wm_image_formatter","formatProps":{"width":40,"height":40},"fieldType":"dojox.grid.cells._Widget","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"twitterid","title":"Twitterid","width":"120px","align":"left","formatFunc":"wm_link_formatter","formatProps":{"prefix":"http://twitter.com/"},"fieldType":"dojox.grid.cells._Widget","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"street","title":"Street","width":"150px","align":"left","formatFunc":"","fieldType":"dojox.grid.cells._Widget","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"city","title":"City","width":"100%","align":"left","formatFunc":"","fieldType":"dojox.grid.cells._Widget","mobileColumn":false},{"show":true,"field":"state","title":"State","width":"100%","align":"left","formatFunc":"","fieldType":"dojox.grid.cells._Widget","mobileColumn":false},{"show":true,"field":"zip","title":"Zip","width":"100%","align":"left","formatFunc":"","fieldType":"dojox.grid.cells._Widget","mobileColumn":false},{"show":true,"field":"birthdate","title":"Birthdate","width":"80px","align":"left","formatFunc":"wm_date_formatter","fieldType":"dojox.grid.cells.DateTextBox","mobileColumn":false},{"show":false,"field":"tenantid","title":"Tenantid","width":"80px","align":"right","formatFunc":"","fieldType":"dojox.grid.cells.NumberTextBox","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Firstname: \" + ${firstname} + \"</div>\"\n+ \"<div class='MobileRow'>Lastname: \" + ${lastname} + \"</div>\"\n+ \"<div class='MobileRow'>Picture: \" + wm.List.prototype.imageFormatter({\"width\":40,\"height\":40}, null,null,null,${picurl}) + \"</div>\"\n+ \"<div class='MobileRow'>Twitterid: \" + wm.List.prototype.linkFormatter({\"prefix\":\"http://twitter.com/\"}, null,null,null,${twitterid}) + \"</div>\"\n+ \"<div class='MobileRow'>Street: \" + ${street} + \"</div>\"\n+ \"<div class='MobileRow'>City: \" + ${city} + \"</div>\"\n+ \"<div class='MobileRow'>State: \" + ${state} + \"</div>\"\n+ \"<div class='MobileRow'>Zip: \" + ${zip} + \"</div>\"\n+ \"<div class='MobileRow'>Birthdate: \" + wm.List.prototype.dateFormatter({}, null,null,null,${birthdate}) + \"</div>\"\n","mobileColumn":true}],"deleteColumn":true,"dsType":"com.hrdb.data.Employee","height":"100%","liveEditing":true,"margin":"4","singleClickEdit":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"employeeLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
employeeGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
employeeNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"employeeDojoGrid.addEmptyRow"}]
}]
}]
}],
layer1: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Edit in Dialog","horizontalAlign":"left","padding":"10","verticalAlign":"top"}, {}, {
hrdbLivePanel: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"employeeDialog","targetId":null,"targetProperty":"dialog"}, {}],
wire1: ["wm.Wire", {"source":"employeeLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
wire2: ["wm.Wire", {"source":"employeeDojoGrid1","targetId":null,"targetProperty":"dataGrid"}, {}],
wire3: ["wm.Wire", {"source":"employeeSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
}],
employeeDojoGrid1: ["wm.DojoGrid", {"columns":[{"show":false,"field":"eid","title":"Eid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"firstname","title":"Firstname","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"lastname","title":"Lastname","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"picurl","title":"Picurl","width":"100%","align":"left","formatFunc":"wm_image_formatter","formatProps":{"width":40,"height":40},"editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"twitterid","title":"Twitterid","width":"140px","align":"left","formatFunc":"wm_link_formatter","formatProps":{"prefix":"http://twitter.com/"},"editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"street","title":"Street","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"city","title":"City","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"state","title":"State","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"zip","title":"Zip","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"birthdate","title":"Birthdate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"tenantid","title":"Tenantid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Firstname: \" + ${firstname} + \"</div>\"\n+ \"<div class='MobileRow'>Lastname: \" + ${lastname} + \"</div>\"\n+ \"<div class='MobileRow'>Picurl: \" + wm.List.prototype.imageFormatter({\"width\":40,\"height\":40}, null,null,null,${picurl}) + \"</div>\"\n+ \"<div class='MobileRow'>Twitterid: \" + wm.List.prototype.linkFormatter({\"currency\":null,\"round\":null,\"dijits\":null,\"useLocalTime\":null,\"datePattern\":null,\"timePattern\":null,\"formatLength\":null,\"dateType\":null,\"numberType\":null,\"prefix\":\"http://twitter.com/\",\"postfix\":null,\"target\":null,\"width\":null,\"height\":null,\"buttonclass\":null,\"separator\":null,\"joinFieldName\":null}, null,null,null,${twitterid}) + \"</div>\"\n+ \"<div class='MobileRow'>Street: \" + ${street} + \"</div>\"\n+ \"<div class='MobileRow'>City: \" + ${city} + \"</div>\"\n+ \"<div class='MobileRow'>State: \" + ${state} + \"</div>\"\n+ \"<div class='MobileRow'>Zip: \" + ${zip} + \"</div>\"\n+ \"<div class='MobileRow'>Birthdate: \" + wm.List.prototype.dateFormatter({}, null,null,null,${birthdate}) + \"</div>\"\n","mobileColumn":true}],"dsType":"com.hrdb.data.Employee","height":"100%","margin":"4"}, {"onCellDblClick":"hrdbLivePanel.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"employeeLiveVariable2","targetProperty":"dataSet"}, {}]
}]
}],
employeeGridButtonPanel1: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
employeeNewButton1: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"hrdbLivePanel.popupLivePanelInsert"}],
employeeUpdateButton: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"hrdbLivePanel.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"employeeDojoGrid1.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
employeeDeleteButton: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"employeeLiveForm1.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"employeeDojoGrid1.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}],
layer3: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"About","horizontalAlign":"left","showing":false,"verticalAlign":"top"}, {}]
}]
}],
panel6: ["wm.HeaderContentPanel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
picture2: ["wm.Picture", {"height":"100%","source":"lib/wm/base/widget/themes/default/images/wmSmallLogo.png","width":"24px"}, {}],
label2: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"caption":"Powered by WaveMaker","height":"100%","padding":"4"}, {}]
}]
}]
}]
};

Main.prototype._cssText = '';
Main.prototype._htmlText = '';