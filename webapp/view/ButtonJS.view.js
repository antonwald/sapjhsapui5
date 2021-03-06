sap.ui.jsview("sap.training.anton.view.ButtonJS", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf sap.training.anton.view.ButtonJS
	 */
	getControllerName: function() {
		return "sap.training.anton.controller.ButtonJS";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf sap.training.anton.view.ButtonJS
	 */
	createContent: function(oController) {
		
		var oButton = new sap.m.Button(this.createId("idButton"), {
			text: "{i18n>jsButtonText}"
		});
		// bind - overwrite context
		//oButton.attachPress(oController.sayHello.bind(oController));
		oButton.attachPress(oController.sayHello, oController);

		return oButton;
	}

});