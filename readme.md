


### 说明
初衷：书写的意义在于每次创建项目都要自己百度一些方法然后封装成common去引用，非常麻烦，因此打算开发一个大家都常用的方法，供大家使用。
使用对象：VUE  
仓库： [](https://github.com/huzhenjie-rjnetwork-net-cn/rjnetwork-common-js.git)
分支：
+ develop  开发分支
+ master   发布分支
+ fix      修复分支


### 使用
#### 安装
npm install rjnetwork-commons
#### 引用
import rjnetCommon from "rjnetwork-commons"

#### 具体类说明
 + rjnetCommon.rjStr   字符串处理类
 + rjnetCommon.rjarrays  数组处理类
 + rjnetCommon.rjTree    树形结构处理类
#### rjnetCommon.rjStr.str 方法说明
 + rjnetCommon.rjStr.str.isNull 判断传递的值是否为null或者为'null'
 + rjnetCommon.rjStr.str.isUndefined 判断传递的值是否为未定义
 + rjnetCommon.rjStr.str.isNullOrUndefined 判断传递的值是否为未定义或者为空
 + rjnetCommon.rjStr.str.GetQueryString 从url中获取指定参数
####  rjnetCommon.rjarrays 方法说明
 + rjnetCommon.rjarrays.del  数组删除某一个值
 + rjnetCommon.rjarrays.getObjectByArrObj 根据某一个字段查找数组中的某一个对象
 + 
####  rjnetCommon.rjTree   方法说明
 +  rjnetCommon.rjTree.tree.deepQuery  递归查找树形结构中的某一个对象
 +  rjnetCommon.rjTree.tree.getParentFields 根据树形结构查找当前元素的所有父元素包含它自己 
 +  rjnetCommon.rjTree.tree.treeToList      将树形结构转换为list结构
  
#### 技术探讨
 email: huzhenjie@rjnetwork.net.cn
 微信公众号：苦逼程序猿![公众号](https://www.rjnetwork.net.cn:91//upload/files/6359632ce4b0474dacf62d01.jpg)
### 捐助
![微信支付](https://www.rjnetwork.net.cn:91/upload/files/61aa52f4e4b08291bde91e98.png)




 
 
 
 
 
 

