import SimpleBar from '../libs/simplebar.min';

export default () => {
  const el = document.querySelector('.card-description__navigation');
  if(el)
    new SimpleBar(el);
};
