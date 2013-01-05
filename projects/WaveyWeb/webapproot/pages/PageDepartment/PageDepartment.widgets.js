PageDepartment.widgets = {
	departmentLiveVariable1: ["wm.LiveVariable", {"type":"com.hrdb.data.Department"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.hrdb.data.Department","view":[{"caption":"Deptid","sortable":true,"dataIndex":"deptid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":1000,"subType":null,"widthUnits":"px"},{"caption":"Name","sortable":true,"dataIndex":"name","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1001,"subType":null,"widthUnits":"px"},{"caption":"Budget","sortable":true,"dataIndex":"budget","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1002,"subType":null,"widthUnits":"px"},{"caption":"Q1","sortable":true,"dataIndex":"q1","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1003,"subType":null,"widthUnits":"px"},{"caption":"Q2","sortable":true,"dataIndex":"q2","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1004,"subType":null,"widthUnits":"px"},{"caption":"Q3","sortable":true,"dataIndex":"q3","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1005,"subType":null,"widthUnits":"px"},{"caption":"Q4","sortable":true,"dataIndex":"q4","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1006,"subType":null,"widthUnits":"px"},{"caption":"Deptcode","sortable":true,"dataIndex":"deptcode","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1007,"subType":null,"widthUnits":"px"},{"caption":"Location","sortable":true,"dataIndex":"location","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1008,"subType":null,"widthUnits":"px"},{"caption":"Tenantid","sortable":true,"dataIndex":"tenantid","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1009,"subType":null,"widthUnits":"px"}]}, {}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		hrdbLivePanel: ["wm.LivePanel", {"horizontalAlign":"center","verticalAlign":"top"}, {}, {
			label4: ["wm.Label", {"padding":"4","width":"341px"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"\"Viewing \" + ${departmentDojoGrid.selectedItem.name}","targetProperty":"caption"}, {}]
				}]
			}],
			label1: ["wm.Label", {"caption":"Above label uses binding expression to prefix department name with \"Viewing\"","padding":"4","width":"461px"}, {}],
			departmentGridPanel: ["wm.FancyPanel", {"height":"220px","title":"Department"}, {}, {
				departmentDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Deptid: \" + ${deptid} + \"</div>\"\n+ \"<div class='MobileRow'>Name: \" + ${name} + \"</div>\"\n+ \"<div class='MobileRow'>Budget: \" + ${budget} + \"</div>\"\n+ \"<div class='MobileRow'>Q1: \" + ${q1} + \"</div>\"\n+ \"<div class='MobileRow'>Q2: \" + ${q2} + \"</div>\"\n+ \"<div class='MobileRow'>Q3: \" + ${q3} + \"</div>\"\n+ \"<div class='MobileRow'>Q4: \" + ${q4} + \"</div>\"\n+ \"<div class='MobileRow'>Deptcode: \" + ${deptcode} + \"</div>\"\n+ \"<div class='MobileRow'>Location: \" + ${location} + \"</div>\"\n","mobileColumn":true},{"show":true,"field":"deptid","title":"Deptid","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"name","title":"Name","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":true,"field":"budget","title":"Budget","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"q1","title":"Q1","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"q2","title":"Q2","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"q3","title":"Q3","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"q4","title":"Q4","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"deptcode","title":"Deptcode","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":true,"field":"location","title":"Location","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":false,"field":"tenantid","title":"Tenantid","width":"80px","displayType":"Number","align":"right","formatFunc":""}],"height":"100%","localizationStructure":{},"margin":"4","selectFirstRow":true}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"source":"departmentLiveVariable1","targetProperty":"dataSet"}, {}]
					}]
				}]
			}],
			departmentDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"326px","title":"Details"}, {}, {
				departmentLiveForm1: ["wm.LiveForm", {"editorWidth":"90%","fitToContentHeight":true,"height":"294px","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onSuccess":"departmentLiveVariable1"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"departmentDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
					}],
					deptidEditor1: ["wm.Number", {"caption":"Deptid","captionSize":"140px","changeOnKey":true,"dataValue":1,"desktopHeight":"26px","emptyValue":"zero","formField":"deptid","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
					nameEditor1: ["wm.Text", {"caption":"Name","captionSize":"140px","changeOnKey":true,"dataValue":"Engineering","desktopHeight":"26px","emptyValue":"emptyString","formField":"name","height":"26px","readonly":true,"width":"90%"}, {}],
					budgetEditor1: ["wm.Number", {"caption":"Budget","captionSize":"140px","changeOnKey":true,"dataValue":1936760,"desktopHeight":"26px","emptyValue":"zero","formField":"budget","height":"26px","readonly":true,"width":"90%"}, {}],
					q1Editor1: ["wm.Number", {"caption":"Q1","captionSize":"140px","changeOnKey":true,"dataValue":445455,"desktopHeight":"26px","emptyValue":"zero","formField":"q1","height":"26px","readonly":true,"width":"90%"}, {}],
					q2Editor1: ["wm.Number", {"caption":"Q2","captionSize":"140px","changeOnKey":true,"dataValue":522925,"desktopHeight":"26px","emptyValue":"zero","formField":"q2","height":"26px","readonly":true,"width":"90%"}, {}],
					q3Editor1: ["wm.Number", {"caption":"Q3","captionSize":"140px","changeOnKey":true,"dataValue":426087,"desktopHeight":"26px","emptyValue":"zero","formField":"q3","height":"26px","readonly":true,"width":"90%"}, {}],
					q4Editor1: ["wm.Number", {"caption":"Q4","captionSize":"140px","changeOnKey":true,"dataValue":542293,"desktopHeight":"26px","emptyValue":"zero","formField":"q4","height":"26px","readonly":true,"width":"90%"}, {}],
					deptcodeEditor1: ["wm.Text", {"caption":"Deptcode","captionSize":"140px","changeOnKey":true,"dataValue":"Eng","desktopHeight":"26px","emptyValue":"emptyString","formField":"deptcode","height":"26px","readonly":true,"width":"90%"}, {}],
					locationEditor1: ["wm.Text", {"caption":"Location","captionSize":"140px","changeOnKey":true,"dataValue":"San Francisco","desktopHeight":"26px","emptyValue":"emptyString","formField":"location","height":"26px","readonly":true,"width":"90%"}, {}],
					tenantidEditor1: ["wm.Number", {"caption":"Tenantid","captionSize":"140px","changeOnKey":true,"dataValue":1,"desktopHeight":"26px","emptyValue":"zero","formField":"tenantid","height":"26px","readonly":true,"width":"90%"}, {}],
					departmentLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","liveForm":"departmentLiveForm1","operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
						savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","lock":true,"showing":false,"verticalAlign":"top","width":"100%"}, {}, {
							saveButton1: ["wm.Button", {"caption":"Save","height":"100%","margin":"4"}, {"onclick":"departmentLiveForm1EditPanel.saveData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"departmentLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
								}]
							}],
							cancelButton1: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"departmentLiveForm1EditPanel.cancelEdit"}]
						}],
						operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","lock":true,"verticalAlign":"top","width":"100%"}, {}, {
							newButton1: ["wm.Button", {"caption":"New","height":"100%","margin":"4"}, {"onclick":"departmentLiveForm1EditPanel.beginDataInsert"}],
							updateButton1: ["wm.Button", {"caption":"Update","height":"100%","margin":"4"}, {"onclick":"departmentLiveForm1EditPanel.beginDataUpdate"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"departmentLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
								}]
							}],
							deleteButton1: ["wm.Button", {"caption":"Delete","height":"100%","margin":"4"}, {"onclick":"departmentLiveForm1EditPanel.deleteData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"departmentLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
								}]
							}]
						}]
					}]
				}]
			}]
		}]
	}]
}