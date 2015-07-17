(function() {
  'use strict';

  describe('TodoItem', function(){
    var subject, TodoItem;

    beforeEach(module('angularTdd'));

    beforeEach(inject(function(_TodoItem_) {
      TodoItem = _TodoItem_;
      subject = new TodoItem();
    }));

    describe("constructor", function () {
      it("can set text", function () {
        subject = new TodoItem('hello');
        expect(subject.text).toEqual('hello');
      });

      it("can set done state", function () {
        subject = new TodoItem('hello', true);
        expect(subject.done).toEqual(true);
      });

      describe("by default", function () {

        it("sets text as blank", function () {
          subject = new TodoItem();
          expect(subject.text).toEqual('');
        });

        it("sets done state as false", function () {
          subject = new TodoItem();
          expect(subject.done).toEqual(false);
        });
      });
    });

  });
})();
