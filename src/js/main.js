import 'focus-visible'
import lazyImages from './modules/lazyImages';
import documentReady from './helpers/documentReady';

import bannerSlider from './banner-slider';
import marketing from './components/marketing';

documentReady(() => {
  lazyImages();
  bannerSlider();
  marketing();
});


