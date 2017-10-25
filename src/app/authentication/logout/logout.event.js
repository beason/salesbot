(function () {
  'use strict';

  angular
    .module('salesbot.authentication')
    .factory('logoutEvent', logoutEvent);

  /* @ngInject */
  function logoutEvent($rootScope, $window) {

    var event = {
      broadcast: broadcast,
      listen: listen
    };

    return event;

    function broadcast() {
      var event = $rootScope.$broadcast('logout');
      $rootScope.$on('$destroy', event);


    }

    function listen() {

      var event = $rootScope.$on('logout', callback);
      $rootScope.$on('$destroy', event);

    }

    function callback() {
      
      delete $window.localStorage.token;
    }
  }
})();
