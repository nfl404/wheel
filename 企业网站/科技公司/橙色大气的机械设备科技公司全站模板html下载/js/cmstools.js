/*CMS 工具集*/
var cmstools={
	/**
	 * 函数说明
	 * @author 作者/日期
	 * @param 参数名，类型，说明
	 * @return 类型
	 */
	get_customers:function(postion){
		//行注释，变量要注释，
		var var_i=0;			//变量说明
		var ook=function(msg){
			console.log('另外一个'+msg);
		}
		
	
		
		
	},
	/**
	 * 设置banner特效
	 * @param id 可以是#id,.class
	 * @param baneffect 切换效果，预定义
	 */
	setbanner:function(id,baneffect){
		var instance=$(id);
		
	},
	/**
	 * 设置滚动
	 * @param id 可以是#id,.class
	 * @param speed 滚动速度，范围
	 * @param isroll 是否滚动，1滚动，0不滚动，默认为1
	 */
	setroll:function(id,speed,isroll){
		if(typeof isroll=='undefined'){
			isroll=1;
		}
	},
	/**
	 * 设置弹出广告位
	 * @param id
	 * @param position,位置左下，右下,顶部横幅
	 */
	setad:function(id,position){
		
	},
	/**
	 * 设置浮动QQ
	 * @param id
	 * @param position,位置左上，左中，左下，右上，右中，右下
	 */
	setfloatqq: function (id, position1, position2) {
	    var tNode = $('#' + id + '');
	    var pos = {};
	    pos[position1] = '0';
	    pos[position2] = '50px';
	    
	    if (!tNode.get(0)) {
	        tNode = $('.' + id + '');
	    }
	    tNode.css(pos).addClass("floatqq_"+position1);
	    // console.log(pos);

	    tNode.find('.offset-top').on('click', function () {
	        $('html,body').animate({ scrollTop: $('body').offset().top }, 1000);
	    });
	},
	
};
 
$(function(){
$('.suspend-item').hover(function(){
	$(this).children().addClass('show_qq');
	},function(){
		$(this).children().removeClass('show_qq');
		});
});
$(function(){
$('.suspend-item-item').hover(function(){
	$(this).children().addClass('show_qq');
	},function(){
		$(this).children().removeClass('show_qq');
		});
});
