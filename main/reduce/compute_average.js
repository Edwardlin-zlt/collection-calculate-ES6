'use strict';

function compute_average(collection) {
  //在这里写入代码
  var sumNum = 0;
  collection.forEach(element => {
    sumNum += element;
  });
  return sumNum/collection.length;
}

module.exports = compute_average;

