export default () => {
  const catalogFilters = document.querySelectorAll('.catalog-filter');
  const hideFilters = document.querySelector('.hide-filters');

  hideFilters.addEventListener('click', () => {
    catalogFilters.forEach(el => {
      el.classList.remove('catalog-filter--open');
    });
  });
};
