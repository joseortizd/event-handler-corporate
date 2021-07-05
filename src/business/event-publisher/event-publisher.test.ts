import { publish } from "./event-publisher";
import {EventModel} from "../models/event.model";

let metadata ={
   "attribute":"test",
   "attribute1":"12121",
   "attribute2":"Another atrribute",
   "attribute3":"12121"
};
let today : any = new Date();
today = today.toISOString()
const ExampleEvent : EventModel = new EventModel('test-Entity', '12345', today, '1.0', 'TEST', 'test-commerce', 'test-channel', 'test-domain', 'tests', 'tests', "testType", JSON.stringify(metadata));

describe('Event publisher test suite', () => {
   it('Should instanciate a valid publisher', async () => {
       console.log = jest.fn();
       let response = await publish(ExampleEvent);
       expect(response).toBe(true);
       expect(console.log).toHaveBeenCalledTimes(3);
   })
});