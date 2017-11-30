(function () {
  'use strict';

  angular
    .module('salesbot')
    .factory('dateInterceptor', dateInterceptor);

  /* @ngInject */
  function dateInterceptor(moment, _) {

    var keyBlacklist = ['meta','validation'];

    return {
      request: request,
      response: response
    };

    function request(config) {
      if (config.headers['Content-Type'] === 'application/json;charset=utf-8') {
        traverseRequest(config.data, dateToString);
      }
      return config;
    }

    function response(response) {
      if (response.headers('Content-Type') === 'application/json') {
        traverse(response.data, stringToDate);
      }
      return response;
    }

    function traverse(o, func) {
      if (canWrite(o)) {
        return;
      }
      for (var i in o) {
        if (_.includes(keyBlacklist, i)) {
          continue;
        }
        if (angular.isObject(o[i]) || o[i] instanceof Array) {
          traverse(o[i], func);
        } else {
          o[i] = o[i] === angular.isUndefined ? null : o[i];

          o[i] = func(i, o[i]);
        }
      }
    }

    function traverseRequest(o, func) {
      if (canWrite(o)) {
        return;
      }
      for (var i in o) {
        if (_.includes(keyBlacklist, i)) {
          continue;
        }
        if (!(o[i] instanceof Date) && (angular.isObject(o[i]) || o[i] instanceof Array)) {
          traverse(o[i], func);
        } else {
          o[i] = o[i] === angular.isUndefined ? null : o[i];

          o[i] = func(i, o[i]);
        }
      }
    }

    function stringToDate(key, data) {
      if (key.slice(-3) !== '_at' && key.slice(-3) !== '_on') {
        return data;
      }

      if (moment(data).isValid()) {
        return moment(data, moment.ISO_8601).toDate();
      } else {
        return null;
      }
    }

    function dateToString(key, data) {
      if (key.slice(-3) !== '_at' && key.slice(-3) !== '_on') {
        return data;
      }

      // var format = key.slice(-3) === '_at' ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';

      if (moment(data).isValid()) {
        return moment(data).format();
      } else {
        return null;
      }
    }

    function canWrite(obj) {
      try {
        var key = Object.keys(obj)[0];
        obj[key] = obj[key];
        return true;
      } catch(e) {
        if (!(e instanceof TypeError)) {
          // Continue throwing non-TypeError errors up the chain
          throw e;
        }
        return false
      }
    }
  }
})();
