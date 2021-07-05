import {eventHandler} from "./eventHandler";

export interface Subscriber {
    getMessages(handler: eventHandler): void;
}

export class EventSubscriber {
    private subscriber : Subscriber;

    constructor(subscriber: Subscriber) {
        this.subscriber = subscriber;
    }

    public registerEventHandler(handler: eventHandler): void {
        this.subscriber.getMessages(handler);
    }
}
