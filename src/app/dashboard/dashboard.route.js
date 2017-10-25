(function() {
  'use strict';

  angular
    .module('salesbot.authentication')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        template: '<salesbot-dashboard></salesbot-dashboard>',
        data: {
          tokenTypes: ['authenticated'],
            meta: {
              title: 'Dashboard',
              description: ''
            }

        }
      });

  }

})();
