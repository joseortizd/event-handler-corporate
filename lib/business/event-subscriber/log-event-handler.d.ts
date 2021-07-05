import { ASBReceivedEvent } from "../models/ASBReceivedEvent.model";
import { eventHandler } from "./eventHandler";
export declare class logEventHandler implements eventHandler {
    process(event: ASBReceivedEvent): void;
}
