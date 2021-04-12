import SimpleBar from '../libs/simplebar.min';

export default () => {
  const el = document.querySelector('.card-description__navigation');
  new SimpleBar(el);
};
