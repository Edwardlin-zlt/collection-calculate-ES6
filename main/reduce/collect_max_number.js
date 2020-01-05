"use strict";

function collect_max_number(collection) {
  //在这里写入代码
  if (!collection) {
    return NaN;
  }
  var max = collection[0];
  collection.forEach(element => {
    if (element > max) {
      max = element;
    }
  });
  return max;
}

module.exports = collect_max_number;
