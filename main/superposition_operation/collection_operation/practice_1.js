"use strict";

function hybrid_operation(collection) {
  //在这里写入代码
  var result = 0;
  collection.forEach(element => {
    result += element * 3 + 2;
  });
  return result;
}

module.exports = hybrid_operation;
