'use strict';

function even_to_letter(collection) {
  //在这里写入代码
  var result = [];
  collection.forEach(ele => {
    if (!(ele % 2)) {
      result.push(numberToChar(ele));
    }
  })
  return result;
}

function numberToChar(number){
  var charBase = 96;
  return String.fromCharCode(charBase+number);
}

module.exports = even_to_letter;
