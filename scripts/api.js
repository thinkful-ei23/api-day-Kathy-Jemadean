'use strict';
/* global shoppingList, store, $ */

const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/kathy-jemadean';
  const getItems = function(callback) {
    callback('api module works!');

  };

  return{
    getItems,
  };

}());