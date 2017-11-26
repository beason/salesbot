(function() {
  'use strict';

  angular
    .module('salesbot')
    .factory('userModel', userModel);

  /* @ngInject */
  function userModel(tokenModel, _, $http, $q) {

    // var model = [{id: 1, name: 'bbofbby'}];
    var model = [];

    var url = 'http://127.0.0.1:8000/api/user'
    return {
      model: model,
      reset: reset,
      getCurrent: getCurrentUser,
      mergeModel: mergeModel,
      makeRequest: makeRequest
    };

    function reset() {
      angular.copy([], model);
    }

    function makeRequest(id) {
      // Create the deffered object
      var deferred = $q.defer();

      $http.get(url + '/' + id).then(function(resp) {
        deferred.resolve(resp.data.user);
        model = resp.data.user;
      });
      return deferred.promise;
    }


    function getCurrentUser(callback) {
      var deffered = $q.defer();
      if (model.length > 0) {
        deffered.resolve(model[0])
      } else {
        $http.get(url + '/' + tokenModel.getPayload().sub).then(function(res) {
          mergeModel(res.data.user);
          deffered.resolve(model[0])
        })
      }
      return deffered.promise.then(callback)
    }

    function mergeModel(newModel) {

      angular.isArray(newModel) ? mergeArray(newModel) : mergeObject(newModel);
    }

    function mergeArray(newModel) {

      if (model.length === 0) {
        angular.copy(newModel, model);
        return true;
      }

      newModel.forEach(function(obj) {
        var matched = _.find(model, {
          id: obj.id
        });
        if (matched) {
          angular.copy(obj, matched);
        } else {
          model.push(obj);
        }
      });
    }

    function mergeObject(obj) {
      var matched = _.find(model, {
        id: obj.id
      });
      if (matched) {
        angular.copy(obj, matched);
      } else {
        model.push(obj);
      }
    }
  }
})();
