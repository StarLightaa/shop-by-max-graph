export default () => {
  const cardSlider = document.querySelector('.card-slider');
  const cardSliderThumbs = document.querySelector('.card-slider__thumbs');
  const sliderImg = document.querySelector('.card-slider__main img');

  if(!cardSlider) {
    return;
  }

  cardSliderThumbs.addEventListener('click', (e) => {
    if(e.target.classList.contains('card-slider__thumb')) {
      let src = e.target.querySelector('img').getAttribute('src');
      console.log(src);

      sliderImg.setAttribute('src', src);
    }
  });
};

