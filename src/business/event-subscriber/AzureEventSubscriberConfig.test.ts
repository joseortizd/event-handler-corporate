import {ServiceBusClient} from "@azure/service-bus";
import {AzureEventSubscriberConfig} from "./AzureEventSubscriberConfig";
import {logEventHandler} from "./log-event-handler";

describe('Azure event subscriber tests', () => {
    it('Should properly get a message', async () => {
        const OLD_ENV = process.env;
        process.env.EVENT_HANDLER_SUBSCRIBER_ASB_CONNECTION_STRING = "Endpoint=sb://testloggerjg2021.servicebus.windows.net/;SharedAccessKeyName=test-access;SharedAccessKey=lol/hjgfdssdfsfsfsadasda=;EntityPath=marco-test-salud";
        process.env.EVENT_HANDLER_SUBSCRIBER_ASB_TOPIC_NAME = "a valid topic name";
        process.env.EVENT_HANDLER_SUBSCRIBER_ASB_SUBSCRIPTION_NAME = "a valid subscriptionName";
        process.env.EVENT_HANDLER_SUBSCRIBER_CONSOLE_LOG_ACTIVATE = "true";
        let subcribe = jest.fn();
        let Sbclient = {
        receiveMode : 'none',
            subscribe : subcribe
        }

        ServiceBusClient.prototype.createReceiver = jest.fn().mockReturnValue(Sbclient);
        let subscriber = new AzureEventSubscriberConfig();
        await subscriber.getMessages(new logEventHandler());
        expect(subcribe).toHaveBeenCalledTimes(1);
        process.env = OLD_ENV;
        jest.resetModules();
    });
    it('Should log an event', () => {

    })
})