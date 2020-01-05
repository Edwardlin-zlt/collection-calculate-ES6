'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  var collectionArray = collection.split("->").map((item) => parseInt(item));
  collectionArray.sort((pre, cur) => pre - cur);
  var numLen = collectionArray.length;
  if (numLen % 2) {
    return collectionArray[(numLen - 1) / 2];
  } else {
    return (collectionArray[numLen / 2 - 1] + collectionArray[numLen / 2]) / 2;
  }
}

module.exports = compute_chain_median;
