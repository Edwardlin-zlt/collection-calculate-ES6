'use strict';
var rank_desc = function(collection){
  return collection.sort((pre, cur) => pre - cur);
};

module.exports = rank_desc;
