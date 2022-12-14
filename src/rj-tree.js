const tree = {
	author:"huzhenjie",
	desc:"树形方法封装",
	email:"huzhenjie@rjnetwork.net.cn"
	
}
/**
 * @desc  根据某一个字段和字段值查找树形结构的对象
 * @author huzhenjie
 * @email  huzhenjie@rjnetwork.net.cn
 * @param  tree  树形结构
 * @param  value 字段值
 * @param  filed 字段属性
 * @return  obj
 */
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

/**
 * @desc   根据子元素的某个字段，查找该子元素的所有上级的指定字段
 * @author huzhenjie
 * @email  huzhenjie@rjnetwork.net.cn
 * @param  tree  树形结构
 * @param  childrenValue 子元素值
 * @param  filed 当前字段
 * return  list
 */
tree.getParentFields = function (tree,childrenValue,field){
	 for(let i in tree){
		 if(tree[i][field]==childrenValue){
			 return [tree[i]]
		 }
		 if(tree[i].children){
			 let cld = tree[i].children;
			 delete tree[i].children;
			 let node= this.getParentFields(cld,childrenValue,field);
			 if(node!==undefined){
				 return node.concat(tree[i])
			 }
		 }


	 }


}


/**
 * @desc   将树形结构拆分成list返回
 * @author huzhenjie
 * @email  huzhenjie@rjnetwork.net.cn
 * @param  tree  树形结构
 * @param  list  返回的list 数组类型
 * @param  filed 根据哪个字段匹配
 * @param fieldValue 字段值
 * @return  list
 */
tree.treeToList = function (tree,list,filed,fieldValue){
	tree.filter((item)=>{
		if(item.children){
			var cld = item.children;
			delete item.children;
			list.push(item);
			treeToList(cld,list,filed,item[filed]);
		}else{
			item.parentNode = fieldValue
			list.push(item);
		}
	})

}




module.exports = {
tree
}