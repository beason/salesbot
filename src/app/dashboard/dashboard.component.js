(function() {
  'use strict';

  angular
    .module('salesbot.dashboard')
    .component('salesbotDashboard', {
      templateUrl: 'app/dashboard/dashboard.template.html',
      controller: DashboardController,
      controllerAs: 'vm'
    });

  /* @ngInject */
  function DashboardController($state, toastr, jsonApiReHydrate, apiService, tokenModel) {

    var vm = this;
    vm.token = tokenModel.getPayload()
    vm.getUser = getUser;
    vm.getUsers = getUsers;

    function getUser() {
      var data = {
        resource: 'user',
        id: vm.token.sub
      };

      apiService.show(data).then(success, error);

      function success(response) {
        vm.user = response.data.user;
      }

      function error(response) {

      }
    }

    function getUsers() {
      var data = {
        resource: 'user'
      };

      apiService.get(data).then(success, error);

      function success(response) {
        vm.users = response.data.users;

      }

      function error(response) {

      }
    }
    vm.getUser();
    vm.getUsers();

  }
})();
