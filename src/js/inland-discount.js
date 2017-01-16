/**
 * Created by aixinhuang on 2016/12/29 0029.
 */
function discount(obj) {
    for (var key in obj) {
        this[key] = obj[key]
    }
    //    页面渲染
    this.renderDom();
    //    事件绑定
    this.bind()
}
discount.prototype = {
    constructor: discount,
    //页面渲染
    renderDom: function () {
        this.ajax(0,6);
    },
    //事件绑定
    bind: function () {
        var self = this;
        var index = 6;
        //滚动页面 页面的内容自动加载
        $(window).on("scroll",function(){
            //屏幕的高度
            var screenY = window.screen.height;
            //滚动时卷入的高度
            var scrollY = window.scrollY;
            //页面的总高度
            var pageY = $(".inland-discount").height();
            if(pageY - (scrollY+screenY) < 100 ){
                if(self.container.hasClass("done")){
                    return;
                }
                //splice返回的是截取了元素的数组  不能将self.results赋值给一个新数组  因为当新数组被改变的时候 self.results也是会被改变的
                var nowResult = self.results.splice(0,2);
                self.onLoad(nowResult);
                index += 2;
            }
        })
    //    点击各商品信息 进入每个商品的详情
        $(".inland-content ul").on("click",".inter",function(event){
            var inters = window.localStorage;
            inters.index = $(event.target).parent().parent().parent().index()+20;
        })
    },
    //    封装ajax函数
    /**
     *
     * @param index  截取的位置
     * @param num  截取的长度
     */
    ajax: function (start,num) {
        // var container = $(".inland-content ul");
        var self = this;
        $.ajax({
            type: "get",
            data: {},
            url: "http://mmb.ittun.com/api/getinlanddiscount",
            beforeSend: function () {
               self.container.addClass("done");
            },
            success: function (respond) {
                self.results = respond.result;
                //将图片的信息放在一个数组中
                $.each(respond.result,function(index,ele){
                    self.arr.push(ele.productImg);
                });
                respond.result = respond.result.splice(start,num);
                self.onLoad(respond.result);
            }
        })
    },
//    封装加载的函数
    onLoad:function(respond){
        var self = this;
        this.container.addClass("done");
        var html = template("Content",{items: respond});
        this.container.append(html);
        var inter = $(".inter-er");
        inter.each(function(index,item){
            if(!$(item).hasClass("do")){
                $(item).prepend(self.arr[index]);
                $(item).addClass("do");
            }
        })
        this.container.removeClass("done");
    }
    }
