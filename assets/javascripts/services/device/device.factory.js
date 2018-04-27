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
      return (
        $http.get('assets/javascripts/fixtures/devices.json')
          .then(getCollectionComplete)
          .catch(getCollectionFailed)
      );
    }

    function getCollectionComplete(response) {
      return $q.resolve(response.data);
    }

    function getCollectionFailed(error) {
      return $q.reject(error);
    }
  }
})();
