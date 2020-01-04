"use strict";

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  var result = [];
  switch (true) {
    case number_a >= number_b:
      for (var i = number_a; i >= number_b; i--) {
        result.push(i);
      }
      return result;
    case number_a < number_b:
      for (var i = number_a; i <= number_b; i++) {
        result.push(i);
      }
      return result;
  }
}

module.exports = get_integer_interval;
