import Swiper from './libs/swiper-bundle.min';

export default () => {
  new Swiper('.banner-slider', {
    loop: true,
    containerModifierClass: 'banner-slider-',
    slidesPerView: 1,
    pagination: {
      el: '.banner-pag',
      type: 'bullets',
      clickable: true,
    },
  });
};
