/*下拉列表-------------------------------------------------------------------------------------------------------------*/
function WeiBoMove()
{
	document.getElementById("WeiBo").src = "image/微博-hover.png";
}

function WeiBoOut()
{
	document.getElementById("WeiBo").src = "image/微博-link.png";
}

function WeChatMove()
{
	document.getElementById("WeChat").src = "image/微信-hover.png";
}

function WeChatOut()
{
	document.getElementById("WeChat").src = "image/微信-link.png";
}
/*焦点图--------------------------------------------------------------------------------------------------------------*/
var FocusArr = new Array
("url(image/focus1.gif)","url(image/focus2.gif)","url(image/focus3.gif)","url(image/focus4.gif)");
var num = 0;

var FocusBg = new Array("#003AA7","#E36758","#B3DDF5","#3DC1FF");
var Bgcolor = 0;

function Switch()
{
	num = num + 1;
	Bgcolor = Bgcolor +1;
	if(num > 3)
	{
		num = 0;
	}
	if(Bgcolor > 3)
	{
		Bgcolor = 0;
	}
	document.getElementById("banner").style.backgroundImage = FocusArr[num];
	document.getElementById("banner").style.backgroundColor = FocusBg[Bgcolor];
}

function Em()
{
	if(num == 0)
	{
		document.getElementById("em1").style.backgroundColor = "#888";
		document.getElementById("em2").style.backgroundColor = "#FFF";
		document.getElementById("em3").style.backgroundColor = "#FFF";
		document.getElementById("em4").style.backgroundColor = "#FFF";
	}
	if(num == 1)
	{
		document.getElementById("em1").style.backgroundColor = "#FFF";
		document.getElementById("em2").style.backgroundColor = "#888";
		document.getElementById("em3").style.backgroundColor = "#FFF";
		document.getElementById("em4").style.backgroundColor = "#FFF";
	}
	if(num == 2)
	{
		document.getElementById("em1").style.backgroundColor = "#FFF";
		document.getElementById("em2").style.backgroundColor = "#FFF";
		document.getElementById("em3").style.backgroundColor = "#888";
		document.getElementById("em4").style.backgroundColor = "#FFF";
	}
	if(num == 3)
	{
		document.getElementById("em1").style.backgroundColor = "#FFF";
		document.getElementById("em2").style.backgroundColor = "#FFF";
		document.getElementById("em3").style.backgroundColor = "#FFF";
		document.getElementById("em4").style.backgroundColor = "#888";
	}
}

window.onload = function()
{
	window.setInterval("Switch()",5000);
	window.setInterval("Em()",5000);
}

function Focus1()
{
	num = 0;
	Bgcolor = 0;
	document.getElementById("banner").style.backgroundImage = FocusArr[num];
	document.getElementById("banner").style.backgroundColor = FocusBg[Bgcolor];
	document.getElementById("em1").style.backgroundColor = "#888";
	document.getElementById("em2").style.backgroundColor = "#FFF";
	document.getElementById("em3").style.backgroundColor = "#FFF";
	document.getElementById("em4").style.backgroundColor = "#FFF";
}

function Focus2()
{
	num = 1;
	Bgcolor = 1;
	document.getElementById("banner").style.backgroundImage = FocusArr[num];
	document.getElementById("banner").style.backgroundColor = FocusBg[Bgcolor];
	document.getElementById("em1").style.backgroundColor = "#FFF";
	document.getElementById("em2").style.backgroundColor = "#888";
	document.getElementById("em3").style.backgroundColor = "#FFF";
	document.getElementById("em4").style.backgroundColor = "#FFF";
}

function Focus3()
{
	num = 2;
	Bgcolor = 2;
	document.getElementById("banner").style.backgroundImage = FocusArr[num];
	document.getElementById("banner").style.backgroundColor = FocusBg[Bgcolor];
	document.getElementById("em1").style.backgroundColor = "#FFF";
	document.getElementById("em2").style.backgroundColor = "#FFF";
	document.getElementById("em3").style.backgroundColor = "#888";
	document.getElementById("em4").style.backgroundColor = "#FFF";
}

function Focus4()
{
	num = 3;
	Bgcolor = 3;
	document.getElementById("banner").style.backgroundImage = FocusArr[num];
	document.getElementById("banner").style.backgroundColor = FocusBg[Bgcolor];
	document.getElementById("em1").style.backgroundColor = "#FFF";
	document.getElementById("em2").style.backgroundColor = "#FFF";
	document.getElementById("em3").style.backgroundColor = "#FFF";
	document.getElementById("em4").style.backgroundColor = "#888";
}

function left()
{
	num = num - 1;
	if(num < 0)
	{
		num = 3;
	}
	Bgcolor = Bgcolor - 1;
	if(Bgcolor < 0)
	{
		Bgcolor = 3;
	}
	document.getElementById("banner").style.backgroundImage = FocusArr[num];
	document.getElementById("banner").style.backgroundColor = FocusBg[Bgcolor];
	if(num == 0)
	{
		document.getElementById("em1").style.backgroundColor = "#888";
		document.getElementById("em2").style.backgroundColor = "#FFF";
		document.getElementById("em3").style.backgroundColor = "#FFF";
		document.getElementById("em4").style.backgroundColor = "#FFF";
	}
	if(num == 1)
	{
		document.getElementById("em1").style.backgroundColor = "#FFF";
		document.getElementById("em2").style.backgroundColor = "#888";
		document.getElementById("em3").style.backgroundColor = "#FFF";
		document.getElementById("em4").style.backgroundColor = "#FFF";
	}
	if(num == 2)
	{
		document.getElementById("em1").style.backgroundColor = "#FFF";
		document.getElementById("em2").style.backgroundColor = "#FFF";
		document.getElementById("em3").style.backgroundColor = "#888";
		document.getElementById("em4").style.backgroundColor = "#FFF";
	}
	if(num == 3)
	{
		document.getElementById("em1").style.backgroundColor = "#FFF";
		document.getElementById("em2").style.backgroundColor = "#FFF";
		document.getElementById("em3").style.backgroundColor = "#FFF";
		document.getElementById("em4").style.backgroundColor = "#888";
	}
}

function right()
{
	num = num + 1;
	if(num > 3)
	{
		num = 0;
	}
	Bgcolor = Bgcolor + 1;
	if(Bgcolor > 3)
	{
		Bgcolor = 0;
	}
	document.getElementById("banner").style.backgroundImage = FocusArr[num];
	document.getElementById("banner").style.backgroundColor = FocusBg[Bgcolor];
	if(num == 0)
	{
		document.getElementById("em1").style.backgroundColor = "#888";
		document.getElementById("em2").style.backgroundColor = "#FFF";
		document.getElementById("em3").style.backgroundColor = "#FFF";
		document.getElementById("em4").style.backgroundColor = "#FFF";
	}
	if(num == 1)
	{
		document.getElementById("em1").style.backgroundColor = "#FFF";
		document.getElementById("em2").style.backgroundColor = "#888";
		document.getElementById("em3").style.backgroundColor = "#FFF";
		document.getElementById("em4").style.backgroundColor = "#FFF";
	}
	if(num == 2)
	{
		document.getElementById("em1").style.backgroundColor = "#FFF";
		document.getElementById("em2").style.backgroundColor = "#FFF";
		document.getElementById("em3").style.backgroundColor = "#888";
		document.getElementById("em4").style.backgroundColor = "#FFF";
	}
	if(num == 3)
	{
		document.getElementById("em1").style.backgroundColor = "#FFF";
		document.getElementById("em2").style.backgroundColor = "#FFF";
		document.getElementById("em3").style.backgroundColor = "#FFF";
		document.getElementById("em4").style.backgroundColor = "#888";
	}
}
/*滚动图--------------------------------------------------------------------------------------------------------------*/
var WrapArr = new Array
("image/wrap-广发基金.gif","image/wrap-华夏基金.gif","image/wrap-建信基金.gif","image/wrap-汇添富基金.gif","image/wrap-鹏华基金.gif","image/wrap-工银瑞信.gif","image/wrap-易方达基金.gif","image/wrap-景顺长城.gif","image/wrap-博时基金.gif","image/wrap-南方基金.gif","image/wrap-天弘基金.gif","image/wrap-招商基金.gif","image/wrap-银华基金.gif","image/wrap-华安基金.gif");
var i = 0;

function left2()
{
	i = i - 1;
	if(i == -1)
	{
		document.getElementById("roll1").src = WrapArr[i+14];
		document.getElementById("roll2").src = WrapArr[0];
		document.getElementById("roll3").src = WrapArr[1];
		document.getElementById("roll4").src = WrapArr[2];
		document.getElementById("roll5").src = WrapArr[3];
		document.getElementById("roll6").src = WrapArr[4];
	}
	if(i == -2)
	{
		document.getElementById("roll1").src = WrapArr[i+14];
		document.getElementById("roll2").src = WrapArr[i+15];
		document.getElementById("roll3").src = WrapArr[0];
		document.getElementById("roll4").src = WrapArr[1];
		document.getElementById("roll5").src = WrapArr[2];
		document.getElementById("roll6").src = WrapArr[3];
	}
	if(i == -3)
	{
		document.getElementById("roll1").src = WrapArr[i+14];
		document.getElementById("roll2").src = WrapArr[i+15];
		document.getElementById("roll3").src = WrapArr[i+16];
		document.getElementById("roll4").src = WrapArr[0];
		document.getElementById("roll5").src = WrapArr[1];
		document.getElementById("roll6").src = WrapArr[2];
	}
	if(i == -4)
	{
		document.getElementById("roll1").src = WrapArr[i+14];
		document.getElementById("roll2").src = WrapArr[i+15];
		document.getElementById("roll3").src = WrapArr[i+16];
		document.getElementById("roll4").src = WrapArr[i+17];
		document.getElementById("roll5").src = WrapArr[0];
		document.getElementById("roll6").src = WrapArr[1];
	}
	if(i == -5)
	{
		document.getElementById("roll1").src = WrapArr[i+14];
		document.getElementById("roll2").src = WrapArr[i+15];
		document.getElementById("roll3").src = WrapArr[i+16];
		document.getElementById("roll4").src = WrapArr[i+17];
		document.getElementById("roll5").src = WrapArr[i+18];
		document.getElementById("roll6").src = WrapArr[0];
	}
	if(i == -6)
	{
		document.getElementById("roll1").src = WrapArr[i+14];
		document.getElementById("roll2").src = WrapArr[i+15];
		document.getElementById("roll3").src = WrapArr[i+16];
		document.getElementById("roll4").src = WrapArr[i+17];
		document.getElementById("roll5").src = WrapArr[i+18];
		document.getElementById("roll6").src = WrapArr[i+19];
		i = 7;
	}
	if(i >= 0 && i <= 8)
	{
		document.getElementById("roll1").src = WrapArr[i];
		document.getElementById("roll2").src = WrapArr[i+1];
		document.getElementById("roll3").src = WrapArr[i+2];
		document.getElementById("roll4").src = WrapArr[i+3];
		document.getElementById("roll5").src = WrapArr[i+4];
		document.getElementById("roll6").src = WrapArr[i+5];
	}
}

function right2()
{
	i = i + 1;
	if(i == 9)
	{
		document.getElementById("roll1").src = WrapArr[9];
		document.getElementById("roll2").src = WrapArr[10];
		document.getElementById("roll3").src = WrapArr[11];
		document.getElementById("roll4").src = WrapArr[12];
		document.getElementById("roll5").src = WrapArr[13];
		document.getElementById("roll6").src = WrapArr[0];
	}
	if(i == 10)
	{
		document.getElementById("roll1").src = WrapArr[10];
		document.getElementById("roll2").src = WrapArr[11];
		document.getElementById("roll3").src = WrapArr[12];
		document.getElementById("roll4").src = WrapArr[13];
		document.getElementById("roll5").src = WrapArr[0];
		document.getElementById("roll6").src = WrapArr[1];
	}
	if(i == 11)
	{
		document.getElementById("roll1").src = WrapArr[11];
		document.getElementById("roll2").src = WrapArr[12];
		document.getElementById("roll3").src = WrapArr[13];
		document.getElementById("roll4").src = WrapArr[0];
		document.getElementById("roll5").src = WrapArr[1];
		document.getElementById("roll6").src = WrapArr[2];
	}
	if(i == 12)
	{
		document.getElementById("roll1").src = WrapArr[12];
		document.getElementById("roll2").src = WrapArr[13];
		document.getElementById("roll3").src = WrapArr[0];
		document.getElementById("roll4").src = WrapArr[1];
		document.getElementById("roll5").src = WrapArr[2];
		document.getElementById("roll6").src = WrapArr[3];
	}
	if(i == 13)
	{
		document.getElementById("roll1").src = WrapArr[13];
		document.getElementById("roll2").src = WrapArr[0];
		document.getElementById("roll3").src = WrapArr[1];
		document.getElementById("roll4").src = WrapArr[2];
		document.getElementById("roll5").src = WrapArr[3];
		document.getElementById("roll6").src = WrapArr[4];
	}
	if(i == 14)
	{
		document.getElementById("roll1").src = WrapArr[0];
		document.getElementById("roll2").src = WrapArr[1];
		document.getElementById("roll3").src = WrapArr[2];
		document.getElementById("roll4").src = WrapArr[3];
		document.getElementById("roll5").src = WrapArr[4];
		document.getElementById("roll6").src = WrapArr[5];
		i = 0;
	}
	if(i >= 0 && i <=8)
	{
		document.getElementById("roll1").src = WrapArr[i];
		document.getElementById("roll2").src = WrapArr[i+1];
		document.getElementById("roll3").src = WrapArr[i+2];
		document.getElementById("roll4").src = WrapArr[i+3];
		document.getElementById("roll5").src = WrapArr[i+4];
		document.getElementById("roll6").src = WrapArr[i+5];
	}
}
/*-------------------------------------------------------------------------------------------------------------------*/