(function() {
  'use strict';

  angular
    .module('salesbot')
    .factory('apiService', apiService);

  /* @ngInject */
  function apiService($http) {

    var url = 'http://127.0.0.1:8000/api'

    return {
      store: store,
      get:get,
      show:show
    };



    function store(data) {
      data = angular.isDefined(data) ? data : {};

      var endpoint = url;

      if (angular.isDefined(data.resource)) {
        endpoint = endpoint + '/' + data.resource;
      }
      return $http.post(endpoint, data.data);
    }

    function get(data) {
      data = angular.isDefined(data) ? data : {};

      var endpoint = url;

      if (angular.isDefined(data.resource)) {
        endpoint = endpoint + '/' + data.resource;
      }
      return $http.get(endpoint);
    }


        function show(data) {
data = angular.isDefined(data) ? data : {};
          var endpoint = url;

          if (angular.isDefined(data.resource)) {
            endpoint = endpoint + '/' + data.resource + '/' + data.id;
          }
          return $http.get(endpoint);
        }

  }
})();
