"use strict";

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var result = [];
  switch (true) {
    case number_a >= number_b:
      for (var i = number_a; i >= number_b; i--) {
        result.push(numberToChars(i));
      }
      return result;
    case number_a < number_b:
      for (var i = number_a; i <= number_b; i++) {
        result.push(numberToChars(i));
      }
      return result;
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

module.exports = get_letter_interval_2;
