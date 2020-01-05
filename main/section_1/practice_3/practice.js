function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var result = [];
  var toCompareValues =object_b.value;
  collection_a.forEach(ele => {
    if (toCompareValues.includes(ele)){
      result.push(ele);
    }
  })
  return result;
}

module.exports = collect_same_elements;
