"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publishEvent = void 0;
var event_publisher_1 = require("./business/event-publisher/event-publisher");
function publishEvent(event) {
    return event_publisher_1.publish(event);
}
exports.publishEvent = publishEvent;
