(function() {
  'use strict';

  angular.module('deviceFactory', [])
    .factory('deviceFactory', deviceFactory);

  deviceFactory.$inject = ['$http'];

  function deviceFactory($http) {
    return {
      get: get
    };

    ////////////////////////

    function get() {
      return (
        $http.get('/fixtures/devices.json').then(getCollectionComplete).catch(getCollectionFailed)
      );
    }

    function getCollectionComplete(data) {
      return data;
    }
  }
})();
