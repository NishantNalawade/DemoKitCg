sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"com/sap/cg/demokit/DemoKitCg/model/formatter",
	'sap/ui/model/Filter'
], function(Controller,formatter,Filter) {
	"use strict";

	return Controller.extend("com.sap.cg.demokit.DemoKitCg.controller.TenantManager", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.sap.cg.demokit.DemoKitCg.view.TenantManager
		 */
			formatter:formatter,
				onSearch : function (oEvt) {

			// add filter for search
			var aFilters = [];
			var sQuery = oEvt.getSource().getValue();
			if (sQuery && sQuery.length > 0) {
				var filter = new Filter("name", sap.ui.model.FilterOperator.Contains, sQuery);
				aFilters.push(filter);
			}

			// update list binding
			var list = this.getView().byId("tenantList");
			var binding = list.getBinding("items");
			binding.filter(aFilters, "Application");
		},
			onInit: function() {
				var oModel=new sap.ui.model.json.JSONModel();
				$.ajax({
					url:"model/tenant.json",
					method:"GET",
					success : function(data) {
						oModel.setData(data);
					},
					error : function(e) {
						//error code
					}
				});
				this.getView().setModel(oModel);
			},
			addTenant:function(oEvent){
				// var oTab=sap.ui.getCore().byId("tenant_tab");
				// oTab.destroyContent();
				
				// oTab.addContent();
			}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.sap.cg.demokit.DemoKitCg.view.TenantManager
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.sap.cg.demokit.DemoKitCg.view.TenantManager
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.sap.cg.demokit.DemoKitCg.view.TenantManager
		 */
		//	onExit: function() {
		//
		//	}

	});

});