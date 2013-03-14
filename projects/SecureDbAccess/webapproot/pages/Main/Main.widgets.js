Main.widgets = {
	varTemplateLogout: ["wm.LogoutVariable", {}, {}, {
		input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
	}],
	customerLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"type":"com.custpurchasedb.data.Customer"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.custpurchasedb.data.Customer","view":[{"caption":"Custid","sortable":true,"dataIndex":"custid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Company","sortable":true,"dataIndex":"company","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Address","sortable":true,"dataIndex":"address","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"City","sortable":true,"dataIndex":"city","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"State","sortable":true,"dataIndex":"state","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Zip","sortable":true,"dataIndex":"zip","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Imageurl","sortable":true,"dataIndex":"imageurl","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"Twitter","sortable":true,"dataIndex":"twitter","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null}]}, {}]
	}],
	svarReadCustomer: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"readCustomer","service":"SecureDbSvc","startUpdate":true}, {}, {
		input: ["wm.ServiceInput", {"type":"readCustomerInputs"}, {}]
	}],
	svarDeleteCustomer: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"deleteCustomer","service":"SecureDbSvc"}, {}, {
		input: ["wm.ServiceInput", {"type":"deleteCustomerInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"customerLiveForm1.dataOutput","targetProperty":"customer"}, {}]
			}]
		}]
	}],
	svarInsertCustomer: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"insertCustomer","service":"SecureDbSvc"}, {}, {
		input: ["wm.ServiceInput", {"type":"insertCustomerInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"customerLiveForm1.dataOutput","targetProperty":"customer"}, {}]
			}]
		}]
	}],
	svarUpdateCustomer: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"updateCustomer","service":"SecureDbSvc"}, {}, {
		input: ["wm.ServiceInput", {"type":"updateCustomerInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"customerLiveForm1.dataOutput","targetProperty":"customer"}, {}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"center","layoutKind":"left-to-right","preferredDevice":"desktop","verticalAlign":"top"}, {}, {
		panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","minHeight":600,"minWidth":900,"verticalAlign":"top","width":"75%"}, {}, {
			panel1: ["wm.HeaderContentPanel", {"border":"0,0,1,0","borderColor":"#333333","height":"65px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,10","verticalAlign":"middle","width":"100%"}, {}, {
				picture1: ["wm.Picture", {"height":"50px","source":"lib/wm/base/widget/themes/default/images/wmLogo.png","width":"62px"}, {}],
				label3: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_20px","wm_FontSizePx_24px"]},"caption":"[Application Name]","height":"35px","padding":"4","width":"100%"}, {}],
				panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"right","verticalAlign":"middle","width":"100%"}, {}, {
					dojoMenu1: ["wm.DojoMenu", {"fullStructure":[{"label":"Help"},{"label":"About"},{"label":"Logout","onClick":"varTemplateLogout"}],"height":"24px","localizationStructure":{},"transparent":true,"width":"250px"}, {}]
				}]
			}],
			panel2: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				tabLayers1: ["wm.TabLayers", {}, {}, {
					layer1: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Tab 1","horizontalAlign":"left","padding":"10","verticalAlign":"top"}, {}, {
						custpurchaseDBLivePanel: ["wm.LivePanel", {"horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top"}, {}, {
							customerDojoGrid: ["wm.DojoGrid", {"columns":[{"show":false,"field":"custid","title":"Custid","width":"80px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"company","title":"Customer","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":true},{"show":false,"field":"address","title":"Address","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"city","title":"City","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"state","title":"State","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"zip","title":"Zip","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"imageurl","title":"Imageurl","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"twitter","title":"Twitter","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"","mobileColumn":false}],"height":"100%","localizationStructure":{},"margin":"4","width":"200px"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"svarReadCustomer","targetProperty":"dataSet"}, {}]
								}]
							}],
							customerLiveForm1: ["wm.LiveForm", {"autoScroll":true,"height":"100%","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onDeleteData":"svarDeleteCustomer","onInsertData":"svarInsertCustomer","onSuccess":"svarReadCustomer","onUpdateData":"svarUpdateCustomer"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"customerDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
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
					}],
					layer2: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Tab 2","horizontalAlign":"left","verticalAlign":"top"}, {}],
					layer3: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Tab 3","horizontalAlign":"left","verticalAlign":"top"}, {}]
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