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
  function DashboardController($state, toastr, jsonApiReHydrate, apiService, tokenModel, userModel) {

    var vm = this;

    vm.getUsers = getUsers();

    userModel.getCurrent(function(response) {
      vm.user = response;
    });

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

    getUsers();

  }
})();
