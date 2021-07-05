import { EventModel } from "./event.model";
export declare class ASBApplicationProperties {
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
    entityId: string;
    timestamp: string;
    entityType: string;
    metadata: string;
    constructor(event: EventModel);
}
