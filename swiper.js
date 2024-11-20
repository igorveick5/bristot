document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('#product-carousel .swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    centerSlides: true,

    // Breakpoints for responsiveness
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10, 
      },

      768: {
        slidesPerView: 2, 
        spaceBetween: 15,
      },
      
      1024: {
        slidesPerView: 3,
        spaceBetween: 20, 
      },

      1440: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },

    navigation: {
      nextEl: '#product-carousel .swiper-next',
      prevEl: '#product-carousel .swiper-previous',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },

    // on: {
    //   init: function () {
    //     document.querySelector('#product-carousel .swiper-previous').style.visibility = 'hidden';
    //   },
    //   slideChange: function () {
    //     // Show prev button when not on the first slide
    //     if (swiper.activeIndex > 0) {
    //       document.querySelector('#product-carousel .swiper-previous').style.visibility = 'visible';
    //     } else {
    //       document.querySelector('#product-carousel .swiper-previous').style.visibility = 'hidden';
    //     }

    //     // Hide next button on the last slide
    //     if (swiper.isEnd) {
    //       document.querySelector('#product-carousel .swiper-next').style.visibility = 'hidden';
    //     } else {
    //       document.querySelector('#product-carousel .swiper-next').style.visibility = 'visible';
    //     }
    //   }
    // }
  });

  const firstSwiper = new Swiper('.swiper-first', {
    loop: false,
    slidesPerView:2,
    spaceBetween: 20,
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 50,
      }
    },
    navigation: {
      prevEl: '#product-carousel-first .prev',
      nextEl: '#product-carousel-first .next'
    },
    // on: {
    //   init: function () {
    //     // document.querySelector('.swiper-previous.prev').style.visibility = 'hidden';
    //     document.querySelector('.swiper-previous.prev').style.border = "5px solid red";
    //   },
    //   slideChange: function () {
    //     // Show prev button when not on the first slide
    //     if (firstSwiper.activeIndex > 0) {
    //       document.querySelector('.swiper-previous.prev').style.visibility = 'visible';
    //     } else {
    //       document.querySelector('.swiper-previous.prev').style.visibility = 'hidden';
    //     }

    //     // Hide next button on the last slide
    //     if (firstSwiper.isEnd) {
    //       document.querySelector('.swiper-next.next').style.visibility = 'hidden';
    //     } else {
    //       document.querySelector('.swiper-next.next').style.visibility = 'visible';
    //     }
    //   }
    // }
  });
});

// New Swiper

