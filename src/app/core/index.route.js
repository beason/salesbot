(function() {
  'use strict';

  angular
    .module('salesbot')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('homepage', {
        url: '/',
        template: '<salesbot-homepage></salesbot-homepage>',
        data: {
            meta: {
              title: 'SalesBot',
              description: ''
            }
        }
      });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  }

})();
