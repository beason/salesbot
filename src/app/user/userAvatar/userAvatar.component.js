(function() {
  'use strict';

  angular
    .module('salesbot')
    .component('userAvatar', {
      templateUrl: 'app/user/userAvatar/userAvatar.template.html',
      controller: UserAvatarController,
      controllerAs: 'vm',
      bindings: {
        user: '=',
        size: '@'
      }
    });

  /* @ngInject */
  function UserAvatarController() {
    var vm = this;
    console.log(vm.size)
    vm.initials = _.first(vm.user.firstName) + _.first(vm.user.surname);
    console.log(vm.initials)
  }
})();
