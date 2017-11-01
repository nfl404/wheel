/**
 * Created by d on 2015/7/4.
 */
tapt1('#index-banner')
tabcarl('#index-banner')
function tapt1(obj){
    var i=0;
    var last=$(obj+' .banner-item').size()-1;
    $(obj+' .right').click(function(){
        tapadd();
    })
    $(obj+' .left').click(function(){
        tapjian();
    });
    $(obj+' .carousel-indicators li').click(function(){
        i=$(this).index();
        tapactive(i)
    })
    function tapadd(){
        i+=1;
        if(i>last){
            i=0;
        }
        tapactive(i)
    }
    function tapjian(){
        i-=1;
        if(i<0){
            i=last;
        }
        tapactive(i)
    }
    function tapactive(index){
        $('.carousel-indicators li').eq(index).addClass('active').siblings().removeClass('active');
        $("#index-banner .banner-item").eq(index).stop(true,false).animate({left:'100%'},1000,'easeInOutCubic').siblings().stop(true,false).animate({width:'0%'},995,'easeInOutCubic')

    }
}
function tabcarl(obj){
    var carli=$(obj+' .carousel-inner2 .banner-item');
    var movebox=$(obj+' .carousel-inner2');
    var carlnum=carli.size();
    movebox.css({width:100*carlnum+'%'});
    carli.css({width:100/carlnum+'%'});
    var movei=0;
//var timer=setInterval(carladd,3000);
    $(obj+' .carl-next').click(function(){

        carladd();
    })
    $(obj+' .carl-prev').click(function(){

        carljian();
    })
    function carladd(){
        movei+=1;
        if(movei>carlnum-1){
            var left=-carli.width()*movei;
            carli.eq(0).css({position:'relative',left:-left});
            movebox.stop().animate({left:left},2000,'easeInOutCubic',function(){
                $(this).css({left:0});
                carli.eq(0).css({position:'static'})
            });
            movei=0;

        }else{
            var left=-carli.width()*movei;
            movebox.stop().animate({left:left},2000,'easeInOutCubic');
        }

    }
    function carljian(){
        movei-=1;
        if(movei<0){
            var left=-carli.width()*movei;
            carli.eq(carlnum-1).css({position:'relative',right:carli.width()*(carlnum)});
            movebox.stop().animate({left:left},2000,'easeInOutCubic',function(){
                $(this).css({left:-carli.width()*(carlnum-1 )})
                carli.eq(carlnum-1).css({position:'static'})
            });
            movei=carlnum-1;

        }else{
            var left=-carli.width()*movei;
            movebox.stop().animate({left:left},2000,'easeInOutCubic');
        }

    }
}
