import {EventModel} from "./event.model";

export class ASBApplicationProperties {
    eventId : string;
    eventType : string;
    datetime : string;
    version : string;
    country : string;
    commerce : string;
    channel : string;
    domain : string;
    capability : string;
    mimeType : string;
    entityId : string;
    timestamp : string;
    entityType: string;
    metadata: string;

    constructor(event : EventModel) {
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
}