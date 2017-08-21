(function() {
    'use strict';

    angular
        .module('salesbot')
        .component('salesbotSalesbot', {
            templateUrl: 'app/components/salesbot/salesbot.template.html',
            controller: SalesbotController,
            controllerAs: 'vm'
        });

    /* @ngInject */
    function SalesbotController($timeout,$scope) {
        var vm = this;
        vm.showCta = false;
        vm.messages = [];
        vm.placeholder = "When would you like to book?"
        $timeout(function() {
            vm.showCta = true;
            $timeout(function() {
                vm.messageHeight = angular.element('.salesbot-message-area').outerHeight();
                console.log(vm.messageHeight)
            },200)
        }, 5000);

        vm.sendMessage = sendMessage;
        vm.scrollBottom = scrollBottom;
        function sendMessage(event) {
            if (event.keyCode === 13){

                vm.messages.push(vm.userMessage)
                vm.userMessage = '';
                $timeout(function() {
          scrollBottom(_.last(vm.messages), true);
        })
            }


        }

        function scrollBottom(hash, animate) {
      if (animate) {
        angular.element('.salesbot-message-area').animate({
          scrollTop: angular.element('.salesbot-message-area')[0].scrollHeight
        });
      } else {
        angular.element('.salesbot-message-area').scrollTop(angular.element('.salesbot-message-area')[0].scrollHeight);
      }
    }


    }
})();
