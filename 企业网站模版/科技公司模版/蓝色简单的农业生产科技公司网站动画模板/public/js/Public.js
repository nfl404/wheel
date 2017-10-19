var bottomHeight=53,minWidth=1200,minHeight=880,boxW=0,cindex=0,offset=3,coffset=0,wheelSpeed=1000,tipsMc,aniArr=new Array(),defValue=new Array();
$(function(){
	loadingPlay(".aniParentBox");
	windowResize();
	$(window).resize(function(){windowResize();});
	
    $(".aniBoxs").bind("scrollOver",function(){
    	$(document).bind("keydown",function(event){
    		if(event.keyCode==37)cindex--;
    		if(event.keyCode==39)cindex++;
				if(cindex<0) {
					cindex=0;
					return;
				}
				if(cindex>5) 
				{
					cindex=5;
					return;
				}
				playWheel(cindex,wheelSpeed);
    	});
    });
     	
//  if($(document).find(".closeNav").length>0){
//  	$(".closeNav").toggle(function(){
//  		$(".navBox").stop().animate({"height":0},"fast");
//  		$(this).stop().animate({"bottom":80},"fast");
//  		$(this).addClass("closeNav_on");
//  		$(this).html("点击显示");
//  	},function(){
//  		$(".navBox").stop().animate({"height":175},"fast");
//  		$(this).stop().animate({"bottom":190},"fast");
//  		$(this).removeClass("closeNav_on");
//  		$(this).html("点击隐藏");
//  	});
//  };
//  if($(document).find(".tipsInfo").length>0){
//  	var sh=180,sum=sh
//  	tipsMc=setInterval(function(){
//  		$(".tipsInfo").css({"background-position-y":-sum});
//  		sum=(sum+sh)%(sh*6);
//  	},150);
//  };
    if($(document).find(".aniBoxs").length>0){
    	$(".aniBoxs").find(".aniBox").each(function(i,e){
    		$(e).bind("scrollOver",function(){
    			aniArr[i]();
    		});
    		$(e).find(".tips").hover(function(){
	    			$(this).stop().animate({"opacity":1,"width":191,"height":154},"fast");
	    			$(this).find(".tcontent").stop().animate({"opacity":1,"width":139,"height":103},"fast");
	    			$(this).find(".tcontent").css("padding",20);
	    			var t_index=$(e).find(".tips").index(this);
	    			$(e).find(".tips").each(function(ti,ts){
	    				if(ti!=t_index){
	    					if($(ts).css("opacity")==1)	$(ts).click();
	    				}
	    			});
	    		},
    			function(){
	    			$(this).stop().animate({"opacity":0.5,"width":40,"height":40},"fast");
	    			$(this).find(".tcontent").stop().animate({"opacity":1,"width":0,"height":0},"fast");
	    			$(this).find(".tcontent").css("padding",0);
    		});
    	});
    };
    if($(document).find(".navContent").length>0){
    	$(".navContent").find("dd").each(function(i,e){
    		$(e).bind("click",function(){
    			playWheel(i,wheelSpeed);
    			cindex=i;
    		});
    	});
    }
});

window.onload=function(){
	$(".loading").fadeOut(1000,function(){
//		$(".loading").remove();
//		setTimeout(function(){
//			$(".tipsInfo").fadeOut("slow",function(){$(".tipsInfo").remove()});
//			window.clearInterval(tipsMc);
//		},5000);
		initAni();
		$(".aniBoxs").find(".aniBox").eq(0).trigger("scrollOver");
	});	
}

window.onresize=windowResize;

function windowResize(){
	if($(window).width()>minWidth)
		$(".indexBody").css("overflow-x","hidden");
	else
		$(".indexBody").css("overflow-x","auto");
	if($(window).height()>minHeight)
		$(".indexBody").css({"overflow-y":"hidden"});
	else
		$(".indexBody").css({"overflow-y":"auto"});
	boxW=$(window).width();
	if(boxW<minWidth) boxW=minWidth;
	var boxH=$(window).height()-bottomHeight;
	if(boxH<minHeight) boxH=minHeight;
	
	$(".aniParentBox").css({"width":boxW,"height":boxH});
	$(".aniBoxs").css({"width":boxW*$(".aniBoxs").find(".aniBox").length,"height":boxH,"margin-left":-boxW*cindex});
	$(".aniBox").css({"width":boxW,"height":boxH})
}
function playWheel(index,wheelSpeed){
	$(document).unbind("keydown");
	coffset=0;	
	var pindex=index;
	if(parseFloat($(".aniBoxs").css("margin-left").replace("px",""))>-boxW*index)
		pindex-=1;
	else
		pindex+=1;
	$(".aniBoxs").find(".aniBox").eq(index).css({"opacity":1});
	$(".aniBoxs").find(".aniBox").eq(pindex).animate({"opacity":0.2},wheelSpeed);
	$(".aniBoxs").animate({"margin-left":-boxW*index},wheelSpeed,function(){$(this).find(".aniBox").eq(index).trigger("scrollOver");});
}
function initAni(){
	$(".aniBoxs").find(".aniBox").each(function(i,e){
		var jsonObjArr=new Array();
		$(e).find(".aniItem").each(function(si,se){
			var jObj=new Object();
			jObj.left=parseInt($(se).css("left").replace("px",""));
			jObj.right=parseInt($(se).css("right").replace("px",""));
			jObj.top=parseInt($(se).css("top").replace("px",""));
			jObj.bottom=parseInt($(se).css("bottom").replace("px",""));
			jObj.width=parseInt($(se).css("width").replace("px",""));
			jObj.height=parseInt($(se).css("height").replace("px",""));
			jsonObjArr.push(jObj);
		});
		jsonObjArr.once=true;
		defValue.push(jsonObjArr);
	});
};
aniArr[0]=function(){
	var aniObj=$(".aniBoxs").find(".aniBox").eq(0);
	var initValue=defValue[0];
	var setMove=100;
	if(initValue.once){
		var offset=50,aniTime=1000;
		$(aniObj).find(".aniItem").eq(1).css("left",initValue[1].left-offset);
		$(aniObj).find(".aniItem").eq(2).css("left",initValue[2].left-offset);
		$(aniObj).find(".aniItem").eq(3).css("top",initValue[3].top-offset);
		$(aniObj).find(".aniItem").eq(4).css("top",initValue[4].top+offset);
		$(aniObj).find(".aniItem").eq(5).css("left",initValue[5].left-offset);
		$(aniObj).find(".aniItem").eq(6).css("left",initValue[6].left+offset);
		
		$(aniObj).find(".aniItem").eq(1).delay(0).animate({"opacity":1,"left":initValue[1].left},aniTime);
		$(aniObj).find(".aniItem").eq(2).delay(0).animate({"opacity":1,"left":initValue[2].left},aniTime);
		$(aniObj).find(".aniItem").eq(3).delay(800).animate({"opacity":1,"top":initValue[3].top},aniTime);
		$(aniObj).find(".aniItem").eq(4).delay(800).animate({"opacity":1,"top":initValue[4].top},aniTime);
		$(aniObj).find(".aniItem").eq(5).delay(1000).animate({"opacity":1,"left":initValue[5].left},aniTime);
		$(aniObj).find(".aniItem").eq(6).delay(1000).animate({"opacity":1,"left":initValue[6].left},aniTime,function(){$(aniObj).trigger("aniOver");});
		initValue.once=false;
	}
	$(aniObj).bind("aniOver",function(){
		$(aniObj).mousemove(function(me){
			var x,y;
			$(aniObj).find(".aniItem").each(function(i,e){
				if(i==0){
					 x=me.pageX/$(aniObj).width()*0.5*setMove*0.8;
					 y=me.pageY/$(aniObj).height()*0.5*setMove*0.8;
				}
				if(i==1){
					 x=me.pageX/$(aniObj).width()*0.5*setMove*1.5;
					 y=me.pageY/$(aniObj).height()*0.5*setMove*1.5;
				}
				if(i==2){
					 x=me.pageX/$(aniObj).width()*0.5*setMove*0.5;
					 y=me.pageY/$(aniObj).height()*0.5*setMove*0.5;
				}
				if(i>2){
					 x=me.pageX/$(aniObj).width()*0.5*setMove*2;
					 y=me.pageY/$(aniObj).height()*0.5*setMove*2;
				}
				$(e).stop(true,false).animate({"top":initValue[i].top+y,"left":initValue[i].left+x,"bottom":initValue[i].bottom-y},50);
			});
		});
	});
	$(".navContent").find("dd").eq(0).addClass("on").siblings().removeClass("on");
	$(".navLineBox").find(".navLine_on").width($(".navContent").find("dd").eq(0).attr("data-lineW"));
};
aniArr[1]=function(){
	var aniObj=$(".aniBoxs").find(".aniBox").eq(1);
	var initValue=defValue[1];
	var setMove=100;
	if(initValue.once){
		var offset=50,aniTime=1000;
		$(aniObj).find(".hg1").css("top",initValue[3].top-offset);
		$(aniObj).find(".hg2").css("top",initValue[4].top+offset);
		$(aniObj).find(".img1").css("top",initValue[9].top-offset);
		$(aniObj).find(".img3").css("top",initValue[11].top+offset);
		$(aniObj).find(".img2").css("left",initValue[10].left-offset);
		$(aniObj).find(".img4").css("left",initValue[12].left+offset);
		
		
		$(aniObj).find(".aniItem").eq(3).delay(0).animate({"opacity":1,"top":initValue[3].top},aniTime);
		$(aniObj).find(".aniItem").eq(4).delay(0).animate({"opacity":1,"top":initValue[4].top},aniTime);
		$(aniObj).find(".aniItem").eq(5).delay(400).animate({"opacity":1,},aniTime);
		$(aniObj).find(".aniItem").eq(6).delay(800).animate({"opacity":1,},aniTime);
		$(aniObj).find(".aniItem").eq(7).delay(1200).animate({"opacity":1,},aniTime);
		$(aniObj).find(".aniItem").eq(8).delay(1400).animate({"opacity":1,},aniTime);
		$(aniObj).find(".aniItem").eq(9).delay(1600).animate({"opacity":1,"top":initValue[9].top},aniTime);
		$(aniObj).find(".aniItem").eq(10).delay(1600).animate({"opacity":1,"left":initValue[10].left},aniTime);
		$(aniObj).find(".aniItem").eq(11).delay(1600).animate({"opacity":1,"top":initValue[11].top},aniTime);
		$(aniObj).find(".aniItem").eq(12).delay(1600).animate({"opacity":1,"left":initValue[12].left},aniTime,function(){$(aniObj).trigger("aniOver");});
		initValue.once=false;
	}
	
	$(aniObj).bind("aniOver",function(){
		$(aniObj).mousemove(function(me){
			var x,y;
			$(aniObj).find(".aniItem").each(function(i,e){
				if(i==0){
					 x=me.pageX/$(aniObj).width()*0.5*setMove*0.5;
					 y=me.pageY/$(aniObj).height()*0.5*setMove*0.5;
				}
				if(i==1){
					 x=me.pageX/$(aniObj).width()*0.5*setMove*0.8;
					 y=me.pageY/$(aniObj).height()*0.5*setMove*0.8;
				}
				if(i>2&&i<9){
					 x=me.pageX/$(aniObj).width()*0.5*setMove*1.5;
					 y=me.pageY/$(aniObj).height()*0.5*setMove*1.5;
				}
				if(i>=9){
					 x=me.pageX/$(aniObj).width()*0.5*setMove*2;
					 y=me.pageY/$(aniObj).height()*0.5*setMove*2;
				}
				if(i!=2)$(e).stop(true,false).animate({"top":initValue[i].top+y,"left":initValue[i].left+x,"bottom":initValue[i].bottom-y},50);
			});
		});
	});
	$(".navContent").find("dd").eq(1).addClass("on").siblings().removeClass("on");
	$(".navLineBox").find(".navLine_on").width($(".navContent").find("dd").eq(1).attr("data-lineW"));
};

aniArr[2]=function(){
	var aniObj=$(".aniBoxs").find(".aniBox").eq(2);
	var initValue=defValue[2];
	var setMove=100;
	if(initValue.once){
		var offset=100,aniTime=1000;
		$(aniObj).find(".aniItem").eq(3).css("top",initValue[3].top+offset);
		$(aniObj).find(".txt2").css("top",initValue[4].top+offset*0.5);
		$(aniObj).find(".txt3").css("top",initValue[5].top+offset*0.5);
		$(aniObj).find(".txt4").css("top",initValue[6].top+offset*0.5);
		$(aniObj).find(".img1").css("top",initValue[7].top-offset);
		$(aniObj).find(".img2").css("left",initValue[8].left-offset);
		$(aniObj).find(".img3").css("top",initValue[9].top+offset);
		$(aniObj).find(".img4").css("left",initValue[10].left+offset);

		
		$(aniObj).find(".aniItem").eq(3).delay(0).animate({"opacity":1,"top":initValue[3].top},aniTime);
		$(aniObj).find(".aniItem").eq(4).delay(400).animate({"opacity":1,"top":initValue[4].top},aniTime);
		$(aniObj).find(".aniItem").eq(5).delay(800).animate({"opacity":1,"top":initValue[5].top},aniTime);
		$(aniObj).find(".aniItem").eq(6).delay(1200).animate({"opacity":1,"top":initValue[6].top},aniTime);
		$(aniObj).find(".aniItem").eq(7).delay(1200).animate({"opacity":1,"top":initValue[7].top},aniTime);
		$(aniObj).find(".aniItem").eq(8).delay(1400).animate({"opacity":1,"left":initValue[8].left},aniTime);
		$(aniObj).find(".aniItem").eq(9).delay(1600).animate({"opacity":1,"top":initValue[9].top},aniTime);
		$(aniObj).find(".aniItem").eq(10).delay(1600).animate({"opacity":1,"left":initValue[10].left},aniTime,function(){$(aniObj).trigger("aniOver");});
		initValue.once=false;
	}
	$(aniObj).bind("aniOver",function(){
		$(aniObj).mousemove(function(me){
			var x,y;
			$(aniObj).find(".aniItem").each(function(i,e){
				if(i==0){
					 x=me.pageX/$(aniObj).width()*0.5*setMove*0.8;
					 y=me.pageY/$(aniObj).height()*0.5*setMove*0.8;
				}
				if(i==1){
					 x=me.pageX/$(aniObj).width()*0.5*setMove*0.5;
					 y=me.pageY/$(aniObj).height()*0.5*setMove*0.5;
				}
				if(i==2){
					 x=me.pageX/$(aniObj).width()*0.5*setMove*1.5;
					 y=me.pageY/$(aniObj).height()*0.5*setMove*1.5;
				}
				if(i>=3&&i<7){
					 x=me.pageX/$(aniObj).width()*0.5*setMove*0.8;
					 y=me.pageY/$(aniObj).height()*0.5*setMove*0.8;
				}
				if(i>=7){
					 x=me.pageX/$(aniObj).width()*0.5*setMove*2.0;
					 y=me.pageY/$(aniObj).height()*0.5*setMove*2.0;
				}
				$(e).stop(true,false).animate({"top":initValue[i].top+y,"left":initValue[i].left+x,"bottom":initValue[i].bottom-y},50);
			});
		});
	});
	$(".navContent").find("dd").eq(2).addClass("on").siblings().removeClass("on");
	$(".navLineBox").find(".navLine_on").width($(".navContent").find("dd").eq(2).attr("data-lineW"));
};

aniArr[3]=function(){
	var aniObj=$(".aniBoxs").find(".aniBox").eq(3);
	var initValue=defValue[3];
	var setMove=100;
	if(initValue.once){
		var offset=100,aniTime=1000;
		$(aniObj).find(".aniItem").eq(0).css("top",initValue[0].top+offset);
		$(aniObj).find(".txt2").css("top",initValue[1].top+offset*0.5);
		$(aniObj).find(".txt3").css("top",initValue[2].top+offset*0.5);
		$(aniObj).find(".txt4").css("top",initValue[3].top+offset*0.5);
		$(aniObj).find(".img1").css("left",initValue[4].left-offset);
		$(aniObj).find(".img3").css("left",initValue[6].left+offset);

		
		$(aniObj).find(".aniItem").eq(0).delay(0).animate({"opacity":1,"top":initValue[0].top},aniTime);
		$(aniObj).find(".aniItem").eq(1).delay(400).animate({"opacity":1,"top":initValue[1].top},aniTime);
		$(aniObj).find(".aniItem").eq(2).delay(800).animate({"opacity":1,"top":initValue[2].top},aniTime);
		$(aniObj).find(".aniItem").eq(3).delay(1200).animate({"opacity":1,"top":initValue[3].top},aniTime);
		$(aniObj).find(".aniItem").eq(4).delay(1200).animate({"opacity":1,"left":initValue[4].left},aniTime);
		$(aniObj).find(".aniItem").eq(5).delay(1200).animate({"opacity":1},aniTime);
		$(aniObj).find(".aniItem").eq(6).delay(1200).animate({"opacity":1,"left":initValue[6].left},aniTime,function(){$(aniObj).trigger("aniOver");});
		initValue.once=false;
	}
	$(aniObj).bind("aniOver",function(){
		$(aniObj).mousemove(function(me){
			var x,y;
			$(aniObj).find(".aniItem").each(function(i,e){
				if(i<4){
					 x=me.pageX/$(aniObj).width()*0.5*setMove*0.5;
					 y=me.pageY/$(aniObj).height()*0.5*setMove*0.5;
				}
				if(i>=4){
					 x=me.pageX/$(aniObj).width()*0.5*setMove*0.5;
					 y=me.pageY/$(aniObj).height()*0.5*setMove*0.5;
				}
				$(e).stop(true,false).animate({"top":initValue[i].top+y,"left":initValue[i].left+x,"bottom":initValue[i].bottom-y},50);
			});
		});
	});
	$(".navContent").find("dd").eq(3).addClass("on").siblings().removeClass("on");
	$(".navLineBox").find(".navLine_on").width($(".navContent").find("dd").eq(3).attr("data-lineW"));
};

aniArr[4]=function(){
	var aniObj=$(".aniBoxs").find(".aniBox").eq(4);
	var initValue=defValue[4];
	var setMove=100;
	if(initValue.once){
		var offset=100,aniTime=1000;
		$(aniObj).find(".aniItem").eq(3).css("top",initValue[3].top+offset);
		$(aniObj).find(".aniItem").eq(4).css("top",initValue[4].top+offset*0.5);
		$(aniObj).find(".aniItem").eq(5).css("top",initValue[5].top+offset*0.5);
		$(aniObj).find(".aniItem").eq(6).css("top",initValue[6].top+offset*0.5);

		
		$(aniObj).find(".aniItem").eq(0).delay(0).animate({"opacity":1},aniTime);
		$(aniObj).find(".aniItem").eq(3).delay(0).animate({"opacity":1,"top":initValue[3].top},aniTime);
		$(aniObj).find(".aniItem").eq(4).delay(400).animate({"opacity":1,"top":initValue[4].top},aniTime);
		$(aniObj).find(".aniItem").eq(5).delay(800).animate({"opacity":1,"top":initValue[5].top},aniTime);
		$(aniObj).find(".aniItem").eq(6).delay(1200).animate({"opacity":1,"top":initValue[6].top},aniTime,function(){$(aniObj).trigger("aniOver");});
		initValue.once=false;
	};
	$(aniObj).bind("aniOver",function(){
		$(aniObj).mousemove(function(me){
			var x,y;
			$(aniObj).find(".aniItem").each(function(i,e){
				if(i<2){
					 x=me.pageX/$(aniObj).width()*0.5*setMove*0.5;
					 y=me.pageY/$(aniObj).height()*0.5*setMove*0.5;
				}
				if(i>=3&&i<=6){
					 x=me.pageX/$(aniObj).width()*0.5*setMove*2;
					 y=me.pageY/$(aniObj).height()*0.5*setMove*2;
				}
				if(i==2){
					 x=me.pageX/$(aniObj).width()*0.5*setMove*0.8;
					 y=me.pageY/$(aniObj).height()*0.5*setMove*0.8;
				}
				$(e).stop(true,false).animate({"top":initValue[i].top+y,"left":initValue[i].left+x,"bottom":initValue[i].bottom-y},50);
			});
		});
	});
	$(".navContent").find("dd").eq(4).addClass("on").siblings().removeClass("on");
	$(".navLineBox").find(".navLine_on").width($(".navContent").find("dd").eq(4).attr("data-lineW"));
};
aniArr[5]=function(){
	var aniObj=$(".aniBoxs").find(".aniBox").eq(5);
	var initValue=defValue[5];
	var setMove=100;
	if(initValue.once){
		var offset=100,aniTime=1000;
		$(aniObj).find(".aniItem").eq(0).css("top",initValue[0].top+offset);
		$(aniObj).find(".aniItem").eq(2).css("top",initValue[2].top+offset);
		$(aniObj).find(".aniItem").eq(9).css({"top":initValue[9].top+offset*0.2,"left":initValue[9].left-offset});
		$(aniObj).find(".aniItem").eq(10).css({"top":initValue[10].top+offset*0.2,"left":initValue[10].left+offset});
		$(aniObj).find(".aniItem").eq(12).css({"top":initValue[12].top+offset});
		
		$(aniObj).find(".aniItem").eq(0).delay(0).animate({"opacity":1,"top":initValue[0].top},aniTime);
		$(aniObj).find(".aniItem").eq(2).delay(200).animate({"opacity":1,"top":initValue[2].top},aniTime);
		$(aniObj).find(".aniItem").eq(3).delay(getRandomNum(200,1600)).animate({"opacity":1},aniTime);
		$(aniObj).find(".aniItem").eq(4).delay(getRandomNum(200,1600)).animate({"opacity":1},aniTime);
		$(aniObj).find(".aniItem").eq(5).delay(getRandomNum(200,1600)).animate({"opacity":1},aniTime);
		$(aniObj).find(".aniItem").eq(6).delay(getRandomNum(200,1600)).animate({"opacity":1},aniTime);
		$(aniObj).find(".aniItem").eq(7).delay(getRandomNum(200,1600)).animate({"opacity":1},aniTime);
		$(aniObj).find(".aniItem").eq(8).delay(getRandomNum(200,1600)).animate({"opacity":1},aniTime);
		$(aniObj).find(".aniItem").eq(9).delay(1400).animate({"opacity":1,"top":initValue[9].top,"left":initValue[9].left},aniTime);
		$(aniObj).find(".aniItem").eq(10).delay(1400).animate({"opacity":1,"top":initValue[10].top,"left":initValue[10].left},aniTime);
		$(aniObj).find(".aniItem").eq(11).delay(1600).animate({"opacity":1},aniTime);
		$(aniObj).find(".aniItem").eq(12).delay(1800).animate({"opacity":1,"top":initValue[12].top},aniTime,function(){$(aniObj).trigger("aniOver");});
		initValue.once=false;
	};
	
	$(aniObj).bind("aniOver",function(){
		$(aniObj).mousemove(function(me){
			var x,y;
			$(aniObj).find(".aniItem").each(function(i,e){
				if(i==0){
					 x=me.pageX/$(aniObj).width()*0.5*setMove*0.4;
					 y=me.pageY/$(aniObj).height()*0.5*setMove*0.4;
				}
				if(i==1){
					 x=me.pageX/$(aniObj).width()*0.5*setMove*0.2;
					 y=me.pageY/$(aniObj).height()*0.5*setMove*0.2;
				}
				if(i==2){
					 x=me.pageX/$(aniObj).width()*0.5*setMove*1;
					 y=me.pageY/$(aniObj).height()*0.5*setMove*1;
				}
				if(i>=3&&i<=6){
					 x=me.pageX/$(aniObj).width()*0.5*setMove*1.4;
					 y=me.pageY/$(aniObj).height()*0.5*setMove*1.4;
				}
				if(i>=7&&i<=8){
					 x=me.pageX/$(aniObj).width()*0.5*setMove*1.5;
					 y=me.pageY/$(aniObj).height()*0.5*setMove*1.5;
				}
				if(i>=9&&i<=12){
					 x=me.pageX/$(aniObj).width()*0.5*setMove*1.8;
					 y=me.pageY/$(aniObj).height()*0.5*setMove*1.8;
				}
				$(e).stop(true,false).animate({"top":initValue[i].top+y,"left":initValue[i].left+x,"bottom":initValue[i].bottom-y},50);
			});
		});
	});
	
	$(".navContent").find("dd").eq(5).addClass("on").siblings().removeClass("on");
	$(".navLineBox").find(".navLine_on").width($(".navContent").find("dd").eq(5).attr("data-lineW"));
};
function getRandomNum(Min,Max)
{   
var Range = Max - Min;   
var Rand = Math.random();   
return(Min + Math.round(Rand * Range));   
} 
