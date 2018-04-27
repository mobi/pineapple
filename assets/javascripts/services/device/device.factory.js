(function() {
  'use strict';

  angular.module('deviceFactory', [])
    .factory('deviceFactory', deviceFactory);

  deviceFactory.$inject = ['$http', '$q'];

  function deviceFactory($http, $q) {
    return {
      get: get
    };

    ////////////////////////

    function get() {
      $http.get('assets/javascripts/fixtures/devices.json')
        .then(getCollectionComplete)
        .catch(getCollectionFailed);
    }

    function getCollectionComplete(response) {
      debugger;
      return $q.resolve(response);
    }

    function getCollectionFailed(error) {
      debugger;
      return $q.reject(error);
    }
  }
})();
