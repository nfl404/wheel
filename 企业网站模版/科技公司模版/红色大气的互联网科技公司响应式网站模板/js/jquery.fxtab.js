/****************************************************************
 *																*		
 * 						      素材火							*
 *                        www.sucaihuo.com							*
 *       		  努力创建完善、持续更新插件以及模板			*
 * 																*
****************************************************************/
$.fn.extend({
	fxuiTab:function(opt){
		//做插件首先是传进来的对象，也就是this进行each，这样子一个页面上多个区块都可以使用啦！
		return this.each(function() {
			//说说Var的事，变量之前肯定是用var的，这样子就不会变成全局变量，和别的方法冲突了，然后最只用一个Var,然后用","分开即可。
			var t = $(this),//t就是$(this)，因为Jquery里$(this)很多，我们可以把这个t选存起来，后面好多地方可以用。
				o = opt || {}, //如果使用者没有参，给o设一个空的对象。
			    tit = o.tit || t.find('.fxui-tab-tit'),  //标签点击的对象。
				nav = o.nav || t.find('.fxui-tab-nav'),  //内容显示的对象。
				evt = o.evt || 'click',//事件可以为click,hover或是mouseover。
				eq  = o.eq  || 0; //初始化的时候可以默认显示第几块。不传值显示第一个。
			tit.bind(evt,function(){ //通过bind 传这个evt,事件就可以变动了，不一定只是click事件了。
				$(this).addClass('current').siblings(tit).removeClass('current');//处理标签头：加当前的Class，样式通过css改变
				nav.eq(tit.index($(this))).show().siblings('.fxui-tab-nav').hide();//内容块显示。
			}).hover(function(){
				$(this).addClass('fxui-tab-hover').siblings(tit).removeClass('fxui-tab-hover'); //标签的tit移上去的时候加一个样式，这样子这个标签头可以有默认，hover和curr三种状态。
			});
			evt === 'click' ? tit.eq(eq).click() :tit.eq(eq).mouseover(); //初始化，当前是第几个
		})
	}
});