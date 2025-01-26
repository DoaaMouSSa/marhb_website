(function($) {

    "use strict";
  
    var initPreloader = function() {
      $(document).ready(function($) {
      var Body = $('body');
          Body.addClass('preloader-site');
      });
      $(window).load(function() {
          $('.preloader-wrapper').fadeOut();
          $('body').removeClass('preloader-site');
      });
    }
  
    // init Chocolat light box
      var initChocolat = function() {
          Chocolat(document.querySelectorAll('.image-link'), {
            imageSize: 'contain',
            loop: true,
          })
      }
  
    var initSwiper = function() {
  
      var swiper = new Swiper(".main-swiper", {
        speed: 500,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
  
   
    
        var stores_swiper = new Swiper(".stores-carousel", {
  
            slidesPerView: 5,
            spaceBetween: 20,
            autoplay: {
                delay: 5000, // Delay between slides in milliseconds (e.g., 3000ms = 3 seconds)
                disableOnInteraction: true, // Prevent autoplay from stopping when the user interacts with the Swiper
            },
            speed: 500,
            navigation: {
                nextEl: ".stores-carousel-next",
                prevEl: ".stores-carousel-prev",
            },
            breakpoints: {
                0: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 5,
                },
                991: {
                    slidesPerView: 6,
                },
                1500: {
                    slidesPerView: 6,
                },
            }
        });
  
   
    }
  
   
  
    // init jarallax parallax
    var initJarallax = function() {
      jarallax(document.querySelectorAll(".jarallax"));
  
      jarallax(document.querySelectorAll(".jarallax-keep-img"), {
        keepImg: true,
      });
    }
  
    // document ready
    $(document).ready(function() {
      
      initPreloader();
      initSwiper();
      initProductQty();
      initJarallax();
      initChocolat();
  
    }); // End of a document
  
  })(jQuery);