(function() {
  'use strict';

  angular
    .module('salesbot.authentication')
    .component('salesbotSignin', {
      templateUrl: 'app/authentication/signin/signin.template.html',
      controller: SigninController,
      controllerAs: 'vm'
    });

  /* @ngInject */
  function SigninController($state, toastr, jsonApiReHydrate, apiService, store, userService) {

    var vm = this;
    vm.hasError = false;

    vm.submit = submit;

    function submit() {

      var data = {
       resource: 'authenticate',
       data: vm.signinModel
     };

     apiService.store(data).then(success, error);

     function success(response) {

       $state.go('dashboard');
     }
     function error(response) {
        vm.hasError = true;
     }
    }

  }
})();
