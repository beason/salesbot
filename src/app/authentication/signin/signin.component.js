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
  function SigninController($state, toastr, jsonApiReHydrate, apiService) {

    var vm = this;

    vm.signinModel = {
      email: 'hi.there@bmjeason.co.uk',
      password: '1234567'
    };

    vm.submit = submit;

    function submit() {
      var data = {
       resource: 'authenticate',
       data: vm.signinModel
     };

     apiService.store(data).then(success, error);

     function success(response) {
       console.log('hi')
       $state.go('dashboard');
     }
     function error(response) {

     }
    }

  }
})();
