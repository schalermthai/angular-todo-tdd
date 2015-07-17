(function() {
  'use strict';

  angular
    .module('angularTdd')
    .service('TodoItem', function() { return TodoItem; });

  function TodoItem(_text_, _done_) {
    this.text = _text_ || '';
    this.done = (angular.isDefined(_done_)) ? _done_ : false;
  }

  TodoItem.prototype.hasContent = function () {
    return this.text.trim() !== '';
  }
})();


