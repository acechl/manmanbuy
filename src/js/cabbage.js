/**
 * Created by itcast_Win7 on 2016/12/24.
 */
$(function(){
    function Cabbage(){
        //初始化
        this.init();
        this.arr = [];
        this.arr1 = [];
        this.arr2 = [];
        this.arr3 = [];
        //滚动插件
        itcast.iScroll({
            swipeDom:document.querySelector(".wrapper"),
            swipeType:"x",
            swipeDistance:100
        });
    }

    Cabbage.prototype = {
        constructor:Cabbage,
        init: function () {

        this.tab();
        //获取数据并渲染到页面上
        this.getData({
            type:"get",
            url:"http://192.168.127.222:9090/api/getbaicaijiatitle",
            callback: function (result) {
                var html = template("tab-Title", {"items":result});
                $(".tab").html(html);
                console.log(result);
            }
        });
            //获取tab栏内容数据并渲染到页面上
            this.getTabContent(1,".m1");
            this.getTabContent(2,".m2");
            this.getTabContent(3,".m3");
            this.getTabContent(4,".m4");
            this.getTabContent(5,".m5");
            this.getTabContent(6,".m6");
            this.getTabContent(7,".m7");
            this.getTabContent(8,".m8");
            this.getTabContent(9,".m9");
            this.getTabContent(10,".m10");
            this.getTabContent(11,".m11");
            this.getTabContent(12,".m12");
            this.getTabContent(13,".m13");
        },
        //获取tab栏内容数据并渲染到页面上
        getTabContent: function (titleid,className) {
            var self = this;
            this.getData({
                type:"get",
                url:"http://192.168.127.222:9090/api/getbaicaijiaproduct",
                data:{titleid:titleid},
                callback: function (result) {
                    var html = template("tab-content",{"items":result});
                    $(className).html(html);
                    console.log(result);
                    for(var i=0;i<result.result.length;i++){
                        self.arr.push(result.result[i].productImg)
                        self.arr1.push(result.result[i].productCoupon)
                        self.arr2.push(result.result[i].productName)
                        self.arr3.push(result.result[i].productPrice);
                    }
                    var inter = $(".inter");
                    var name = $(".name");
                    var price = $(".price")
                    self.getDatas(inter,self.arr,"interDo");
                    self.getDatas(name,self.arr2,"nameDo");
                    self.getDatas(price,self.arr3,"priceDo");
                    // inter.each(function(index,item){
                    //     if(!$(item).hasClass("do")){
                    //         $(item).prepend(self.arr[index]);
                    //         $(item).addClass("do");
                    //     }
                    // })
                    // name.each(function(index,item){
                    //     if(!$(item).hasClass("do21")){
                    //         $(item).prepend(self.arr2[index]);
                    //         $(item).addClass("do21");
                    //     }
                    // })
                    // price.each(function(index,item){
                    //     if(!$(item).hasClass("do11")){
                    //         $(item).prepend(self.arr3[index]);
                    //         $(item).addClass("do11");
                    //     }
                    // })
                }
            });
        },
        //tab栏切换
        tab: function () {
            $(".tab").on("mouseenter",".tab-item", function () {

                    $(this).addClass("active").siblings().removeClass("active");

                    $(".products .main").eq($(this).index()).addClass("selected").siblings().removeClass("selected");
            });

                $(this).addClass("active").siblings().removeClass("active");

                $(".products .main").eq($(this).index()).addClass("selected").siblings().removeClass("selected");
        },
        //从后台数据获取需要用得的内容
        getDatas:function(obj,arr,className){
            obj.each(function(index,item){
                if(!$(item).hasClass(className)){
                    $(item).prepend(arr[index]);
                    $(item).addClass(className);
                }
            })
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
        },
    };

    var baicai =  new Cabbage();
})
