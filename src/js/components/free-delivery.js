export default () => {
  const freeDeliveryBtn = document.querySelector('.free-delivery__btn');

  freeDeliveryBtn.addEventListener('click', (e) => {
    e.currentTarget.closest('.free-delivery').style.display = 'none';
  })
};
