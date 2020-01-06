'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  collection = collection.sort((pre, cur) => pre - cur);
  for (var i = 0; i + 3 < collection.length; i += 3) {
    var temp = collection[i];
    collection[i] = collection[i+1];
    collection[i+1] = collection[i+2];
    collection[i+2] = temp;
  }
  return collection;
}

module.exports = rank_by_two_large_one_small;
