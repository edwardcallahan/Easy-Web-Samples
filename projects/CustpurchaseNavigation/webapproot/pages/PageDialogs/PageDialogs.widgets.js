PageDialogs.widgets = {
	serviceVarTakeNap: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"takeNap","service":"SleepSvc"}, {}, {
		input: ["wm.ServiceInput", {"type":"takeNapInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"5000","targetProperty":"sleepMillis"}, {}]
			}]
		}]
	}],
	genericDialogModal: ["wm.GenericDialog", {"button1Caption":"Close","button1Close":true,"desktopHeight":"61px","height":"102px","title":"This is a Modal Generic Dialog","userPrompt":"Stop ! I am modal.","width":"260px"}, {}],
	genericDialogNonModal: ["wm.GenericDialog", {"desktopHeight":"61px","height":"70px","modal":false,"noEscape":false,"noLeftRightDocking":false,"noTopBottomDocking":false,"userPrompt":"I won't stop you","width":"200px"}, {}],
	loadingDialog1: ["wm.LoadingDialog", {}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"serviceVarTakeNap","targetProperty":"serviceVariableToTrack"}, {}],
			wire1: ["wm.Wire", {"expression":undefined,"source":"panelLoading","targetProperty":"widgetToCover"}, {}]
		}]
	}],
	pageDialog1: ["wm.PageDialog", {"desktopHeight":"300px","height":"300px","pageName":"PageItemInsert","title":"PageDialog","width":"600px"}, {}],
	designableDialogUsingWidgets: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","desktopHeight":"300px","height":"300px","title":"Designable Dialog","width":"480px"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"center","padding":"5","verticalAlign":"middle","width":"100%"}, {}, {
			labelDDMesage: ["wm.Label", {"caption":"You can add widgets directly to a designable dialog.","padding":"4","width":"300px"}, {}],
			buttonDDclose: ["wm.Button", {"caption":"Close","margin":"4"}, {"onclick":"designableDialogUsingWidgets.hide"}]
		}],
		buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}]
	}],
	designableDialogUsingPageContainer: ["wm.DesignableDialog", {"buttonBarId":"","containerWidgetId":"containerWidget1","desktopHeight":"300px","height":"300px","title":"Page Container in a Designable Dialog","width":"600px"}, {}, {
		containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			pageContainer1: ["wm.PageContainer", {"deferLoad":true,"pageName":"PageItemInsert","subpageEventlist":{"onItemDBFormInsertSuccess":"itemDBForm.onInsertSuccess","onLayoutBox1Show":"layoutBox1.onShow"},"subpageMethodlist":{},"subpageProplist":{}}, {"onItemDBFormCancelEdit":"designableDialogUsingPageContainer.hide","onItemDBFormInsertSuccess":"designableDialogUsingPageContainer.hide","onLayoutBox1Show":"pageContainer1LayoutBox1Show"}]
		}],
		buttonBar1: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		panelGeneric: ["wm.Panel", {"border":"2,2,0,2","borderColor":"#1b0588","height":"60px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
			buttonModal: ["wm.Button", {"caption":"Modal Dialog","margin":"4","width":"132px"}, {"onclick":"genericDialogModal.show"}],
			buttonNonModalShow: ["wm.Button", {"caption":"Non-Modal DialogShow","margin":"4","width":"200px"}, {"onclick":"genericDialogNonModal.show"}],
			buttonNonModalHide: ["wm.Button", {"caption":"Non-Modal Hide","margin":"4","width":"125px"}, {"onclick":"genericDialogNonModal.hide"}],
			buttonDateDialog: ["wm.Button", {"caption":"Customized Dialog ","margin":"4","width":"181px"}, {"onclick":"buttonDateDialogClick","onclick1":"genericDialogModal.show"}]
		}],
		panelLoading: ["wm.Panel", {"border":"2,2,0,2","borderColor":"#1b0588","height":"60px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
			buttonLoading: ["wm.Button", {"caption":"Loading Dialog","margin":"4","width":"146px"}, {"onclick":"serviceVarTakeNap"}]
		}],
		panelPage: ["wm.Panel", {"border":"2,2,0,2","borderColor":"#1b0588","height":"60px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"1261px"}, {}, {
			buttonDesignable: ["wm.Button", {"caption":"Designable Dialog","margin":"4","width":"163px"}, {"onclick":"designableDialogUsingWidgets.show"}],
			buttonPageDialog: ["wm.Button", {"caption":"Page Dialog","margin":"4","width":"120px"}, {"onclick":"pageDialog1.show"}]
		}],
		panelDesignable: ["wm.Panel", {"border":"2,2,2,2","borderColor":"#1b0588","height":"60px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
			buttonInsertCustomer: ["wm.Button", {"caption":"Insert Customer","margin":"4","width":"188px"}, {"onclick":"designableDialogUsingPageContainer.show"}]
		}]
	}]
}