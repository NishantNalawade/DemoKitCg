sap.ui.define([], function() {
	"use strict";
	return {
		infoStatus: function(sStatus) {
			//var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
			switch (sStatus) {
				case "inuse":
					return "Success"; //resourceBundle.getText("invoiceStatusA");
				case "inprogress":
					return "Warning"; //resourceBundle.getText("invoiceStatusB");
				case "notinuse":
					return "Error"; //resourceBundle.getText("invoiceStatusC");
				case "notworking":
					return "Error"; //resourceBundle.getText("invoiceStatusC");
				default:
					return sStatus;
			}
		},
		infoText: function(sStatus) {
			//var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
			switch (sStatus) {
				case "inuse":
					return "In Use"; //resourceBundle.getText("invoiceStatusA");
				case "inprogress":
					return "Setup in progress"; //resourceBundle.getText("invoiceStatusB");
				case "notinuse":
					return "Not In Use"; //resourceBundle.getText("invoiceStatusC");
				case "notworking":
					return "Not Working"; //resourceBundle.getText("invoiceStatusC");
				default:
					return sStatus;
			}
		}
	};
});