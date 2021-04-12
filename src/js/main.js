import 'focus-visible';
import lazyImages from './modules/lazyImages';
import documentReady from './helpers/documentReady';

import mainSlider from './components/main-slider';
import catalogSlider from './components/catalog-slider';
import marketing from './components/marketing';
import catalogFilterToggle from './components/catalog-filter-toggle';
import catalogProps from './components/catalog-props';
import customSelect from './components/custom-select';
import freeDelivery from './components/free-delivery';
import colorSelect from './components/color-select';
import sizeSelect from './components/size-select';
import stepper from './components/stepper';
import cardSlider from './components/card-slider';
import cardTabs from './components/card-bottom-tabs';
import simplebarScroll from './components/simplebar-scroll';
import toTop from './components/to-top';

documentReady(() => {
  lazyImages();
  mainSlider();
  marketing();
  catalogSlider();
  catalogFilterToggle();
  catalogProps();
  customSelect();
  freeDelivery();
  colorSelect();
  sizeSelect();
  stepper();
  cardSlider();
  cardTabs();
  simplebarScroll();
  toTop();
});


