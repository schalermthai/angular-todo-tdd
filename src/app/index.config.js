(function() {
  'use strict';

  angular
    .module('angularTdd')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
