'use strict';

function compute_median(collection) {
  //在这里写入代码
  collection = collection.sort((pre, cur) => pre - cur)
  var numLen = collection.length;
  if (numLen % 2) {
    return collection[(numLen - 1) / 2];
  } else {
    return (collection[numLen / 2 - 1] + collection[numLen / 2]) / 2;
  }
}

module.exports = compute_median;


