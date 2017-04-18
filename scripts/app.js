/**
 * @全局app
 */

define([
	'jquery','template',
	'seedsui'
],function($,template) {

    var app = {
        url:"scripts/dummydata",
        token:"",
        template:template,
        constants:{
            IMAGEPATH:"images"
        },
        interfaces:{

        }
    };
    //加载遮罩
    app.loading=new Loading({container:"#ID-Loading"});

    return app;
});