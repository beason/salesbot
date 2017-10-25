(function () {
  'use strict';

  angular
    .module('salesbot')
    .run(eventRun);

  /* @ngInject */
  function eventRun(logoutEvent) {
    logoutEvent.listen();

  }
})();
