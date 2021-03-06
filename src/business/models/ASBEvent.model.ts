import {ASBApplicationProperties} from "./ASBApplicationProperties";
import {EventModel} from "./event.model";

export class ASBEventModel {
    applicationProperties: ASBApplicationProperties;
    body: string

    constructor(event : EventModel) {
        this.body = event.metadata;
        this.applicationProperties = new ASBApplicationProperties(event);
    }

    public parseReceivedMessage (event : any){
        if (event.body) this.body = event.body;
        if (event.applicationProperties) this.applicationProperties = event.applicationProperties;
    }
}