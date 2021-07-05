import {ASBApplicationProperties} from "./ASBApplicationProperties";

export class ASBReceivedEvent {
    applicationProperties: ASBApplicationProperties;
    body: string

    constructor(event : any) {
        this.body = event.body;
        this.applicationProperties = event.applicationProperties;
    }
}