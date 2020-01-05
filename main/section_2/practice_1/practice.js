function count_same_elements(collection) {
  //在这里写入代码
  var countDic = {};
  collection.forEach(ele => {
    if (!countDic[ele]){
      countDic[ele] = 1;
    } else {
      countDic[ele] += 1;
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

module.exports = count_same_elements;
