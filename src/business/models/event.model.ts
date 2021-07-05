import { v4 as uuid } from 'uuid';

export class EventModel {

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
    metadata : string;
    entityId : string;
    entityType : string;
    timestamp : string;

    constructor(eventType: string, entityId: string, datetime: string, version: string, country: string, commerce: string, channel: string, domain: string, capability: string, mimeType: string, entityType: string, metadata: string, eventId?: string, timestamp? : string) {
        this.eventId = eventId ? eventId : uuid();
        this.eventType = eventType;
        this.entityId = entityId;
        this.timestamp = timestamp ? timestamp : new Date().valueOf().toString();
        this.datetime = datetime;
        this.version = version;
        this.country = country;
        this.commerce = commerce;
        this.channel = channel;
        this.domain = domain;
        this.capability = capability;
        this.mimeType = mimeType;
        this.entityType = entityType;
        this.metadata = metadata;
    }

    setTimestamp (timestamp : string) {
        this.timestamp = timestamp;
    }

    setUUID (eventId: string) {
        this.eventId = eventId;
    }
}
