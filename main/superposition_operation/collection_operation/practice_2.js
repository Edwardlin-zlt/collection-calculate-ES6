'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  var result = [];
  collection.forEach(ele => {
    if (ele % 2) {
      result.push(ele*3 + 2);
    }
  });
  return result;
}

module.exports = hybrid_operation_to_uneven;

