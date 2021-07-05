let { publishEvent } = require('../../../lib/index');
const { ExampleEvent } = require('./eventExample.model');

publishEvent(ExampleEvent);