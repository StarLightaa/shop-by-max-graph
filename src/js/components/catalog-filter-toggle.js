export default () => {
  const catalog = document.querySelector('.catalog');
  const catalogFiltersTop = document.querySelectorAll('.catalog-filter__top');
  const hideFilters = document.querySelector('.hide-filters');
  const catalogFilterItems = document.querySelectorAll('.catalog-filter__item');
  const catalogChoice = document.querySelector('.catalog-choice');

  if(!catalog) {
    return;
  }
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

  const createChoiceItem = (text) => {
    return (
      `
        <button class="btn-reset catalog-choice__item" data-choice-text="${text}">
          ${text}
          <svg aria-hidden="true">
            <use xlink:href="images/sprites/sprite-multi.svg#close"></use>
          </svg>
        </button>
      `
    );
  };

  catalogFilterItems.forEach(el => {
    let checkboxInput = el.querySelector('input');
    checkboxInput.addEventListener('change', (e) => {
      let checked = checkboxInput.checked;
      if(checked) {
        el.querySelector('.custom-checkbox').classList.add('custom-checkbox--active');
        let text = el.querySelector('.custom-checkbox__text').textContent;

        catalogChoice.insertAdjacentHTML('afterbegin', createChoiceItem(text));
      } else {
        el.querySelector('.custom-checkbox').classList.remove('custom-checkbox--active');
        let text = el.querySelector('.custom-checkbox').dataset.text;

        document.querySelector(`[data-choice-text="${text}"]`).remove();
      }

      let activeCheckboxes = document.querySelectorAll('.custom-checkbox--active');

      if(activeCheckboxes.length > 0) {
        catalogChoice.style.display = 'block';
      } else {
        catalogChoice.style.display = 'none';
      }
    });
  });

  catalogChoice.addEventListener('click', (e) => {
    if(e.target.classList.contains('catalog-choice__item')) {
      e.target.remove();

      let text = e.target.textContent.trimLeft().trimRight();

      document.querySelector(`[data-text="${text}"]`).querySelector('input').checked = false;
      document.querySelector(`[data-text="${text}"]`).classList.remove('custom-checkbox--active');
    }

    if (e.target.classList.contains('catalog-choice__clear')) {
      Array.from(e.currentTarget.children).forEach(el => {
        if (!el.classList.contains('catalog-choice__clear')) {
          el.remove();
        }

        document.querySelectorAll('.catalog-filter__quantity').forEach(el => el.textContent = 0);

        catalogFilterItems.forEach(el => {
          el.querySelector('input').checked = false;
          el.querySelector('.custom-checkbox').classList.remove('custom-checkbox--active');
        })
      });

      e.currentTarget.style.display = 'none';
    }

    if(e.currentTarget.children.length === 1) {
      e.currentTarget.style.display = 'none';
    }


  });
};
