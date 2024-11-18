document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 20, 
    centerSlides: true,
    
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
        // Show prev button on nav start
        if (swiper.activeIndex > 0) {
          document.querySelector('.swiper-previous').style.visibility = 'visible';
        } else {
          document.querySelector('.swiper-previous').style.visibility = 'hidden';
        }

        // Hide next button on last slide
        if (swiper.isEnd) {
          document.querySelector('.swiper-next').style.visibility = 'hidden';
        } else {
          document.querySelector('.swiper-next').style.visibility = 'visible';
        }
      }
    }
  });
});
