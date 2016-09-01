require(
	['zepto','template','text!../templates/tpl-index.html','validate'],
	function($,template,tplIndex,validate){
		var view={
            /*=========================
              Model
              ===========================*/
            initialize:function(){
                /*DOM*/
                this.divList=document.getElementById("ID-List");//注入至此DIV

                /*Data*/
                this._initData();
                
                /*Plugin*/
            },
            /*=========================
              Method
              ===========================*/
            _initData:function(){
            	var self=this;
            	//dummydata
            	$.get("js/dummydata/data.json",function(data){
            		var datalist=JSON.parse(data);
            		//编译渲染
            		var render = template.compile(tplIndex);
            		var html = render({'children':datalist});
            		self.divList.innerHTML=html;
            		//测试Model
            		console.log(validate.isEqual(1,1));
            	});
            	/*//realdata
            	$.ajax({
            		url:url,
            		type:"get",
            		dataType:"json",
            		success:function(data){
            			//编译渲染
	            		var render = template.compile(tplIndex);
	            		var html = render({'children':data});
	            		self.divList.innerHTML=html;
            		},
            		error:function(msg){
            			alert("连接服务器失败，请检查您的网络");
            		}
            	});*/
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
        view.initialize();
	}
);