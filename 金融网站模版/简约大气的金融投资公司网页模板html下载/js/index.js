/*logo从上部划出*/
$(function(){
	/*$(".icons img").animate({"width":"150px"},5000);*/
/*	setInterval(function(){
		$(".icons img").hover(function(){
		$(".icons img").stop(true,true).animate({"width":"170px"},1000);
		$(".icons img").stop(true,true).animate({"width":"150px"},1000);
	},2000);		
	},4000);
	*/
	$(".logo img").animate({"margin-top":"14px"},1000);
	$(".banner img").animate({"margin":"90px auto"},1000);
	setInterval(function(){
		$(".logo img,.title img,.title02 img,.title03 img").animate({opacity:"0"},1000);
		$(".logo img,.title img,.title02 img,.title03 img").animate({opacity:"1"},1000);		
	},4000);
	
});

//搜索框特效
$(document).ready(function(e) {
	$("input,textarea").focus(function(){//获得焦点
		var $txt=$(this).val();
		if($txt==this.defaultValue/*取得前面value里的值*/){
			$(this).val("");
			}
		});
	$("input,textarea").blur(function(){//失去焦点
		var $txt=$(this).val();
		if($txt==""){
			$(this).val(this.defaultValue);
		}	
	});
});
/*图片360度旋转*/
/*(function( $ ) {
    $.fn.myrotate = function() {
        var img = this.find("img");
        var imgpos = img.position();
        var x0, y0;
         
        $(window).load(function() {
            img.removeAttr("width"); 
            img.removeAttr("height");
 
            x0 = imgpos.left + (img.width() / 2);
            y0 = imgpos.top + (img.height() / 2);
        });
         
         
        var x, y, x1, y1, drag = 0;
         
        img.css({
            "cursor": "pointer",
            "position": "relative"
        });
         
        img.mousemove(function(e) {
            x1 = e.pageX;
            y1 = e.pageY;
            x = x1 - x0;
            y = y1 - y0;
 
            r = 360 - ((180/Math.PI) * Math.atan2(y,x));
 
            if (drag == 1) {
                img.css("transform","rotate(-"+r+"deg)");
                img.css("-moz-transform","rotate(-"+r+"deg)");
                img.css("-webkit-transform","rotate(-"+r+"deg)");
                img.css("-o-transform","rotate(-"+r+"deg)");
            }
        });
         
        img.mousedown(function() {
            if (drag == 0) {
                drag = 1;
                img.css("-webkit-box-shadow", "0 0 5px #999");
                img.css("-moz-box-shadow", "0 0 5px #999");
                img.css("box-shadow", "0 0 5px #999");
            } else {
                drag = 0;
                img.css("-webkit-box-shadow", "0 0 2px #999");
                img.css("-moz-box-shadow", "0 0 2px #999");
                img.css("box-shadow", "0 0 2px #999");
            }
        });
         
        img.mouseleave(function() {
            drag = 0;
        });
    };
})( jQuery );*/
/*$(function(){
	$(".nav ul li").mouseenter(function(){
				$("#slider").animate({
					left:$(this).offset().left-$('li').eq(0).offset().left,				
				},50);
				$("#slider").css({		
					width:$(this).width(),
				});	

			});
			
			$(".nav ul").mouseleave(function(){
				$("#slider").css({
					width:'90',
				});
				$("#slider").animate({
					left:"406",
				},200);
			});
});*/

/*控制图片旋转*/
jQuery.fn.rotate = function(angle,whence) {  
    var p = this.get(0);  
  
    // we store the angle inside the image tag for persistence  
    if (!whence) {  
        p.angle = ((p.angle==undefined?0:p.angle) + angle) % 360;  
    } else {  
        p.angle = angle;  
    }  
  
    if (p.angle >= 0) {  
        var rotation = Math.PI * p.angle / 180;  
    } else {  
        var rotation = Math.PI * (360+p.angle) / 180;  
    }  
    var costheta = Math.round(Math.cos(rotation) * 1000) / 1000;  
    var sintheta = Math.round(Math.sin(rotation) * 1000) / 1000;  
    //alert(costheta+","+sintheta);  
   
    if (document.all && !window.opera) {  
        var canvas = document.createElement('img');  
  
        canvas.src = p.src;  
        canvas.height = p.height;  
        canvas.width = p.width;  
  
        canvas.style.filter = "progid:DXImageTransform.Microsoft.Matrix(M11="+costheta+",M12="+(-sintheta)+",M21="+sintheta+",M22="+costheta+",SizingMethod='auto expand')";  
    } else {  
        var canvas = document.createElement('canvas');  
        if (!p.oImage) {  
            canvas.oImage = new Image();  
            canvas.oImage.src = p.src;  
        } else {  
            canvas.oImage = p.oImage;  
        }  
  
        canvas.style.width = canvas.width = Math.abs(costheta*canvas.oImage.width) + Math.abs(sintheta*canvas.oImage.height);  
        canvas.style.height = canvas.height = Math.abs(costheta*canvas.oImage.height) + Math.abs(sintheta*canvas.oImage.width);  
  
        var context = canvas.getContext('2d');  
        context.save();  
        if (rotation <= Math.PI/2) {  
            context.translate(sintheta*canvas.oImage.height,0);  
        } else if (rotation <= Math.PI) {  
            context.translate(canvas.width,-costheta*canvas.oImage.height);  
        } else if (rotation <= 1.5*Math.PI) {  
            context.translate(-costheta*canvas.oImage.width,canvas.height);  
        } else {  
            context.translate(0,-sintheta*canvas.oImage.width);  
        }  
        context.rotate(rotation);  
        context.drawImage(canvas.oImage, 0, 0, canvas.oImage.width, canvas.oImage.height);  
        context.restore();  
    }  
    canvas.id = p.id;  
    canvas.angle = p.angle;  
    p.parentNode.replaceChild(canvas, p);  
}  
  
jQuery.fn.rotateRight = function(angle) {  
    this.rotate(angle==undefined?90:angle);  
}  
  
jQuery.fn.rotateLeft = function(angle) {  
    this.rotate(angle==undefined?-90:-angle);  
}  
//支持谷歌的写法
$(window).load(function(){ 
	/*$(".photowall ul li img").rotate(45);*/
	/*$(".").rotate(45).animate();*/
});
/*****************************************************************/
/*var allBrandAnimate = function(t,d){
	if(t.find('.brand b').length != 0){
		return false;
	}
	t.find('.photowall ul li').each(function(){
		$(this).append('<b>' + $(this).find('img').attr('alt') + '</b>')
	});
	t.find('..photowall ul li').hover(function(){
		$(this).find('img').stop().animate({'height':0,'top':'81px'},d,function(){
			$(this).hide().next().show();
			$(this).next().animate({
				'height':'163px',
				'top':'0'
			},d);
		});
	},function(){
		$(this).find('b').animate({'height':0,'top':'81px'},d,function(){
			$(this).hide().prev().show();
			$(this).prev().animate({
				'height':'163px',
				'top':'0'
			},d);
		});
	});
}
allBrandAnimate($('.photowall'),80);
*/