(function() {
  'use strict';

  angular
    .module('salesbot')
    .component('salesbotSidebar', {
      templateUrl: 'app/components/sidebar/sidebar.template.html',
      controller: SidebarController,
      controllerAs: 'vm'
    });

  /* @ngInject */
  function SidebarController($rootScope, userService) {
    var vm = this;


  }
})();
