(function () {
  'use strict';
  angular
    .module('salesbot')
    .config(ngMetaConfig);

  /* @ngInject */
  function ngMetaConfig(ngMetaProvider) {
      ngMetaProvider.useTitleSuffix(true);
      ngMetaProvider.setDefaultTitleSuffix(' | Sales stuff');
  }
})();
