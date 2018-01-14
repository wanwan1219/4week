/**
 * Created by 123 on 2017/8/10.
 */
//console.log($(".banner-top .lunbo img").length);
var len=$(".banner-top .lunbo img").length; /*获取上部轮播的个数*/
var wid=$(".banner-top .lunbo img").width();/*获取上部轮播图的每张图片的宽度*/
var index=0; /*图片的索引*/
var k=0; /*小圆点的索引*/
var fa=true; /*节流阀*/
function right(){  /*封装 向右的函数*/
    if(fa){ /*fa存在且值不为0 和 false 和 undefined 和 null 就可以执行内部代码*/
        fa=false;  /*节流*/
        k++;
        if(k>len-2){ /*小圆点比图片少一个 */
            k=0;
        }
        $(".banner-top ul li").removeClass("col").eq(k).addClass("col");
        index++;/*索引值加1 换到下一张*/
        if(index>len-1){
            index=1; /*为了后面直接到第二张图片*/
            $(".banner-top .lunbo").css({left:0}) ;/*瞬间到第一张*/
        }
        $(".banner-top .lunbo").stop().animate({left:-wid*index},500,function(){ /*到第二张*/
            fa=1; /*回调函数 在500毫秒执行完后才会触发回调函数 才能再执行k++ 只要不是那四个就可以 任意哪个值都可以*/
        });
    }
}
$(".banner-top ul li").click(function(){  /*点击小圆点*/
    index=$(this).index(); /*获取当前元素的索引*/
    k=$(this).index();
    $(".banner-top ul li").removeClass("col").eq(k).addClass("col");
    $(".banner-top .lunbo").stop().animate({left:-wid*index},500)
});
$(".banner-top .click .prev").click(function(){
    if(fa==true){
        fa=false;
        k--;
        if(k<0){
            k=len-2
        }
        $(".banner-top ul li").removeClass("col").eq(k).addClass("col");
        index--;
        if(index<0){
            index=len-2;
            $(".banner-top .lunbo").css({left:-wid*(len-1)})
        }
        $(".banner-top .lunbo").stop().animate({left:-wid*index},500,function(){
            fa=true
        });
    }
});
$(".banner-top .click .next").click(function () {
    right()
});
var timer=setInterval(right,1000);
$(".banner-top").hover(function(){
    clearInterval(timer)
},function(){
    timer=setInterval(right,1000)
});




var len1=$(".banner-bot .box ul li").length;
var wid1=$(".banner-bot .box ul li").width();
var index1=0;
var k1=0;
function right1(){
    k1++;
    if(k1>len1-2){
        k1=0;
    }
    $(".banner .zi h5").html((k1+1)+'/'+(len1-1));
    $(".banner-bot ol li").removeClass("col").eq(k1).addClass("col");
    index1++;
    if(index1>len1-1){
        index1=1;
        $(".banner-bot .box ul").css({left:0})
    }
    $(".banner-bot .box ul").stop().animate({left:-wid1*index1},500);
}
$(".banner-bot ol li").click(function(){
    index1=$(this).index();
    k1=$(this).index();
    $(".banner .zi h5").html((k1+1)+'/'+(len1-1));
    $(".banner-bot ol li").removeClass("col").eq(k1).addClass("col");
    $(".banner-bot .box ul").stop().animate({left:-wid1*index1},500)
});
$(".banner-bot .click .prev").click(function(){
    k1--;
    if(k1<0){
        k1=len1-2
    }
    $(".banner .zi h5").html((k1+1)+'/'+(len1-1));
    $(".banner-bot ol li").removeClass("col").eq(k1).addClass("col");
    index1--;
    if(index1<0){
        index1=len1-2;
        $(".banner-bot .box ul").css({left:-wid1*(len1-1)})
    }
    $(".banner-bot .box ul").stop().animate({left:-wid1*index1},500);
});
$(".banner-bot .click .next").click(function () {
    right1()
});
var timer1=setInterval(right1,1000);
$(".banner-bot").hover(function(){
    clearInterval(timer1)
},function(){
    timer1=setInterval(right1,1000)
});


