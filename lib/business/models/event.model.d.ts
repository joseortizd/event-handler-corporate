export declare class EventModel {
    eventId: string;
    eventType: string;
    datetime: Date;
    version: string;
    country: string;
    commerce: string;
    channel: string;
    domain: string;
    capability: string;
    mimeType: string;
    metadata: string;
    entityId: string;
    timestamp: number;
    constructor(eventType: string, entityId: string, datetime: Date, version: string, country: string, commerce: string, channel: string, domain: string, capability: string, mimeType: string, metadata: string, eventId?: string, timestamp?: number);
    setTimestamp(timestamp: number): void;
    setUUID(eventId: string): void;
}
