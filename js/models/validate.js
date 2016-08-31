define('validate',[],function(){
	return{
		isEqual:function(str1,str2){
			return str1===str2;
		}
	}
});
//define定义模块共三个参数:define( 名称 , [依赖] , 回调*必填 { return 方法 } )