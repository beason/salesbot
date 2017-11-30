(function () {
  'use strict';
  angular
    .module('salesbot')
    .config(interceptorConfig);

  /* @ngInject */
  function interceptorConfig($httpProvider) {
    $httpProvider.interceptors.push('caseInterceptor');
    $httpProvider.interceptors.push('dateInterceptor');
    // $httpProvider.interceptors.push('apiInterceptor');
  }
})();
