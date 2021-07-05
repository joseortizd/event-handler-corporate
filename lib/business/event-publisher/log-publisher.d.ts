import { Publisher } from "./strategy-event-publisher.service";
import { EventModel } from "../models/event.model";
export declare class LogPublisher implements Publisher {
    publish(message: EventModel): Promise<boolean>;
}
