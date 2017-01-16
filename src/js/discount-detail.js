/**
 * Created by aixinhuang on 2016/12/30 0030.
 */
var index = window.localStorage.index;
console.log(index);
function detail(){
//    渲染页面
    this.renderDom();
    this.bind()
}
detail.prototype = {
    constructor:detail,
//    渲染页面
    renderDom:function(){
        this.ajax();
    },
//    绑定事件
    bind:function(){

    },
//    封装ajax函数
    ajax:function(){
        $.ajax({
            type:"get",
            data:{},
            url:"http://mmb.ittun.com/api/getmoneyctrlproduct?productid="
            +index,
            success:function (respond) {
                var result = respond.result;
                console.log(result);
                var smallImg = result[0].productImgSm;
                var comment = result[0].productComment;
                var html = template("detail",{items:result});
                var detail = $(".discount-detail .detail");
                detail.append(html);
                $(".li-detail").append(smallImg);
                $(".smallImg").append(smallImg);
                $(".new-comment").append(comment);
            },
            error:function(){
            }
        })
    }
}