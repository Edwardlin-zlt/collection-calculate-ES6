'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  if (!collection) {
    return NaN;
  }
  var min = collection[0];
  collection.forEach(element => {
    if (element < min) {
      min = element;
    }
  });
  return min;
}

module.exports = collect_min_number;

