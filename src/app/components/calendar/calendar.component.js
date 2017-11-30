(function() {
  'use strict';

  angular
    .module('salesbot')
    .component('salesbotCalendar', {
      templateUrl: 'app/components/calendar/calendar.template.html',
      controller: CalendarController,
      controllerAs: 'vm'
    });

  /* @ngInject */
  function CalendarController(userModel, $state) {
    var vm = this;
    vm.state = $state;

    userModel.getCurrent(function(response) {
      vm.user = response;
    });


  }
})();
