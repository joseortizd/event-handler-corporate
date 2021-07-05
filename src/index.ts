import {publish} from "./business/event-publisher/event-publisher";
import {EventModel} from "./business/models/event.model";
import {eventHandler} from "./business/event-subscriber/eventHandler";
import {subscribe} from "./business/event-subscriber/event-subscriber";

export function publishEvent (event : EventModel) : Promise<boolean> {
    return publish(event);
}

export function subscribeEvent(handler: eventHandler): void {
    subscribe(handler);
}