sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
    function (Controller) {
        "use strict";
        function myCheck() {

            var inputEmployeed = this.byId("imputEmployeed");
            var valuesEmployeed = inputEmployeed.getValue();
            if (valuesEmployeed.length >= 6) {
                //inputEmployeed.setDescription("OK");
                this.byId("labelCountry").setVisible(true);
                this.byId("slCountry").setVisible(true);

            } else {
                //inputEmployeed.setDescription("Error");
                 this.byId("labelCountry").setVisible(false);
                this.byId("slCountry").setVisible(false);
            }

        }
        return Controller.extend("logaligroup.employees.controller.MainView", {
            onInit: function () {

            },
            onValidate: myCheck
        });
    });
