require('./polyfills/remove');
require('./polyfills/customEvent');

import Alert from './alert';
import Banner from './banner';
import Accordion from './accordion';
import Carousel from './carousel';
import Navigation from './navigation';
import Table from './table';
import Tabs from './tabs';

function init() {
  Accordion.initAll();
  Alert.initAll();
  Banner.initAll();
  Carousel.initAll();
  Navigation.initAll();
  Table.initAll();
  Tabs.initAll();
}

export { Accordion, Alert, Banner, Carousel, Navigation, Table, Tabs, init };
