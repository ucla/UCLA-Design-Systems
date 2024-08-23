require('./polyfills/remove');
require('./polyfills/customEvent');

import Alert from './alert';
import Accordion from './accordion';
import Carousel from './carousel';
import Navigation from './navigation';
import Table from './table';
import Tabs from './tabs';

function init() {
  Accordion.initAll();
  Alert.initAll();
  Carousel.initAll();
  Navigation.initAll();
  Table.initAll();
  Tabs.initAll();
}

export { Accordion, Alert, Carousel, Navigation, Table, Tabs, init };
