/**
 * 配置别名和依赖关系
 */
var baseUrl='../';
require.config({
	paths:{
		//Lib
		text:baseUrl+'lib/require/text',
		jquery:baseUrl+"lib/jquery/jquery.min",
		template:baseUrl+'lib/arttemplate/template-native',
		//zepto:baseUrl+'lib/zepto/zepto.min',
		//underscore:baseUrl+'lib/backbone/underscore',
		seedsui:baseUrl+'lib/seedsui/seedsui.min',
		//Model
		validate:baseUrl+'models/validate',
		app:baseUrl+'app'
	},
	shim:{
        /*zepto: {
        	exports: '$'
        },*/
        /*underscore:{
            exports:'_'
        },*/
	}
});