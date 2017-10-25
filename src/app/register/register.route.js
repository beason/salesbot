(function() {
  'use strict';

  angular
    .module('salesbot.register')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('register', {
        url: '/register',
        template: '<salesbot-register></salesbot-register>',
        data: {
            tokenTypes: 'guest',
            meta: {
              title: 'Register',
              description: ''
            }

        }
      }).state('registerComplete', {
        url: '/register/complete',
        templateUrl: 'app/register/complete/registerComplete.template.html',
        data: {
            tokenTypes: 'authenticated',
            meta: {
              title: 'Register',
              description: ''
            }

        }
      });

  }

})();
