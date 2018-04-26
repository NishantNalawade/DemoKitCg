sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/ui/model/Filter'
], function(Controller,Filter) {
	"use strict";

	return Controller.extend("com.sap.cg.demokit.DemoKitCg.controller.DeviceManagement", {
			onSearch : function (oEvt) {

			// add filter for search
			var aFilters = [];
			var sQuery = oEvt.getSource().getValue();
			if (sQuery && sQuery.length > 0) {
				var filter = new Filter("deviceName", sap.ui.model.FilterOperator.Contains, sQuery);
				aFilters.push(filter);
			}

			// update list binding
			var list = this.getView().byId("deviceList");
			var binding = list.getBinding("items");
			binding.filter(aFilters, "Application");
		},
		iconFormatter:function(deviceType){
			var icon="sap-icon://product";
				if(deviceType === "cooler"){
				icon="sap-icon://fridge";
			}
			else if(deviceType === "dispenser")
			{
			icon="sap-icon://lab";	
			}
			return icon;
		
		},
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.sap.cg.demokit.DemoKitCg.view.DeviceManagementNew
		 */
		onInit: function() {
			var oModel = new sap.ui.model.json.JSONModel({});
			var that = this;
			$.ajax({
				url: "model/deviceModel.json",
				method: "GET",
				success: function(response) {
					oModel.setData(response);
					var list = that.getView().byId("deviceList");
					list.setModel(oModel);
					console.log(oModel);
				},
				error: function(error) {
					console.log(error);
				}

			});
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.sap.cg.demokit.DemoKitCg.view.DeviceManagementNew
		 */
			onBeforeRendering: function() {
		
			},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.sap.cg.demokit.DemoKitCg.view.DeviceManagementNew
		 */
			onAfterRendering: function() {
		
			},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.sap.cg.demokit.DemoKitCg.view.DeviceManagementNew
		 */
			onExit: function() {
		
			}

	});

});