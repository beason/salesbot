(function() {
  'use strict';

  angular
    .module('salesbot.authentication')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
      .state('dashboard', {
        url: '/app/:uid/dashboard',
        template: '<salesbot-dashboard></salesbot-dashboard>',
        data: {
          tokenTypes: ['authenticated'],
          meta: {
            title: 'Dashboard',
            description: ''
          }
        }
      }).state('calendar', {
        url: '/app/:uid/calendar',
        template: '<salesbot-calendar></salesbot-calendar>',
        data: {
          tokenTypes: ['authenticated'],
          meta: {
            title: 'Dashboard',
            description: ''
          }
        }
      });;

  }

})();
