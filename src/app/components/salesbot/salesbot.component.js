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
    function SalesbotController($timeout, $scope, messageService) {
        var vm = this;
        vm.showCta = false;
        vm.isLoading = false;
        vm.messages = [];
        vm.placeholdersCount = 0;
        vm.placeholders = ['When are you free?', 'Does this date work for you?', 'Whats your email address?']
        vm.statusMessages = ['checking for availability', 'booking demo', 'sending confirmation']
        vm.statusMessage = vm.statusMessages[vm.placeholdersCount]
        vm.placeholder = vm.placeholders[vm.placeholdersCount];
        $timeout(function() {
            vm.showCta = true;
            $timeout(function() {
                vm.messageHeight = angular.element('.salesbot-message-area').outerHeight();
                console.log(vm.messageHeight)
            }, 200)
        }, 5000);

        vm.sendMessage = sendMessage;
        vm.scrollBottom = scrollBottom;

        function sendMessage(event) {

            if (event.keyCode === 13) {
                vm.isLoading = true;
                vm.messages.push(vm.userMessage)
                // vm.userMessage = '';
                // $timeout(function() {
                //     vm.isLoading = true;
                //
                //     scrollBottom(_.last(vm.messages), true);
                //     $timeout(function() {
                //         vm.placeholdersCount++
                //             vm.placeholder = vm.placeholders[vm.placeholdersCount];
                //         vm.statusMessage = vm.statusMessages[vm.placeholdersCount];
                //         vm.isLoading = false;
                //     }, 5000)
                // })

                var data = {
                    data: {
                        driver: 'web',
                        message: vm.userMessage,
                        userId: 9999999
                    }

                };


                messageService.store(data).then(success, error);

                function success(response) {

                    console.log(response)
                }

                function error() {
                    toastr.error('Unable to get messages');
                        vm.isLoading = false;
                }
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
