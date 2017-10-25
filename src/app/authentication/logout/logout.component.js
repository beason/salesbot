(function () {
  'use strict';

  angular
    .module('salesbot.authentication')
    .component('salesbotLogout', {
      controller: LogoutController,
      controllerAs: 'vm'
    });

  /* @ngInject */
  function LogoutController($state, logoutEvent) {
    logoutEvent.broadcast();
    $state.go('signin');

  }
})();
