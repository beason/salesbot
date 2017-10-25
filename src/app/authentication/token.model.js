(function () {
  'use strict';

  angular
    .module('salesbot.authentication')
    .factory('tokenModel', tokenModel);

  /* @ngInject */
  function tokenModel($window, moment, humps, _) {

    var errors = [];
    var token = null;
    var claims = {};

    var model = {
      getPayload: getPayload,
      isValid: isValid,
      tokenType: tokenType,
    };

    return model;

    ////////////

    function getPayload() {
      if (!$window.localStorage.token) {
        return null;
      }
      var array = $window.localStorage.token.split('.');
      return humps.camelizeKeys(angular.fromJson(atob(array[1])));
    }

    function isValid() {

      token = $window.localStorage.getItem('token');

      if (!doesExist()) {
        return false;
      }

      if (!hasCorrectSections()) {
        return false;
      }

      if (!canDecode()) {
        return false;
      }

      if (!hasNotExpired()) {
        return false;
      }

      return true;

    }

    function doesExist() {

      if (token) {
        return true;
      }

      errors.push('token_does_not_exist');
      return false;
    }

    function hasCorrectSections() {
      var parts = token.split('.');

      if (parts.length == 3) {
        return true;
      }

      delete $window.localStorage.token;
      errors.push('incorrect_formatted_token');
      return false;
    }

    function canDecode() {
      var decodedString = atob(token.split('.')[1]);

      try {
        claims = angular.fromJson(decodedString);
      } catch (exception) {
        claims = null;
      }

      if (claims) {
        return true;
      }

      delete $window.localStorage.token;
      errors.push('could_not_be_decode');
      return false;

    }

    function hasNotExpired() {

      var expireAt = moment.unix(claims.exp);

      if (moment().isBefore(expireAt)) {
        return true;
      }

      delete $window.localStorage.token;
      errors.push('token_has_expired');
      return false;

    }

    function tokenType() {
      var payload = getPayload();
      console.log(isValid())
      if (!isValid()) {
        return 'guest';
      }

      return 'authenticated';
    }



  }
})();
