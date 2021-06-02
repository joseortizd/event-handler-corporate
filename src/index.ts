import {publish} from "./business/event-publisher/event-publisher";
import {EventModel} from "./business/models/event.model";

export function publishEvent (event : EventModel) : Promise<boolean> {
    return publish(event);
}
