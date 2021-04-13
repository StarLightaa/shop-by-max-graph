export default () => {

  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');
  const navClose = document.querySelector('.nav__close');

  if (!burger || !nav || !navClose) {
    return;
  }

  burger.addEventListener('click', () => {
    nav.classList.add('nav--visible');
  });

  navClose.addEventListener('click', () => {
    nav.classList.remove('nav--visible');
  });

  nav.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav__link')) {
      nav.classList.remove('nav--visible');
    }
  });
};

