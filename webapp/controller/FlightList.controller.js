sap.ui.define([
	"sap/training/anton/controller/BaseController",
	"sap/training/anton/myLib/Formatter"
], function(Controller, Formatter) {
	"use strict";

	return Controller.extend("sap.training.anton.controller.FlightList", {
      
        formatter: Formatter,
        
        onItemPressed: function(oEvent){
        	
         var oContext =	oEvent.getSource().getBindingContext();
         var sPath = oContext.getPath();
         
         //var oForm = this.getView().byId("idForm");
         //oForm.bindElement(sPath);
         var index = sPath.split("/").pop();
         this.getRouter().navTo("detailWithParam", {flight: index});        
         
        	
        }
        
        // onTableItemPressed: function(oEvent){
        // 	var oContext =	oEvent.getParameter("listItem").getBindingContext();
        // 	var sPath = oContext.getPath();
         
        // 	var oForm = this.getView().byId("idForm");
        // 	oForm.bindElement(sPath);
        // }


		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf sap.training.anton.view.FlightList
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf sap.training.anton.view.FlightList
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf sap.training.anton.view.FlightList
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf sap.training.anton.view.FlightList
		 */
		//	onExit: function() {
		//
		//	}

	});

});