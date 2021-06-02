import { v4 as uuid } from 'uuid';

export class EventModel {
    eventId : string;
    eventType : string;
    datetime : Date;
    version : string;
    country : string;
    commerce : string;
    channel : string;
    domain : string;
    capability : string;
    mimeType : string;
    metadata : string;
    entityId : string;
    timestamp : number;

    constructor(eventType: string, entityId: string, datetime: Date, version: string, country: string, commerce: string, channel: string, domain: string, capability: string, mimeType: string, metadata: string, eventId?: string, timestamp? : number) {
        this.eventId = eventId ? eventId : uuid(); // TODO  revisar valor por defecto
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

    setTimestamp (timestamp : number) {
        this.timestamp = timestamp;
    }

    setUUID (eventId: string) {
        this.eventId = eventId;
    }
}
