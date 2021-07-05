import {eventHandlerGeneralConfigurations} from "../../repository/configurations/event-handler-general-configurations.model";
import {EventHandlerConfigurations} from "../../repository/configurations/event-handler-general-configurations";
import {EventSubscriber } from "./strategy-event-subscriber.service";
import {logEventHandler} from "./log-event-handler";
import {eventHandler} from "./eventHandler";
import {AzureEventSubscriberConfig} from "./AzureEventSubscriberConfig";

export async function subscribe(handler: eventHandler): Promise<void> {
    try{
        let configurations: eventHandlerGeneralConfigurations =  EventHandlerConfigurations.getGeneralConfigurations();
        let eventSubscriber: EventSubscriber;
        switch (configurations.provider) {
            case 'AZURE': {
                eventSubscriber = new EventSubscriber(new AzureEventSubscriberConfig());
                eventSubscriber.registerEventHandler(handler);
                break;
            }
            default:
                eventSubscriber = new EventSubscriber(new AzureEventSubscriberConfig());
                eventSubscriber.registerEventHandler(new logEventHandler());
                console.log(`Provider: ${configurations.provider} not supported yet, DEBUG_MODE is active now.`)
        }
        if (configurations.debugMode) {
            eventSubscriber = new EventSubscriber(new AzureEventSubscriberConfig());
            eventSubscriber.registerEventHandler(new logEventHandler());
        }
    } catch (e) {
        throw new Error(e);
    }
}


