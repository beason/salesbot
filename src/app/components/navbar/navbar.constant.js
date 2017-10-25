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
              title: 'Register',
              link: 'register'
          },
          {
              title: 'Sign in',
              link: 'signin'
          },
          {
              title: 'Log out',
              link: 'logout'
          }
      ]
    });
})();
