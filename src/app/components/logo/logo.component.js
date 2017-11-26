(function() {
  'use strict';

  angular
    .module('salesbot')
    .component('salesbotLogo', {
      templateUrl: 'app/components/logo/logo.template.html',
      controller: LogoController,
      controllerAs: 'vm',
      bindings: {
        size: '@',
        isLink: '@'
      }
    });

  /* @ngInject */
  function LogoController() {
    var vm = this;

  }
})();
