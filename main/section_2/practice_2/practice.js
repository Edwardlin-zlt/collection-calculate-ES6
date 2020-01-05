function count_same_elements(collection) {
  //在这里写入代码
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
        var keyAndValue = ele.match(/^(\w)-(\d)/);
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

module.exports = count_same_elements;
