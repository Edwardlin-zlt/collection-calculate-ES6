'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  var ave = calAverage(collection);
  return numToChar(ave);
}

function calAverage(collection){
  var sum = 0;
  collection.forEach(element => {
    sum += element;
  });
  return Math.ceil(sum / collection.length);
}

function numToChar(num){
  var numBase = 96;
  return String.fromCharCode(numBase+num);

}

module.exports = average_to_letter;

