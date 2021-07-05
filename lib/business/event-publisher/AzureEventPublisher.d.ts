import { Publisher } from "./strategy-event-publisher.service";
import { EventModel } from "../models/event.model";
export declare class AzureEventPublisher implements Publisher {
    publish(event: EventModel): Promise<boolean>;
    private static buildEvent;
    static logEvent(logInConsole: boolean, event: any, topicName: string): void;
}
