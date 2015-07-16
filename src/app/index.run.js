(function() {
  'use strict';

  angular
    .module('angularTdd')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
