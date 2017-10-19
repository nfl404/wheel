
$().ready(function(e) {
	

			/*首页-登录页面和注册页面*/
			$("#login").click(function(){	
					
				$("#all-over").show();
				$("#login-page").show();
				var win_w=$(window).width();
				var win_h=$(window).height();
				var page_l=(win_w-450)/2;
				var page_t=(win_h-550)/2;
				//alert(page_l)
				//alert(page_t)
				$("#login-page").css("left",page_l+"px");
				$("#login-page").css("top",page_t+"px");
				//alert($(window).height())
				
			});	
			$("#register").click(function(){	
					
				$("#all-over").show();
				$("#login-page").show();
				var win_w=$(window).width();
				var win_h=$(window).height();
				var page_l=(win_w-450)/2;
				var page_t=(win_h-550)/2;
				//alert(page_l)
				//alert(page_t)
				$("#login-page").css("left",page_l+"px");
				$("#login-page").css("top",page_t+"px");
				$("#login-main").hide();
				$("#reg-main").show();	
			});	
			$("#forget-psw").click(function(){	
					
				$("#all-over").show();
				$("#login-page").show();
				var win_w=$(window).width();
				var win_h=$(window).height();
				var page_l=(win_w-450)/2;
				var page_t=(win_h-550)/2;
				//alert(page_l)
				//alert(page_t)
				$("#login-page").css("left",page_l+"px");
				$("#login-page").css("top",page_t+"px");
				$("#login-main").hide();
				$("#reg-main").hide();	
				$("#forget-psw-main").show();	
			});	
			$("#close-login,#service-protocol").click(function(){				
				$("#all-over").hide();
				$("#login-page").hide();	
			});	
			$("#goto-login,#goto-login2").click(function(){				
				$("#login-main").show();
				$("#reg-main").hide();	
				$("#forget-psw-main").hide();	
			});	

			$("#goto-reg").click(function(){				
				$("#login-main").hide();
				$("#reg-main").show();	
			});	

});

