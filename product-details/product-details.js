document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper("#product-carousel .swiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      centerSlides: true,
  
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
  
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
  
        1440: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
  
      navigation: {
        nextEl: "#product-carousel .swiper-next",
        prevEl: "#product-carousel .swiper-previous",
      },
  
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  
    const relatedSlider = new Swiper("#related_slider", {
      slidesPerView: 2,
      spaceBetween: 10,
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
      navigation: {
        prevEl: "#product-carousel-first .prev",
        nextEl: "#product-carousel-first .next",
      },
    });
  });
  