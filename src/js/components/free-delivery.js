export default () => {
  const freeDelivery = document.querySelector('.free-delivery');
  const freeDeliveryBtn = document.querySelector('.free-delivery__btn');

  if(!freeDelivery) {
    return;
  }
  freeDeliveryBtn.addEventListener('click', (e) => {
    e.currentTarget.closest('.free-delivery').style.display = 'none';
  })
};
