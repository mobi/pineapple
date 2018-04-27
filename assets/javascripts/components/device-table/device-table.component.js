(function() {
  'use strict';

  angular.module('deviceTable', []).component('deviceTable', {
    templateUrl: 'assets/javascripts/components/device-table/device-table.html',
    controller: DeviceTableController
  });

  DeviceTableController.$inject = [];

  function DeviceTableController() {
    var vm = this;

    // Scope Variables


    // Scope Functions


    // Lifecycle Hooks
    vm.$onInit = onInit;

    ////////////////////////

    function onInit() {
      debugger;
    }
  }
})();
