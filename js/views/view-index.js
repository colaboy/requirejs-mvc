require(
	['zepto','template','text!../templates/tpl-index.html','validate'],
	function($,template,tplIndex,validate){
		var views={
        /*=========================
          Model
          ===========================*/
        initialize:function(){
            /*DOM*/
            //注入至此DIV
            this.divList=document.getElementById("ID-List");

            /*Plugin*/

            /*Data*/
            this._initData();
        },
        /*=========================
          Method
          ===========================*/
        _initData:function(){
        	var self=this;
        	$.get("js/dummydata/data.json",function(data){
  					var datalist=JSON.parse(data);
  					//编译渲染
  					var render = template.compile(tplIndex);
  					var html = render({'children':datalist});
  					self.divList.innerHTML=html;

  					//测试Model
  					console.log(validate.isEqual(1,1));
  				});
        },
        /*=========================
          Plugin
          ===========================*/
        _initPlugin:function(){

        },
        /*=========================
          Events
          ===========================*/
        _attach:function(e){
            var self=this;
        },
        /*=========================
          Event Handler
          ===========================*/
    }
    views.initialize();
	}
);