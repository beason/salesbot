(function() {
  'use strict';

  angular
    .module('salesbot')
    .component('salesbotHeader', {
      templateUrl: 'app/components/header/header.template.html',
      controller: HeaderController,
      controllerAs: 'vm'
    });

  /* @ngInject */
  function HeaderController() {
    console.log('hellodds')
  }
})();
