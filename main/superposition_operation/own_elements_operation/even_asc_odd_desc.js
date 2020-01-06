"use strict";
var even_asc_odd_desc = function(collection) {
  var [evenArr, oddArr] = splitEvenAndOdd(collection);
  evenArr = evenArr.sort((pre, cur) => pre - cur);
  oddArr = oddArr.sort((pre, cur) => cur - pre);
  return [...evenArr, ...oddArr]
};

function splitEvenAndOdd(collection) {
  var evenArr = [];
  var oddArr = [];
  for (var i = 0; i < collection.length; i++) {
    var ele = collection[i];
    if (ele % 2 === 0) {
      evenArr.push(ele);
    } else {
      oddArr.push(ele);
    }
  }
  return [evenArr, oddArr]
}
module.exports = even_asc_odd_desc;
