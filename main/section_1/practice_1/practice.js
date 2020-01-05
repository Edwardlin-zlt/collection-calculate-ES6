function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var result = [];
  collection_a.forEach(ele => {
    if (collection_b.includes(ele)){
      result.push(ele);
    }
  })
  return result;
}

module.exports = collect_same_elements;
