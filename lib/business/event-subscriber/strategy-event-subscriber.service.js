"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventSubscriber = void 0;
var EventSubscriber = /** @class */ (function () {
    function EventSubscriber(subscriber) {
        this.subscriber = subscriber;
    }
    EventSubscriber.prototype.registerEventHandler = function (handler) {
        this.subscriber.getMessages(handler);
    };
    return EventSubscriber;
}());
exports.EventSubscriber = EventSubscriber;
