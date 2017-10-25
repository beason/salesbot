/* global humps:false moment:false _:false c3:false quickspot:false jsonApiReHydrate:false */
(function () {
  'use strict';

  angular
    .module('salesbot')
    .constant('_', _)
    .constant('humps', humps)
    .constant('moment', moment)
    .constant('jsonApiReHydrate', jsonApiReHydrate);
})();
