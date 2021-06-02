import {eventHandlerGeneralConfigurations} from "./event-handler-general-configurations.model";

export class EventHandlerConfigurations {
    public static getGeneralConfigurations():  eventHandlerGeneralConfigurations {
        let debugMode = process.env.EVENT_HANDLER_DEBUG === "true";
        let provider = process.env.EVENT_HANDLER_PUBLISHER_PROVIDER;
        if (debugMode) { console.log('Debug mode active, use it only for development purposes, for more information check docs')}
        if (!provider) {
            debugMode = true;
            console.log('Publisher provider not provided, DEBUG_MODE activated,  for more information check docs')
        }
        return new eventHandlerGeneralConfigurations(debugMode, provider);
    }
}