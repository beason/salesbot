(function () {
  'use strict';

  angular
    .module('salesbot.authentication')
    .factory('authenticationInterceptor', authenticationInterceptor);

  /* @ngInject */
  function authenticationInterceptor($window, $q, API, tokenModel) {
    return {
      'request': function (config) {

        if ($window.localStorage.token && tokenModel.isValid()) {
          config.headers[API.tokenName] = $window.localStorage.token;
        }

        return config;
      },

      'response': function (response) {

        if (response.headers('content-type') === 'application/json') {
console.log(response.headers())
          var token = response.headers(API.tokenName);
          console.log(response.headers(API.tokenName));
          if (token !== null) {
            $window.localStorage.token = token;
          }
        }

        return response;
      },
      'responseError': function (rejection) {

        if (rejection.status == 401) {
          // logoutEvent.broadcast();
        }

        return $q.reject(rejection);
      }
    };
  }
})();
