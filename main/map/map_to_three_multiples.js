'use strict';
var map_to_three_multiples = function(collections){
  var result = [];
  for (var i = 0; i < collection.length; i++) {
    result.push(collection[i] * 3);
  }
  return result;
};

module.exports = map_to_three_multiples;
