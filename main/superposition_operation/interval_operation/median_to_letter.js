'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  var median = computeMedian(collection);
  return numberToChars(median);
}

function computeMedian(collection) {
  //在这里写入代码
  collection = collection.sort((pre, cur) => pre - cur)
  var numLen = collection.length;
  if (numLen % 2) {
    return Math.ceil(collection[(numLen - 1) / 2]);
  } else {
    return Math.ceil((collection[numLen / 2 - 1] + collection[numLen / 2]) / 2);
  }
}

function numberToChars(number) {
  var charBase = 97;
  var quotient = Math.floor((number - 1) / 26);
  var remainder = (number - 1) % 26;
  if (quotient === 0) {
    return String.fromCharCode(charBase + remainder);
  } else {
    return numberToChars(quotient) + String.fromCharCode(charBase + remainder);
  }
}
module.exports = median_to_letter;
