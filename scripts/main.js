/**
 * 配置别名和依赖关系
 */
var baseUrl='/artTpl-mvc/scripts/';
require.config({
	paths:{
		//Lib
		text:baseUrl+'lib/require/text',
		zepto:baseUrl+'lib/zepto/zepto.min',
		template:baseUrl+'lib/artTemplate/template-native',
		echarts:baseUrl+'lib/echarts/echarts',
		//Model
		validate:baseUrl+'models/validate',
		app:baseUrl+'app'
	},
	shim:{
		zepto: {
        	exports: '$'
        },
	}
});