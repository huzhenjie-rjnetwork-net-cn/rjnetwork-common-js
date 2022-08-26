const str = {
	author:"huzhenjie",
	desc:"字符串常用方法封装",
	email:"huzhenjie@rjnetwork.net.cn"
	
}

/**
 * @@description 判断当前变量是否为null或者为'null'
 * @param  value
 * @return  空 true|  非空 false
 */
str.isNull=function (value){
	if(value==null||value=='null'){
		return true;
	}
	return false;
}

/**
 * @@description 判断当前变量是否为未定义
 * @param  value
 * @return  未定义 true|  已定义 false
 */
str.isUndefined=function (value){
	if(value==undefined){
		return true;
	}
	return false;
}


/**
 * @description 判断当前变量是否为未定义 或者为空 或者为空白
 * @param  value
 * @return  未定义 true|  已定义 false
 */
str.isNullOrUndefined=function (value){
	if(value==undefined||value==null ||value.length==0|| value==''){
		return true;
	}
	return false;
}


/**
 * @description 根据url和key或者变量值
 * @param  url  url地址
 * @param  key  变量属性
 * @return value
 */
str.GetQueryString=function (url,key){
	  var arr = url.split("?"); //分割域名和参数界限
	  if (arr.length > 1) {
	    arr = arr[1].split("&"); //分割参数
	    for (var i = 0; i < arr.length; i++) {
	      var tem = arr[i].split("="); //分割参数名和参数内容
	      if (tem[0] == key) {
	        return tem[1];
	      }
	    }
	    return null;
	  } else {
	    return null;
	  }
}


module.exports = {
str
}