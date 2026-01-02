window.addEventListener('load',function(){
	"use strict";

    /***
        Preloader
    ***/
    $('body').addClass('preloader-active');

    $(window).on('load', function() { 
        $('.preloader').fadeOut();
        $('.preloader-spinner').delay(350).fadeOut('slow');
        $('body').removeClass('preloader-active');
    });

	/***
		Text Effect
	***/
	$('.tlt').textillate({ 
	  in: { effect: 'splat' },
	  out: { effect: 'foldUnfold', sync: true },
	  loop: true
	});

	/***
        Video Area
    ***/
    $('.video-play').magnificPopup({
        type: 'iframe',
        iframe: {
            patterns: {
              vimeo: {

                index: 'vimeo.com',

                id:'https://vimeo.com/54298665',

                src: 'https://player.vimeo.com/video/183085974'

              }
            }
        }
    });

    /***
        Image Light Box
    ***/    
    $('.image-link').magnificPopup({type:'image'});

	/***
        Skill Bar
    ***/
    jQuery('.skillbar').each(function() {
        jQuery(this).appear(function() {
            jQuery(this).find('.count-bar').animate({
                width:jQuery(this).attr('data-percent')
            },3000);
            var percent = jQuery(this).attr('data-percent');
            jQuery(this).find('.count').html('<span>' + percent + '</span>');
        });
    });

    // Owl Carousel
    $(".owl").owlCarousel();
    
    // Wow Animation
    new WOW().init();

   	/***
        MixItUp
    ***/
    var mixer = mixitup('.portfolio-main');

    /***
        Owl Carousel Testimonial
    ***/
    $('#owl-testimonial').owlCarousel({
        items:1,
        autoplay:true,
        loop:true
    });
    
   	/***
        Owl Carousel Team
    ***/

	var owl = $('.owl-carousel');
	owl.owlCarousel({
	    items:4,
	    loop:false,
	    margin:30,
	    autoplay:false,
	    slideSpeed : 300,
	    autoplayHoverPause:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        500:{
	        	items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:4
	        }
    	}
	});

    //Nav menu active class change
    var lastId
        , topMenu = $(".menu")
        , topMenuHeight = topMenu.outerHeight() + 15
        ,menuItems = topMenu.find("a")
        ,scrollItems = menuItems.map(function () {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });

    /***
        Header Top Fix
    ***/
    var stickyHeaderTop = $('#stickyheader').offset().top;
    $(window).scroll(function(){
        if( $(window).scrollTop() > stickyHeaderTop ) {
            $('#stickyheader').addClass('fix-top');
        } else {
            $('#stickyheader').removeClass('fix-top');
        }

        // Bind to scroll
        var fromTop = $(this).scrollTop() + topMenuHeight;
        var cur = scrollItems.map(function () {
            if ($(this).offset().top < fromTop) return this;
        });
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";
        if (lastId !== id) {
            lastId = id;
            menuItems.parent().removeClass("active").end().filter("[href='#" + id + "']").parent().addClass("active");
        }
    });

    /***
        Smooth Scroll
    ***/
    smoothScroll('.menu a');
    function smoothScroll($smooth){
            $($smooth+'[href*="#"]:not([href="#"])').on("click" , function() {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                      $('html, body').animate({
                          scrollTop: target.offset().top
                      }, 1000);
                      return false;
                    }
                }
            });
    }


    /***
        Scroll To Top
    ***/
    var top_0 = {scrollTop:0};
    var topClass = $(".scrolltotop i");
    topClass.on("click" , function(e){
        $("html,body").animate(top_0,1000);
    });
    $(window).scroll(function(){
        if($(this).scrollTop() > 400) {
            topClass.fadeIn(500);
        }
        else {
            topClass.fadeOut(500);
        }
    });

    /***
        Mobile Menu
    ***/
    $('#menu').slicknav();

    /***
        Counter
    ***/
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

},false);

