'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  var result = [];
  for (var i=0; i<collection_a.length; i++){
    for (var ii=0; ii< collection_b.length; ii++){
      if (collection_a[i] % collection_b[ii] === 0) {
        result.push(collection_a[i])
        break;
      }
    }
  }
  return result;
}

module.exports = choose_divisible_integer;