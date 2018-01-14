/**
 * Created by 123 on 2017/8/8.
 */
var k=$(".ban-lt .ban-lt-top .ban-lun1 ul li").index();
var len=$(".ban-lt .ban-lt-top .ban-lun1 ul li").length;
var timer1=null;
$(".ban-lt .ban-lt-top .ban-lun1 ul li").mouseover(function(){
    clearTimeout(timer1);
    kk=$(this);
    timer1=setTimeout(function(){
        kk.addClass("col").siblings().removeClass("col");
        k=kk.index();
        $(".ban-lt .ban-lt-top .ban-lun1 img").hide().eq(k).show()
    },200)
});
function right(){
    k++;
    if(k>len-1){
        k=0;
    }
    $(".ban-lt .ban-lt-top .ban-lun1 img").hide().eq(k).show()
    $(".ban-lt .ban-lt-top .ban-lun1 ul li").removeClass("col").eq(k).addClass("col")
}
$(".ban-lt .ban-lt-top .ban-lun1 .click .next").click(function(){
    right();
});
$(".ban-lt .ban-lt-top .ban-lun1 .click .prev").click(function(){
    k--;
    if(k<0){
        k=len-1;
    }
    $(".ban-lt .ban-lt-top .ban-lun1 img").hide().eq(k).show()
    $(".ban-lt .ban-lt-top .ban-lun1 ul li").removeClass("col").eq(k).addClass("col")
});
var timer=setInterval(right,900);
$(".ban-lt .ban-lt-top .ban-lun1").hover(function(){
    clearInterval(timer);
},function(){
        timer=setInterval(right,900)
});



var r=$(".ban-lt .ban-lt-bot .ban-lun2 ol li").index();
var len1=$(".ban-lt .ban-lt-bot .ban-lun2 ol li").length;
var timer2=null;
$(".ban-lt .ban-lt-bot .ban-lun2 ol li").mouseover(function(){
    clearTimeout(timer2);
    rr=$(this);
    timer2=setTimeout(function(){
        rr.addClass("col").siblings().removeClass("col");
        r=rr.index();
        $(".ban-lt .ban-lt-bot .ban-lun2 ul li").hide().eq(r).show()
    },200)
});
function right1(){
    r++;
    if(r>len1-1){
        r=0;
    }
    $(".ban-lt .ban-lt-bot .ban-lun2 ul li").hide().eq(r).show();
    $(".ban-lt .ban-lt-bot .ban-lun2 ol li").removeClass("col").eq(r).addClass("col")
}
$(".ban-lt .ban-lt-bot .ban-lun2 .click .next").click(function(){
    right1();
});
$(".ban-lt .ban-lt-bot .ban-lun2 .click .prev").click(function(){
    r--;
    if(r<0){
        r=len-1;
    }
    $(".ban-lt .ban-lt-bot .ban-lun2 ul li").hide().eq(r).show()
    $(".ban-lt .ban-lt-bot .ban-lun2 ol li").removeClass("col").eq(r).addClass("col")
});
var timer3=setInterval(right1,900);
$(".ban-lt .ban-lt-bot .ban-lun2").hover(function(){
    clearInterval(timer3);
},function(){
    timer3=setInterval(right1,900)
});
