(function () {
  'use strict';

  angular
    .module('salesbot')
    .run(ngMeta);

  /* @ngInject */
  function ngMeta(ngMeta) {
    // Initialize ngMeta
    ngMeta.init();

  }
})();
