(function() {
  'use strict';

  angular
    .module('salesbot')
    .component('salesbotHeader', {
      templateUrl: 'app/components/header/header.template.html',
      controller: HeaderController,
      controllerAs: 'vm'
    });

  /* @ngInject */
  function HeaderController($rootScope, store, $scope) {
    var vm = this;

    $scope.$watch('$root.isLoggedIn', function(newValue) {
      console.log(newValue)
      if(newValue) {
          vm.user = store.get('user');

      } else {
        vm.user = {};
        

      }

    })




  }
})();
