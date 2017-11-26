(function() {
  'use strict';

  angular
    .module('salesbot')
    .factory('userService', userService);

  /* @ngInject */
  function userService($http, store, tokenModel) {

    var url = 'http://127.0.0.1:8000/api/user'



    return {
      getUser: getUser
    };



    function getUser(id) {
      var endpoint = url;

      return $http.get(endpoint + '/' + id);


    }

  }
})();
