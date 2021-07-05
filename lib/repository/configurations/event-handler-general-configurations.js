"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventHandlerConfigurations = void 0;
var event_handler_general_configurations_model_1 = require("./event-handler-general-configurations.model");
var EventHandlerConfigurations = /** @class */ (function () {
    function EventHandlerConfigurations() {
    }
    EventHandlerConfigurations.getGeneralConfigurations = function () {
        var debugMode = process.env.EVENT_HANDLER_DEBUG === "true";
        var provider = process.env.EVENT_HANDLER_PUBLISHER_PROVIDER;
        if (debugMode) {
            console.log('Debug mode active, use it only for development purposes, for more information check docs');
        }
        if (!provider) {
            debugMode = true;
            console.log('Publisher provider not provided, DEBUG_MODE activated,  for more information check docs');
        }
        return new event_handler_general_configurations_model_1.eventHandlerGeneralConfigurations(debugMode, provider);
    };
    return EventHandlerConfigurations;
}());
exports.EventHandlerConfigurations = EventHandlerConfigurations;
