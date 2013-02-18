Main.widgets = {
	varTemplateLogout: ["wm.LogoutVariable", {}, {}, {
		input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
	}],
	customerLiveVariable1: ["wm.LiveVariable", {"type":"com.custpurchasedb.data.Customer"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.custpurchasedb.data.Customer","view":[{"caption":"Custid","sortable":true,"dataIndex":"custid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Company","sortable":true,"dataIndex":"company","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Address","sortable":true,"dataIndex":"address","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"City","sortable":true,"dataIndex":"city","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"State","sortable":true,"dataIndex":"state","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Zip","sortable":true,"dataIndex":"zip","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Imageurl","sortable":true,"dataIndex":"imageurl","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"Twitter","sortable":true,"dataIndex":"twitter","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null}]}, {}]
	}],
	getClientIpSVar: ["wm.ServiceVariable", {"operation":"getClientIP","service":"ServerUtilsSvc","startUpdate":true}, {"onResult":"getClientIpSVarResult"}, {
		input: ["wm.ServiceInput", {"type":"getClientIPInputs"}, {}]
	}],
	updateCustomerSVar: ["wm.ServiceVariable", {"operation":"updateCustomer","service":"DbOpsSvc"}, {"onSuccess":"customerLiveVariable1"}, {
		input: ["wm.ServiceInput", {"type":"updateCustomerInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"customerLiveForm1.dataOutput","targetProperty":"customer"}, {}]
			}]
		}]
	}],
	customerDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","desktopHeight":"288px","height":"288px","title":"customer","width":"500px"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			customerLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"218px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"custpurchaseDBLivePanel.popupLiveFormSuccess"}, {
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
			customerSaveButton: ["wm.Button", {"caption":"Save","height":"100%","margin":"4"}, {"onclick":"customerSaveButtonClick"}, {
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
				label3: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_20px","wm_FontSizePx_24px"]},"caption":"[Application Name]","height":"35px","padding":"4","width":"100%"}, {}],
				panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"right","verticalAlign":"middle","width":"100%"}, {}, {
					labelAddress: ["wm.Label", {"caption":"","padding":"4"}, {}],
					dojoMenu1: ["wm.DojoMenu", {"fullStructure":[{"label":"Help"},{"label":"About"},{"label":"Logout","onClick":"varTemplateLogout"}],"height":"24px","localizationStructure":{},"transparent":true,"width":"250px"}, {}]
				}]
			}],
			panel2: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				tabLayers1: ["wm.TabLayers", {}, {}, {
					layer1: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Tab 1","horizontalAlign":"left","padding":"10","verticalAlign":"top"}, {}, {
						custpurchaseDBLivePanel: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"source":"customerDialog","targetId":null,"targetProperty":"dialog"}, {}],
								wire1: ["wm.Wire", {"source":"customerLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
								wire2: ["wm.Wire", {"source":"customerDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
								wire3: ["wm.Wire", {"source":"customerSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
							}],
							customerDojoGrid: ["wm.DojoGrid", {"columns":[{"show":true,"field":"custid","title":"Custid","width":"80px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"company","title":"Company","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"address","title":"Address","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"city","title":"City","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"state","title":"State","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"zip","title":"Zip","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"imageurl","title":"Imageurl","width":"100px","align":"left","formatFunc":"wm_image_formatter","formatProps":{"width":100},"editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"twitter","title":"Twitter","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Custid: \" + ${custid} + \"</div>\"\n+ \"<div class='MobileRow'>Company: \" + ${company} + \"</div>\"\n+ \"<div class='MobileRow'>Address: \" + ${address} + \"</div>\"\n+ \"<div class='MobileRow'>City: \" + ${city} + \"</div>\"\n+ \"<div class='MobileRow'>State: \" + ${state} + \"</div>\"\n+ \"<div class='MobileRow'>Zip: \" + ${zip} + \"</div>\"\n+ \"<div class='MobileRow'>Twitter: \" + ${twitter} + \"</div>\"\n","mobileColumn":true}],"dsType":"com.custpurchasedb.data.Customer","height":"100%","localizationStructure":{},"margin":"4"}, {"onCellDblClick":"customerDialog.show"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"customerLiveVariable1","targetProperty":"dataSet"}, {}]
								}]
							}],
							customerGridButtonPanel: ["wm.Panel", {"desktopHeight":"30px","enableTouchHeight":true,"height":"30px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"876px"}, {}, {
								customerNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"custpurchaseDBLivePanel.popupLivePanelInsert"}],
								customerUpdateButton: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"custpurchaseDBLivePanel.popupLivePanelEdit"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"source":"customerDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
									}]
								}],
								customerDeleteButton: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"customerLiveForm1.deleteData"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"source":"customerDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
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