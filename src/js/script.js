$(document).ready(function(){
   

      window.addEventListener('DOMContentLoaded', () => {
        const menu = document.querySelector('.promo__menu__ithems'),
        menuItem = document.querySelectorAll('.promo__menu__link'),
        hamburger = document.querySelector('.hamburger');
    
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('promo__menu__ithems_active');
        });
    
        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('hamburger_active');
                menu.classList.toggle('promo__menu__ithems_active');
            })
        })
    });
    
    $('.access__slider').slick({
        dots:true,
            speed: 800,
            slidesToShow: 1,
            prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg" alt="Previus"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="icons/rgh.svg" alt="Next"></button>',
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows:false,
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows:false
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows:false,
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
          
    });
   
  });