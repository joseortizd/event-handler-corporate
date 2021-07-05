"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ASBEvent_model_1 = require("./ASBEvent.model");
var event_model_1 = require("./event.model");
var metadata = {
    "attribute": "test",
    "attribute1": "12121",
    "attribute2": "Another atrribute",
    "attribute3": "12121"
};
var today = new Date();
today = today.toISOString();
var ExampleEvent = new event_model_1.EventModel('test-Entity', '12345', today, '1.0', 'TEST', 'test-commerce', 'test-channel', 'test-domain', 'tests', 'tests', "testType", JSON.stringify(metadata));
var receivedEventExample = {
    body: metadata,
    applicationProperties: {
        ventId: 'string',
        eventType: 'string',
        datetime: 'string',
        version: 'string',
        country: 'string',
        commerce: 'string',
        channel: 'string',
        domain: 'string',
        capability: 'string',
        mimeType: 'string',
        entityId: 'string',
        timestamp: 'string',
        entityType: 'string',
        metadata: 'string'
    }
};
describe('AsbEvent model test suite', function () {
    it('Should instanciate a valid a class of AsbEventModel', function () {
        var instance = new ASBEvent_model_1.ASBEventModel(ExampleEvent);
        expect(instance).toBeInstanceOf(ASBEvent_model_1.ASBEventModel);
    });
    it('Should parse a received event', function () {
        var instance = new ASBEvent_model_1.ASBEventModel(ExampleEvent);
        instance.parseReceivedMessage(receivedEventExample);
        expect(instance).toHaveProperty('body');
        expect(instance).toHaveProperty('applicationProperties');
        instance = new ASBEvent_model_1.ASBEventModel(ExampleEvent);
        instance.parseReceivedMessage({});
        expect(instance).toHaveProperty('body');
        expect(instance).toHaveProperty('applicationProperties');
    });
});
