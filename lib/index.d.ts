import { EventModel } from "./business/models/event.model";
import { eventHandler } from "./business/event-subscriber/eventHandler";
export declare function publishEvent(event: EventModel): Promise<boolean>;
export declare function subscribeEvent(handler: eventHandler): void;
