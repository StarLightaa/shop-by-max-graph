export default () => {
  const cardDescrLink = document.querySelectorAll('.card-description__link');
  const cardDescrContent = document.querySelectorAll('.card-description__content');

  cardDescrLink.forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      let target = e.currentTarget.getAttribute('href');
      cardDescrLink.forEach(el => el.classList.remove('card-description__link--active'));
      cardDescrContent.forEach(el => el.classList.remove('card-description__content--active'));

      e.currentTarget.classList.add('card-description__link--active');
      document.querySelector(`[data-target="${target}"]`).classList.add('card-description__content--active');
    });
  });
};

