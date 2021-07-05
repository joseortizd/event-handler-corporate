"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var event_handler_general_configurations_1 = require("./event-handler-general-configurations");
var event_handler_general_configurations_model_1 = require("./event-handler-general-configurations.model");
describe('Event handler general configurations test suites', function () {
    it('Should return a valid event handler configurations values', function () {
        var OLD_ENV = process.env;
        jest.resetModules();
        var instance = event_handler_general_configurations_1.EventHandlerConfigurations.getGeneralConfigurations();
        expect(instance).toBeInstanceOf(event_handler_general_configurations_model_1.eventHandlerGeneralConfigurations);
        expect(instance.provider).toBe("Not Provided");
        expect(instance.debugMode).toBe(true);
        process.env.EVENT_HANDLER_DEBUG = "true";
        instance = event_handler_general_configurations_1.EventHandlerConfigurations.getGeneralConfigurations();
        expect(instance.provider).toBe("Not Provided");
        expect(instance.debugMode).toBe(true);
        process.env.EVENT_HANDLER_PUBLISHER_PROVIDER = 'AZURE';
        process.env.EVENT_HANDLER_DEBUG = 'false';
        instance = event_handler_general_configurations_1.EventHandlerConfigurations.getGeneralConfigurations();
        expect(instance.provider).toBe('AZURE');
        expect(instance.debugMode).toBe(false);
        process.env = __assign({}, OLD_ENV);
    });
});
