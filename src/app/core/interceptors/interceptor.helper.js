(function () {
  'use strict';

  angular
    .module('salesbot')
    .factory('interceptorHelper', interceptorHelper);

  /* @ngInject */
  function interceptorHelper() {
    return {
      traverse: traverse
    };

    function traverse(object, mutation, comparison) {

      var comparisonMethod = getComparisonMethod(comparison);
      for (var i in object) {
        if  (object.hasOwnProperty(i) && comparisonMethod(object[i])) {
          traverse(object[i], mutation, comparison);
        } else {
          object[i] = angular.isUndefined(object[i]) ? null : object[i];
          object[i] = mutation(i, object[i]);
        }
      }
    }

    function getComparisonMethod(comparison) {

      if(angular.isFunction(comparison)) {
        return comparison;
      }

      if(angular.isUndefined(comparison)) {
        return general;
      }
    }

    function general(subject) {
      return angular.isObject(subject) || angular.isArray(subject);
    }
  }
})();
