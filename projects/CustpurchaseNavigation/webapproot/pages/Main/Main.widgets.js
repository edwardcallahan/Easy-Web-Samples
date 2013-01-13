Main.widgets = {
	notificationCallAlert: ["wm.NotificationCall", {}, {}, {
		input: ["wm.ServiceInput", {"type":"alertInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"textAlertMsg.dataValue","targetProperty":"text"}, {}]
			}]
		}]
	}],
	notificationCallToast: ["wm.NotificationCall", {"operation":"toast"}, {}, {
		input: ["wm.ServiceInput", {"type":"toastInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"textToastMsg.dataValue","targetProperty":"text"}, {}]
			}]
		}]
	}],
	notificationCallConfirm: ["wm.NotificationCall", {"operation":"confirm"}, {"onCancel":"notificationCallConfirmCancel","onOk":"notificationCallConfirmOk"}, {
		input: ["wm.ServiceInput", {"type":"confirmInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Are you sure ?\"","targetProperty":"text"}, {}]
			}]
		}]
	}],
	navigationCallMobileSite: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"layerDialogs","targetProperty":"layer"}, {}],
				wire1: ["wm.Wire", {"expression":"\"PageMobile\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navigationCallAbout: ["wm.NavigationCall", {"operation":"gotoDialogPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoDialogPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PageAbout\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	variablePageList: ["wm.Variable", {"isList":true,"json":"[{\"name\":\"About\",\"dataValue\":\"PageAbout\"},{\"name\":\"Customer Search/Edit\",\"dataValue\":\"PageCustomerSearchEdit\"},{\"name\":\"Dialogs\",\"dataValue\":\"PageDialogs\"},{\"name\":\"Insert Item\",\"dataValue\":\"PageInsertItem\"},{\"name\":\"Layers\",\"dataValue\":\"PageLayers\"}]","type":"EntryData"}, {}],
	navigationCallPageContainer: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"selectMenuPageChooser.selectedItem.dataValue","targetProperty":"pageName"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"pageContainerPageContainer","targetProperty":"pageContainer"}, {}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top"}, {}, {
		panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","minHeight":600,"minWidth":900,"verticalAlign":"top","width":"75%"}, {}, {
			panel1: ["wm.HeaderContentPanel", {"border":"0,0,1,0","borderColor":"#333333","height":"65px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,10","verticalAlign":"middle","width":"100%"}, {}, {
				picture1: ["wm.Picture", {"height":"50px","source":"lib/wm/base/widget/themes/default/images/wmLogo.png","width":"62px"}, {}],
				label3: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_20px","wm_FontSizePx_24px"]},"caption":"Navigation with CustPurchase ","height":"35px","padding":"4","width":"100%"}, {}],
				panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"right","verticalAlign":"middle","width":"100%"}, {}, {
					dojoMenu1: ["wm.DojoMenu", {"fullStructure":[{"label":"Mobile Version","separator":undefined,"defaultLabel":"Mobile Version","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navigationCallMobileSite","children":[]},{"label":"About","separator":undefined,"defaultLabel":"About","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navigationCallAbout","children":[]}],"height":"24px","localizationStructure":{},"transparent":true,"width":"250px"}, {}]
				}]
			}],
			panel2: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				tabLayers1: ["wm.TabLayers", {"defaultLayer":0,"manageURL":true,"transition":"fade"}, {}, {
					layerNotifications: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Notifications","horizontalAlign":"left","padding":"10","verticalAlign":"top"}, {}, {
						panelAlert: ["wm.Panel", {"border":"2,2,0,2","borderColor":"#1b0588","height":"48px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
							textAlertMsg: ["wm.Text", {"caption":"Msg to Alert","dataValue":"Welcome","displayValue":"Welcome","emptyValue":"emptyString"}, {}],
							buttonAlertUpdate: ["wm.Button", {"caption":"Alert by Update","margin":"4","width":"139px"}, {"onclick":"buttonAlertUpdateClick"}],
							buttonAlertNotification: ["wm.Button", {"caption":"Alert by Notification","margin":"4","width":"153px"}, {"onclick":"notificationCallAlert"}],
							buttonAlertScript: ["wm.Button", {"caption":"Alert by App Alert","margin":"4","width":"139px"}, {"onclick":"buttonAlertScriptClick"}],
							buttonAlertSimple: ["wm.Button", {"caption":"Alert by JS Alert","margin":"4","width":"130px"}, {"onclick":"buttonAlertSimpleClick"}]
						}],
						panelToast: ["wm.Panel", {"border":"2,2,0,2","borderColor":"#1b0588","height":"48px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
							textToastMsg: ["wm.Text", {"caption":"Msg to Toast ","dataValue":"Good Morning","displayValue":"Good Morning","emptyValue":"emptyString"}, {}],
							buttonToastNotification: ["wm.Button", {"caption":"Toast by Notification","margin":"4","width":"170px"}, {"onclick":"notificationCallToast"}],
							buttonToastScript: ["wm.Button", {"caption":"Toast by Script","margin":"4","width":"123px"}, {"onclick":"buttonToastScriptClick"}],
							buttonToastScriptAdvanced: ["wm.Button", {"caption":"Toast by Script - Advanced","margin":"4","width":"193px"}, {"onclick":"buttonToastScriptAdvancedClick"}]
						}],
						panelConfirm: ["wm.Panel", {"border":"2,2,2,2","borderColor":"#1b0588","height":"60px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
							buttonConfirm: ["wm.Button", {"caption":"Confirmation","imageIndex":88,"imageList":"app.silkIconList","margin":"4","width":"134px"}, {"onclick":"buttonConfirmClick","onclick1":"notificationCallConfirm"}],
							labelConfirmResult: ["wm.Label", {"align":"center","caption":"","padding":"4","width":"176px"}, {}]
						}]
					}],
					layerPageContainerMenu: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Page Container","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
						panel4: ["wm.Panel", {"height":"48px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
							selectMenuPageChooser: ["wm.SelectMenu", {"caption":"Choose a page","captionSize":"120px","dataType":"EntryData","dataValue":undefined,"displayField":"name","displayValue":"","width":"297px"}, {"onchange":"navigationCallPageContainer"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"variablePageList","targetProperty":"dataSet"}, {}]
								}]
							}]
						}],
						pageContainerPageContainer: ["wm.PageContainer", {"deferLoad":true,"manageHistory":true}, {}]
					}],
					layerLayers: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Layers","horizontalAlign":"left","verticalAlign":"top"}, {}, {
						pageContainerLayers: ["wm.PageContainer", {"deferLoad":true,"manageHistory":true,"pageName":"PageLayers","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
					}],
					layerDialogs: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Dialogs","horizontalAlign":"left","verticalAlign":"top"}, {}, {
						pageContainerDialogs: ["wm.PageContainer", {"deferLoad":true,"manageHistory":true,"pageName":"PageDialogs","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
					}],
					layerURL: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"URL ","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
						pageContainerURL: ["wm.PageContainer", {"deferLoad":true,"manageHistory":true,"manageURL":true,"pageName":"PageCustomerSearchEdit","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
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