dojo.declare("PageLazy", wm.Page, {
start: function() {
},
buttonLazyLoadClick: function(inSender) {
// causes a lazy load
// note: department fetched only corresponds to selected item if grid is not sorted
this.employeeLiveVariable1.getItem(this.employeeDojoGrid.getSelectedIndex()).getValue("department");
},
"preferredDevice": "desktop",
_end: 0
});

PageLazy.widgets = {
employeeLiveVariable1: ["wm.LiveVariable", {"type":"com.hrdb.data.Employee"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.hrdb.data.Employee","view":[{"caption":"Eid","sortable":true,"dataIndex":"eid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Firstname","sortable":true,"dataIndex":"firstname","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Lastname","sortable":true,"dataIndex":"lastname","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Street","sortable":true,"dataIndex":"street","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"City","sortable":true,"dataIndex":"city","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"State","sortable":true,"dataIndex":"state","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Zip","sortable":true,"dataIndex":"zip","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"Birthdate","sortable":true,"dataIndex":"birthdate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},{"caption":"Picurl","sortable":true,"dataIndex":"picurl","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},{"caption":"Twitterid","sortable":true,"dataIndex":"twitterid","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9,"subType":null},{"caption":"Tenantid","sortable":true,"dataIndex":"tenantid","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":10,"subType":null}]}, {}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"center","verticalAlign":"top"}, {}, {
buttonLazyLoad: ["wm.Button", {"caption":"Get Department","margin":"4","width":"140px"}, {"onclick":"buttonLazyLoadClick"}],
labelLazyDept: ["wm.Label", {"caption":"Above button causes a lazy load using selected item index","padding":"4","width":"344px"}, {}],
employeeDojoGrid: ["wm.DojoGrid", {"columns":[{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Eid: \" + ${eid} + \"</div>\"\n+ \"<div class='MobileRow'>Firstname: \" + ${firstname} + \"</div>\"\n+ \"<div class='MobileRow'>Lastname: \" + ${lastname} + \"</div>\"\n+ \"<div class='MobileRow'>Street: \" + ${street} + \"</div>\"\n+ \"<div class='MobileRow'>City: \" + ${city} + \"</div>\"\n+ \"<div class='MobileRow'>State: \" + ${state} + \"</div>\"\n+ \"<div class='MobileRow'>Zip: \" + ${zip} + \"</div>\"\n","mobileColumn":true},{"show":true,"field":"eid","title":"Eid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"firstname","title":"Firstname","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"lastname","title":"Lastname","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"street","title":"Street","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"city","title":"City","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"state","title":"State","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"zip","title":"Zip","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"birthdate","title":"Birthdate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"picurl","title":"Picurl","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"twitterid","title":"Twitterid","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"tenantid","title":"Tenantid","width":"80px","align":"right","formatFunc":"","mobileColumn":false}],"margin":"4","minDesktopHeight":60,"selectFirstRow":true,"singleClickEdit":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"employeeLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}]
}]
};

PageLazy.prototype._cssText = '';
PageLazy.prototype._htmlText = '';