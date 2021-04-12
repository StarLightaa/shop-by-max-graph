export default () => {
  const sizeSelect = document.querySelector('.size-select');
  let size = '';

  sizeSelect.addEventListener('click', (e) => {
    if(e.target.classList.contains('size-select__btn')) {

      e.currentTarget.querySelector('.size-select__clear').style.display = 'inline-flex';

      e.target.classList.toggle('size-select__btn--active');
      if(e.target.classList.contains('size-select__btn--active')) {
        let currentSize = e.target.textContent;

        size+= currentSize + ', ';
      } else {
        let currentSize = e.target.textContent + ', ';

        size = size.replace(currentSize, '');
      }

      e.currentTarget.querySelector('.size-select__selected span').textContent = size;

      if(!size) {
        e.currentTarget.querySelector('.size-select__selected span').textContent = 'Select a size';
        e.currentTarget.querySelector('.size-select__clear').style.display = 'none';
      }
    }

    if(e.target.classList.contains('size-select__clear')) {
      document.querySelectorAll('.size-select__btn').forEach(el => el.classList.remove('size-select__btn--active'));
      size = '';
      e.currentTarget.querySelector('.size-select__selected span').textContent = 'Select a size';
      e.target.style.display = 'none';
    }
  });
};
