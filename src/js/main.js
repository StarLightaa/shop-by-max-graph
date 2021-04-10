import 'focus-visible'
import lazyImages from './modules/lazyImages';
import documentReady from './helpers/documentReady';

import mainSlider from './components/main-slider';
import catalogSlider from './components/catalog-slider';
import marketing from './components/marketing';
import catalogFilterToggle from './components/catalog-filter-toggle';
import catalogProps from './components/catalog-props';

documentReady(() => {
  lazyImages();
  mainSlider();
  marketing();
  catalogSlider();
  catalogFilterToggle();
  catalogProps();
});


