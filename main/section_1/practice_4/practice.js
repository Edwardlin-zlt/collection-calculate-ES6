function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var aValues = [];
  collection_a.forEach((ele) => aValues.push(ele.key))
  var toCompareValues = object_b.value;

  var result = [];
  aValues.forEach(ele => {
    if (toCompareValues.includes(ele)){
      result.push(ele);
    }
  })
  return result;
}

module.exports = collect_same_elements;
