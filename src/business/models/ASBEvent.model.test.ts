import {ASBEventModel} from "./ASBEvent.model";
import {EventModel} from "./event.model";

let metadata ={
    "attribute":"test",
    "attribute1":"12121",
    "attribute2":"Another atrribute",
    "attribute3":"12121"
};
let today : any = new Date();
today = today.toISOString()
const ExampleEvent : EventModel = new EventModel('test-Entity', '12345', today, '1.0', 'TEST', 'test-commerce', 'test-channel', 'test-domain', 'tests', 'tests', "testType", JSON.stringify(metadata));

const receivedEventExample = {
    body: metadata,
    applicationProperties: {
        ventId : 'string',
        eventType : 'string',
        datetime : 'string',
        version : 'string',
        country : 'string',
        commerce : 'string',
        channel : 'string',
        domain : 'string',
        capability : 'string',
        mimeType : 'string',
        entityId : 'string',
        timestamp : 'string',
        entityType: 'string',
        metadata: 'string'
    }
}

describe('AsbEvent model test suite', () => {
    it('Should instanciate a valid a class of AsbEventModel', () => {
        let instance = new ASBEventModel(ExampleEvent);
        expect(instance).toBeInstanceOf(ASBEventModel);
    })
    it('Should parse a received event', () => {
        let instance = new ASBEventModel(ExampleEvent);
        instance.parseReceivedMessage(receivedEventExample);
        expect(instance).toHaveProperty('body');
        expect(instance).toHaveProperty('applicationProperties');
        instance = new ASBEventModel(ExampleEvent);
        instance.parseReceivedMessage({});
        expect(instance).toHaveProperty('body');
        expect(instance).toHaveProperty('applicationProperties');
    })
})