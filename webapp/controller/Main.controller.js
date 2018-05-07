sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	//	 "sap/training/anton/myLib/Formatter"
	"../myLib/Formatter",
	"sap/m/MessageToast"
], function(Controller, MessageBox, Formatter, MessageToast) {
	"use strict";

	return Controller.extend("sap.training.anton.controller.Main", {

		showMessage: function() {
			//	jQuery.sap.require("sap.m.MessageBox");

			sap.ui.require(["sap/m/MessageBox", "sap/training/anton/myLib/Formatter"], function(MessageBox, Formatter) {
				MessageBox.show(Formatter.capitilizeFirstLetter("hello, Jungheinrich AG"), {
					title: Formatter.capitilizeFirstLetter("success")
				});
			});
			MessageToast.show("Message before Message Box");

		},
		
		navToDetail: function(){
			
			var oComponent = this.getOwnerComponent();
			var oRouter = oComponent.getRouter();
			
			oRouter.navTo("detail");
			
		}

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf sap.training.anton.view.Main
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf sap.training.anton.view.Main
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf sap.training.anton.view.Main
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf sap.training.anton.view.Main
		 */
		//	onExit: function() {
		//
		//	}

	});

});