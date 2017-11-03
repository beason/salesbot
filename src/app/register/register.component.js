(function() {
  'use strict';

  angular
    .module('salesbot.register')
    .component('salesbotRegister', {
      templateUrl: 'app/register/register.template.html',
      controller: RegisterController,
      controllerAs: 'vm'
    });

  /* @ngInject */
  function RegisterController($state, toastr, jsonApiReHydrate, apiService, $location) {

    var vm = this;

    vm.registerModel = {};
    vm.location = $location;
    console.log(vm.location.search().invite)

    if(vm.location.search().invite) {
      vm.registerModel.licence_id = vm.location.search().invite;
    }

    console.log( vm.registerModel)
    vm.submit = submit;

    function submit() {
      var data = {
       resource: 'register',
       data: vm.registerModel
     };





     apiService.store(data).then(success, error);

     function success(response) {
       console.log(response)
       $state.go('registerComplete');
     }
     function error(response) {
       console.log(response)

     }
    }

  }
})();
