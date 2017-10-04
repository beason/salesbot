(function() {
  'use strict';

  angular
    .module('salesbot')
    .component('salesbotUserIcon', {
      templateUrl: 'app/components/userIcon/userIcon.template.html',
      controller: UserIconController,
      controllerAs: 'vm'
    });

  /* @ngInject */
  function UserIconController() {
    console.log('hi')
  }
})();
