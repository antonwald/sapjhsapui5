sap.ui.define(["jquery.sap.global", 
               "sap/ui/core/UIComponent", 
               "sap/ui/model/json/JSONModel"
               ],
	function(jQuery, UIComponent, JSONModel) {
		"use strict";

		var Component = UIComponent.extend("sap.training.anton.Component", {
			metadata: {
				manifest: "json"
			},

			init: function() {
				// call the base component's init function
				UIComponent.prototype.init.apply(this, arguments);

				// router
				this.getRouter().initialize();
				
				// create model
				var oModel = new JSONModel();
				// set data
				var sNamespacePath = jQuery.sap.getModulePath("sap.training.anton");
				var sURL = sNamespacePath + "/model/data.json";
				oModel.loadData(sURL);
				// connect to UI
				this.setModel(oModel);
				
				
			}

		});
		return Component;
	});