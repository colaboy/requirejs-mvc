var baseUrl='/artTpl-mvc/js/';
require.config({
	paths:{
		//Lib
		text:baseUrl+'lib/require/text',
		zepto:baseUrl+'lib/zepto/zepto.min',
		template:baseUrl+'lib/artTemplate/template-native',
		//Model
		validate:baseUrl+'models/validate'
	},
	shim:{
		zepto: {
        	exports: '$'
        },
	}
});