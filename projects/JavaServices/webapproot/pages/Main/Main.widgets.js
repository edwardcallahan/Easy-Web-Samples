Main.widgets = {
	varTemplateLogout: ["wm.LogoutVariable", {}, {}, {
		input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
	}],
	customerLiveVar: ["wm.LiveVariable", {"inFlightBehavior":"executeLast","type":"com.custpurchasedb.data.Customer"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.custpurchasedb.data.Customer","view":[{"caption":"Custid","sortable":true,"dataIndex":"custid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Company","sortable":true,"dataIndex":"company","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Address","sortable":true,"dataIndex":"address","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"City","sortable":true,"dataIndex":"city","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"State","sortable":true,"dataIndex":"state","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Zip","sortable":true,"dataIndex":"zip","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Imageurl","sortable":true,"dataIndex":"imageurl","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"Twitter","sortable":true,"dataIndex":"twitter","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null}]}, {}]
	}],
	svarUpdateCustomer: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"updateCustomer","service":"DbOpsSvc"}, {"onError":"svarUpdateCustomerError","onSuccess":"svarUpdateCustomerResult"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"customerServiceInputForm.dataOutput","targetProperty":"input"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"updateCustomerInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"customerDBForm.dataOutput","targetProperty":"customer"}, {}]
			}]
		}]
	}],
	svarUpdateCustomerInjection: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"updateCustomerInjected","service":"DbOpsSvc"}, {"onError":"svarUpdateCustomerError","onSuccess":"svarUpdateCustomerResult"}, {
		input: ["wm.ServiceInput", {"type":"updateCustomerInjectedInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"customerDBForm.dataOutput","targetProperty":"customer"}, {}]
			}]
		}]
	}],
	designableDialog1: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","noMaxify":true,"noMinify":true}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"center","padding":"5","verticalAlign":"middle","width":"100%"}, {}, {
			html1: ["wm.Html", {"html":"This example customizes a Database Form widget to update the customer table with server-side validation. <br><br>\nA Java service named DbOpsSvc is used to check the length of the  state field before updating the database. It exposes two update methods. These methods are the same except that one uses dependency injection.<br><br>\nThis project is described in chapter 9 of Easy Web Development with WaveMaker 6.5.","minDesktopHeight":15,"styles":{"fontSize":"14px"}}, {}],
			button1: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"designableDialog1.hide"}]
		}],
		buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"center","layoutKind":"left-to-right","preferredDevice":"desktop","verticalAlign":"top"}, {}, {
		panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","minHeight":600,"minWidth":900,"verticalAlign":"top","width":"75%"}, {}, {
			panel1: ["wm.HeaderContentPanel", {"border":"0,0,1,0","borderColor":"#333333","height":"65px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,10","verticalAlign":"middle","width":"100%"}, {}, {
				picture1: ["wm.Picture", {"height":"50px","source":"lib/wm/base/widget/themes/default/images/wmLogo.png","width":"62px"}, {}],
				label3: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_20px","wm_FontSizePx_24px"]},"caption":"Java Services","height":"35px","padding":"4","width":"100%"}, {}],
				panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"right","verticalAlign":"middle","width":"100%"}, {}, {
					dojoMenu1: ["wm.DojoMenu", {"fullStructure":[{"label":"About","separator":undefined,"defaultLabel":"About","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":undefined,"onClick":"designableDialog1.show","children":[]}],"height":"24px","localizationStructure":{},"transparent":true,"width":"94px"}, {}]
				}]
			}],
			panel2: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				layers1: ["wm.Layers", {}, {}, {
					layer1: ["wm.Layer", {"borderColor":"","caption":"Tab 1","horizontalAlign":"center","padding":"10","verticalAlign":"top"}, {}, {
						panel7: ["wm.Panel", {"height":"48px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
							customerSelectMenu: ["wm.SelectMenu", {"caption":"Customer to update","captionSize":"140px","dataType":"com.custpurchasedb.data.Customer","dataValue":undefined,"displayField":"company","displayValue":"","width":"339px"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"customerLiveVar","targetProperty":"dataSet"}, {}]
								}]
							}]
						}],
						customerDBForm: ["wm.DBForm", {"desktopHeight":"252px","fitToContentHeight":true,"formBehavior":"updateOnly","height":"252px","isCompositeKey":false,"layoutKind":"left-to-right","type":"com.custpurchasedb.data.Customer"}, {"onEnterKeyPress":"customerDBForm.saveData"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"source":"customerDBFormButtonPanel","targetId":null,"targetProperty":"buttonPanel"}, {}],
								wire1: ["wm.Wire", {"source":"customerDBFormSaveButton","targetId":null,"targetProperty":"saveButton"}, {}],
								wire2: ["wm.Wire", {"source":"customerDBFormCancelButton","targetId":null,"targetProperty":"cancelButton"}, {}],
								wire3: ["wm.Wire", {"source":"customerSelectMenu.selectedItem","targetId":null,"targetProperty":"dataSet"}, {}]
							}],
							customerDBFormEditorFormPanel: ["wm.FormPanel", {"height":"100%"}, {}, {
								custidEditor1: ["wm.Number", {"caption":"Custid","captionSize":"120px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"custid","height":"26px","required":true,"width":"100%"}, {}],
								companyEditor1: ["wm.Text", {"caption":"Company","captionSize":"120px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"company","height":"26px","required":true,"width":"100%"}, {}],
								addressEditor1: ["wm.Text", {"caption":"Address","captionSize":"120px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"address","height":"26px","width":"100%"}, {}],
								cityEditor1: ["wm.Text", {"caption":"City","captionSize":"120px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"city","height":"26px","width":"100%"}, {}],
								stateEditor1: ["wm.Text", {"caption":"State","captionSize":"120px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"state","height":"26px","width":"100%"}, {}],
								zipEditor1: ["wm.Text", {"caption":"Zip","captionSize":"120px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"zip","height":"26px","width":"100%"}, {}],
								twitterEditor1: ["wm.Text", {"caption":"Twitter","captionSize":"120px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"twitter","height":"26px","width":"100%"}, {}],
								imageurlEditor1: ["wm.Text", {"caption":"Imageurl","captionSize":"120px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"imageurl","height":"26px","width":"100%"}, {}],
								customerDBFormButtonPanel: ["wm.Panel", {"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
									buttonUpdateInjection: ["wm.Button", {"caption":"Update Customer Injection","margin":"4","width":"209px"}, {"onclick":"svarUpdateCustomerInjection"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":"${customerDBForm.invalid} || !${customerDBForm.isDirty}","targetProperty":"disabled"}, {}]
										}]
									}],
									buttonUpdate: ["wm.Button", {"caption":"Update Customer","margin":"4","width":"158px"}, {"onclick":"svarUpdateCustomer"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":"${customerDBForm.invalid} || !${customerDBForm.isDirty}","targetProperty":"disabled"}, {}]
										}]
									}],
									customerDBFormCancelButton: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"customerDBForm.cancelEdit"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":"!${customerDBForm.isDirty}","targetId":null,"targetProperty":"disabled"}, {}]
										}]
									}]
								}]
							}]
						}],
						panel4: ["wm.Panel", {"height":"48px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}]
					}],
					layer2: ["wm.Layer", {"borderColor":"","caption":"Tab 2","horizontalAlign":"left","showing":false,"verticalAlign":"top"}, {}],
					layer3: ["wm.Layer", {"borderColor":"","caption":"Tab 3","horizontalAlign":"left","showing":false,"verticalAlign":"top"}, {}]
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