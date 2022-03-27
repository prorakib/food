;(function($) {
    "use strict";    
        
    // Navbar Fixed  
    function navbarFixed(){
        if ( $('.maan-header-section').length ){ 
            $(window).on('scroll', function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= 95) {
                    $(".maan-header-section").addClass("navbar_fixed");
                } else {
                    $(".maan-header-section").removeClass("navbar_fixed");
                }
            });
        };
    };  

    
    

        // data background 
        function bgImg() {
            $("[data-background]").each(function() {
                $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
            });
        }

        // swiperslider 
        function swipperSlider (){
            if ($('.maan-banner-section').length){
                var swiper = new Swiper(".maan-instagram-wrapper", {
                    loop: true,
                    spaceBetween: 0,
                    slidesPerView: 1,
                    speed: 1000,
                      navigation: {
                        nextEl: ".instagram-next",
                        prevEl: ".instagram-prev",
                      },
                    breakpoints: {
                        1200: {
                            slidesPerView: 5,
                            spaceBetween: 30
                        },
                        1000: {
                            slidesPerView: 4,
                            spaceBetween: 30
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                    }
                });
            }
        }


     // video popup 
     function lity (){
        if ($('.play_btn').length){
            $(document).on('click', '[data-lightbox]', lity);
        }
    }


    /*Function Calls*/ 
    navbarFixed ();
    bgImg();
    swipperSlider ();
    lity ();
})(jQuery); 
