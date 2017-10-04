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
          messages: '=',
          isFull: '='
      }
    });

  /* @ngInject */
  function MessageItemController(messageService) {
    var vm = this;
    console.log(vm.message);

    vm.bookDemo = bookDemo;
    function bookDemo() {
        console.log('hi')
        var data = {
            data: {
                driver: 'web',
                message: 'book a demo',
                userId: 9999999
            }

        };


        messageService.store(data).then(success, error);

        function success(response) {
vm.isLoading = false;
console.log(response)
vm.messages.push(response.data.messages[0].text)
console.log(vm.messages)
            console.log(response)
        }

        function error() {
            toastr.error('Unable to get messages');
                vm.isLoading = false;
        }
    }
  }
})();
