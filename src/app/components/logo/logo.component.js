(function() {
  'use strict';

  angular
    .module('salesbot')
    .component('salesbotLogo', {
      templateUrl: 'app/components/logo/logo.template.html',
      controller: LogoController,
      controllerAs: 'vm'
    });

  /* @ngInject */
  function LogoController() {

  }
})();
