import {ASBReceivedEvent} from "../models/ASBReceivedEvent.model";
import {eventHandler} from "./eventHandler";

export class logEventHandler implements eventHandler {
    process(event : ASBReceivedEvent) {
        console.log("Application properties:");
        console.log(event.applicationProperties);
        console.log("Body");
        console.log(event.body);
    }
}