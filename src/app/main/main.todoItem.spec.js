(function() {
  'use strict';

  describe('TodoItem', function(){
    var subject, TodoItem;

    beforeEach(module('angularTdd'));

    beforeEach(inject(function(_TodoItem_) {
      TodoItem = _TodoItem_;
      subject = new TodoItem();
    }));

  });
})();
