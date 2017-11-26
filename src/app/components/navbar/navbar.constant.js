(function() {
  'use strict';

  angular
    .module('salesbot')
    .constant('navmenu', {
      nav: [
          {
              title: 'About Us',
              link: 'about',
              state: false
          },
          {
              title: 'Pricing',
              link: 'pricing',
              state: false
          },
          {
              title: 'Contact us',
              link: 'contact',
              state: false
          },
          {
              title: 'Users',
              link: 'users',
              state: true
          },
          {
              title: 'Accounts',
              link: 'accounts',
              state: true
          }
      ]
    });
})();
