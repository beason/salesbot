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
              title: 'Register',
              link: 'register',
              state: false
          },
          {
              title: 'Sign in',
              link: 'signin',
              state: false
          },
          {
              title: 'Log out',
              link: 'logout',
              state: true
          }
      ]
    });
})();
