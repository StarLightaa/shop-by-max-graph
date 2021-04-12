import Swiper from '../libs/swiper-bundle.min';

export default () => {
  new Swiper('.hero-catalog__slider', {
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.hero-next-btn',
      prevEl: '.hero-prev-btn',
    },
  });

  new Swiper('.card-related__slider', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: '.related-pag',
      type: 'bullets',
      clickable: true,
    },
  });
};
