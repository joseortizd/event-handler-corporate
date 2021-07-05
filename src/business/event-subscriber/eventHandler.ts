import {ASBReceivedEvent} from "../models/ASBReceivedEvent.model";

export interface eventHandler {
    process(event : ASBReceivedEvent): void;
}

