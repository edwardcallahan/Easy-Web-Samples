Main.widgets = {
	customerLiveVariable1: ["wm.LiveVariable", {"type":"com.custpurchasedb.data.Customer"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.custpurchasedb.data.Customer","view":[{"caption":"Custid","sortable":true,"dataIndex":"custid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Company","sortable":true,"dataIndex":"company","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Address","sortable":true,"dataIndex":"address","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"City","sortable":true,"dataIndex":"city","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"State","sortable":true,"dataIndex":"state","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Zip","sortable":true,"dataIndex":"zip","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Imageurl","sortable":true,"dataIndex":"imageurl","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"Twitter","sortable":true,"dataIndex":"twitter","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null}]}, {}]
	}],
	purchaseLiveVariable1: ["wm.LiveVariable", {"type":"com.custpurchasedb.data.Purchase"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.custpurchasedb.data.Purchase","related":["customer"],"view":[{"caption":"Orderid","sortable":true,"dataIndex":"orderid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Orderdate","sortable":true,"dataIndex":"orderdate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Custid","sortable":true,"dataIndex":"customer.custid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Company","sortable":true,"dataIndex":"customer.company","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Address","sortable":true,"dataIndex":"customer.address","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"City","sortable":true,"dataIndex":"customer.city","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"State","sortable":true,"dataIndex":"customer.state","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Zip","sortable":true,"dataIndex":"customer.zip","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Imageurl","sortable":true,"dataIndex":"customer.imageurl","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"Twitter","sortable":true,"dataIndex":"customer.twitter","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null}]}, {}]
	}],
	lineitemLiveVariable1: ["wm.LiveVariable", {"type":"com.custpurchasedb.data.Lineitem"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.custpurchasedb.data.Lineitem","view":[{"caption":"Id","sortable":true,"dataIndex":"id","type":"com.custpurchasedb.data.LineitemId","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Orderid","sortable":true,"dataIndex":"id.orderid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Quantity","sortable":true,"dataIndex":"quantity","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Itemid","sortable":true,"dataIndex":"id.itemid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":1,"subType":null}]}, {}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		fancyPanel1: ["wm.FancyPanel", {"height":"51px"}, {}],
		panel1: ["wm.Panel", {"height":"60px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			label1: ["wm.Label", {"caption":"Your Start Page","padding":"4","styles":{"fontWeight":"bold","fontSize":"16px","textAlign":"center"},"width":"100%"}, {}]
		}],
		panel2: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			layers1: ["wm.Layers", {"margin":"3,0,0,0"}, {}, {
				layer1: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"center","themeStyleType":"","verticalAlign":"top"}, {}, {
					panel4: ["wm.Panel", {"height":"50px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						picture1: ["wm.Picture", {"aspect":"v","border":"1","height":"100%","margin":"3","width":"60px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"customerDojoGrid.selectedItem.imageurl","targetProperty":"source"}, {}]
							}]
						}]
					}],
					custpurchaseDBLivePanel: ["wm.LivePanel", {"border":"4","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top"}, {}, {
						customerDojoGrid: ["wm.List", {"_classes":{"domNode":["GridListStyle"]},"border":"1","columns":[{"show":false,"field":"custid","title":"Custid","width":"80px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"company","title":"Company","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":true},{"show":false,"field":"address","title":"Address","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"city","title":"City","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"state","title":"State","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"zip","title":"Zip","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"imageurl","title":"Imageurl","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"twitter","title":"Twitter","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"","mobileColumn":false}],"height":"100%","selectFirstRow":true,"width":"200px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"source":"customerLiveVariable1","targetProperty":"dataSet"}, {}]
							}]
						}],
						customerLiveForm1Panel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
							layers2: ["wm.Layers", {}, {}, {
								layer5: ["wm.Layer", {"borderColor":"","caption":"layer5","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
									custpurchaseDBLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top"}, {}, {
										purchaseDojoGrid: ["wm.List", {"_classes":{"domNode":["GridListStyle"]},"border":"1","columns":[{"show":false,"field":"orderid","title":"Orderid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"orderdate","title":"Orderdate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":true},{"show":false,"field":"customer.custid","title":"Customer.custid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"customer.company","title":"Customer.company","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"customer.address","title":"Customer.address","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"customer.city","title":"Customer.city","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"customer.state","title":"Customer.state","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"customer.zip","title":"Customer.zip","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"customer.imageurl","title":"Customer.imageurl","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"customer.twitter","title":"Customer.twitter","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","formatFunc":"wm_date_formatter","formatProps":{"formatLength":"medium","dateType":"date"},"expression":"","mobileColumn":false}],"height":"100%","width":"200px"}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"source":"purchaseLiveVariable1","targetProperty":"dataSet"}, {}]
											}]
										}],
										purchaseLiveForm1Panel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
											layers3: ["wm.Layers", {}, {}, {
												layer7: ["wm.Layer", {"borderColor":"","caption":"layer7","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
													dojoGrid1: ["wm.DojoGrid", {"columns":[{"show":true,"field":"id","title":"Id","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":true,"field":"id.orderid","title":"Orderid","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"quantity","title":"Quantity","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":true,"field":"id.itemid","title":"Itemid","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Id: \" + ${id} + \"</div>\"\n+ \"<div class='MobileRow'>Orderid: \" + ${id.orderid} + \"</div>\"\n+ \"<div class='MobileRow'>Quantity: \" + ${quantity} + \"</div>\"\n+ \"<div class='MobileRow'>Itemid: \" + ${id.itemid} + \"</div>\"\n","mobileColumn":true}],"dsType":"com.custpurchasedb.data.Lineitem","height":"100%","localizationStructure":{},"margin":"4","minDesktopHeight":60,"singleClickEdit":true}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"expression":undefined,"source":"lineitemLiveVariable1","targetProperty":"dataSet"}, {}]
														}]
													}]
												}],
												layer6: ["wm.Layer", {"borderColor":"","caption":"layer6","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
													purchaseLiveForm1: ["wm.LiveForm", {"autoScroll":true,"enableTouchHeight":true,"height":"100%","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onSuccess":"purchaseLiveVariable1"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"expression":undefined,"source":"purchaseDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
														}],
														orderidEditor1: ["wm.Number", {"caption":"Orderid","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"orderid","height":"35px","readonly":true,"required":true,"width":"100%"}, {}],
														orderdateEditor1: ["wm.DateTime", {"caption":"Orderdate","captionSize":"140px","dateMode":"Date","desktopHeight":"26px","emptyValue":"zero","formField":"orderdate","height":"35px","readonly":true,"width":"100%"}, {}],
														customerLookup1: ["wm.Lookup", {"caption":"Customer","captionSize":"140px","dataType":"com.custpurchasedb.data.Customer","dataValue":undefined,"displayField":"city","formField":"customer","height":"35px","readonly":true,"required":true,"width":"100%"}, {}],
														purchaseSpacer: ["wm.Spacer", {"height":"100%","width":"10px"}, {}],
														purchaseLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","liveForm":"purchaseLiveForm1","operationPanel":"operationPanel2","savePanel":"savePanel2"}, {}, {
															savePanel2: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
																saveButton2: ["wm.Button", {"caption":"Save","height":"100%","margin":"4"}, {"onclick":"purchaseLiveForm1EditPanel.saveData"}, {
																	binding: ["wm.Binding", {}, {}, {
																		wire: ["wm.Wire", {"expression":undefined,"source":"purchaseLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
																	}]
																}],
																cancelButton2: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"purchaseLiveForm1EditPanel.cancelEdit"}]
															}],
															operationPanel2: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
																newButton2: ["wm.Button", {"caption":"New","height":"100%","margin":"4"}, {"onclick":"purchaseLiveForm1EditPanel.beginDataInsert"}],
																updateButton2: ["wm.Button", {"caption":"Update","height":"100%","margin":"4"}, {"onclick":"purchaseLiveForm1EditPanel.beginDataUpdate"}, {
																	binding: ["wm.Binding", {}, {}, {
																		wire: ["wm.Wire", {"expression":undefined,"source":"purchaseLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
																	}]
																}],
																deleteButton2: ["wm.Button", {"caption":"Delete","height":"100%","margin":"4"}, {"onclick":"purchaseLiveForm1EditPanel.deleteData"}, {
																	binding: ["wm.Binding", {}, {}, {
																		wire: ["wm.Wire", {"expression":undefined,"source":"purchaseLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
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
								layer4: ["wm.Layer", {"borderColor":"","caption":"layer4","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
									customerLiveForm1: ["wm.LiveForm", {"autoScroll":true,"enableTouchHeight":true,"height":"100%","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onSuccess":"customerLiveVariable1"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"customerDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
										}],
										companyEditor1: ["wm.Text", {"caption":"Company","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"company","height":"35px","readonly":true,"required":true,"width":"100%"}, {}],
										addressEditor1: ["wm.Text", {"caption":"Address","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"address","height":"35px","readonly":true,"width":"100%"}, {}],
										cityEditor1: ["wm.Text", {"caption":"City","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"city","height":"35px","readonly":true,"width":"100%"}, {}],
										stateEditor1: ["wm.Text", {"caption":"State","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"state","height":"35px","readonly":true,"width":"100%"}, {}],
										zipEditor1: ["wm.Text", {"caption":"Zip","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"zip","height":"35px","readonly":true,"width":"100%"}, {}],
										imageurlEditor1: ["wm.Text", {"caption":"Imageurl","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"imageurl","height":"35px","readonly":true,"width":"100%"}, {}],
										twitterEditor1: ["wm.Text", {"caption":"Twitter","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"twitter","height":"35px","readonly":true,"width":"100%"}, {}],
										customerSpacer: ["wm.Spacer", {"height":"100%","width":"10px"}, {}],
										customerLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","liveForm":"customerLiveForm1","operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
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
							}]
						}]
					}]
				}],
				layer2: ["wm.Layer", {"borderColor":"","caption":"layer2","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
					label2: ["wm.Label", {"caption":"PageContainer1 is below this label","padding":"4","styles":{"fontWeight":"bold","fontSize":"16px","textAlign":"center"},"width":"100%"}, {}],
					pageContainer1: ["wm.PageContainer", {"deferLoad":true}, {}]
				}],
				layer3: ["wm.Layer", {"borderColor":"","caption":"layer3","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
					label3: ["wm.Label", {"caption":"PageContainer2 is below this label","padding":"4","styles":{"fontWeight":"bold","fontSize":"16px","textAlign":"center"},"width":"100%"}, {}],
					pageContainer2: ["wm.PageContainer", {"deferLoad":true}, {}]
				}]
			}]
		}],
		panel3: ["wm.Panel", {"height":"54px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			toggleButtonPanel1: ["wm.ToggleButtonPanel", {"horizontalAlign":"left","manageHistory":true,"manageURL":true,"margin":"0,1,0,0","verticalAlign":"top"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"navButton1","targetProperty":"currentButton"}, {}]
				}],
				navButton1: ["wm.Button", {"border":"0,1,0,0","caption":"Layer One","height":"100%","margin":"0","width":"100%"}, {"onclick":"layer1"}],
				navButton2: ["wm.Button", {"border":"0,1,0,0","caption":"Layer Two","height":"100%","margin":"0","width":"100%"}, {"onclick":"layer2"}],
				navButton3: ["wm.Button", {"border":"0","caption":"Layer Three","height":"100%","margin":"0","width":"100%"}, {"onclick":"layer3"}]
			}]
		}]
	}]
}