function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var toCompareValue = object_b.value;

  collection_a.forEach(ele => {
    if (toCompareValue.includes(ele.key) && ele.count >=3){
      ele.count -= Math.floor(ele.count/3);
    }
  })

  return collection_a;
}

module.exports = create_updated_collection;
