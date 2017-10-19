  ;(function($){

	$.extend({

		'dropdpwn_Menu' : function(nName){

			$(nName).css('display','none');
			$(nName).parent('li').hover(function() {
				$(this).children(nName).stop(true, true).slideDown(200);
			}, function() {
				$(this).children(nName).stop(true, true).slideUp(200);
			});

			return this;
		},
		
	})
	
})(jQuery);
/*banner*/
$(function() {
	$('.banner').slick({
		  slidesToShow: 1,
		  dots:true,
			autoplay: true,
			arrows: false,
		  slidesToScroll: 1,
		  fade: true,
		});
	});

$(document).ready(function() {
		
	/*Jquery Mmenu*/
	$("#mmenu").mmenu({
		"extensions": [
        	"effect-menu-slide",
        	"effect-listitems-slide",
            "pagedim-black"
        ],
		"offCanvas": {
			position: "right"
		}
	}).css("opacity","1");
	
	$.dropdpwn_Menu(".nav > ul > li > ul");

});





$(function() {
				$('.homeproduct').slick({
					dots:false,
					autoplay: true,
					arrows: true,
					centerPadding: 0,
					slidesToShow:4,
					autoplaySpeed:3000,
					speed: 800,
				});
		})
$(function() {
				$('.homeproduct1').slick({
					dots:false,
					autoplay: true,
					arrows: true,
					centerPadding: 0,
					slidesToShow:1,
					autoplaySpeed:3000,
					speed: 800,
				});
		})

$(function() {
				$('.h_news').slick({
					dots:true,
					autoplay: true,
					arrows: false,
					centerPadding: 0,
					slidesToShow:1,
					autoplaySpeed:3000,
					speed: 800,
					fade: true,
				});
		})

$(function() {
				$('.homecase').slick({
					dots:true,
					autoplay: true,
					arrows: true,
					centerPadding: 0,
					slidesToShow:4,
					autoplaySpeed:3000,
					speed: 800,
				});
		})
$(function() {
				$('.homecase1').slick({
					dots:true,
					autoplay: true,
					arrows: true,
					centerPadding: 0,
					slidesToShow:1,
					autoplaySpeed:3000,
					speed: 800,
				});
		})
$(function() {
				$('.pro_phnoe').slick({
					dots:true,
					autoplay: true,
					arrows: false,
					centerPadding: 0,
					slidesToShow:1,
					autoplaySpeed:9993000,
					speed: 800,
				});
		})


/*honor*/
$(function() {
				$('.hn_main').slick({

					dots:false,
					autoplay: true,
					arrows: true,
					centerPadding: 0,
					slidesToShow:4,
					autoplaySpeed: 3000,
					speed: 800,
				});
		})

/*honor*/
$(function() {
				$('.honor_phone').slick({
					slidesToShow:4,
					slidesToScroll: 1,
					autoplay: true,
					autoplaySpeed:2500,
		      speed: 800,
				});
		})



$(".e-map a:last-child").addClass("border-none");

/*返回顶部*/
$(function() {
$('#return_top').click(function() { //改元素点击的时候
				$('html,body').animate({
					scrollTop: 0
				}, 600); //让 body 的 scroolTop 设为 0
			})
			$(window).scroll(function() {
				if ($(window).scrollTop() > 0) {
					$('#return_top').fadeIn('slow');
				} else {
					$('#return_top').fadeOut('slow');
				}
			})
});

$(function() {
				$('.case_showmain').slick({
					dots:false,
					autoplay: true,
					arrows: true,
					centerPadding: 0,
					slidesToShow:4,
					autoplaySpeed:3000,
					speed: 800,
				});
		})
$(function() {
				$('.case_showmain1').slick({
					dots:false,
					autoplay: true,
					arrows: true,
					centerPadding: 0,
					slidesToShow:1,
					autoplaySpeed:3000,
					speed: 800,
				});
		})
$(function() {
				$('.pro_showmain').slick({
					dots:false,
					autoplay: true,
					arrows: true,
					centerPadding: 0,
					slidesToShow:4,
					autoplaySpeed:3000,
					speed: 800,
				});
		})
$(function() {
				$('.pro_showmain1').slick({
					dots:false,
					autoplay: true,
					arrows: true,
					centerPadding: 0,
					slidesToShow:1,
					autoplaySpeed:3000,
					speed: 800,
				});
		})
/*tab*/
$(document).ready(function() {
				$('.psnr:gt(0)').hide();
				var hdw = $('.ps_tab dl dd');
				hdw.click(function() {
					$(this).addClass('one')
						.siblings().removeClass();
					var hdw_index = hdw.index(this);
					$('.psnr').eq(hdw.index(this)).show()
						.siblings().hide();
				});
			});
			
