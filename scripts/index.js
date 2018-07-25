'use strict';
/* global shoppingList, store, $ */

$(document).ready(function() {
  api.getItems((items) => {
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  });
  shoppingList.bindEventListeners();
  shoppingList.render();
});

store.items.push(Item.create('apples'));

// api.getItems(function(data) {
//   console.log(data);

// });
// console.log(api.BASE_URL);

// api.createItem('pears', (newItem) => {
//   api.getItems((items) => {
//     console.log(items);
//   });
// });