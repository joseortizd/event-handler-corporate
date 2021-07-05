import {EventModel} from "../models/event.model";
import {LogPublisher} from "./log-publisher";


let metadata ={
    "attribute":"test",
    "attribute1":"12121",
    "attribute2":"Another atrribute",
    "attribute3":"12121"
};
let today : any = new Date();
today = today.toISOString()
const ExampleEvent : EventModel = new EventModel('test-Entity', '12345', today, '1.0', 'TEST', 'test-commerce', 'test-channel', 'test-domain', 'tests', 'tests', "testType", JSON.stringify(metadata));


describe('It should log into console the received event', () => {
    it('Should call to console log', () => {
        console.log = jest.fn();
        let logPublisher = new LogPublisher();
        logPublisher.publish(ExampleEvent);
        expect(console.log).toHaveBeenCalledTimes(1);
    })
});