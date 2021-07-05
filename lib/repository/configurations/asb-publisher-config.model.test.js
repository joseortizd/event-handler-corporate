"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var asb_publisher_config_model_1 = require("./asb-publisher-config.model");
describe('AbsPublisher configurations model tests suite', function () {
    it('should return a valid instance of AbsPublisher', function () {
        var connectionString = 'a valid connection string';
        var topicName = 'a valid topic name';
        var logInConsoleTrue = true;
        var logInConsoleFalse = false;
        var instance = new asb_publisher_config_model_1.AsbPublisherConfig(connectionString, topicName, logInConsoleTrue);
        expect(instance).toBeInstanceOf(asb_publisher_config_model_1.AsbPublisherConfig);
        expect(instance.connectionString).toBe(connectionString);
        expect(instance.topicName).toBe(topicName);
        expect(instance.logInConsole).toBe(logInConsoleTrue);
        instance = new asb_publisher_config_model_1.AsbPublisherConfig(connectionString, topicName, logInConsoleFalse);
        expect(instance.logInConsole).toBe(logInConsoleFalse);
    });
});
