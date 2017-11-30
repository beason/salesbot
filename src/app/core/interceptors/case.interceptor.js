(function () {
  'use strict';

  angular
    .module('salesbot')
    .factory('caseInterceptor', caseInterceptor);

  /* @ngInject */
  function caseInterceptor(humps, _) {
    return {
      request: requestDecamelize,
      response: responseCamelize
    };

    function requestDecamelize(config) {

      var file = _.get(config.data, 'file');

      if (angular.isObject(config.data)) {
        config.data = humps.decamelizeKeys(config.data);
      }

      if (file) {
        config.data.file  = file;
      }

      return config;
    }

    function responseCamelize(response) {
      if (angular.isObject(response.data) && response.headers('Content-Type') === 'application/json') {
        response.data = humps.camelizeKeys(response.data);
      }

      return response;
    }
  }
})();
