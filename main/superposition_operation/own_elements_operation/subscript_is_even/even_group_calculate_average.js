"use strict";
var even_group_calculate_average = function(collection) {
  var evenArray = selectEvenAtEvenPlace(collection);
  if (evenArray.length === 0) {
    return [0];
  }
  var result = [];
  var groupedObj = groupByNumberLength(evenArray);
  for (var ele in groupedObj) {
    result.push(calculateAverage(groupedObj[ele]));
  }
  return result.sort((pre, cur) => pre -cur);
};

function selectEvenAtEvenPlace(collection) {
  var result = [];
  for (var i = 1; i <= collection.length; i+=2) {
    if (collection[i] % 2 === 0) {
      result.push(collection[i]);
    }
  }
  return result;
}

function groupByNumberLength(collection) {
  var result = {};
  for (var i = 0; i < collection.length; i++) {
    var tmpIndex = "L" + (String(collection[i]).length - 1);
    if (!result[tmpIndex]) {
      result[tmpIndex] = [];
    }
    result[tmpIndex].push(collection[i]);
  }
  return result;
}

function calculateAverage(collection) {
  var sum = 0;
  for (var i = 0; i < collection.length; i++) {
    sum += collection[i];
  }
  return sum / collection.length;
}

module.exports = even_group_calculate_average;