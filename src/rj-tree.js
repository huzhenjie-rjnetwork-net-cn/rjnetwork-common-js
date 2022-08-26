const tree = {
	author:"huzhenjie",
	desc:"字符串常用方法封装",
	email:"huzhenjie@rjnetwork.net.cn"
	
}
/*
 * desc  根据某一个字段和字段值查找树形结构的对象
 * author huzhenjie
 * email  huzhenjie@rjnetwork.net.cn
 * param  tree  树形结构
 * param  value 字段值
 * param  filed 字段属性
 * return  obj 
 * */
tree.deepQuery=function(tree,value,filed){
	  var isGet = false;
	  var retNode = null;
	  function deepSearch(tree,value,filed){
	    for(var i = 0; i<tree.length; i++) {
	      if(tree[i].children && tree[i].children.length>0) {
	        deepSearch(tree[i].children,value,filed);
	      }
	      if(value === tree[i][filed] || isGet) {
	        isGet||(retNode = tree[i]);
	        isGet = true;
	        break;
	      }
	    }
	  }
	  deepSearch(tree,value,filed);
	  return retNode;
}



module.exports = {
tree
}