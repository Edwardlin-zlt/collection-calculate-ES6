'use strict';
var number_map_to_word = function(collection){
  var result = [];
  for (var i = 0; i < collection.length; i++){
    result.push(numberToChars(collection[i]))
  }
  return result;
};

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
module.exports = number_map_to_word;
