(function() {
  'use strict';

  describe('TodoList', function(){
    var subject, TodoItem;

    beforeEach(module('angularTdd'));

    beforeEach(inject(function($controller, _TodoItem_) {
      subject = $controller('TodoListController');
      TodoItem = _TodoItem_;
    }));

    describe("by default", function () {
      it("sets newItemText as blank", function () {
        expect(subject.newItemText).toEqual('');
      });

      it("sets itemList as an empty array", function () {
        expect(subject.itemList).toEqual([]);
      });

      it("sets filterType as takeAll", function () {
        expect(subject.filterType).toEqual(subject.takeAll);
      });
    });

    describe("displayItems", function () {

      beforeEach(function() {
        this.item1 = new TodoItem('1', true);
        this.item2 = new TodoItem('2', false);
        this.item3 = new TodoItem('3', true);

        subject.itemList = [this.item1, this.item2, this.item3];
      });

      describe("with takeAll filter", function () {
        it('returns all items in itemList', function () {
          subject.filterType = subject.takeAll;
          expect(subject.displayItems()).toEqual([this.item1, this.item2, this.item3]);
        });
      });

      describe("with onlyDone filter", function () {
        it('returns only items in itemList that are marked as done', function () {
          subject.filterType = subject.onlyDone;
          expect(subject.displayItems()).toEqual([this.item1, this.item3]);
        });
      });

      describe("with onlyNotDone filter", function () {
        it('returns only items in itemList that are not marked as done', function () {
          subject.filterType = subject.onlyNotDone;
          expect(subject.displayItems()).toEqual([this.item2]);
        });
      })
    });

    describe("addItem", function () {
      it("add newItemText to itemList", function () {
        subject.newItemText = 'hello world';
        subject.addItem(subject.newItemText);
        expect(subject.itemList).toEqual([new TodoItem('hello world')]);
      });

      it("clears newItemText to blank", function () {
        subject.newItemText = 'hello world';
        subject.addItem(subject.newItemText);
        expect(subject.newItemText).toEqual('');
      });

      it("ignores whitespace input", function () {
        subject.newItemText = '     ';
        subject.addItem(subject.newItemText);
        expect(subject.itemList).toEqual([]);
      });
    });

    describe("removeItem", function () {
      it('removes item from itemList for the given index', function () {
        subject.itemList = ['hello', 'javascript', 'world'];
        subject.removeItem(1);
        expect(subject.itemList).toEqual(['hello', 'world']);

      });
    });
  });
})();
