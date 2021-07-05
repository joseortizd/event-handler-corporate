import {AzureEventPublisher} from "./AzureEventPublisher";
import {EventModel} from "../models/event.model";
import {ASBEventModel} from "../models/ASBEvent.model";
import  { ServiceBusClient }   from "@azure/service-bus";

let metadata ={
    "attribute":"test",
    "attribute1":"12121",
    "attribute2":"Another atrribute",
    "attribute3":"12121"
};
let today : any = new Date();
today = today.toISOString()
const ExampleEvent : EventModel = new EventModel('test-Entity', '12345', today, '1.0', 'TEST', 'test-commerce', 'test-channel', 'test-domain', 'tests', 'tests', "testType", JSON.stringify(metadata));


describe('Azure Event publisher', () => {
    it('Should return a valid  AzureEventPublisher instance', () => {
        let instance = new AzureEventPublisher();
        expect(instance).toBeInstanceOf(AzureEventPublisher);
    })
    it('Should return a valid  asb event', () => {
        let publisher = new AzureEventPublisher();
        let publisherProto = Object.getPrototypeOf(publisher);
        let testData = publisherProto.constructor.buildEvent(ExampleEvent);
        expect(testData).toBeInstanceOf(ASBEventModel);
    })
    it('Should/nt log a event', () => {
        console.log = jest.fn();
        let publisher = new AzureEventPublisher();
        let publisherProto = Object.getPrototypeOf(publisher);
        const logInConsoleTrue = true;
        const topicName = 'test-topic'
        publisherProto.constructor.logEvent(logInConsoleTrue,ExampleEvent, topicName);
        expect(console.log).toHaveBeenCalledTimes(1);
        publisherProto.constructor.logEvent(false,ExampleEvent, topicName);
        console.log = jest.fn();
        expect(console.log).toHaveBeenCalledTimes(0);
    })

    it('Sending a message to a topic', async () => {
        const OLD_ENV = process.env;
        const sbClientStub = {
            createMessageBatch: jest.fn().mockReturnValue( {
                    tryAddMessage: jest.fn().mockReturnValue(true)
                }
            ),
            tryAddMessage: jest.fn(),
            createSender: jest.fn(),
            sendMessages: jest.fn(),
            send: jest.fn(),
            close: jest.fn(),
        };
        process.env.EVENT_HANDLER_PUBLISHER_ASB_CONNECTION_STRING = "Endpoint=sb://testloggerjg2021.servicebus.windows.net/;SharedAccessKeyName=test-access;SharedAccessKey=lol/hjgfdssdfsfsfsadasda=;EntityPath=marco-test-salud";
        process.env.EVENT_HANDLER_PUBLISHER_ASB_TOPIC_NAME = 'A valid topic name';
        process.env.EVENT_HANDLER_PUBLISHER_CONSOLE_LOG_ACTIVATE = 'true';
        jest.mock('@azure/service-bus', () => jest.fn())
        ServiceBusClient.prototype.createSender = jest.fn().mockReturnValue(sbClientStub)
        const eventPublisher = new AzureEventPublisher();
        const result = await eventPublisher.publish(ExampleEvent);
        expect(result).toBe(true);
        process.env = OLD_ENV;
        jest.resetModules();

    })
    it('should publish a message to a topic', async () => {
            try {
                const OLD_ENV = process.env;
                process.env.EVENT_HANDLER_PUBLISHER_ASB_CONNECTION_STRING = "Endpoint=sb://testloggerjg2021.servicebus.windows.net/;SharedAccessKeyName=test-access;SharedAccessKey=lol/hjgfdssdfsfsfsadasda=;EntityPath=marco-test-salud";
                process.env.EVENT_HANDLER_PUBLISHER_ASB_TOPIC_NAME = 'A valid topic name';
                process.env.EVENT_HANDLER_PUBLISHER_CONSOLE_LOG_ACTIVATE = 'true';
                const sbClientStub = {
                    createMessageBatch: jest.fn().mockReturnValue( {
                            tryAddMessage: jest.fn().mockReturnValue(false)
                        }
                    ),
                    createSender: jest.fn(),
                    sendMessages: jest.fn(),
                    send: jest.fn(),
                    close: jest.fn(),
                };
                jest.mock('@azure/service-bus', () => jest.fn())
                ServiceBusClient.prototype.createSender = jest.fn().mockReturnValue(sbClientStub)
                const eventPublisher = new AzureEventPublisher();
                await eventPublisher.publish(ExampleEvent)
                jest.resetModules();

            } catch (e) {
                expect(e).toBe('Was not possible to publish message, check for limitations in docs.')
            }

    })

})