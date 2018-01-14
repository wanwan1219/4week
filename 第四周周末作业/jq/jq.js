/**
 * Created by 123 on 2017/8/12.
 */
$(".gg input").click(function(){
    $(".gg").hide()
});
$(".header-top  .nav li").hover(function(){
    $(this).addClass("col");
    $(this).find(".wzdh").slideDown(300);
},function(){
    $(this).removeClass("col");
    $(this).find(".wzdh").slideUp(300);
});
//banner list
$(".banner .list ul li").hover(function(){
    var m=$(this).index();
    $(".banner .list ol").hide().eq(m).show();
},function(){
    $(".banner .list ol").hide();
});
//banner lun
(function(){
    var index=0;
    var len=$(".banner .banner-lun .photo ul li").length;
    var arrC=["#9A1DF3","#3438F1","#E2AD4D","#40B0F8","#9927B3","#498DEF","#1A0D04","#50911B"];
    function right(){
        index++;
        if(index>len-1){
            index=0;
        }
        $(".banner .banner-lun .photo ul li").fadeOut().eq(index).fadeIn(200);
        $(".banner .yuan ol li").removeClass("col3").eq(index).addClass("col3");
        $(".banner").css({background:arrC[index]});
    }
    $(".banner .click .next").click(function(){
        right()
    });
    $(".banner .click .prev").click(function(){
        index--;
        if(index<0){
            index=len-1;
        }
        $(".banner .banner-lun .photo ul li").fadeOut().eq(index).fadeIn(200);
        $(".banner .yuan ol li").removeClass("col3").eq(index).addClass("col3");
        $(".banner").css({background:arrC[index]});
    });
    var timer1=null;
    $(".banner .yuan ol li").hover(function(){
        clearTimeout(timer1);
        var that=$(this);
        timer1=setTimeout(function(){
            index=that.index();
            $(".banner .banner-lun .photo ul li").fadeOut().eq(index).fadeIn(200);
            $(".banner .yuan ol li").removeClass("col3").eq(index).addClass("col3");
            $(".banner").css({background:arrC[index]});
        },200)
    });
    var timer=setInterval(right,2000);
    $(".banner .banner-lun").hover(function(){
        clearInterval(timer);
    },function(){
        timer=setInterval(right,2000)
    });
})();
//右侧滑动轮播
(function(){
    var len=$(".banner .user ul li").length;
    var hei=$(".banner .user ul li").height();
    var index=0;

    function top(){
        index++;
        if(index>len-1){
            index=1;
            $(".banner .user ul").css({top:0});
        }
        $(".banner .user ul").stop().animate({top:-hei*index},900);
    }
    var timer=setInterval(top,2000);
    $(".banner .user .hezi").hover(function(){
        clearInterval(timer);
    },function(){
        timer=setInterval(top,2000)
    })
})();