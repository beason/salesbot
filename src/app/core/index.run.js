(function() {
  'use strict';

  angular
    .module('salesbot')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, $state, tokenModel, $stateParams) {

    $log.debug('runBlock end');

    var eventStart = $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {


     if($rootScope.isLoggedIn) {
          toParams.uid=tokenModel.getPayload().licenceId

     }
   });

   $rootScope.$on('$destroy', eventStart);
  }

})();
