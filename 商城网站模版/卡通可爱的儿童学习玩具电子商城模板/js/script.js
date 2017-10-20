(function($) {
	
	"use strict";
	
	
	//  Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(500).fadeOut(500);
		}
	}
		

	//  Submenu Dropdown Toggle
	function DropdownToggole () {
		if($('.main-header li.dropdown ul').length){
			$('.main-header li.dropdown').append('<div class="dropdown-btn"></div>');
			
			//Dropdown Button
			$('.main-header li.dropdown .dropdown-btn').on('click', function() {
				$(this).prev('ul').slideToggle(500);
			});
		}
	}
		
 
	//  Update Header Style + Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var topHeader = $('.mainmenu-area').innerHeight();
			var windowpos = $(window).scrollTop();
			if (windowpos >= topHeader) {
				$('.scroll-to-top').fadeIn(300);
			} else {
				$('.scroll-to-top').fadeOut(300);
			}
		}
	}
    

	//  revolution slider
	function revolutionSliderActiver () {
		if ($('.rev_slider_wrapper #slider1').length) {
			$("#slider1").revolution({
				sliderType:"standard",
				sliderLayout:"auto",
				delay:5000,
				navigation: {
					arrows:{enable:true} 
				},
				gridheight:660, 
				gridwidth:1170 
			});
		};
	}

	//  languageSwitcher
	function languageSwitcher () {
		if ($("#polyglot-language-options").length) {
				$('#polyglotLanguageSwitcher').polyglotLanguageSwitcher({
					effect: 'fade',
	                testMode: true,
	                onChange: function(evt){
	                    alert("The selected language is: "+evt.selectedItem);
	                }
				});
		};
	}


	//  LightBox / Fancybox
	function LightBox () {
		if($('.lightbox-image').length) {
			$('.lightbox-image').fancybox();
		}
	}

    if ($("a.video-fancybox").length) {
        $("a.video-fancybox").on('click', function() {
            $.fancybox({
                'padding': 0,
                'autoScale': false,
                'transitionIn': 'none',
                'transitionOut': 'none',
                'title': this.title,
                'width': 680,
                'height': 495,
                'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
                'type': 'swf',
                openEffect: 'elastic',
                closeEffect: 'elastic',
                helpers: {
                    media: {}
                },
                'swf': {
                    'wmode': 'transparent',
                    'allowfullscreen': 'true'
                }
            });

            return false;
        });
    };


	//Sortable Masonary with Filters
	function enableMasonry() {
		if($('.sortable-masonry').length){
	
			var winDow = $(window);
			// Needed variables
			var $container=$('.sortable-masonry .items-container');
			var $filter=$('.filter-btns');
	
			$container.isotope({
				filter:'*',
				 masonry: {
					columnWidth : 0 
				 },
				animationOptions:{
					duration:500,
					easing:'linear'
				}
			});
			
	
			// Isotope Filter 
			$filter.find('li').on('click', function(){
				var selector = $(this).attr('data-filter');
	
				try {
					$container.isotope({ 
						filter	: selector,
						animationOptions: {
							duration: 500,
							easing	: 'linear',
							queue	: false
						}
					});
				} catch(err) {
	
				}
				return false;
			});
	
	
			winDow.bind('resize', function(){
				var selector = $filter.find('li.active').attr('data-filter');

				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 500,
						easing	: 'linear',
						queue	: false
					}
				});
			});
	
	
			var filterItemA	= $('.filter-btns li');
	
			filterItemA.on('click', function(){
				var $this = $(this);
				if ( !$this.hasClass('active')) {
					filterItemA.removeClass('active');
					$this.addClass('active');
				}
			});
		}
	}
	
	enableMasonry();
	


	// testimonial carousel
	function testimonialCarousel () {
		if ($('.testimonial-slide').length) {
			$('.testimonial-slide').owlCarousel({
			    loop: true,
			    items: true,
			    nav: false,
			    dots: true,
			    autoplay:true
			});
		};
	}	


	// testimonial carousel
	function gallerylCarousel () {
		if ($('.sortable-carousel').length) {
			$('.sortable-carousel').owlCarousel({
			    loop: true,
			    items: true,
			    nav: true,
	            navText: [
	                '<i class="fa fa-angle-left"></i>',
	                '<i class="fa fa-angle-right"></i>'
	            ],
	            dots: false,
	            autoWidth: false,
			    autoplay:false
			});
		};
	}	


    //  stickyHeader
	function stickyHeader () {
		if ($('.stricky').length) {
			var strickyScrollPos = 100;
			if($(window).scrollTop() > strickyScrollPos) {
				$('.stricky').removeClass('fadeIn animated');
		      	$('.stricky').addClass('stricky-fixed fadeInDown animated');
			}
			else if($(this).scrollTop() <= strickyScrollPos) {
				$('.stricky').removeClass('stricky-fixed fadeInDown animated');
		      	$('.stricky').addClass('slideIn animated');
			}
		};
	}


    //tab Hide Show Function
    if($('.classroom .tab-links').length){
        
        //Links Nav SLide Toggle
        $('.classroom .tab-links .tab-btn').on('click', function(e) {
            e.preventDefault();
            var target = $($(this).next('.tab-list'));
            $(target).slideToggle(300);
        });
        
        
        //tab Images Hide Show
        $('.classroom .tab-links .tab-list li a').on('click', function(e) {
            e.preventDefault();
            var target = $($(this).attr('href'));
            $('.classroom .tab-links .tab-list li a').removeClass('active');
            $(this).addClass('active');
            $('.classroom .tab-content .roomitem').removeClass('collapsed');
            $('.classroom .tab-content .roomitem').fadeOut(0);
            $(target).fadeIn(500);
        });
        
    }

	// countdown timer

	function countDownTimer () {
		if ($('.time-countdown').length) {

			$('.time-countdown').each(function () {
				var Self = $(this);
				var countDate = Self.data('countdown-time'); // getting date

				Self.countdown(countDate, function(event) {
		     		$(this).html('<h2>'+ event.strftime('%D : %H : %M : %S') +'</h2>');
		   		});
			});

			

		};
		if ($('.time-countdown-two').length) {

			$('.time-countdown-two').each(function () {
				var Self = $(this);
				var countDate = Self.data('countdown-time'); // getting date

				Self.countdown(countDate, function(event) {
		     		$(this).html('<li> <div class="box"> <span class="days">'+ event.strftime('%D') +'</span> <span class="timeRef">days</span> </div> </li> <li> <div class="box"> <span class="hours">'+ event.strftime('%H') +'</span> <span class="timeRef">hours</span> </div> </li> <li> <div class="box"> <span class="minutes">'+ event.strftime('%M') +'</span> <span class="timeRef">minutes</span> </div> </li> <li> <div class="box"> <span class="seconds">'+ event.strftime('%S') +'</span> <span class="timeRef">seconds</span> </div> </li>');
		   		});
			});

			

		};
	}




	//  direction form validation
	function directionFormValidation () {
		if($('.direction-form').length){
			$('.direction-form').validate({ // initialize the plugin
				rules: {
					username: {
						required: true
					},
					lastname: {
						required: true
					},
					email: {
						required: true,
						email: true
					},
					message: {
						required: true
					}
				},
				submitHandler: function (form) { 
					// sending value with ajax request
					var form = $(form);
					$.post(form.attr('action'), form.serialize(), function (response) {
						form.parent('div').append(response);
						form.find('input[type="text"]').val('');
						form.find('input[type="email"]').val('');
					});
					return false;
				}
			});
		}



	}
	//  ticket form validation
	function ticketFormValidation () {
		if($('.ticket-form').length){
			$('.ticket-form').validate({ // initialize the plugin
				rules: {
					username: {
						required: true
					},
					lastname: {
						required: true
					},
					email: {
						required: true,
						email: true
					},
					phone: {
						required: true
					},
					
					select: {
						required: true
					}
				},
				submitHandler: function (form) { 
					// sending value with ajax request
					var form = $(form);
					$.post(form.attr('action'), form.serialize(), function (response) {
						form.parent('div').append(response);
						form.find('input[type="text"]').val('');
						form.find('input[type="email"]').val('');
					});
					return false;
				}
			});
		}



	}
	//  contact form validation
	function contactFormValidation () {
		if($('.contact-form').length){
			$('.contact-form').validate({ // initialize the plugin
				rules: {
					username: {
						required: true
					},
					lastname: {
						required: true
					},
					email: {
						required: true,
						email: true
					},
					phone: {
						required: true
					},
					message: {
						required: true
					},
					date: {
						required: true
					},
					time: {
						required: true
					},
					select: {
						required: true
					},
					state: {
						required: true
					},
					zip: {
						required: true
					},
					website: {
						required: true
					}
				},
				submitHandler: function (form) { 
					// sending value with ajax request
					var form = $(form);
					$.post(form.attr('action'), form.serialize(), function (response) {
						form.parent('div').append(response);
						form.find('input[type="text"]').val('');
						form.find('input[type="email"]').val('');
						form.find('textarea').val('');
					});
					return false;
				}
			});
		}



	}

	
	//  Fact Counter
	function factCounter() {
		if($('.fact-counter').length){
			$('.fact-counter .column.animated').each(function() {
		
				var $t = $(this),
					n = $t.find(".count-text").attr("data-stop"),
					r = parseInt($t.find(".count-text").attr("data-speed"), 10);
					
				if (!$t.hasClass("counted")) {
					$t.addClass("counted");
					$({
						countNum: $t.find(".count-text").text()
					}).animate({
						countNum: n
					}, {
						duration: r,
						easing: "linear",
						step: function() {
							$t.find(".count-text").text(Math.floor(this.countNum));
						},
						complete: function() {
							$t.find(".count-text").text(this.countNum);
						}
					});
				}
				
			});
		}
	}


 	//  product-description section 
    function eventTab() {
        if ($('.event-tab .event-tablist').length) {
            var tabWrap = $('.event-tab .event-tab-content');
            var tabClicker = $('.event-tab .event-tablist li');
            
            tabWrap.children('div').hide();
            tabWrap.children('div').eq(0).show();
            tabClicker.on('click', function() {
                var tabName = $(this).data('tab-name');
                tabClicker.removeClass('active');
                $(this).addClass('active');
                var id = '#'+ tabName;
                tabWrap.children('div').not(id).hide();
                tabWrap.children('div'+id).fadeIn('1000');
                return false;
            });        
        }
    }


	//Gallery Popup Hide / Show
	if($('.has-gallery-popup').length){
		
		//Show Gallery Popup
		$('.has-gallery-popup').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('href'));
			$('body').addClass('popup-visible');
			$(target).addClass('now-visible');
		});
		
		//Show Gallery Popup
		$('.gallery-box .btn-close,.gallery-box .bg-fade-layer').on('click', function() {
			$('.gallery-box').removeClass('now-visible');
			$('body').removeClass('popup-visible');
		});
		
	}
	
	//Gallery Popup Slider / Vertical Gallery Slider
	if($('.vertical-slider').length) {
		var slider = new MasterSlider();
		slider.setup('masterslider' , {
			width:850,
			height:470,
			space:10,
			view:'basic',
			dir:'v'
		});
		slider.control('arrows');	
		slider.control('scrollbar' , {dir:'v'});	
		slider.control('circletimer' , {color:"#FFFFFF" , stroke:9});
		slider.control('thumblist' , {autohide:false ,dir:'v'});
	}
	

	if($('.filter-list').length){
		$('.filter-list').mixItUp({});
	}

		// 12. select menu
	function selectMenu () {
		if ($('.select-menu').length) {
			$('.select-menu').selectmenu();
		};
	}

	//  video carousel
	function videoCarousel () {
		if ($('.video-carousel').length) {
			$('.video-carousel').owlCarousel({
			    loop: true,
			    autoplay: true,
			    nav: false,
			    items: 1,
			    dots: true
			})
		};
	}


 	//  product-description section 
    function customTabscheduleTab () {
        if ($('#schedule-tab .schedule-tab-title').length) {
            var tabWrap = $('#schedule-tab .schedule-tab-content');
            var tabClicker = $('#schedule-tab .schedule-tab-title tr td');
            
            tabWrap.children('div').hide();
            tabWrap.children('div').eq(0).show();
            tabClicker.on('click', function() {
                var tabName = $(this).data('tab-name');
                tabClicker.removeClass('active');
                $(this).addClass('active');
                var id = '#'+ tabName;
                tabWrap.children('div').not(id).hide();
                tabWrap.children('div'+id).fadeIn('500');
                return false;
            });        
        }
    }




	//Sponsors Slider
	$('.sponsors-slider').owlCarousel({
	    loop:true,
	    dots:false,
		smartSpeed: 500,
		autoplay: 5000,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:2,
	            loop:true
	        },
	        480:{
				items:3,
				loop:true
			},
	        768:{
	            items:5,
	            loop:true
	        },
	        1000:{
	            items:6,
	            loop:true
	        }
	    }
	})

		//Three Column Slider
	if ($('.column-carousel.three-column').length) {
		$('.column-carousel.three-column').owlCarousel({
			loop:true,
			margin:30,
			nav:false,
			dots:false,
			autoplayHoverPause:false,
			autoplay: 5000,
			smartSpeed: 700,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:2
				},
				1024:{
					items:3
				},
				1100:{
					items:3
				}
			}
		});    		
	}

	function singleProductCarousel () {
		if ($('.single-product-carousel-content-box').length && $('.single-product-carousel-thumbnail-box').length) {

			var $sync1 = $(".single-product-carousel-content-box"),
				$sync2 = $(".single-product-carousel-thumbnail-box"),
				flag = false,
				duration = 1000;

				$sync1
					.owlCarousel({
						items: 1,
						autoplay: true,
						loop: true,
						margin: 0,
						nav: false,
						dots: false
					})
					.on('changed.owl.carousel', function (e) {
						if (!flag) {
							flag = true;
							$sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
							flag = false;
						}
					});

				$sync2
					.owlCarousel({
						margin: 10,
						items: 4,
						nav: false,
						dots: false,
						center: false,
						responsive: {
					        0:{
					            items:3,
					            autoWidth: false
					        },
					        480:{
					            items:2,
					            center: false,
					            autoWidth: false
					        },
					        600:{
					            items:3,
					            autoWidth: false
					        },
					        1000:{
					            items:4,
					            autoWidth: false
					        }
					    },
					})
					.on('click', '.owl-item', function () {
						$sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);

					})
					.on('changed.owl.carousel', function (e) {
						if (!flag) {
							flag = true;		
							$sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
							flag = false;
						}
					});

		};
	}
		//Three Column Slider
	if ($('.event-carousel').length) {
		$('.event-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:false,
			dots:true,
			autoplayHoverPause:false,
			autoplay: 5000,
			smartSpeed: 700,
			responsive:{
				0:{
					items:1,
					dots:false
				},
				600:{
					items:2,
					dots:false
				},
				800:{
					items:2,
					dots:false
				},
				1024:{
					items:3
				},
				1100:{
					items:3
				}
			}
		});    		
	}


	function cartTouchSpin () {
		if($('.quantity-spinner').length){
			$("input.quantity-spinner").TouchSpin({
			  verticalbuttons: true
			});
		}
	}


	// Scroll to top
	if($('.scroll-to-top').length){
		$(".scroll-to-top").on('click', function() {
		   // animate
		   $('html, body').animate({
			   scrollTop: $('html, body').offset().top
			 }, 1000);
	
		});
	}


	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}



//scroll reveal=============================



/* ==========================================================================
   When document is ready, do
   ========================================================================== */
   
	$(document).on('ready', function() {
		DropdownToggole();
		revolutionSliderActiver();
		languageSwitcher();
		countDownTimer();
		LightBox();
		enableMasonry();
		contactFormValidation();
		ticketFormValidation();
		directionFormValidation();
		testimonialCarousel();
		gallerylCarousel();
		eventTab();
		selectMenu();
		videoCarousel();
		customTabscheduleTab();
		cartTouchSpin();
		singleProductCarousel();

	});

/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	$(window).on('scroll', function() {
		stickyHeader();
		headerStyle();
		factCounter();
		
	});
	
	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
	});
	

})(window.jQuery);