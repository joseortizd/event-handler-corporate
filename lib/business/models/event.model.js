"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventModel = void 0;
var uuid_1 = require("uuid");
var EventModel = /** @class */ (function () {
    function EventModel(eventType, entityId, datetime, version, country, commerce, channel, domain, capability, mimeType, metadata, eventId, timestamp) {
        this.eventId = eventId ? eventId : uuid_1.v4(); // TODO  revisar valor por defecto
        this.eventType = eventType;
        this.entityId = entityId;
        this.timestamp = timestamp ? timestamp : new Date().valueOf();
        this.datetime = datetime;
        this.version = version;
        this.country = country;
        this.commerce = commerce;
        this.channel = channel;
        this.domain = domain;
        this.capability = capability;
        this.mimeType = mimeType;
        this.metadata = metadata;
    }
    EventModel.prototype.setTimestamp = function (timestamp) {
        this.timestamp = timestamp;
    };
    EventModel.prototype.setUUID = function (eventId) {
        this.eventId = eventId;
    };
    return EventModel;
}());
exports.EventModel = EventModel;
