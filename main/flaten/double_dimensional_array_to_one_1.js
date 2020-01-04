"use strict";

function double_to_one(collection) {
  //在这里写入代码
  var result = [];
  for (var i = 0; i < collection.length; i++) {
    if (collection[i] instanceof Array) {
      for (var ii = 0; ii < collection[i].length; ii++) {
        result.push(collection[i][ii]);
      }
    } else {
      result.push(collection[i]);
    }
  }
  return result;
}

module.exports = double_to_one;
