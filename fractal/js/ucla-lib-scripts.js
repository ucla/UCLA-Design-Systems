const Accordion = require('./accordion');
const Tabs = require('./tabs');
const Navigation = require('./navigation');

function init() {
  new Accordion().init();
  new Tabs().init();
  new Navigation().init();
}

init();