(function() {
  'use strict';

  angular
    .module('salesbot.authentication')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('signin', {
        url: '/sign-in',
        template: '<salesbot-signin></salesbot-signin>',
        data: {
            tokenTypes: 'guest',
            meta: {
              title: 'Signin',
              description: ''
            }

        }
      }).state('logout', {
      url: '/logout',
      template: '<salesbot-logout></salesbot-logout>',
      data: {
        tokenTypes: 'authenticated',
        meta: {
          title: 'Logout',
          description: ''
        }
      }
    });

  }

})();
