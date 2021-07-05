"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ASBReceivedEvent = void 0;
var ASBReceivedEvent = /** @class */ (function () {
    function ASBReceivedEvent(event) {
        this.body = event.body;
        this.applicationProperties = event.applicationProperties;
    }
    return ASBReceivedEvent;
}());
exports.ASBReceivedEvent = ASBReceivedEvent;
