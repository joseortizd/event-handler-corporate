import {eventHandlerGeneralConfigurations} from "./event-handler-general-configurations.model";

describe('Event handler general configurations model tests suite', () => {
    it('Should return a valid instance of eventHandlerGeneralConfigurations', () => {
        const debugModeTrue = true;
        const debugModeFalse = false;
        const provider = 'AZURE'
        let instance = new eventHandlerGeneralConfigurations(debugModeTrue, provider);
        expect(instance).toBeInstanceOf(eventHandlerGeneralConfigurations);
        expect(instance.provider).toBe(provider);
        expect(instance.debugMode).toBe(debugModeTrue);
        instance = new eventHandlerGeneralConfigurations(debugModeFalse, provider);
        expect(instance.debugMode).toBe(debugModeFalse);
    })
})