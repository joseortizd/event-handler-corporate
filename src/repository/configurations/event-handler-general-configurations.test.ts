import {EventHandlerConfigurations} from "./event-handler-general-configurations";
import {eventHandlerGeneralConfigurations} from "./event-handler-general-configurations.model";

describe('Event handler general configurations test suites', () => {
    it('Should return a valid event handler configurations values', () => {
        const OLD_ENV = process.env;
        jest.resetModules();
        let instance = EventHandlerConfigurations.getGeneralConfigurations();
        expect(instance).toBeInstanceOf(eventHandlerGeneralConfigurations);
        expect(instance.provider).toBe("Not Provided");
        expect(instance.debugMode).toBe(true);
        process.env.EVENT_HANDLER_DEBUG = "true";
        instance = EventHandlerConfigurations.getGeneralConfigurations();
        expect(instance.provider).toBe("Not Provided");
        expect(instance.debugMode).toBe(true);
        process.env.EVENT_HANDLER_PUBLISHER_PROVIDER = 'AZURE';
        process.env.EVENT_HANDLER_DEBUG = 'false';
        instance = EventHandlerConfigurations.getGeneralConfigurations();
        expect(instance.provider).toBe('AZURE');
        expect(instance.debugMode).toBe(false);
        process.env = {...OLD_ENV};
    })
})
