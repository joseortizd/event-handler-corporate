"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ASBApplicationProperties = void 0;
var ASBApplicationProperties = /** @class */ (function () {
    function ASBApplicationProperties(event) {
        this.eventId = event.eventId;
        this.eventType = event.eventType;
        this.datetime = event.datetime;
        this.version = event.version;
        this.country = event.country;
        this.commerce = event.commerce;
        this.channel = event.channel;
        this.domain = event.domain;
        this.capability = event.capability;
        this.mimeType = event.mimeType;
        this.entityId = event.entityId;
        this.timestamp = event.timestamp;
        this.entityType = event.entityType;
        this.metadata = event.metadata;
    }
    return ASBApplicationProperties;
}());
exports.ASBApplicationProperties = ASBApplicationProperties;
