(function() {
  'use strict';

  angular.module('deviceTable', []).component('deviceTable', {
    templateUrl: 'assets/javascripts/components/device-table/device-table.html',
    controller: DeviceTableController
  });

  DeviceTableController.$inject = ['deviceFactory'];

  function DeviceTableController(deviceFactory) {
    var vm = this;

    // Scope Variables
    vm.collection = [];

    // Scope Functions


    // Lifecycle Hooks
    vm.$onInit = onInit;

    ////////////////////////

    function onInit() {
      getDeviceCollection();
    }


    function getDeviceCollection() {
      vm.collection = deviceFactory.get();
    }
  }
})();
