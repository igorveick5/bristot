document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
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
      nextEl: '.swiper-next',
      prevEl: '.swiper-previous',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },

    on: {
      init: function () {
        document.querySelector('.swiper-previous').style.visibility = 'hidden';
      },
      slideChange: function () {
        // Show prev button when not on the first slide
        if (swiper.activeIndex > 0) {
          document.querySelector('.swiper-previous').style.visibility = 'visible';
        } else {
          document.querySelector('.swiper-previous').style.visibility = 'hidden';
        }

        // Hide next button on the last slide
        if (swiper.isEnd) {
          document.querySelector('.swiper-next').style.visibility = 'hidden';
        } else {
          document.querySelector('.swiper-next').style.visibility = 'visible';
        }
      }
    }
  });
});
