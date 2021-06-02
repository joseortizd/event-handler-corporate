import { EventModel } from "../models/event.model";
export interface Publisher {
    publish(message: EventModel): Promise<boolean>;
}
export declare class EventPublisher {
    private publisher;
    constructor(publisher: Publisher);
    publish(event: EventModel): Promise<boolean>;
}
