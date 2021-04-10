export default () => {
  const catalogFiltersTop = document.querySelectorAll('.catalog-filter__top');
  const hideFilters = document.querySelector('.hide-filters');

  catalogFiltersTop.forEach(el => {
    el.addEventListener('click', (e) => {
      e.currentTarget.closest('.catalog-filter').classList.toggle('catalog-filter--open');
    });
  });

  hideFilters.addEventListener('click', () => {
    catalogFiltersTop.forEach(el => {
      el.closest('.catalog-filter').classList.remove('catalog-filter--open');
    });
  });
};
