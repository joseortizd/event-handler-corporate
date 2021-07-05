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
var subscriber_configurations_1 = require("./subscriber-configurations");
describe('Subscriber configurations tests suite', function () {
    it('Should throw an error, environment variables not defined', function () {
        expect(function () {
            jest.resetModules();
            var configurations = new subscriber_configurations_1.SubscriberConfigurations();
            var configurationsProto = Object.getPrototypeOf(configurations);
            configurationsProto.constructor.getAsbSubscriberConfigurations();
        }).toThrow('Azure bus service configuration not provided, check for documentation.');
    });
    it('Should return a valid AbsSubscriberConfig object', function () {
        var OLD_ENV = process.env;
        jest.resetModules();
        process.env.EVENT_HANDLER_SUBSCRIBER_ASB_CONNECTION_STRING = "a valid connection string";
        process.env.EVENT_HANDLER_SUBSCRIBER_ASB_TOPIC_NAME = "a valid topic name";
        process.env.EVENT_HANDLER_SUBSCRIBER_ASB_SUBSCRIPTION_NAME = "a valid subscriptionName";
        process.env.EVENT_HANDLER_SUBSCRIBER_CONSOLE_LOG_ACTIVATE = "true";
        var configurations = new subscriber_configurations_1.SubscriberConfigurations();
        var configurationsProto = Object.getPrototypeOf(configurations);
        var subscriberConfigurations = configurationsProto.constructor.getAsbSubscriberConfigurations();
        expect(subscriberConfigurations.subscriptionName).toBe("a valid subscriptionName");
        expect(subscriberConfigurations.topicName).toBe("a valid topic name");
        expect(subscriberConfigurations.connectionString).toBe("a valid connection string");
        expect(subscriberConfigurations.logInConsole).toBe(true);
        process.env = __assign({}, OLD_ENV);
    });
});
