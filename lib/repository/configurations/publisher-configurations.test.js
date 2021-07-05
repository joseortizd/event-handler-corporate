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
var publisher_configurations_1 = require("./publisher-configurations");
describe('PublisherConfigurations test suite', function () {
    it('It should throw an error for service not properly configured', function () {
        expect(function () {
            jest.resetModules();
            var instance = new publisher_configurations_1.PublisherConfigurations();
            expect(instance).toBeInstanceOf(publisher_configurations_1.PublisherConfigurations);
            var publisherConfigurationsProto = Object.getPrototypeOf(instance);
            var testInstance = publisherConfigurationsProto.constructor.getAsbPublisherConfigurations();
        }).toThrow("Azure bus service configuration not provided, check for documentation.");
    });
    it('It should return a valid instance of PublisherConfigurations', function () {
        var OLD_ENV = process.env;
        jest.resetModules();
        var connectionStringValue = 'A valid connection string';
        var topicName = 'A valid topic name';
        var logInConsole = 'true';
        process.env.EVENT_HANDLER_PUBLISHER_ASB_CONNECTION_STRING = connectionStringValue;
        process.env.EVENT_HANDLER_PUBLISHER_ASB_TOPIC_NAME = topicName;
        process.env.EVENT_HANDLER_PUBLISHER_CONSOLE_LOG_ACTIVATE = logInConsole;
        var instance = new publisher_configurations_1.PublisherConfigurations();
        expect(instance).toBeInstanceOf(publisher_configurations_1.PublisherConfigurations);
        var publisherConfigurationsProto = Object.getPrototypeOf(instance);
        var testInstance = publisherConfigurationsProto.constructor.getAsbPublisherConfigurations();
        expect(testInstance.connectionString).toBe(connectionStringValue);
        process.env = __assign({}, OLD_ENV);
    });
});
