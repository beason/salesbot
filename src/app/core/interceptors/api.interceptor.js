// (function () {
//   'use strict';
//
//   angular
//     .module('salesbot')
//     .factory('apiInterceptor', apiInterceptor);
//
//   /* @ngInject */
//   function apiInterceptor($rootScope, $q, $window) {
//     var loadingCount = 0;
//
//     return {
//       request: request,
//       response: response,
//       responseError: responseError
//     };
//
//     function request(config) {
//       // config.headers['Platform-Licence'] = $window.location.hostname;
//
//       if (++loadingCount === 1) {
//         $rootScope.$broadcast('loading:progress');
//       }
//
//       return config;
//     }
//
//     function response(response) {
//
//       if (--loadingCount === 0) {
//         $rootScope.$broadcast('loading:finish');
//       }
//       return response;
//     }
//
//     function responseError(response) {
//
//       if (--loadingCount === 0) {
//         $rootScope.$broadcast('loading:finish');
//       }
//       return $q.reject(response);
//     }
//   }
// })();
