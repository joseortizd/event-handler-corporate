export declare class EventModel {
    eventId: string;
    eventType: string;
    datetime: string;
    version: string;
    country: string;
    commerce: string;
    channel: string;
    domain: string;
    capability: string;
    mimeType: string;
    metadata: string;
    entityId: string;
    entityType: string;
    timestamp: string;
    constructor(eventType: string, entityId: string, datetime: string, version: string, country: string, commerce: string, channel: string, domain: string, capability: string, mimeType: string, entityType: string, metadata: string, eventId?: string, timestamp?: string);
    setTimestamp(timestamp: string): void;
    setUUID(eventId: string): void;
}
