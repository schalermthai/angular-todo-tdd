(function() {
  'use strict';

  angular
    .module('angularTdd')
    .service('TodoItem', function() { return TodoItem; });

  function TodoItem(_text_, _done_) {

  }
})();


