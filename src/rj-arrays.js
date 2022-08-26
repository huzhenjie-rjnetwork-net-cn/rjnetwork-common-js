const rjStr = require("./rj-str")
/*
 * desc 单数组实例删除元素
 * author huzhenjie
 * email  huzhenjie@rjnetwork.net.cn
 * param   [1,2,3,4]
 * return  arr 
 * */
function del(arr,element){
	if(!Array.isArray(arr)){
		throw "请传递数组类型";
	}
	if(element==undefined){
		throw "请传递要删除的元素";
	}
	return arr.splice(element,1);
}

/*
 * desc 根据集合对象，和单一的对象字段以及值来匹配获得单一对象本身
 * author huzhenjie
 * email  huzhenjie@rjnetwork.net.cn
 * param  objValue 需要匹配的值
 * param  filed 需要匹配的字段变量
 * param  arr   数组
 * return  arr 
 * */
function getObjectByArrObj(objValue,filed,arr){
	console.debug(new Date().getMilliseconds())
	if(rjStr.str.isNullOrUndefined(objValue)){
		throw "objValue is null";
	}
	if(rjStr.str.isNullOrUndefined(filed)){
		throw "filed is null";
	}
	
	if(rjStr.str.isNullOrUndefined(arr)){
		throw "arr is null";
	}
	
	let obj = arr.filter((o) => {
	    return o[filed] == objValue;
	  });
	  
	  if(rjStr.str.isNullOrUndefined(obj)){
		  console.debug(new Date().getMilliseconds())
		  return null;
	  }else{
		  console.debug(new Date().getMilliseconds())
		  return obj[0];
	  }
	
}
module.exports = {
  del,getObjectByArrObj
}