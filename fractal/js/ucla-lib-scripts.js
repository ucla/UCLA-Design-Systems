const Accordion = require('./accordion');
const Tabs = require('./tabs');
const Navigation = require('./navigation');
const Table = require('./table');

function init() {
  new Accordion().init();
  new Tabs().init();
  new Navigation().init();
  new Table().init();
}

init();