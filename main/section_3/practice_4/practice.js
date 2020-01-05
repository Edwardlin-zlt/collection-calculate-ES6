function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var toCompareValue = object_b.value;
  
  var countedArray = countChar(collection_a);

  countedArray.forEach(ele => {
    if (toCompareValue.includes(ele.key) && ele.count >=3){
      ele.count -= Math.floor(ele.count/3);
    }
  })

  return countedArray;
}

function countChar(collection){
 var countDic = {};
  collection.forEach(ele => {
    switch (true){
      case ele.length === 1:
        if (!countDic[ele]){
          countDic[ele] = 1;
        } else {
          countDic[ele] += 1;
        }
        break;
      case ele.length > 1:
        var keyAndValue = ele.match(/^(\w).*?(\d+).*/);
        var key = keyAndValue[1];
        var value = parseInt(keyAndValue[2]);
        if (!countDic[key]){
          countDic[key] = value;
        } else {
          countDic[key] += value;
        }
        break;
    }
  })
  return dicToFormatedArray(countDic);
}

function dicToFormatedArray(dic){
  var result = []
  for (key in dic){
    var item = {};
    item.key = key;
    item.count = dic[key];
    result.push(item);
  }
  return result;
}

module.exports = create_updated_collection;
