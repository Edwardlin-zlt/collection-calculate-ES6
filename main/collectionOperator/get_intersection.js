"use strict";

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var result = [];

  for (var i =0; i < collection_b.length; i++){
    for (var ii=0; ii <collection_a.length; ii++){
      if (collection_b[i] === collection_a[ii]){
        result.push(collection_b[i]);
        break;
      }
    }
  }

  // 交集元素和测试expect相同但顺序不同也算错～
  // for (var i = 0; i < collection_a.length; i++) {
  //   if (collection_b.indexOf(collection_a[i]) !== -1) {
  //     result.push(collection_a[i]);
  //   }
  // }

  return result;
}

module.exports = get_intersection;
