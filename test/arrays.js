const rjnetworkCommon = require('../index');

// console.log(rjnetworkCommon.rjStr.str.isNullOrUndefined(""))

var arr = [
	{id:"1",value:"111",children:[{id:"8",value:"9999"},{id:"9",value:"11122"}]},
	{id:"2",value:"value"},
	
	];

function  delObj (arr,field,value){
	let index = -1;
	for(var i in arr){
		if(arr[i][field]===value){
			index = i;
		}
	}

return 	arr.splice(index,1);
}


console.log(delObj(arr,'id',1))

//console.log(rjnetworkCommon.rjarrays.getObjectByArrObj("1","id",arr))

//console.log(rjnetworkCommon.rjTree.tree.deepQuery(arr,"9","id"))