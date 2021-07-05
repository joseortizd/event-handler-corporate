import {SubscriberConfigurations} from "./subscriber-configurations";

describe('Subscriber configurations tests suite', () => {
    it('Should throw an error, environment variables not defined', () => {
        expect(() => {
            jest.resetModules();
            const configurations = new SubscriberConfigurations();
            let configurationsProto = Object.getPrototypeOf(configurations);
            configurationsProto.constructor.getAsbSubscriberConfigurations();
        }).toThrow('Azure bus service configuration not provided, check for documentation.')
    });

    it('Should return a valid AbsSubscriberConfig object', () => {
        const OLD_ENV = process.env;
        jest.resetModules();
        process.env.EVENT_HANDLER_SUBSCRIBER_ASB_CONNECTION_STRING = "a valid connection string";
        process.env.EVENT_HANDLER_SUBSCRIBER_ASB_TOPIC_NAME = "a valid topic name";
        process.env.EVENT_HANDLER_SUBSCRIBER_ASB_SUBSCRIPTION_NAME = "a valid subscriptionName";
        process.env.EVENT_HANDLER_SUBSCRIBER_CONSOLE_LOG_ACTIVATE = "true";
        const configurations = new SubscriberConfigurations();
        let configurationsProto = Object.getPrototypeOf(configurations);
        let subscriberConfigurations = configurationsProto.constructor.getAsbSubscriberConfigurations();
        expect(subscriberConfigurations.subscriptionName).toBe("a valid subscriptionName");
        expect(subscriberConfigurations.topicName).toBe("a valid topic name");
        expect(subscriberConfigurations.connectionString).toBe("a valid connection string");
        expect(subscriberConfigurations.logInConsole).toBe(true);
        process.env = {...OLD_ENV};
    })
})