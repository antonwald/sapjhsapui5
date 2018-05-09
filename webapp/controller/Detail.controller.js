sap.ui.define([
	"sap/training/anton/controller/BaseController",
	"sap/ui/core/routing/History",
	"sap/m/MessagePopover",
	"sap/m/MessagePopoverItem",
	"sap/ui/model/json/JSONModel"
], function(Controller, History, MessagePopover, MessagePopoverItem, JSONModel) {
	"use strict";

	return Controller.extend("sap.training.anton.controller.Detail", {
		
		navigateBack: function() {

			var sPrevious = History.getInstance().getPreviousHash();

			if (sPrevious) {
				// browser back 
				history.go(-1);
			} else {
				/*@type sap.ui.core.UIComponent */
				//var oComponent = this.getOwnerComponent();
				this.getRouter().navTo("main", {}, true);
			}

		},

		onMessagesButtonPress: function(oEvent) {
			var oMessagesButton = oEvent.getSource();

			if (!this._messagePopover) {
				this._messagePopover = new MessagePopover({
					items: {
						path: "message>/",
						template: new MessagePopoverItem({
							description: "{message>description}",
							type: "{message>type}",
							title: "{message>message}"
						})
					}
				});
				oMessagesButton.addDependent(this._messagePopover);
			}
			this._messagePopover.toggle(oMessagesButton);
		},

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf sap.training.anton.view.Detail
		 */
		onInit: function() {
			this.getRouter().getRoute("detailWithParam").attachPatternMatched(this._onObjectMatched, this);
			
			var oViewState = {
				editMode: false
			};
			var oViewModel = new JSONModel();
			oViewModel.setData(oViewState);
			
			this.getView().setModel(oViewModel, "view");
			
		},

		_onObjectMatched: function(oEvent) {

			var param = oEvent.getParameter("arguments");

			if (param && param.flight) {
				var sPath = "/data/" + param.flight;
				this.getView().bindElement(sPath);
			}

		},

		onSave: function() {

			var bValidated = true;

			var aControls = this.getView().getControlsByFieldGroupId("fgFlight");
			aControls.forEach(function(oControl) {
				//do validation
				var oControlBinding = oControl.getBinding("value");
				// get the formatted value
				var oExternalValue = oControlBinding.getExternalValue();
				//oControl.setProperty("value", oExternalValue);
				// get the actual, internal value
				var oInternalValue = oControlBinding.getInternalValue();
				// trigger the actual validation
				try {
					oControlBinding.getType().validateValue(oInternalValue);
				} catch (oValidateException) {

					bValidated = false;

					var oMessageManager = sap.ui.getCore().getMessageManager();
					var oMessageProcessor = new sap.ui.core.message.ControlMessageProcessor();
					//oMessageManager.unregisterMessageProcessor(oMessageProcessor);
					//oMessageManager.removeAllMessages()

					oMessageManager.registerMessageProcessor(oMessageProcessor);
					var oMessage = new sap.ui.core.message.Message({
						message: oValidateException.message,
						type: sap.ui.core.MessageType.Error,
						target: oControl.getId() + "/value",
						processor: oMessageProcessor
					});
					oMessageManager.addMessages(oMessage);

					oControl.attachLiveChange(function() {
						oMessageManager.removeMessages(oMessage);
					});
				}
			});

			if (bValidated) {
				// do submit
			}
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf sap.training.anton.view.Detail
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf sap.training.anton.view.Detail
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf sap.training.anton.view.Detail
		 */
		//	onExit: function() {
		//
		//	}

	});

});