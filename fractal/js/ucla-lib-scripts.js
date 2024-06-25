const Alert = require('./alert');
const Accordion = require('./accordion');
const Tabs = require('./tabs');
const Navigation = require('./navigation');
const Table = require('./table');
const Carousel = require('./carousel');

const Bruin = {
  initAll: function() {
    new Alert().init();
    new Accordion().init();
    new Tabs().init();
    new Navigation().init();
    new Table().init();
    new Carousel().init();
  }
}

Bruin.initAll();