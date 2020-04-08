(function($){
    "use strict"; // Start of use strict
    var stickyHeaderTop =0;

    /* ---------------------------------------------
     Owl carousel
     --------------------------------------------- */
    function init_carousel(){
        $('.owl-carousel').each(function(){
          var config = $(this).data();
          config.navText = ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'];
          var animateOut = $(this).data('animateout');
          var animateIn = $(this).data('animatein');
          if(typeof animateOut != 'undefined' ){
            config.animateOut = animateOut;
          }
          if(typeof animateIn != 'undefined' ){
            config.animateIn = animateIn;
          }
          var owl = $(this);
          owl.owlCarousel(config);
        });
    }

    

    //HEIGHT LIST PROVIDE
    function bz_height_animate_column()
    {
      $('.bz-list-provide.provide-style1').each(function(index, elem){

        var $this = $(this);
        var $items = $this.find('.item-provide');
        var $max_height_item = $items.eq(0).outerHeight();
        $items.each(function(index, elem) {
          if ( $(elem).outerHeight() > $max_height_item) $max_height_item = $(elem).outerHeight();
        });

        $items.each(function(){
          $(this).css({'height' : $max_height_item});
        });
      });
    }
     
     /* ---------------------------------------------
     Height Full
     --------------------------------------------- */
    function js_height_full(){
        (function($){
            var heightoff = 0;
            // if($('#wpadminbar').length){
            //     heightoff = $('#wpadminbar').outerHeight();
            // }
            var heightSlide = $(window).outerHeight() - heightoff;
            $(".full-height").css("height",heightSlide);
            $(".min-fullheight").css("min-height",heightSlide);
        })(jQuery);
    }
    

  // Sections backgrounds

  var itemslideHome = $(".item-homeslide");
  itemslideHome.each(function(index){

      if ($(this).attr("data-background")){
          $(this).css("background-image", "url(" + $(this).data("background") + ")");
      }
  });

    function parallaxInit() {
        testMobile = isMobile.any();
        if (testMobile == null)
        {

            $('.bg-parallax').each(function(){
                $(this).parallax('50%', 0.3);
            });
        }
        testMobile = isMobile.iOS()
    }
    //Mobile Detect
    var testMobile;
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    function changeLabel(state){
      $(".play-button").html(state != 1 ? "<img src='http://dynasty3.co/beta/academy/images/puse.png'>" : "<img src='http://dynasty3.co/beta/academy/images/play.png'>");
    }

   
    /* ---------------------------------------------
     Scripts bind load
     --------------------------------------------- */
    $(window).bind('load', function () {

       //BACKGROUND PRALLAX
        parallaxInit();
        //FLEXSLIDE ABOUT
        $('.flexslider').flexslider({
          animation: "slide",
          controlNav: "thumbnails"
        });

        //VIDEO SCRIPT
        setTimeout( function() {
            $('#header_video').find('.mbYTP_wrapper').animate({opacity:1}, 500);
        }, 800 );
    });
   
    
    /* ---------------------------------------------
     Scripts ready
     --------------------------------------------- */
    $(document).ready(function() {
        // OWL CAROUSEL
        //init_carousel();

        //Height full
     //   js_height_full();

        //ANIMATE COLUMN
        bz_height_animate_column();

    
        //VIDEO LIGHTBOX
        if ( $('.bz-video-lightbox .link-lightbox').length ){
          $('.bz-video-lightbox .link-lightbox').simpleLightboxVideo();
        }
        

        jQuery(function(){
            'use strict';
            if( isMobile.any() ){
                $('.player.video-container').each(function(){
                    $(this).addClass('mobile-bg');
                    if( $(this).attr('data-background') ){
                        $(this).append('<div></div>');
                        $(this).find('div').css('background-image', 'url(' + $(this).attr('data-background') + ')' );
                    }
                });
            }else{
                $('.player').each(function(){
                    $(this).mb_YTPlayer();
                });
            }
        });

        
       

        //PLAY VIDEO
        $('.bz-video-bg').each(function(){
          var videoItem = $(this).find('.player')
           $(this).find('.play-button').on('click',function(){
              $(videoItem).YTPTogglePlay(changeLabel);
           })
        });
        
        $(document).on('click','.mobile-navigation',function(){
          $(this).closest('.bz-main-mennu').find('.main-menu').slideToggle();
        })
        $('.mobile-sidebar').on('click',function(){
              $('body').toggleClass('sidebar-active');
        });
        
  });
})(jQuery); // End of use strict