require([
    'app',
    'text!../templates/indexListTemplate.html'
],function(app,indexListTemplate){
    var view={
        /*=========================
          Model
          ===========================*/
        render:function(){
            var self = this;
            //渲染页面
            this.divList=document.getElementById("ID-List");//注入至此DIV
            //加载数据
            this.loadData();
        },
        refresh:function(){
            console.log("刷新");
        },
        destroy:function(){
            console.log("移除");
        },
        loadData:function(){
            var self=this;
            var url=app.url+"/data.json";
            var interfaceParam = "";
            var pageParam = "";

            $.ajax({
                url : url,
                success:function(data){
                    var datalist=JSON.parse(data);
                    //编译渲染
                    var render = app.template.compile(indexListTemplate);
                    var html = render({'children':datalist});
                    self.divList.innerHTML=html;
                },
                error:function(msg){
                    
                },
                complete:function(){
                    setTimeout(function(){
                        app.loading.hide();
                    }, 300);
                }
            });
            //dummydata
            /*$.get("scripts/dummydata/data.json",function(data){
                var datalist=JSON.parse(data);
                //编译渲染
                var render = app.template.compile(indexListTemplate);
                var html = render({'children':datalist});
                self.divList.innerHTML=html;
            });*/
            /*//realdata
            $.ajax({
                url:url,
                type:"get",
                dataType:"json",
                success:function(data){
                    //编译渲染
                    var render = template.compile(indexListTemplate);
                    var html = render({'children':data});
                    self.divList.innerHTML=html;
                },
                error:function(msg){
                    alert("连接服务器失败，请检查您的网络");
                }
            });*/

            this._attach();//使用backbone时，此行无用
        },
        /*=========================
          Method
          ===========================*/
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
    view.render();
});