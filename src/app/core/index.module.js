(function() {
  'use strict';

  angular
    .module('salesbot', [
      'ngAnimate',
      'ngCookies',
      'ngTouch',
      'ngSanitize',
      'ngMessages',
      'ngAria',
      'ngMeta',
      'ui.router',
      'ui.bootstrap',
      'toastr',
      'salesbot.register',
      'salesbot.authentication',
      'salesbot.dashboard'
    ]);
})();
