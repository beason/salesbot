(function() {
  'use strict';

  angular
    .module('salesbot')
    .component('salesbotHomepage', {
      templateUrl: 'app/components/homepage/homepage.template.html',
      controller: HomepageController,
      controllerAs: 'vm'
    });

  /* @ngInject */
  function HomepageController() {
    console.log('hello')
  }
})();
