dojo.declare("PageMobile", wm.Page, {
start: function() {
},
"preferredDevice": "phone",
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
customerLiveVariable1: ["wm.LiveVariable", {"type":"com.custpurchasedb.data.Customer"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.custpurchasedb.data.Customer","view":[{"caption":"Custid","sortable":true,"dataIndex":"custid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Company","sortable":true,"dataIndex":"company","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Address","sortable":true,"dataIndex":"address","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"City","sortable":true,"dataIndex":"city","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"State","sortable":true,"dataIndex":"state","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Zip","sortable":true,"dataIndex":"zip","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Imageurl","sortable":true,"dataIndex":"imageurl","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"Twitter","sortable":true,"dataIndex":"twitter","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null}]}, {}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"center","verticalAlign":"top"}, {}, {
label1: ["wm.Label", {"autoSizeWidth":true,"caption":"Mobile Version","height":"31px","padding":"4","singleLine":false,"styles":{"fontSize":"24px"},"width":"183px"}, {}],
button1: ["wm.Button", {"caption":"Return to Application","desktopHeight":"36px","height":"40px","margin":"4","width":"170px"}, {"onclick":"navigationCall1"}],
custpurchaseDBLivePanel: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"Customer_List","targetId":null,"targetProperty":"gridLayer"}, {}],
wire1: ["wm.Wire", {"source":"Edit_Customer","targetId":null,"targetProperty":"detailsLayer"}, {}],
wire2: ["wm.Wire", {"source":"customerLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
wire3: ["wm.Wire", {"source":"customerDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
wire4: ["wm.Wire", {"source":"customerSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
}],
customerLayers: ["wm.BreadcrumbLayers", {}, {}, {
Customer_List: ["wm.Layer", {"borderColor":"","caption":"Customer List","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {"onShow":"customerDojoGrid.deselectAll"}, {
customerDojoGrid: ["wm.List", {"_classes":{"domNode":["MobileListStyle"]},"border":"0","columns":[{"show":false,"field":"custid","title":"Custid","width":"80px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"company","title":"Company","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"address","title":"Address","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"city","title":"City","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"state","title":"State","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"zip","title":"Zip","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"imageurl","title":"Imageurl","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"twitter","title":"Twitter","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","editorProps":{"restrictValues":true},"expression":"\"<div class='MobileRowTitle'>Company: \" + ${company} + \"</div>\"\n+ \"<div class='MobileRow'>Address: \" + ${address} + \"</div>\"\n+ \"<div class='MobileRow'>City: \" + ${city} + \"</div>\"\n+ \"<div class='MobileRow'>State: \" + ${state} + \"</div>\"\n","mobileColumn":true},{"show":true,"controller":"rightarrow","width":"20px","title":"-","field":"_rightArrow","mobileColumn":true}],"headerVisible":false,"height":"100%","margin":"0","rightNavArrow":true,"styleAsGrid":false}, {"onSelect":"custpurchaseDBLivePanel.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"customerLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
customerGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"40px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
customerNewButton: ["wm.Button", {"caption":"New","height":"40px","margin":"4"}, {"onclick":"custpurchaseDBLivePanel.popupLivePanelInsert"}]
}]
}],
Edit_Customer: ["wm.Layer", {"autoScroll":true,"borderColor":"","caption":"Edit Customer","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
customerLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"enableTouchHeight":true,"height":"290px","horizontalAlign":"left","liveEditing":false,"margin":"4","mobileHeight":"290px","verticalAlign":"top"}, {"onSuccess":"custpurchaseDBLivePanel.popupLiveFormSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"customerDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
custidEditor1: ["wm.Number", {"caption":"Custid","captionSize":"140px","changeOnKey":true,"dataValue":0,"emptyValue":"zero","formField":"custid","height":"35px","required":true,"width":"100%"}, {}],
companyEditor1: ["wm.Text", {"caption":"Company","captionSize":"140px","changeOnKey":true,"dataValue":"","emptyValue":"emptyString","formField":"company","height":"35px","required":true,"width":"100%"}, {}],
addressEditor1: ["wm.Text", {"caption":"Address","captionSize":"140px","changeOnKey":true,"dataValue":"","emptyValue":"emptyString","formField":"address","height":"35px","width":"100%"}, {}],
cityEditor1: ["wm.Text", {"caption":"City","captionSize":"140px","changeOnKey":true,"dataValue":"","emptyValue":"emptyString","formField":"city","height":"35px","width":"100%"}, {}],
stateEditor1: ["wm.Text", {"caption":"State","captionSize":"140px","changeOnKey":true,"dataValue":"","emptyValue":"emptyString","formField":"state","height":"35px","width":"100%"}, {}],
zipEditor1: ["wm.Text", {"caption":"Zip","captionSize":"140px","changeOnKey":true,"dataValue":"","emptyValue":"emptyString","formField":"zip","height":"35px","width":"100%"}, {}],
imageurlEditor1: ["wm.Text", {"caption":"Imageurl","captionSize":"140px","changeOnKey":true,"dataValue":"","emptyValue":"emptyString","formField":"imageurl","height":"35px","width":"100%"}, {}],
twitterEditor1: ["wm.Text", {"caption":"Twitter","captionSize":"140px","changeOnKey":true,"dataValue":"","emptyValue":"emptyString","formField":"twitter","height":"35px","width":"100%"}, {}]
}],
customerFormButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"40px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
customerSaveButton: ["wm.Button", {"caption":"Save","height":"40px","margin":"4"}, {"onclick":"customerLiveForm1.saveDataIfValid"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${customerLiveForm1.invalid} || !${customerLiveForm1.isDirty}","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
customerCancelButton: ["wm.Button", {"caption":"Cancel","height":"40px","margin":"4"}, {"onclick":"Customer_List"}],
customerDeleteButton: ["wm.Button", {"caption":"Delete","height":"40px","margin":"4"}, {"onclick":"customerLiveForm1.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"customerDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}]
};

PageMobile.prototype._cssText = '';
PageMobile.prototype._htmlText = '';