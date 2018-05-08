sap.ui.define([
	"sap/training/anton/controller/BaseController",
	"sap/ui/Device",
	"sap/ui/model/json/JSONModel"
], function(Controller, Device, JSONModel) {
	"use strict";

	return Controller.extend("sap.training.anton.controller.App", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf sap.training.anton.view.App
		 */
			onInit: function() {
				
				if(Device.support.touch){
					this.getView().addStyleClass("sapUiSizeCozy");
				}else{
			    	this.getView().addStyleClass("sapUiSizeCompact");
				}
				
				var oModel = new JSONModel(Device);
				this.getView().setModel(oModel, "device");
		
			}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf sap.training.anton.view.App
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf sap.training.anton.view.App
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf sap.training.anton.view.App
		 */
		//	onExit: function() {
		//
		//	}

	});

});