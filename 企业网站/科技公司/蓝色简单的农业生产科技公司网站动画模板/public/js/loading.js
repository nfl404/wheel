
/***************载入load对象 parentObj:父级对象,loadGif:load链接,loadbgUrl:背景图片,bgColor:背景颜色***************************/
function loadingPlay(parentObj,loadGifUrl,loadbgUrl,bgColor)
{
	var loadstring="<div class='loading' style='height:100%;width:100%; position:absolute; z-index:100; top:0px; left:0px;";
//	if (loadbgUrl!="") loadstring+="background-image:url("+loadbgUrl+");background-position:center center;";
//	if (bgColor!="")loadstring+="background:"+bgColor;
//	loadstring+="'><div class='loadBox' style='margin-top:"+($(parentObj).height()*0.5-42)+"px;'><img src='"+loadGifUrl;
	loadstring+="' width='84' height='84'></div></div>";
	$(parentObj).append(loadstring);

	var rotation2 = function (){
//	$(".loadBox").find("img").rotate({
//		  angle:0, 
//		  animateTo:360, 
//		  callback: rotation2,
//		  easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
//			  return c*(t/d)+b;
//		  }
//	   });
	}
	rotation2();
}
