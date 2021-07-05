"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscribeEvent = exports.publishEvent = void 0;
var event_publisher_1 = require("./business/event-publisher/event-publisher");
var event_subscriber_1 = require("./business/event-subscriber/event-subscriber");
function publishEvent(event) {
    return event_publisher_1.publish(event);
}
exports.publishEvent = publishEvent;
function subscribeEvent(handler) {
    event_subscriber_1.subscribe(handler);
}
exports.subscribeEvent = subscribeEvent;
