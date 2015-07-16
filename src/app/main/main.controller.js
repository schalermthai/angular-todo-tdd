(function() {
  'use strict';

  angular
    .module('angularTdd')
    .controller('TodoListController', TodoListController);

  function TodoListController() {
    this.newItemText = '';
    this.itemList = ['item1', 'item2'];

    this.displayItems = function() {
      return this.itemList;
    }
 }
})();
