import Swiper from '../libs/swiper-bundle.min';

export default () => {
  new Swiper('.hero-catalog__slider', {
    loop: true,
    slidesPerView: 1,
  });
};
