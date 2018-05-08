sap.ui.define([], function(){
	var oFormatter = {};
	
	oFormatter.capitilizeFirstLetter = function(sMessage){
		return sMessage.charAt(0).toUpperCase() + sMessage.slice(1);
	};
	
	oFormatter.carrName = function(sCarrId){
			
			switch(sCarrId) {
				case "LH":
					return "Lufthansa";
				default:
				    return sCarrId;
			}
			
	};
	
	return oFormatter;
});