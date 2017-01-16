/**
 * Created by itcast_Win7 on 2016/12/26.
 */
$(function (doc,win) {

    function Compare(){
        //初始化
        this.init();

    }
 window.i=0;
    Compare.prototype = {
        constructor:Compare,
        init: function () {
            //获取内容数据并且渲染到页面
            this.getData({
                type:"get",
                url:"http://mmb.ittun.com/api/getcategorytitle",
                callback: function (result) {
                    var html = template("contentTemp",{items:result});
                    $(".cp-content").html(html);
                }
            });

            this.getContentData(0,".c1");
            this.getContentData(1,".c2");
            this.getContentData(2,".c3");
            this.getContentData(3,".c4");
            this.getContentData(4,".c5");
            this.getContentData(5,".c6");
            this.getContentData(6,".c7");
            this.getContentData(7,".c8")
            //绑定事件
            this.bindEvents(".li0",".c1");
            this.bindEvents(".li1",".c2");
            this.bindEvents(".li2",".c3");
            this.bindEvents(".li3",".c4");
            this.bindEvents(".li4",".c5");
            this.bindEvents(".li5",".c6");
            this.bindEvents(".li6",".c7");
            this.bindEvents(".li7",".c8");
        },
        //获取内容列表数据并且渲染到页面
       getContentData: function (titleid,className) {
           this.getData({
               type:"get",
               url:"http://mmb.ittun.com/api/getcategory",
               data:{titleid:titleid},
               callback: function (result) {
                   var html = template("liTemp",{items:result});
                   $(className).html(html);
               }
           })
       },
        //绑定事件
        bindEvents: function (className,className2) {

            var flag = false;
            var flag2 = false;
            $(".cp-content").on("click",className, function () {
                if(flag==false) {
                    $(className2).css("display","block");
                    $(className).after($(className2));
                    flag=true;
                  if(flag2==false){
                      i++;
                      flag2 = true;
                  }
                }else{
                    if(flag2==true){
                        i--;
                        console.log(i);
                        flag2 = false;
                    }
                    $(className2).css("display","none");
                    flag=false;
                }

                if(i==3){
                    $(".content").css("height",1950);
                }
                if(i==4){
                    $(".content").css("height",2390);
                }
                if(i==5){
                    $(".content").css("height",2800);
                }
                if(i==6){
                    $(".content").css("height",2900);
                }
                if(i==7){
                    $(".content").css("height",3050);
                }
                if(i==8){
                    $(".content").css("height",3150);
                }
            });

        },
        //获取数据
        getData: function (opts) {
            $.ajax({
                type:opts.type,
                url:opts.url,
                data:opts.data,
                success: function (result) {
                    opts.callback(result);

                }
            });
;        }
    }

    var compare = new Compare();
})