'use strict';
 
var is_exist_element = function(collection,element){
  var arr = getEleAtEvenIndex(collection);
  return isExist(arr, element);
};

function getEleAtEvenIndex(collection) {
  var result = [];
  for (var i = 0; i < collection.length; i += 2) {
    result.push(collection[i]);
  }
  return result;
}

function isExist(collection, element) {
  for (var i = 0; i < collection.length; i++) {
    if (element === collection[i]) {
      return true;
    }
  }
  return false;
}
module.exports = is_exist_element;