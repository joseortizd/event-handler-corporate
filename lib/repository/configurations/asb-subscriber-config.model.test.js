"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var asb_subscriber_config_model_1 = require("./asb-subscriber-config.model");
describe('Subscriber configurations model tests suite', function () {
    it('should return a valid instance of AsbSubscriberConfig', function () {
        var instance = new asb_subscriber_config_model_1.AsbSubscriberConfig('a valid connection string', 'a valid topic name', 'a valid subscription name', true);
        expect(instance).toBeInstanceOf(asb_subscriber_config_model_1.AsbSubscriberConfig);
        expect(instance.connectionString).toBe('a valid connection string');
        expect(instance.topicName).toBe('a valid topic name');
        expect(instance.subscriptionName).toBe('a valid subscription name');
        expect(instance.logInConsole).toBe(true);
        instance = new asb_subscriber_config_model_1.AsbSubscriberConfig('a valid connection string', 'a valid topic name', 'a valid subscription name', false);
        expect(instance).toBeInstanceOf(asb_subscriber_config_model_1.AsbSubscriberConfig);
        expect(instance.connectionString).toBe('a valid connection string');
        expect(instance.topicName).toBe('a valid topic name');
        expect(instance.subscriptionName).toBe('a valid subscription name');
        expect(instance.logInConsole).toBe(false);
    });
});
