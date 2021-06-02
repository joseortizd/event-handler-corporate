import {EventModel} from "../models/event.model";

export interface Publisher {
    publish(message: EventModel): Promise<boolean>;
}

export class EventPublisher {
    private publisher : Publisher;

    constructor(publisher: Publisher) {
        this.publisher = publisher;
    }

    public async publish(event: EventModel): Promise<boolean> {
        return this.publisher.publish(event);
    }
}