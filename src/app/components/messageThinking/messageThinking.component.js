(function() {
  'use strict';

  angular
    .module('salesbot')
    .component('salesbotMessageThinking', {
      templateUrl: 'app/components/messageThinking/messageThinking.template.html',
      controller: MessageThinkingController,
      controllerAs: 'vm',
      bindings: {
          message: '=',
          isLoading: '='
      }
    });

  /* @ngInject */
  function MessageThinkingController() {
    var vm = this;
    console.log(vm.message);
  }
})();
