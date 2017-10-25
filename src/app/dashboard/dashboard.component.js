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

    console.log(tokenModel.getPayload())

  }
})();
