//menu

$(function() {  
	$("header ul li").mouseover(function(){
		$(this).addClass("on");

	});
	$("header ul li").mouseout(function(){
		$(this).removeClass("on");
  	});
	$(".weixin span").mouseover(function(){
		$(this).next("p").stop(true,true).slideDown();
	});
	$(".weixin span").mouseout(function(){
		$(this).next("p").stop(true,true).hide();
  	});
});
$(function(){	
	$("header ul li").find(".menu .menu_left a:eq(0)").addClass("hover");
	$("header ul li").find(".menu .menu_right dl:eq(0)").show();
	$('header ul li .menu .menu_left a').hover(function(){
		$(this).addClass('hover').siblings().removeClass('hover');
		$(this).parents(".menu").find('.menu_right dl:eq('+$(this).index()+')').show().siblings().hide();	
	})
})
$(function(){	
	$(".swt-en").click(function(){
		$(this).stop(true,true).animate({"right": "-40px"}, 300);
		$(".swt-en2").stop(true,true).animate({"right": "10px"}, 300);
	});
	$(".swt-en2-close img").click(function(){
		$(".swt-en").stop(true,true).animate({"right": "10px"}, 300);
		$(".swt-en2").stop(true,true).animate({"right": "-143px"}, 300);
	});

})


//资讯中心

$(function() {  
	$(".news li").hover(function(){
		$(this).find(".news_1").stop(true,true).toggle(0);
		$(this).find(".news_2").stop(true,true).slideToggle(0);
	});
});
$(".news li:first").addClass("news_fr")
$(".contact1 dd:nth-child(3n)").after("<dt></dt>");
$(function(){	
	$(".product1 li:eq(0)").addClass("hover");
	$(".product2 .product2_1:eq(0)").show();
	$('.product1 li').hover(function(){
		$(this).addClass('hover').siblings().removeClass('hover');
		$('.product2 .product2_1:eq('+$(this).index()+')').show().siblings().hide();	
	})
})
if($("body").height()<$(window).height()){
	$("footer").addClass("foot-hover");
}
$(function() {  
    $('.rounded').each(function() {  
        PIE.attach(this);  
    });  
});