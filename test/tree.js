const rjnetworkCommon = require('../index');
var arr = [
    {id:"1",value:"111",children:[{id:"8",value:"9999",children:[{id:"12",value:"134"}]},{id:"9",value:"11122"}]},
    {id:"2",value:"value"},

];



let list = rjnetworkCommon.rjTree.tree.getParentFields(arr,12,"id")
//console.log(list)

