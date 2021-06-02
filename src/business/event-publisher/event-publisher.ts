import {EventPublisher} from "./strategy-event-publisher.service";
import {ASBPublisher} from "./ASB-publisher";
import {LogPublisher} from "./log-publisher";
import {EventModel} from "../models/event.model";
import {EventHandlerConfigurations} from "../../repository/configurations/event-handler-general-configurations";
import {eventHandlerGeneralConfigurations} from "../../repository/configurations/event-handler-general-configurations.model";

export async function publish(event : EventModel): Promise<boolean> {
    try{
        let configurations: eventHandlerGeneralConfigurations =  EventHandlerConfigurations.getGeneralConfigurations();
        let eventPublisher: EventPublisher;
        switch (configurations.provider) {
            case 'AZURE': {
                eventPublisher = new EventPublisher(new ASBPublisher());
                break;
            }
            default:
                console.log(`Provider: ${configurations.provider} not supported yet, DEBUG_MODE is active now.`)
                eventPublisher = new EventPublisher(new LogPublisher())
        }
        if (configurations.debugMode) { eventPublisher = new EventPublisher(new LogPublisher())}
        return await eventPublisher.publish(event);
    } catch (e) {
        throw new Error(e);
    }

}


