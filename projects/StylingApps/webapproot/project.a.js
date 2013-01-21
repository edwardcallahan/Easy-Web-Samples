wm.JsonRpcService.smdCache['runtimeService.smd'] = {
	"methods": [{
		"name": "delete",
		"operationType": null,
		"parameters": [{
			"name": "serviceName",
			"type": "java.lang.String"
		}, {
			"name": "typeName",
			"type": "java.lang.String"
		}, {
			"name": "objectToDelete",
			"type": "java.lang.Object"
		}],
		"returnType": null
	}, {
		"name": "echo",
		"operationType": null,
		"parameters": [{
			"name": "contents",
			"type": "java.lang.String"
		}, {
			"name": "contentType",
			"type": "java.lang.String"
		}, {
			"name": "fileName",
			"type": "java.lang.String"
		}],
		"returnType": "com.wavemaker.runtime.server.DownloadResponse"
	}, {
		"name": "getInternalRuntime",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.server.InternalRuntime"
	}, {
		"name": "getLocalHostIP",
		"operationType": null,
		"parameters": null,
		"returnType": "java.lang.String"
	}, {
		"name": "getProperty",
		"operationType": null,
		"parameters": [{
			"name": "instance",
			"type": "java.lang.Object"
		}, {
			"name": "type",
			"type": "java.lang.String"
		}, {
			"name": "propertyName",
			"type": "java.lang.String"
		}],
		"returnType": "java.lang.Object"
	}, {
		"name": "getRuntimeAccess",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.RuntimeAccess"
	}, {
		"name": "getServiceEventNotifier",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.service.events.ServiceEventNotifier"
	}, {
		"name": "getServiceManager",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.service.ServiceManager"
	}, {
		"name": "getServiceWire",
		"operationType": null,
		"parameters": [{
			"name": "serviceName",
			"type": "java.lang.String"
		}, {
			"name": "typeName",
			"type": "java.lang.String"
		}],
		"returnType": "com.wavemaker.runtime.service.ServiceWire"
	}, {
		"name": "getSessionId",
		"operationType": null,
		"parameters": null,
		"returnType": "java.lang.String"
	}, {
		"name": "getTypeManager",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.service.TypeManager"
	}, {
		"name": "insert",
		"operationType": null,
		"parameters": [{
			"name": "serviceName",
			"type": "java.lang.String"
		}, {
			"name": "typeName",
			"type": "java.lang.String"
		}, {
			"name": "objectToInsert",
			"type": "java.lang.Object"
		}],
		"returnType": "com.wavemaker.runtime.service.TypedServiceReturn"
	}, {
		"name": "read",
		"operationType": null,
		"parameters": [{
			"name": "serviceName",
			"type": "java.lang.String"
		}, {
			"name": "typeName",
			"type": "java.lang.String"
		}, {
			"name": "instance",
			"type": "java.lang.Object"
		}, {
			"name": "propertyOptions",
			"type": "com.wavemaker.runtime.service.PropertyOptions"
		}, {
			"name": "pagingOptions",
			"type": "com.wavemaker.runtime.service.PagingOptions"
		}],
		"returnType": "com.wavemaker.runtime.service.TypedServiceReturn"
	}, {
		"name": "setInternalRuntime",
		"operationType": null,
		"parameters": [{
			"name": "internalRuntime",
			"type": "com.wavemaker.runtime.server.InternalRuntime"
		}],
		"returnType": null
	}, {
		"name": "setRuntimeAccess",
		"operationType": null,
		"parameters": [{
			"name": "runtimeAccess",
			"type": "com.wavemaker.runtime.RuntimeAccess"
		}],
		"returnType": null
	}, {
		"name": "setServiceEventNotifier",
		"operationType": null,
		"parameters": [{
			"name": "serviceEventNotifier",
			"type": "com.wavemaker.runtime.service.events.ServiceEventNotifier"
		}],
		"returnType": null
	}, {
		"name": "setServiceManager",
		"operationType": null,
		"parameters": [{
			"name": "serviceManager",
			"type": "com.wavemaker.runtime.service.ServiceManager"
		}],
		"returnType": null
	}, {
		"name": "setTypeManager",
		"operationType": null,
		"parameters": [{
			"name": "typeManager",
			"type": "com.wavemaker.runtime.service.TypeManager"
		}],
		"returnType": null
	}, {
		"name": "shiftDeserializedProperties",
		"operationType": null,
		"parameters": [{
			"name": "index",
			"type": "int"
		}],
		"returnType": null
	}, {
		"name": "update",
		"operationType": null,
		"parameters": [{
			"name": "serviceName",
			"type": "java.lang.String"
		}, {
			"name": "typeName",
			"type": "java.lang.String"
		}, {
			"name": "objectToUpdate",
			"type": "java.lang.Object"
		}],
		"returnType": "com.wavemaker.runtime.service.TypedServiceReturn"
	}],
	"serviceType": "JSON-RPC",
	"serviceURL": "runtimeService.json"
};
wm.JsonRpcService.smdCache['waveMakerService.smd'] = {
	"methods": [{
		"name": "echo",
		"operationType": null,
		"parameters": [{
			"name": "contents",
			"type": "java.lang.String"
		}, {
			"name": "contentType",
			"type": "java.lang.String"
		}, {
			"name": "fileName",
			"type": "java.lang.String"
		}],
		"returnType": "com.wavemaker.runtime.server.DownloadResponse"
	}, {
		"name": "getLocalHostIP",
		"operationType": null,
		"parameters": null,
		"returnType": "java.lang.String"
	}, {
		"name": "getServerTimeOffset",
		"operationType": null,
		"parameters": null,
		"returnType": "int"
	}, {
		"name": "getSessionId",
		"operationType": null,
		"parameters": null,
		"returnType": "java.lang.String"
	}, {
		"name": "hostToDomain",
		"operationType": null,
		"parameters": [{
			"name": "host",
			"type": "java.lang.String"
		}],
		"returnType": "java.lang.String"
	}, {
		"name": "proxyCheck",
		"operationType": null,
		"parameters": [{
			"name": "remoteURL",
			"type": "java.lang.String"
		}],
		"returnType": null
	}, {
		"name": "remoteRESTCall",
		"operationType": null,
		"parameters": [{
			"name": "remoteURL",
			"type": "java.lang.String"
		}, {
			"name": "params",
			"type": "java.lang.String"
		}, {
			"name": "method",
			"type": "java.lang.String"
		}],
		"returnType": "java.lang.String"
	}],
	"serviceType": "JSON-RPC",
	"serviceURL": "waveMakerService.json"
};
wm.types = {
	"types": {
		"boolean": {
			"internal": true,
			"primitiveType": "Boolean"
		},
		"byte": {
			"internal": true,
			"primitiveType": "Number"
		},
		"char": {
			"internal": true,
			"primitiveType": "String"
		},
		"com.custpurchasedb.data.Cpuser": {
			"fields": {
				"pword": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"uname": {
					"exclude": [],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"urole": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "custpurchaseDB"
		},
		"com.custpurchasedb.data.Customer": {
			"fields": {
				"address": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"city": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"company": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"custid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"imageurl": {
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"purchases": {
					"exclude": [],
					"fieldOrder": 8,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.custpurchasedb.data.Purchase"
				},
				"state": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"twitter": {
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"zip": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "custpurchaseDB"
		},
		"com.custpurchasedb.data.Item": {
			"fields": {
				"itemid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"itemname": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"lineitems": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.custpurchasedb.data.Lineitem"
				},
				"price": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.math.BigDecimal"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "custpurchaseDB"
		},
		"com.custpurchasedb.data.Lineitem": {
			"fields": {
				"item": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.custpurchasedb.data.Item"
				},
				"lineitemid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"purchase": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.custpurchasedb.data.Purchase"
				},
				"quantity": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "custpurchaseDB"
		},
		"com.custpurchasedb.data.Purchase": {
			"fields": {
				"customer": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.custpurchasedb.data.Customer"
				},
				"lineitems": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.custpurchasedb.data.Lineitem"
				},
				"orderdate": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"orderid": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "custpurchaseDB"
		},
		"double": {
			"internal": true,
			"primitiveType": "Number"
		},
		"float": {
			"internal": true,
			"primitiveType": "Number"
		},
		"int": {
			"internal": true,
			"primitiveType": "Number"
		},
		"java.lang.Boolean": {
			"internal": false,
			"primitiveType": "Boolean"
		},
		"java.lang.Byte": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Character": {
			"internal": false,
			"primitiveType": "String"
		},
		"java.lang.Double": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Float": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Integer": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Long": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Short": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.String": {
			"internal": false,
			"primitiveType": "String"
		},
		"java.lang.StringBuffer": {
			"internal": false,
			"primitiveType": "String"
		},
		"java.math.BigDecimal": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.math.BigInteger": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.sql.Date": {
			"internal": false,
			"primitiveType": "Date"
		},
		"java.sql.Time": {
			"internal": false,
			"primitiveType": "Date"
		},
		"java.sql.Timestamp": {
			"internal": false,
			"primitiveType": "Date"
		},
		"java.util.Date": {
			"internal": false,
			"primitiveType": "Date"
		},
		"long": {
			"internal": true,
			"primitiveType": "Number"
		},
		"short": {
			"internal": true,
			"primitiveType": "Number"
		}
	}
};
wm.Application.themeData['wm_coolblue'] = {"wm.ToggleButton":{"border":"1","borderColor":"#333333"},"wm.ToggleButtonPanel":{"border":"1","borderColor":"#333333"},"wm.Button":{"border":"1","borderColor":"#333333","height":"32px"},"wm.Layout":{"border":"0","borderColor":"#333333"},"wm.Bevel":{"bevelSize":"10","border":"1","borderColor":"#333333"},"wm.Splitter":{"bevelSize":"4","border":"1","borderColor":"#333333"},"wm.AccordionDecorator":{"captionBorder":"1","captionBorderColor":"#333333"},"wm.AccordionLayers":{"border":"0","borderColor":"#333333","captionBorder":"2","layerBorder":"1","captionHeight":"30"},"wm.FancyPanel":{"margin":"2","border":"0","borderColor":"#999999","innerBorder":"2","labelHeight":"24"},"wm.TabLayers":{"layersType":"Tabs","margin":"0,2,0,2","clientBorder":"1","border":"0","clientBorderColor":"#999999","headerHeight":"30px","borderColor":"#999999","mobileHeaderHeight":"38px"},"wm.WizardLayers":{"margin":"0,2,0,2","border":"0","clientBorder":"1","clientBorderColor":"#333333"},"wm.Layer":{},"wm.Dialog":{"border":"1","borderColor":"#333333","titlebarBorder":"0,0,1,0","titlebarBorderColor":"#333333","containerClass":"MainContent","titlebarHeight":"22"},"wm.GenericDialog":{"border":"1","borderColor":"#333333","titlebarBorder":"0,0,1,0","titlebarBorderColor":"#333333","footerBorder":"1,0,0,0","footerBorderColor":"#333333","containerClass":"MainContent"},"wm.RichTextDialog":{"border":"1","borderColor":"#333333","titlebarBorder":"0,0,1,0","titlebarBorderColor":"#333333","footerBorder":"1,0,0,0","footerBorderColor":"#333333","containerClass":"MainContent"},"wm.PageDialog":{"border":"1","borderColor":"#333333","titlebarBorder":"0,0,1,0","titlebarBorderColor":"#333333","footerBorder":"1,0,0,0","footerBorderColor":"#333333","noBevel":true,"containerClass":"MainContent"},"wm.DesignableDialog":{"border":"1","borderColor":"#333333","titlebarBorder":"0,0,1,0","titlebarBorderColor":"#333333","footerBorder":"1,0,0,0","footerBorderColor":"#333333","containerClass":"MainContent"},"wm.DojoMenu":{"padding":"0","border":"0","borderColor":"#333333"},"wm.List":{"margin":"0,2,0,2","border":"2","borderColor":"#333333"},"wm.dijit.ProgressBar":{"border":"0","borderColor":"#333333"},"wm.RichText":{"border":"0","borderColor":"#333333"},"wm.RoundedButton":{"border":"0","borderColor":"#333333"},"wm.DataGrid":{"border":"2","borderColor":"#333333"},"wm.Label":{},"wm.Picture":{},"wm.Spacer":{},"wm.Layers":{"border":"0"},"wm.PageContainer":{},"wm.Panel":{"borderColor":"#333333","border":"0"},"wm.CheckBoxEditor":{},"wm.CurrencyEditor":{},"wm.Text":{"border":"0"},"wm.SelectMenu":{"border":"0"},"wm.dijit.Calendar":{},"wm.DojoGrid":{"border":"1","borderColor":"#999999"},"wm.Control":{"borderColor":"#333333"},"wm.BusyButton":{"border":"1","borderColor":"#333333"},"wm.Checkbox":{"border":"0"},"wm.ColorPicker":{"border":"0"},"wm.Currency":{"border":"0"},"wm.Date":{"border":"0"},"wm.Number":{"border":"0"},"wm.RadioButton":{"border":"0"},"wm.Slider":{"border":"0"},"wm.LargeTextArea":{"border":"0"},"wm.Time":{"border":"0"},"wm.WidgetsJsDialog":{"containerClass":"MainContent","border":"1","borderColor":"#333333"},"wm.FileUploadDialog":{"containerClass":"MainContent","border":"1","borderColor":"#333333"},"wm.MainContentPanel":{"border":"1","borderColor":"#ffffff"},"wm.HeaderContentPanel":{"border":"1","borderColor":"#888888"},"wm.EmphasizedContentPanel":{"border":"0","borderColor":"#333333"},"wm.WidgetList":{},"wm.PopupMenuButton":{}};
dojo.declare("StylingApps", wm.Application, {
	"disableDirtyEditorTracking": false, 
	"eventDelay": 0, 
	"i18n": false, 
	"isSecurityEnabled": false, 
	"main": "Main", 
	"manageHistory": true, 
	"manageURL": false, 
	"name": "", 
	"phoneGapLoginPage": "Login", 
	"phoneMain": "", 
	"projectSubVersion": "Alpha", 
	"projectVersion": 1, 
	"studioVersion": "6.5.2.Release", 
	"tabletMain": "", 
	"theme": "wm_coolblue", 
	"toastPosition": "br", 
	"touchToClickDelay": 500, 
	"touchToRightClickDelay": 1500,
	"widgets": {
		silkIconList: ["wm.ImageList", {"colCount":39,"height":16,"iconCount":90,"url":"lib/images/silkIcons/silk.png","width":16}, {}]
	},
	_end: 0
});

StylingApps.extend({

	_end: 0
});
StylingApps.prototype._css = '/** Selected Tab **/\
html body .wm_coolblue .MainContent button.wmtablayers-tab.wmtablayers-selected,\
html body.wm_coolblue .MainContent button.wmtablayers-tab.wmtablayers-selected{\
background-color: #0772A1;\
}\
/** Selected Tab - Hover state**/\
html body .wm_coolblue .MainContent button.wmtablayers-tab.wmtablayers-selected:hover,\
html body.wm_coolblue .MainContent button.wmtablayers-tab.wmtablayers-selected:hover{\
background-color: #63AFD0;\
}\
/**  Tab **/\
html body .wm_coolblue .MainContent button.wmtablayers-tab.wmtablayers-tab,\
html body.wm_coolblue .MainContent button.wmtablayers-tab.wmtablayers-tab{\
background-color: #3BA3D0;\
}\
/**  Tab - Hover state**/\
html body .wm_coolblue .MainContent button.wmtablayers-tab.wmtablayers-tab:hover,\
html body.wm_coolblue .MainContent button.wmtablayers-tab.wmtablayers-tab:hover{\
background-color: #63AFD0;\
}\
/** Grid Selected Row **/\
.wm_coolblue .MainContent .dojoxGridRow.dojoxGridRowSelected,\
.wm_coolblue .MainContent .dojoxGridRow.dojoxGridRowOdd.dojoxGridRowSelected,\
.wm_coolblue .MainContent .dojoxGridRowSelected td.dojoxGridCell,\
body .wm_coolblue .MainContent .dojoxGridRow.dojoxGridRowSelected,\
body .wm_coolblue .MainContent .dojoxGridRow.dojoxGridRowOdd.dojoxGridRowSelected,\
body .wm_coolblue .MainContent .dojoxGridRowSelected td.dojoxGridCell{\
background-color: #0772A1;\
}\
/** CustomRedTextHorizGradientPanel\
Generated by Studio     **/\
html.WMApp body .CustomRedTextHorizGradientPanel {\
background: -webkit-gradient(linear, left center, right center, from(#3737b9), color-stop(80%,#011d65), to(#011d65));\
background: -moz-linear-gradient(left, #3737b9 0%,#011d65 80%,#011d65 100%);\
background: -o-linear-gradient(left, #3737b9 0%,#011d65 80%,#011d65 100%);\
background: -ms-linear-gradient(left, #3737b9 0%,#011d65 80%,#011d65 100%);\
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#3737b9", endColorstr="#011d65",GradientType=1);\
color: #ff0000;\
text-align: center;\
}\
';

wm.PageContainer.extend({
     generateStateUrl: function(stateObj) {
        if (this.page && this._pageName !== this._initialPageName) {
            stateObj[app && app.pageContainer == this ? "pageName" : this.getRuntimeId()] = this._pageName;
        }
        if (this.page && this.page.generateStateUrl) {
            this.page.generateStateUrl(stateObj);
        }    
    },
   init: function() {
        this.pageLoadedList = [];
        this.inherited(arguments);
        this.createPageLoader();
        this.pageLoadedDeferred = new dojo.Deferred();
        this.updatePageName();
        this._initialPageName = this._pageName;
        if (this.manageURL && app && app.locationState) {
            if (app.locationState[this.getRuntimeId()]) {
                this.pageName = this._pageName = app.locationState[this.getRuntimeId()];
                this._restoringLocationState = true;
            }
            this._locationState = app.locationState;
        }
        if (!this.deferLoad || !this.isAncestorHidden()) this.loadPage(this._pageName);
        //this._connections.push(dojo.connect(window, "onbeforeunload", this, "destroy"));                                                                                                                     
        dojo.addOnWindowUnload(this, 'destroy');
        if (this.subpageEventlist && !this._isDesignLoaded) {
            for (var propName in this.subpageEventlist) {
                if (this[propName] === undefined) {
                    this[propName] = function() {};
                }
            }
        }
        if (this.subpageMethodlist && !this._isDesignLoaded) {
            wm.forEachProperty(this.subpageMethodlist, dojo.hitch(this, function(value, name) {
                this[name] = dojo.hitch(this, function() {
                    var v = value.indexOf(".") == -1 ? value : value.substring(0, value.indexOf("."));
                    var w = this.page.getValueById(v);
                    var f = w[v];
                    f.apply(w, arguments);
                });
            }));
        }
        if (this._isDesignLoaded) {
            this.subscribe("deviceSizeRecalc", dojo.hitch(this, "updatePageName"));
        }
    }
});
wm.Application.extend({
    doRun: function() {
        if (wm.isPhonegap) {
            if (!window["PhoneGap"] && !window["cordova"]) {
                wm.job("doRun", 100, this, "doRun");
                return;
            }
            /* IFrame added by phonegap build server seems to disrupt touch events */
            if (document.body.nextSibling && document.body.nextSibling.tagName == "IFRAME") {
                dojo.destroy(document.body.nextSibling);
            }
            dojo["require"]("build.Gzipped.wm_phonegap_misc", true);
            dojo.forEach(wm.componentFixList._phonegap, function(fix) {
                try {
                    fix();
                } catch (e) {}
            });
        }
        /* Needs to be here rather than postInit because wm.ServiceVariable not loaded in phonegap build until this point */
        if (!this._isDesignLoaded) {
            if (wm.serverTimeOffset === undefined) {
                this.getServerTimeOffset();
            } else {
                wm.currentTimeZone = new Date()
                    .getTimezoneOffset();
            }
            window.setInterval(dojo.hitch(this, "_pollForTimezoneChange"), 10000); //3600000); // once per hour check to see if the timezone has changed
        }
        this.createPageContainer();
        this.domNode = this.appRoot.domNode;
        this.reflow();
        /* Load all app-level components from project.js */
        this.loadComponents(this.constructor.widgets || this.widgets);
        if (!this.debugDialog) {
            if (this._overrideDebugDialog !== undefined) {
                if (this._overrideDebugDialog) this.createDebugDialog();
            } else if (djConfig.isDebug && (wm.device != "phone" || wm.isFakeMobile)) {
                this.createDebugDialog();
            }
        }
        if (!wm.isPhonegap) {
            this.pageDialog = new wm.PageDialog({
                name: "pageDialog",
                owner: this
            });
        }
        if (dojo.isIE <= 8) {
            var button = document.createElement("BUTTON");
            button.style.width = "1px";
            button.style.height = "1px";
            this.domNode.appendChild(button);
        }
        var main;
        if (wm.device == "tablet") {
            main = this.tabletMain;
        } else if (wm.device == "phone") {
            main = this.phoneMain;
        }
        if (!main) {
            main = this.main;
        }
        this.pageContainer._initialPageName = main;
        if (window["PhoneGap"] && this.isSecurityEnabled && this.isLoginPageEnabled && this.phoneGapLoginPage) {
            this.loadPage(this.phoneGapLoginPage);
        } else {
            this.loadPage(main);
        }
        this.hideLoadingIndicator();
    }
});
