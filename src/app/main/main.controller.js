(function() {
  'use strict';

  angular
    .module('angularTdd')
    .controller('TodoListController', TodoListController);

  function TodoListController(TodoItem) {
    this.newItemText = '';
    this.itemList = [];

    this.displayItems = function() {
      return _.filter(this.itemList, this.filterType);
    };

    this.addItem = function (text) {

      var todoItem = new TodoItem(text);

      if (todoItem.hasContent()) {
          this.itemList.push(todoItem);
        this.newItemText = '';
      }
    };

    this.removeItem = function (item) {
      this.itemList.splice(item, 1);
    };

    this.takeAll = function (item) {
      return true;
    };

    this.onlyDone = function (item) {
      return item.done === true;
    };

    this.onlyNotDone = function (item) {
      return item.done === false;
    };

    this.filterType = this.takeAll;
 }
})();
