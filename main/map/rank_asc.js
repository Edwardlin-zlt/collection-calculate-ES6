"use strict";
var rank_asc = function(collection) {
  return collection.sort((pre, cur) => cur - pre);
};

module.exports = rank_asc;
