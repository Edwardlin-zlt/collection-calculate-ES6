"use strict";
var single_element = function(collection) {
  var tmpArr = getEleAtEvenPlace(collection);
  return findSingle(tmpArr);
};

function getEleAtEvenPlace(collection) {
  var result = [];
  for (var i = 1; i <= collection.length; i += 2) {
    result.push(collection[i]);
  }
  return result;
}

function findSingle(collection){
  var result = [];
  var repeatedArr = [];
  collection.forEach(function(ele){
    if (!result.includes(ele) && !repeatedArr.includes(ele)) {
      result.push(ele);
    } else if (!repeatedArr.includes(ele)){
      repeatedArr.push(ele);
      var tmpIndex = result.indexOf(ele);
      result.splice(tmpIndex, 1);
    }
  })
  return result;
}

// 输出的顺序为无序
// function findSingle(collection) {
//   var result = [];
//   var countDict = {};
//   collection.forEach(element => {
//     if (!countDict[element]) {
//       countDict[element] = 1;
//     } else {
//       countDict[element] += 1;
//     }
//   });

  // for (var key in countDict) {
  //   if (countDict[key] === 1){
  //     result.push(parseInt(key))
  //   }
  // }
  // return result;
// }
module.exports = single_element;

var collection_a = [1, 2, 3, 2, 5, 6, 21, 43, 12, 5];
var collection_b = [11, 11, 22, 11, 33, 11];

single_element(collection_a);
single_element(collection_b);
