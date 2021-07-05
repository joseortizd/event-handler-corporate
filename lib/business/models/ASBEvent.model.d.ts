import { ASBApplicationProperties } from "./ASBApplicationProperties";
import { EventModel } from "./event.model";
export declare class ASBEventModel {
    applicationProperties: ASBApplicationProperties;
    body: string;
    constructor(event: EventModel);
    parseReceivedMessage(event: any): void;
}
