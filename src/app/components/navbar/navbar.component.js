(function() {
  'use strict';

  angular
    .module('salesbot')
    .component('salesbotNavbar', {
      templateUrl: 'app/components/navbar/navbar.template.html',
      controller: NavbarController,
      controllerAs: 'vm'
    });

  /* @ngInject */
  function NavbarController(navmenu) {
      var vm = this;

      vm.nav = navmenu.nav;
  }
})();
