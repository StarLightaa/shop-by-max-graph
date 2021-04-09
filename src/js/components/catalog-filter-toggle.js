export default () => {
  const catalogFiltersTop = document.querySelectorAll('.catalog-filter__top');

  catalogFiltersTop.forEach(el => {
    el.addEventListener('click', (e) => {
      e.currentTarget.closest('.catalog-filter').classList.toggle('catalog-filter--open');
    });
  });
};
