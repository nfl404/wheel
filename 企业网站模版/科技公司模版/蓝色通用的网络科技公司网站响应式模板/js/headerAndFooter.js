// JavaScript Document

//动态添加头部和尾部

$().ready(function(e) {
	//头部	
	$('head').append('<link href="css/kefu.css" type="text/css" rel="stylesheet">')
    $("#header").html(
		'<div class="header-first"><div class="header-top"><div class="container">欢迎您的到来！</div></div>'+
        	'<div class="container" style="height:80px; line-height:76px; position:relative;">'+
               ' <div class="row">'+
                	'<div class="nav-top" id="nav_top">'+
                    	'<span class="nav-btn">导航</span>'+
                       ' <ul class="toolbar">'+
                            '<li><a href="index.html">首页</a></li>'+
                            '<li><a href="main-task.html">主营业务</a></li>'+
                            '<li><a href="main-activity.html">主要活动</a></li+>'+
                            '<li><a href="aboutUs.html">关于我们</a></li>'+
                            '<li><a href="connUS.html">联系我们</a></li>'+
                        '</ul>'+
                   '</div>'+
                   '<div class="logo img-first mg-xs-t12"><img src="images/logo.jpg" alt="官网logo" title="官网logo"></div>'+
               '</div>'+
            '</div>'+
        '</div>'
		) 
		
	//尾部	
    $("#footer").html(
		'<div class="go_top" id="go_top" style="display: none;"></div>'+
        '<div class="footer-first font12 footer-flow">'+
        	'Copyright © 2005-2016 广东某某科技有限公司 版权所有'+
        '</div>'
	)
	
	//页面跳转后给导航栏添加激活样式
		var nc=pageName();
		//alert(nc)
		$('.toolbar li').find("a[href='"+nc+"']").addClass("active");
/*		if(nc.indexOf("ar") != -1){
		$('.toolbar li a').eq(0).addClass("active");
		}
*/		
	//客服qq
	$("body").append(
	         '<div id="floatTools" class="rides-cs">'+
            '<div class="floatL"><div class="visible-xs"><span class="color-fff aFloatTools_Show">客服Q展开</span><span class="color-fff aFloatTools_Hide" style="display:none">客服Q收起</span></div>'+
            '<a style="display:block" class="btnOpen hidden-xs aFloatTools_Show" title="查看在线客服" style="top:20px" href="javascript:void(0);">展开</a>'+
            '<a style="display:none" class="btnCtn hidden-xs aFloatTools_Hide"  title="关闭在线客服" style="top:20px" href="javascript:void(0);">收缩</a>'+
            '</div>'+
            '<div id="divFloatToolsView" class="floatR divFloatToolsView" style="display: none;width: 140px;">'+
            '<div class="cn">'+
              '<h3 class="titZx" style="margin:0;">在线客服</h3>'+
              '<ul>'+
                '<li><span>客服1</span> <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=88888888&site=qq&menu=yes"><img border="0" src="images/online.png" alt="点击这里给我发消息" title="点击这里给我发消息"/></a> </li>'+
                '<li><span>客服2</span> <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=88888888&site=qq&menu=yes"><img border="0" src="images/online.png" alt="点击这里给我发消息" title="点击这里给我发消息"/></a> </li>'+
                '<li style="border:none;"><span>电话：4008-8888-888</span> </li>'+
             ' </ul>'+
            '</div>'+
            '</div>'+
        '</div>')
	//客服qq
	$(function(){
		$(".aFloatTools_Show").click(function(){
			//alert("11")
			$('.divFloatToolsView').animate({width:'show',opacity:'show'},100,function(){$('.divFloatToolsView').show();});
			$('.aFloatTools_Show').hide();
			$('.aFloatTools_Hide').show();				
		});
		$(".aFloatTools_Hide").click(function(){
			//alert("22")
			$('.divFloatToolsView').animate({width:'hide', opacity:'hide'},100,function(){$('.divFloatToolsView').hide();});
			$('.aFloatTools_Show').show();
			$('.aFloatTools_Hide').hide();	
		});
	});
	
	//移动端 首页导航和文档中心-文章导航伸缩功能
	var win_w=$(window).width();
	if(win_w<767){
		$("#nav_top ul").css("display","block").hide(); //解决导航第一次点击出现闪屏的现象，可能是因为之前使用了display:none;这个样式，造成初次点击时候，页面同时css和js同时变化，所以有闪屏。
		
		$("#nav_top").on("click",this,function(){//alert(111)		
			$("#nav_top ul").slideToggle();
			//e.preventDefault();
		})
		$("#myScrollspy").on("click",this,function(){//alert(1133)
			$("#myScrollspy ul").slideToggle();
			//e.preventDefault();
		})
	}
	
	//返回顶部
	$(window).scroll(function(){
	    if($(window).scrollTop()>800)
	    $("#go_top").show();  
	    else 
		$("#go_top").hide(); 
	   });
	$("#go_top").click(function(){
		 $('body,html').animate({ scrollTop: 0 }, 500)
	}) 

	$("#testDr a").click(function(){
		$("#testDr a").removeClass("active");
		$(this).addClass("active");
	})
	

});	
	//窗体大小改变--刷新页面 jq
	/*$(window).resize(function(){
		//alert("窗体大小改变了！");
		location.reload()
		//这里你可以尽情的写你的刷新代码！
	});*/
	//窗体大小改变--刷新页面 js
	window.onresize =function(){window.location.reload();}

	//导航栏
	/*跳转添加导航样式 方法1*/
	function pageName()
	{
	 var strUrl=location.href;
	 var arrUrl=strUrl.split("/");
	 var strPage=arrUrl[arrUrl.length-1];
	 return strPage;
	}
	
	/*跳转添加导航样式 方法2
	function getPar(name)
	{
		 var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
		 var r = window.location.search.substr(1).match(reg);
		 if(r!=null)return  unescape(r[2]); return null;
	}
	*/
	
	
	/*跳转添加导航样式 方法3*/
	
	//checkbar();
	/*
	function checkbar(){
		if(window.location.href.indexOf("index")>0){
			
			$('.toolbar li a:eq(0)').addClass("active");
		}	
		if(window.location.href.indexOf("about")>0){
			$('.toolbar li a:eq(1)').addClass("active");
		}
		if(window.location.href.indexOf("pro")>0){
			$('.toolbar li a:eq(2)').addClass("active");
		}
		if(window.location.href.indexOf("Door")>0){
			$('.toolbar li a:eq(3)').addClass("active");
		}
		if(window.location.href.indexOf("document")>0){
			$('.toolbar li a:eq(4)').addClass("active");
		}
		if(window.location.href.indexOf("conn")>0){
			$('.toolbar li a:eq(5)').addClass("active");
		}
	}
	*/

