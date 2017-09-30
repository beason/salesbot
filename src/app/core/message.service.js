(function() {
  'use strict';

  angular
    .module('salesbot')
    .factory('messageService', messageService);

  /* @ngInject */
  function messageService($http) {

    var resource = 'user';
    var version = 'v2';
    var url = 'http://127.0.0.1:8000/botman'

    return {
      index: index,
      show: show,
      store: store,
      update: update,
      destroy: destroy
    };

    function index(data) {
      data = angular.isDefined(data) ? data : {};

      var endpoint = url;
      var config = {};

      if (angular.isDefined(data.type)) {
        endpoint = endpoint + '/' + data.type;
      }

      if (angular.isDefined(data.id)) {
        endpoint = endpoint + '/' + data.id;
      }

      if (angular.isDefined(data.resource)) {
        endpoint = endpoint + '/' + data.resource;
      }

      if (angular.isDefined(data.resourceId)) {
        endpoint = endpoint + '/' + data.resourceId;
      }

      if (angular.isDefined(data.subResource)) {
        endpoint = endpoint + '/' + data.subResource;
      }

      if (angular.isDefined(data.params)) {
        _.set(config, 'params', data.params);
      }

      if (angular.isDefined(data.responseType)) {
        _.set(config, 'responseType', data.responseType);
      }

      return $http.get(endpoint, config);
    }

    function show(data) {
      data = angular.isDefined(data) ? data : {};

      var endpoint = url;
      var config = {};

      if (angular.isDefined(data.type)) {
        endpoint = endpoint + '/' + data.type;
      }

      if (angular.isDefined(data.id)) {
        endpoint = endpoint + '/' + data.id;
      }

      if (angular.isDefined(data.resource)) {
        endpoint = endpoint + '/' + data.resource;
      }

      if (angular.isDefined(data.resourceId)) {
        endpoint = endpoint + '/' + data.resourceId;
      }

      if (angular.isDefined(data.subResource)) {
        endpoint = endpoint + '/' + data.subResource;
      }

      if (angular.isDefined(data.subResourceId)) {
        endpoint = endpoint + '/' + data.subResourceId;
      }

      if (angular.isDefined(data.params)) {
        _.set(config, 'params', data.params);
      }

      if (angular.isDefined(data.responseType)) {
        _.set(config, 'responseType', data.responseType);
      }

      return $http.get(endpoint, config);
    }

    function store(data) {
      data = angular.isDefined(data) ? data : {};

      var endpoint = url;

      if (angular.isDefined(data.type)) {
        endpoint = endpoint + '/' + data.type;
      }

      if (angular.isDefined(data.id)) {
        endpoint = endpoint + '/' + data.id;
      }

      if (angular.isDefined(data.resource)) {
        endpoint = endpoint + '/' + data.resource;
      }

      if (angular.isDefined(data.resourceId)) {
        endpoint = endpoint + '/' + data.resourceId;
      }

      return $http.post(endpoint, data.data);
    }

    function update(data) {
      data = angular.isDefined(data) ? data : {};

      var endpoint = url;

      if (angular.isDefined(data.type)) {
        endpoint = endpoint + '/' + data.type;
      }

      if (angular.isDefined(data.id)) {
        endpoint = endpoint + '/' + data.id;
      }

      if (angular.isDefined(data.resource)) {
        endpoint = endpoint + '/' + data.resource;
      }

      if (angular.isDefined(data.resourceId)) {
        endpoint = endpoint + '/' + data.resourceId;
      }

      return $http.put(endpoint, data.data);
    }

    function destroy(data) {
      data = angular.isDefined(data) ? data : {};

      var endpoint = url;

      if (angular.isDefined(data.type)) {
        endpoint = endpoint + '/' + data.type;
      }

      if (angular.isDefined(data.id)) {
        endpoint = endpoint + '/' + data.id;
      }

      if (angular.isDefined(data.resource)) {
        endpoint = endpoint + '/' + data.resource;
      }

      if (angular.isDefined(data.resourceId)) {
        endpoint = endpoint + '/' + data.resourceId;
      }

      return $http.delete(endpoint);
    }

  }
})();
