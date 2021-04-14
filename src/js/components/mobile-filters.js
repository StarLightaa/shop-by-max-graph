export default () => {
  const mobileFiltersOpen = document.querySelector('.catalog-mobile-filters');
  const catalogFilters = document.querySelector('.catalog-filters');

  if(!mobileFiltersOpen) {
    return;
  }

  let openFilters = false;

  mobileFiltersOpen.addEventListener('click', (e) => {
    if(!openFilters) {
      mobileFiltersOpen.querySelector('span').textContent = 'Close';
      catalogFilters.classList.add('catalog-filters--open');
      openFilters = true;
    } else {
      mobileFiltersOpen.querySelector('span').textContent = 'Filters';
      catalogFilters.classList.remove('catalog-filters--open');
      openFilters = false;
    }
  });
  // catalogFiltersTop.forEach(el => {
  //   el.addEventListener('click', (e) => {
  //     e.currentTarget.closest('.catalog-filter').classList.toggle('catalog-filter--open');
  //   });
  // });

};
