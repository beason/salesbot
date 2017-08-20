(function() {
  'use strict';

  angular
    .module('salesbot')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
