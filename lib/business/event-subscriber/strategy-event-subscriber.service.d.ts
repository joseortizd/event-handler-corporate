import { eventHandler } from "./eventHandler";
export interface Subscriber {
    getMessages(handler: eventHandler): void;
}
export declare class EventSubscriber {
    private subscriber;
    constructor(subscriber: Subscriber);
    registerEventHandler(handler: eventHandler): void;
}
