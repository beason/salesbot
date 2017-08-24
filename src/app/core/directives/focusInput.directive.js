(function() {
  'use strict';

  angular
    .module('salesbot')
    .directive('focusInput', focusInput);

  /* @ngInject */
  function focusInput($timeout) {
    var directive = {
      restrict: 'A',
      link: link
    };

    return directive;

    function link(scope, element, attr) {
      scope.$watch(attr.focusInput, function(e) {


          $timeout(function() {
            element[0].focus();

        });
      });
    }
  }
})();
