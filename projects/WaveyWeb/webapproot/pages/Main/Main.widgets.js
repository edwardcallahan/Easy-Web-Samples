Main.widgets = {
	varTemplateLogout: ["wm.LogoutVariable", {}, {}, {
		input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
	}],
	departmentLiveVariable1: ["wm.LiveVariable", {"type":"com.hrdb.data.Department"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.hrdb.data.Department","view":[{"caption":"Deptid","sortable":true,"dataIndex":"deptid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Name","sortable":true,"dataIndex":"name","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Budget","sortable":true,"dataIndex":"budget","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"Q1","sortable":true,"dataIndex":"q1","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Q2","sortable":true,"dataIndex":"q2","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Q3","sortable":true,"dataIndex":"q3","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Q4","sortable":true,"dataIndex":"q4","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"Deptcode","sortable":true,"dataIndex":"deptcode","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},{"caption":"Location","sortable":true,"dataIndex":"location","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},{"caption":"Tenantid","sortable":true,"dataIndex":"tenantid","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9,"subType":null}]}, {}]
	}],
	imageList1: ["wm.ImageList", {"colCount":9,"height":16,"url":"lib/images/boolean/Signage/set.png","width":16}, {}],
	genericDialog1: ["wm.GenericDialog", {"desktopHeight":"61px","height":"70px","modal":false,"title":"This is a Generic Dialog","userPrompt":"Hello WaveyWeb"}, {}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top"}, {}, {
		panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","minHeight":600,"minWidth":900,"verticalAlign":"top","width":"75%"}, {}, {
			panel1: ["wm.HeaderContentPanel", {"border":"0,0,1,0","borderColor":"#333333","height":"65px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,10","verticalAlign":"middle","width":"100%"}, {}, {
				picture1: ["wm.Picture", {"height":"50px","source":"lib/wm/base/widget/themes/default/images/wmLogo.png","width":"62px"}, {}],
				label3: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_20px","wm_FontSizePx_24px"]},"caption":"Hello WaveyWeb","height":"35px","padding":"4","width":"100%"}, {}],
				panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"right","verticalAlign":"middle","width":"100%"}, {}, {
					dojoMenu1: ["wm.DojoMenu", {"fullStructure":[{"label":"Help"},{"label":"About"},{"label":"Logout","onClick":"varTemplateLogout"}],"height":"24px","localizationStructure":{"Help":"Help","About":"About","Logout":"Logout"},"transparent":true,"width":"250px"}, {}]
				}]
			}],
			panel2: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				tabLayers1: ["wm.TabLayers", {}, {}, {
					layer1: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Tab 1","horizontalAlign":"left","padding":"10","verticalAlign":"top"}, {"onShow":"layer1Show"}, {
						button1: ["wm.Button", {"imageIndex":6,"imageList":"imageList1","margin":"4","width":"157px"}, {"onclick":"genericDialog1.show"}]
					}],
					layer2: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Tab 2","horizontalAlign":"left","verticalAlign":"top"}, {}, {
						labelMouseOver: ["wm.Label", {"caption":"Hover Me","height":"131px","padding":"4","width":"637px"}, {}]
					}],
					layer3: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Tab 3","horizontalAlign":"left","verticalAlign":"top"}, {}, {
						hrdbLivePanel: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
							label4: ["wm.Label", {"padding":"4","width":"341px"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":"\"Viewing \" + ${departmentDojoGrid.selectedItem.name}","targetProperty":"caption"}, {}]
								}]
							}],
							departmentGridPanel: ["wm.FancyPanel", {"minHeight":220,"title":"Department"}, {}, {
								departmentDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"field":"deptid","title":"Deptid","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"name","title":"Name","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":true,"field":"budget","title":"Budget","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"q1","title":"Q1","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"q2","title":"Q2","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"q3","title":"Q3","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"q4","title":"Q4","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"deptcode","title":"Deptcode","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":true,"field":"location","title":"Location","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":true,"field":"tenantid","title":"Tenantid","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Deptid: \" + ${deptid} + \"</div>\"\n+ \"<div class='MobileRow'>Name: \" + ${name} + \"</div>\"\n+ \"<div class='MobileRow'>Budget: \" + ${budget} + \"</div>\"\n+ \"<div class='MobileRow'>Q1: \" + ${q1} + \"</div>\"\n+ \"<div class='MobileRow'>Q2: \" + ${q2} + \"</div>\"\n+ \"<div class='MobileRow'>Q3: \" + ${q3} + \"</div>\"\n+ \"<div class='MobileRow'>Q4: \" + ${q4} + \"</div>\"\n+ \"<div class='MobileRow'>Deptcode: \" + ${deptcode} + \"</div>\"\n+ \"<div class='MobileRow'>Location: \" + ${location} + \"</div>\"\n+ \"<div class='MobileRow'>Tenantid: \" + ${tenantid} + \"</div>\"\n","mobileColumn":true}],"dsType":"com.hrdb.data.Department","height":"100%","localizationStructure":{"deptid":"Deptid","name":"Name","budget":"Budget","q1":"Q1","q2":"Q2","q3":"Q3","q4":"Q4","deptcode":"Deptcode","location":"Location","tenantid":"Tenantid","PHONE COLUMN":"-"},"margin":"4","selectFirstRow":true}, {}, {
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
				}]
			}],
			panel6: ["wm.HeaderContentPanel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				picture2: ["wm.Picture", {"height":"100%","source":"lib/wm/base/widget/themes/default/images/wmSmallLogo.png","width":"24px"}, {}],
				label2: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"caption":"Powered by WaveMaker","height":"100%","padding":"4"}, {}],
				label1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"align":"right","caption":"Copyright 2012 [company name]","height":"100%","padding":"4","width":"100%"}, {}]
			}]
		}]
	}]
}