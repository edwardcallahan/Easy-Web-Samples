Main.widgets = {
	customerLiveVariable1: ["wm.LiveVariable", {"ignoreCase":true,"matchMode":"anywhere","type":"com.custpurchasedb.data.Customer"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.custpurchasedb.data.Customer","view":[{"caption":"Custid","sortable":true,"dataIndex":"custid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Company","sortable":true,"dataIndex":"company","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Address","sortable":true,"dataIndex":"address","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"City","sortable":true,"dataIndex":"city","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"State","sortable":true,"dataIndex":"state","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"Zip","sortable":true,"dataIndex":"zip","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Imageurl","sortable":true,"dataIndex":"imageurl","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"Twitter","sortable":true,"dataIndex":"twitter","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null}]}, {}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"textSearch.dataValue","targetProperty":"filter.company"}, {}],
			wire1: ["wm.Wire", {"expression":undefined,"source":"custpurchaseDBLivePanel1","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	purchaseLiveVariable1: ["wm.LiveVariable", {"startUpdate":false,"type":"com.custpurchasedb.data.Purchase"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.custpurchasedb.data.Purchase","related":["customer"],"view":[{"caption":"Orderid","sortable":true,"dataIndex":"orderid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":1000,"subType":null,"widthUnits":"px"},{"caption":"Orderdate","sortable":true,"dataIndex":"orderdate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1001,"subType":null,"widthUnits":"px"},{"caption":"Custid","sortable":true,"dataIndex":"customer.custid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":2000,"subType":null,"widthUnits":"px"},{"caption":"Company","sortable":true,"dataIndex":"customer.company","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2001,"subType":null,"widthUnits":"px"},{"caption":"Address","sortable":true,"dataIndex":"customer.address","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2002,"subType":null,"widthUnits":"px"},{"caption":"City","sortable":true,"dataIndex":"customer.city","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2003,"subType":null,"widthUnits":"px"},{"caption":"State","sortable":true,"dataIndex":"customer.state","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2004,"subType":null,"widthUnits":"px"},{"caption":"Zip","sortable":true,"dataIndex":"customer.zip","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2005,"subType":null,"widthUnits":"px"},{"caption":"Imageurl","sortable":true,"dataIndex":"customer.imageurl","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2006,"subType":null,"widthUnits":"px"},{"caption":"Twitter","sortable":true,"dataIndex":"customer.twitter","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2007,"subType":null,"widthUnits":"px"}]}, {}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"customerDojoGrid.selectedItem","targetProperty":"filter.customer"}, {}]
		}]
	}],
	lineitemLiveVariable1: ["wm.LiveVariable", {"startUpdate":false,"type":"com.custpurchasedb.data.Lineitem"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.custpurchasedb.data.Lineitem","related":["id","item"],"view":[{"caption":"Quantity","sortable":true,"dataIndex":"quantity","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":8001,"subType":null,"widthUnits":"px"},{"caption":"Orderid","sortable":true,"dataIndex":"id.orderid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":9000,"subType":null,"widthUnits":"px"},{"caption":"Itemid","sortable":true,"dataIndex":"id.itemid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":9001,"subType":null,"widthUnits":"px"},{"caption":"Itemid","sortable":true,"dataIndex":"item.itemid","type":"java.lang.Integer","displayType":"Number","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":10000},{"caption":"Itemname","sortable":true,"dataIndex":"item.itemname","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":10001},{"caption":"Price","sortable":true,"dataIndex":"item.price","type":"java.math.BigDecimal","displayType":"Number","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":10002}]}, {}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"purchaseDojoGrid.selectedItem","targetProperty":"filter.purchase"}, {}]
		}]
	}],
	idLiveVariable1: ["wm.LiveVariable", {"type":"com.custpurchasedb.data.LineitemId"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.custpurchasedb.data.LineitemId","view":[{"caption":"Orderid","sortable":true,"dataIndex":"orderid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Itemid","sortable":true,"dataIndex":"itemid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":1,"subType":null}]}, {}]
	}],
	itemLiveVariable1: ["wm.LiveVariable", {"type":"com.custpurchasedb.data.Item"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.custpurchasedb.data.Item","view":[{"caption":"Itemid","sortable":true,"dataIndex":"itemid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Itemname","sortable":true,"dataIndex":"itemname","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Price","sortable":true,"dataIndex":"price","type":"java.math.BigDecimal","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null}]}, {}]
	}],
	purchaseLiveVariable2: ["wm.LiveVariable", {"type":"com.custpurchasedb.data.Purchase"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.custpurchasedb.data.Purchase","view":[{"caption":"Orderid","sortable":true,"dataIndex":"orderid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Orderdate","sortable":true,"dataIndex":"orderdate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}]}, {}]
	}],
	liveVariableItem: ["wm.LiveVariable", {"inFlightBehavior":"executeLast","type":"com.custpurchasedb.data.Item"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.custpurchasedb.data.Item","view":[{"caption":"Itemid","sortable":true,"dataIndex":"itemid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Itemname","sortable":true,"dataIndex":"itemname","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Price","sortable":true,"dataIndex":"price","type":"java.math.BigDecimal","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null}]}, {}]
	}],
	lineitemLiveVariableInsert: ["wm.LiveVariable", {"autoUpdate":false,"operation":"insert","startUpdate":false,"type":"com.custpurchasedb.data.Lineitem"}, {"onSuccess":"liveVariableLineItemInsertForm","onSuccess1":"lineitemLiveVariableInsertSuccess1"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"purchaseLiveForm1.dataOutput.orderid","targetProperty":"sourceData.id.orderid"}, {}],
			wire1: ["wm.Wire", {"expression":undefined,"source":"ItemSelectMenu.selectedItem.itemid","targetProperty":"sourceData.id.itemid"}, {}],
			wire2: ["wm.Wire", {"expression":undefined,"source":"ItemSelectMenu.selectedItem","targetProperty":"sourceData.item"}, {}],
			wire3: ["wm.Wire", {"expression":undefined,"source":"ItemQtyEditor.dataValue","targetProperty":"sourceData.quantity"}, {}]
		}],
		liveView: ["wm.LiveView", {"dataType":"com.custpurchasedb.data.Lineitem","view":[{"caption":"Id","sortable":true,"dataIndex":"id","type":"com.custpurchasedb.data.LineitemId","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Orderid","sortable":true,"dataIndex":"id.orderid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Quantity","sortable":true,"dataIndex":"quantity","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Itemid","sortable":true,"dataIndex":"id.itemid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":1,"subType":null}]}, {}]
	}],
	liveVariableLineItemInsertForm: ["wm.LiveVariable", {"inFlightBehavior":"executeLast","type":"com.custpurchasedb.data.Lineitem"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"orderidEditor1.dataValue","targetProperty":"filter.id.orderid"}, {}]
		}],
		liveView: ["wm.LiveView", {"dataType":"com.custpurchasedb.data.Lineitem","related":["id","item"],"view":[{"caption":"Quantity","sortable":true,"dataIndex":"quantity","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1001,"subType":null,"widthUnits":"px"},{"caption":"Orderid","sortable":true,"dataIndex":"id.orderid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":2000,"subType":null,"widthUnits":"px"},{"caption":"Itemid","sortable":true,"dataIndex":"id.itemid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":2001,"subType":null,"widthUnits":"px"},{"caption":"Itemid","sortable":true,"dataIndex":"item.itemid","type":"java.lang.Integer","displayType":"Number","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4000},{"caption":"Itemname","sortable":true,"dataIndex":"item.itemname","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4001},{"caption":"Price","sortable":true,"dataIndex":"item.price","type":"java.math.BigDecimal","displayType":"Number","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4002}]}, {}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		panel1: ["wm.Panel", {"height":"60px","horizontalAlign":"center","layoutKind":"left-to-right","styles":{"backgroundColor":"#a0c0e0"},"verticalAlign":"middle","width":"100%"}, {}, {
			labelTitle: ["wm.Label", {"caption":"CRM Simple","height":"30px","padding":"4","styles":{"fontWeight":"bold","fontSize":"24px","textAlign":"center"},"width":"100%"}, {}]
		}],
		panel2: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bold","fontSize":"16px"},"verticalAlign":"top","width":"100%"}, {}, {
			layers1: ["wm.Layers", {"margin":"3,0,0,0"}, {}, {
				layerCustomer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"center","themeStyleType":"","verticalAlign":"top"}, {}, {
					panel4: ["wm.Panel", {"height":"60px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
						label4: ["wm.Label", {"align":"center","padding":"4","styles":{"fontSize":"18px"},"width":"100%"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"customerDojoGrid.selectedItem.company","targetProperty":"caption"}, {}]
							}]
						}],
						picture1: ["wm.Picture", {"aspect":"v","border":"1","height":"100%","margin":"3","width":"60px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"customerDojoGrid.selectedItem.imageurl","targetProperty":"source"}, {}]
							}]
						}],
						labelTwitter: ["wm.Label", {"align":"center","display":undefined,"padding":"4","width":"100%"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"customerDojoGrid.selectedItem.twitter","targetProperty":"caption"}, {}],
								wire1: ["wm.Wire", {"expression":"'https://twitter.com/' + ${labelTwitter.caption}","targetProperty":"link"}, {}]
							}]
						}]
					}],
					textSearch: ["wm.Text", {"caption":"Search","changeOnKey":true,"dataValue":"","desktopHeight":"35px","displayValue":"","emptyValue":"emptyString","height":"35px","placeHolder":"Enter any part of a company name ","resetButton":true,"width":"400px"}, {"onchange":"customerLiveVariable1"}],
					custpurchaseDBLivePanel: ["wm.LivePanel", {"border":"4","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top"}, {}, {
						customerDojoGrid: ["wm.List", {"_classes":{"domNode":["GridListStyle"]},"border":"1","columns":[{"show":false,"field":"custid","title":"Custid","width":"80px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"company","title":"Company","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":true},{"show":false,"field":"address","title":"Address","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"city","title":"City","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"state","title":"State","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"zip","title":"Zip","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"imageurl","title":"Imageurl","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"twitter","title":"Twitter","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"","mobileColumn":false}],"height":"100%","selectFirstRow":true,"width":"100px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"source":"customerLiveVariable1","targetProperty":"dataSet"}, {}]
							}]
						}],
						customerLiveForm1Panel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
							layers2: ["wm.Layers", {}, {}, {
								layerPurch: ["wm.Layer", {"borderColor":"","caption":"layer5","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
									custpurchaseDBLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top"}, {}, {
										purchaseDojoGrid: ["wm.List", {"_classes":{"domNode":["GridListStyle"]},"border":"1","columns":[{"show":false,"field":"orderid","title":"Orderid","width":"100%","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"orderdate","title":"Order Date","width":"80px","align":"left","formatFunc":"wm_date_formatter","editorProps":{"restrictValues":true},"mobileColumn":true},{"show":false,"field":"customer.custid","title":"Customer.custid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"customer.company","title":"Customer.company","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"customer.address","title":"Customer.address","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"customer.city","title":"Customer.city","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"customer.state","title":"Customer.state","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"customer.zip","title":"Customer.zip","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"customer.imageurl","title":"Customer.imageurl","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"customer.twitter","title":"Customer.twitter","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","formatFunc":"wm_date_formatter","formatProps":{"formatLength":"medium","dateType":"date"},"expression":"","mobileColumn":false}],"height":"100%","selectFirstRow":true,"width":"90px"}, {"onSelect":"layerLineItemGrid"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"source":"purchaseLiveVariable1","targetProperty":"dataSet"}, {}]
											}]
										}],
										purchaseLiveForm1Panel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
											layers3: ["wm.Layers", {}, {}, {
												layerLineItemGrid: ["wm.Layer", {"borderColor":"","caption":"layer7","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
													lineItemDojoGrid: ["wm.DojoGrid", {"border":"0","columns":[{"show":false,"field":"id.orderid","title":"Orderid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"quantity","title":"Qty","width":"30px","align":"center","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"id.itemid","title":"Itemid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Qty: \" + ${quantity} + \"</div>\"\n+ \"<div class='MobileRow'>Item: \" + ${item.itemname} + \"</div>\"\n+ \"<div class='MobileRow'>Price: \" + wm.List.prototype.currencyFormatter({}, null,null,null,${item.price}) + \"</div>\"\n","mobileColumn":false},{"show":false,"field":"item.itemid","title":"Item.itemid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"item.itemname","title":"Item","width":"100%","align":"center","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"item.price","title":"Price","width":"60px","align":"center","formatFunc":"wm_currency_formatter","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"customFieldTotal","title":"Total","width":"60px","align":"center","formatFunc":"wm_currency_formatter","editorProps":{"restrictValues":true},"expression":"${quantity}*${item.price}","isCustomField":true,"mobileColumn":false}],"height":"100%","localizationStructure":{},"margin":"0","minDesktopHeight":60,"selectFirstRow":true,"singleClickEdit":true}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"expression":undefined,"source":"lineitemLiveVariable1","targetProperty":"dataSet"}, {}]
														}]
													}]
												}],
												layerPurchEdit: ["wm.Layer", {"borderColor":"","caption":"layer6","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
													purchaseLiveForm1: ["wm.LiveForm", {"autoScroll":true,"desktopHeight":"158px","enableTouchHeight":true,"height":"158px","horizontalAlign":"center","mobileHeight":"158px","readonly":true,"verticalAlign":"top"}, {"onBeginInsert":"purchaseLiveForm1BeginInsert","onSuccess":"purchaseLiveVariable1","onSuccess1":"purchaseLiveForm1Success1"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"expression":undefined,"source":"purchaseDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
														}],
														orderidEditor1: ["wm.Number", {"caption":"Orderid","captionSize":"140px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"orderid","height":"35px","readonly":true,"required":true,"width":"100%"}, {}],
														orderdateEditor1: ["wm.DateTime", {"caption":"Order Date","captionSize":"140px","dateMode":"Date","desktopHeight":"26px","emptyValue":"zero","formField":"orderdate","height":"35px","readonly":true,"width":"100%"}, {}],
														customerLookup1: ["wm.Lookup", {"caption":"Customer","captionSize":"140px","dataType":"com.custpurchasedb.data.Customer","dataValue":undefined,"desktopHeight":"35px","displayField":"company","formField":"customer","height":"35px","readonly":true,"required":true,"width":"100%"}, {}, {
															binding1: ["wm.Binding", {}, {}, {
																dataFieldWire: ["wm.Wire", {"source":"customerLookup1.liveVariable","targetProperty":"dataSet"}, {}],
																wire: ["wm.Wire", {"expression":undefined,"source":"customerDojoGrid.selectedItem","targetProperty":"defaultInsert"}, {}]
															}]
														}],
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
													}],
													serviceInputForm1Panel: ["wm.Panel", {"enableTouchHeight":true,"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
														serviceInputForm1: ["wm.ServiceInputForm", {"desktopHeight":"189px","height":"189px","horizontalAlign":"center","mobileHeight":"189px"}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"lineitemLiveVariableInsert","targetProperty":"serviceVariable"}, {}]
															}],
															label1: ["wm.Label", {"caption":"Add Item to Order","padding":"4"}, {}],
															ItemQtyEditor: ["wm.Number", {"caption":"Quantity","captionSize":"140px","dataValue":0,"desktopHeight":"35px","displayValue":"","emptyValue":"zero","height":"35px","width":"100%"}, {}],
															ItemSelectMenu: ["wm.SelectMenu", {"caption":"Item","captionSize":"140px","dataType":"com.custpurchasedb.data.Item","dataValue":undefined,"desktopHeight":"35px","displayField":"itemname","displayValue":"","height":"35px","width":"100%"}, {}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"expression":undefined,"source":"liveVariableItem","targetProperty":"dataSet"}, {}]
																}]
															}],
															button1: ["wm.Button", {"caption":"Add","height":"40px","margin":"4"}, {"onclick":"lineitemLiveVariableInsert"}]
														}],
														dojoGridLineItemsOfNewOrder: ["wm.DojoGrid", {"columns":[{"show":true,"field":"quantity","title":"Quantity","width":"80px","align":"right","formatFunc":"wm_number_formatter","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"id.orderid","title":"Orderid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"id.itemid","title":"Itemid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"item.itemid","title":"Itemid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"item.itemname","title":"Item","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"item.price","title":"Price","width":"80px","align":"right","formatFunc":"wm_currency_formatter","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Quantity: \" + wm.List.prototype.numberFormatter({}, null,null,null,${quantity}) + \"</div>\"\n+ \"<div class='MobileRow'>Item: \" + ${item.itemname} + \"</div>\"\n+ \"<div class='MobileRow'>Price: \" + wm.List.prototype.currencyFormatter({}, null,null,null,${item.price}) + \"</div>\"\n","mobileColumn":false}],"dsType":"com.custpurchasedb.data.Lineitem","margin":"4","minDesktopHeight":60,"singleClickEdit":true}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"liveVariableLineItemInsertForm","targetProperty":"dataSet"}, {}]
															}]
														}]
													}]
												}]
											}]
										}]
									}]
								}],
								layerCustomerEdit: ["wm.Layer", {"borderColor":"","caption":"layer4","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
									customerLiveForm1: ["wm.LiveForm", {"autoScroll":true,"enableTouchHeight":true,"height":"100%","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onSuccess":"customerLiveVariable1"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"customerDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
										}],
										companyEditor1: ["wm.Text", {"caption":"Company","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"company","height":"35px","readonly":true,"required":true,"width":"100%"}, {}],
										addressEditor1: ["wm.Text", {"caption":"Address","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"address","height":"35px","readonly":true,"required":true,"width":"100%"}, {}],
										cityEditor1: ["wm.Text", {"caption":"City","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"city","height":"35px","readonly":true,"required":true,"width":"100%"}, {}],
										stateEditor1: ["wm.Text", {"caption":"State","captionSize":"140px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"state","height":"35px","maxChars":"2","readonly":true,"required":true,"width":"100%"}, {}],
										zipEditor1: ["wm.Text", {"caption":"Zip","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"null","formField":"zip","height":"35px","readonly":true,"required":true,"width":"100%"}, {}],
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
					}],
					toggleButtonPanel2: ["wm.ToggleButtonPanel", {"horizontalAlign":"left","manageHistory":true,"manageURL":true,"margin":"0,1,0,0","verticalAlign":"top"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"navButtonCompanies","targetProperty":"currentButton"}, {}]
						}],
						navButtonCompanies1: ["wm.Button", {"border":"0,1,0,0","caption":"New Customer","height":"100%","margin":"0","width":"100%"}, {"onclick":"layerCustomerEdit","onclick1":"customerLiveForm1.beginDataInsert"}],
						navButton4: ["wm.Button", {"border":"0,1,0,0","caption":"New Order","height":"100%","margin":"0","width":"100%"}, {"onclick":"layerPurchEdit","onclick1":"purchaseLiveForm1.beginDataInsert","onclick2":"layerPurch"}]
					}]
				}],
				layerItems: ["wm.Layer", {"borderColor":"","caption":"layer2","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
					pageContainer1: ["wm.PageContainer", {"deferLoad":true,"pageName":"PageItems","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
				}],
				layerAbout: ["wm.Layer", {"borderColor":"","caption":"layer3","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
					pageContainer2: ["wm.PageContainer", {"deferLoad":true,"pageName":"About","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
				}]
			}]
		}],
		panel3: ["wm.Panel", {"height":"54px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			toggleButtonPanel1: ["wm.ToggleButtonPanel", {"horizontalAlign":"left","manageHistory":true,"manageURL":true,"margin":"0,1,0,0","verticalAlign":"top"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"navButtonCompanies","targetProperty":"currentButton"}, {}]
				}],
				navButtonCompanies: ["wm.Button", {"border":"0,1,0,0","caption":"Companies","height":"100%","margin":"0","width":"100%"}, {"onclick":"layerCustomer","onclick1":"layerPurch"}],
				navButton2: ["wm.Button", {"border":"0,1,0,0","caption":"Inventory","height":"100%","margin":"0","width":"100%"}, {"onclick":"layerItems"}],
				navButton3: ["wm.Button", {"border":"0","caption":"About ","height":"100%","margin":"0","width":"100%"}, {"onclick":"layerAbout"}]
			}]
		}]
	}]
}