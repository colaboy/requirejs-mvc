var baseUrl='/artTpl-mvc/js/';
require.config({
	paths:{
		//Lib
		text:baseUrl+'lib/require/text',
		zepto:baseUrl+'lib/zepto/zepto.min',
		template:baseUrl+'lib/artTemplate/template-native',
		echarts:baseUrl+'lib/echarts/echarts',
		//Model
		validate:baseUrl+'models/validate'
	},
	shim:{
		zepto: {
        	exports: '$'
        },
	}
});