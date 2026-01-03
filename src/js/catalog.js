import Swiper from 'swiper/bundle';

const catalogSwiper = new Swiper('.catalog-swiper', {
  loop: true,
  grabCursor: true,
  breakpoints: {
    0: {
      centeredSlides: true,
      slidesPerView: 1.5,
      spaceBetween: -60,
    },
    768: {
      enabled: false,
    },
  },
});
