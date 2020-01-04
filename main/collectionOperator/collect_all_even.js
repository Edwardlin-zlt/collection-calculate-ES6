"use strict";

function collect_all_even(collection) {
  //在这里写入代码
  var result = [];
  collection.forEach(element => {
    if (element % 2 === 0) {
      result.push(element);
    }
  });
  return result;
}

module.exports = collect_all_even;
