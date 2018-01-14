/**
 * Created by 123 on 2017/8/11.
 */
$(".header ul li").hover(function(){
    $(this).find("div").slideDown()
},function(){
    $(".menu").hide()
});
var len=$(".ban-lt .lunbo ul li").length;
var wid=$(".ban-lt .lunbo ul li").width();
var index=0;  /*图片索引*/
var k=0;   /*圆点索引*/
var fa=1;
function right(){
    if(fa){
        fa=false;
        index++;
        if(index>len-1){
            index=1;
            $(".ban-lt .lunbo ul").css({left:0});
        }
        $(".ban-lt .lunbo ul").stop().animate({left:-wid*index},900,function(){
            fa=1;
        });
        k++;
        if(k>len-2){
            k=0;
        }
        $(".ban-lt .zi ol li").removeClass("col").eq(k).addClass("col");
        $(".ban-lt .zi span").html("一方水土一方家常，酸辣小菜幻想清晨的味蕾"+(k+1))
    }
}
$(".ban-lt .click .next").click(function(){
    right()
});
$(".ban-lt .click .prev").click(function(){
    if(fa){
        fa=false;
        index--;
        if(index<0){
            index=len-2;
            $(".ban-lt .lunbo ul").css({left:-(index+1)*wid});
        }
        $(".ban-lt .lunbo ul").stop().animate({left:-index*wid},900,function(){
            fa=1;
        });
        k--;
        if(k<0){
            k=len-2;
        }
        $(".ban-lt .zi ol li").removeClass("col").eq(k).addClass("col");
        $(".ban-lt .zi span").html("一方水土一方家常，酸辣小菜幻想清晨的味蕾"+(k+1))
    }

});
$(".ban-lt .zi ol li").click(function(){
    k=$(this).index();
    index=$(this).index();
    $(".ban-lt .zi ol li").removeClass("col").eq(k).addClass("col");
    $(".ban-lt .lunbo ul").stop().animate({left:-wid*index},900);
    $(".ban-lt .zi span").html("一方水土一方家常，酸辣小菜幻想清晨的味蕾"+(k+1))
});
var timer=setInterval(right,1000);
$(".ban-lt").hover(function(){
    clearInterval(timer)
},function(){
    timer=setInterval(right,1000)
});

//footer
$(".footer .inner p img").click(function(){
    $(".footer .inner .hide").slideToggle();
});