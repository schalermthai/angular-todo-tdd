(function() {
  'use strict';

  describe('TodoList', function(){
    var subject;

    beforeEach(module('angularTdd'));

    beforeEach(inject(function($controller) {
      subject = $controller('TodoListController');
    }));

    describe("by default", function () {
      it("sets newItemText as blank", function () {
        expect(subject.newItemText).toEqual('');
      });

      it("sets itemList as [item1, item2]", function () {
        expect(subject.itemList).toEqual(['item1', 'item2']);
      });
    });

    describe("displayItems", function () {
      it('returns all item in itemList', function () {
        subject.itemList = [1, 2, 3];
        expect(subject.displayItems()).toEqual(subject.itemList);
      });
    });
  });
})();
