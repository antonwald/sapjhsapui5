sap.ui.define([], function(){
	var oFormatter = {};
	
	oFormatter.capitilizeFirstLetter = function(sMessage){
		return sMessage.charAt(0).toUpperCase() + sMessage.slice(1);
	};
	
	return oFormatter;
});