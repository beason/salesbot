(function() {
  'use strict';

  angular
    .module('salesbot')
    .constant('navmenu', {
      nav: [
          {
              title: 'About Us',
              link: 'about'
          },
          {
              title: 'Pricing',
              link: 'pricing'
          },
          {
              title: 'Log In',
              link: 'login'
          }
      ]
    });
})();
