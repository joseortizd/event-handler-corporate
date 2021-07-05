import { Subscriber } from "./strategy-event-subscriber.service";
import { eventHandler } from "./eventHandler";
export declare class AzureEventSubscriberConfig implements Subscriber {
    getMessages(handler: eventHandler): Promise<void>;
    private static logReceivedEvent;
}
