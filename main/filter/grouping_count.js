"use strict";

function grouping_count(collection) {
  //在这里写入代码
  var result = {};
  for (var i = 0; i < collection.length; i++) {
    var key = collection[i];
    if (!result[key]) {
      result[key] = 1;
    } else {
      result[key] += 1;
    }
  }
  return result;
}

module.exports = grouping_count;
