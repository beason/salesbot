(function () {
  'use strict';
  angular
    .module('salesbot.authentication')
    .config(authenticationInterceptorConfig);

  /* @ngInject */
  function authenticationInterceptorConfig($httpProvider) {
    $httpProvider.interceptors.push('authenticationInterceptor');
  }
})();
