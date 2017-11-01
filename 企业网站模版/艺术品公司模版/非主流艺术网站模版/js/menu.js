// JavaScript Document






/****************导航***************/
$(window).load(function(){
	var _wid = $(window).innerWidth();
	$(".nav_sec").height(_wid*165/1903+170);
	
	$(window).resize(function(){
		_wid = $(window).innerWidth();
		$(".nav_sec").height(_wid*165/1903+170);
	});
	
	//初始化
	var _left = $(".head_nav ul a").eq(0).offset().left+$(".head_nav ul a").eq(0).find("li").width()/2;
	$(".head_nav_jt").css({left:_left});
	
	
	//导航hover事件
	$(".head_nav ul li").hover(function(){
		var _inds = $(this).parent().index();
		$(".nav_sec").slideDown(300);	
		_left = $(this).offset().left+$(this).width()/2;
		$(".head_nav_jt").stop(true).animate({left:_left},300);
		
		$(".nav_sec ul li").hide();
		$(".nav_sec ul li").eq(_inds).show();
	});
	
	//只有鼠标离开顶部，才让导航消失
	$(".head_mian").bind('mouseleave',function(){
		$(".nav_sec ul li").hide();	
		$(".nav_sec").slideUp(300);	
	});
	
	//移到产品按钮和head_nav_hid上，让导航消失
	$(".head_left,.head_nav_hid").hover(function(){
		$(".nav_sec ul li").hide();	
		$(".nav_sec").slideUp(300);		
	})
});


/****************导航***************/