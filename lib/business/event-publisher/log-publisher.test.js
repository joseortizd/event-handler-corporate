"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var event_model_1 = require("../models/event.model");
var log_publisher_1 = require("./log-publisher");
var metadata = {
    "attribute": "test",
    "attribute1": "12121",
    "attribute2": "Another atrribute",
    "attribute3": "12121"
};
var today = new Date();
today = today.toISOString();
var ExampleEvent = new event_model_1.EventModel('test-Entity', '12345', today, '1.0', 'TEST', 'test-commerce', 'test-channel', 'test-domain', 'tests', 'tests', "testType", JSON.stringify(metadata));
describe('It should log into console the received event', function () {
    it('Should call to console log', function () {
        console.log = jest.fn();
        var logPublisher = new log_publisher_1.LogPublisher();
        logPublisher.publish(ExampleEvent);
        expect(console.log).toHaveBeenCalledTimes(1);
    });
});
