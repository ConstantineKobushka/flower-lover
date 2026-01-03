import Swiper from 'swiper/bundle';

const orderSwiper = new Swiper('.order-swiper', {
  loop: true,
  grabCursor: true,

  breakpoints: {
    0: {
      slidesPerView: 1.95,
      centeredSlides: true,
      spaceBetween: -60,
    },

    768: {
      slidesPerView: 3,
      centeredSlides: false,
      spaceBetween: 20,
      pagination: {
        el: '.order-swiper-pagination',
        type: 'bullets',
      },
    },

    1440: {
      slidesPerView: 4,
      spaceBetween: 20,
      pagination: false,
      navigation: {
        nextEl: '.order-swiper-button-next',
        prevEl: '.order-swiper-button-prev',
      },
    },
  },
});
