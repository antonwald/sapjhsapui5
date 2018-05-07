sap.ui.define(["jquery.sap.global", "sap/ui/core/UIComponent"],
	function(jQuery, UIComponent) {
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
			}

		});
		return Component;
	});