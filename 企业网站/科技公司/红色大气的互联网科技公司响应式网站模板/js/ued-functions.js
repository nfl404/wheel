/****************************************************************
 *																*		
 * 						      素材火							*
 *                        www.sucaihuo.com							*
 *       		  努力创建完善、持续更新插件以及模板			*
 * 																*
****************************************************************/
$(function(){
	
	//设置第一屏高度
	var iHeight = $(window).height()-120;
	var iWidth =  $(window).width();
	if (iHeight >= 960 )
	{
		$("#Slider-index > div.slick").css('height',960);
		$("#Slider-index > div.slick > div.slidbox").css('height',960);
	}else if (iHeight <= 520)
	{
		$("#Slider-index > div.slick").css('height',520);
		$("#Slider-index > div.slick > div.slidbox").css('height',520);
	}else{
		$("#Slider-index > div.slick").css('height',iHeight);
		$("#Slider-index > div.slick > div.slidbox").css('height',iHeight);
	}
	if(iWidth < 800){
		$("#Slider-index > div.slick").css('height',360);
		$("#Slider-index > div.slick > div.slidbox").css('height',360);
	}
	if(iWidth < 321){
		$("#Slider-index > div.slick").css('height',270);
		$("#Slider-index > div.slick > div.slidbox").css('height',270);
	}
	//启动滚屏
	$('.slick').slick({
		dots: true,
		arrows:false,
		autoplay:true,
		autoplaySpeed:8000
	});
	
	//变化头部导航样式
	$(window).scroll(function () { 
		st = $(window).scrollTop(); 
		if (st>0)
		{
			$("#Fixheader").addClass("Ued-header-scroll");
		}else
		{
			$("#Fixheader").removeClass("Ued-header-scroll");
		}
	});

	//滑动菜单
	var slideout = new Slideout({
	        'panel': document.getElementById('main'),
	        'menu': document.getElementById('menu'),
	        'padding': 256,
			'side':'right',
			'touch':false,
	        'tolerance': 70
			
	      });

	     $('.toggle-btn').click(function() {
	        slideout.toggle();
	      });

	      $('.menu').click(function(eve) {
	        if (eve.target.nodeName === 'A') { slideout.close(); }
	      });

	     function aload(t){"use strict";t=t||window.document.querySelectorAll("[data-aload]"),void 0===t.length&&(t=[t]);var a,e=0,r=t.length;for(e;r>e;e+=1)a=t[e],a["LINK"!==a.tagName?"src":"href"]=a.getAttribute("data-aload"),a.removeAttribute("data-aload");return t}
	    
		window.onload = function(){
	    	aload();
	    }
		
		

});
