"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var event_handler_general_configurations_model_1 = require("./event-handler-general-configurations.model");
describe('Event handler general configurations model tests suite', function () {
    it('Should return a valid instance of eventHandlerGeneralConfigurations', function () {
        var debugModeTrue = true;
        var debugModeFalse = false;
        var provider = 'AZURE';
        var instance = new event_handler_general_configurations_model_1.eventHandlerGeneralConfigurations(debugModeTrue, provider);
        expect(instance).toBeInstanceOf(event_handler_general_configurations_model_1.eventHandlerGeneralConfigurations);
        expect(instance.provider).toBe(provider);
        expect(instance.debugMode).toBe(debugModeTrue);
        instance = new event_handler_general_configurations_model_1.eventHandlerGeneralConfigurations(debugModeFalse, provider);
        expect(instance.debugMode).toBe(debugModeFalse);
    });
});
