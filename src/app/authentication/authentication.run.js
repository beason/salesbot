(function () {
  'use strict';

  angular
    .module('salesbot.authentication')
    .run(authenticationRun);

  /* @ngInject */
  function authenticationRun($rootScope, $state, tokenModel, _) {

    var event = $rootScope.$on('$stateChangeStart', accessControl);

    $rootScope.$on('$destroy', event);

    function accessControl(event, next, nextParams) {

      var tokenTypes = _.get(next, 'data.tokenTypes');




      var tokenType = tokenModel.tokenType();
  

      $rootScope.isLoggedIn = (tokenType === 'authenticated');


      if (tokenType === 'guest' && !_.includes(tokenTypes, tokenType)) {


      $state.go('signin')
      }

      if (tokenType === 'authenticated' && !_.includes(tokenTypes, tokenType)) {

        $state.go('dashboard')
      }


      if (tokenType === 'authenticated' && _.includes(tokenTypes, tokenType)) {
      return;
      }

      if (tokenType === 'guest' && _.includes(tokenTypes, tokenType)) {
      return;
      }

      event.preventDefault();

    }
  }
})();
