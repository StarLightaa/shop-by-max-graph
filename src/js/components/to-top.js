export default () => {
  const toTop = document.querySelector('.to-top');

  if(!toTop) {
    return;
  }
  toTop.addEventListener('click', (e) => {
    e.preventDefault();
    scrollTo(document.body);
  });
};

export const scrollTo = (element) => {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop
  });
}
