import {Publisher} from "./strategy-event-publisher.service";
import {EventModel} from "../models/event.model";

export class LogPublisher implements Publisher {
    public async publish(message: EventModel): Promise<boolean> {
        console.log(message);
        return true;
    }
}