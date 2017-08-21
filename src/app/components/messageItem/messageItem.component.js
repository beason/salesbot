(function() {
  'use strict';

  angular
    .module('salesbot')
    .component('salesbotMessageItem', {
      templateUrl: 'app/components/messageItem/messageItem.template.html',
      controller: MessageItemController,
      controllerAs: 'vm',
      bindings: {
          user: '@',
          message: '@',
          isFull: '='
      }
    });

  /* @ngInject */
  function MessageItemController() {
    var vm = this;
    console.log(vm.message);
  }
})();
