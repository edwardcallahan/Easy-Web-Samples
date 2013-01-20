
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
