import {PublisherConfigurations} from "./publisher-configurations";
import {AsbPublisherConfig} from "./asb-publisher-config.model";

describe('PublisherConfigurations test suite', () => {
    it('It should throw an error for service not properly configured', () => {
        expect(() => {
            jest.resetModules();
            let instance = new PublisherConfigurations();
            expect(instance).toBeInstanceOf(PublisherConfigurations);
            const publisherConfigurationsProto = Object.getPrototypeOf(instance);
            let testInstance  = publisherConfigurationsProto.constructor.getAsbPublisherConfigurations();
        }).toThrow(`Azure bus service configuration not provided, check for documentation.`)
    })
    it('It should return a valid instance of PublisherConfigurations', () => {
        const OLD_ENV = process.env;
        jest.resetModules();
        const connectionStringValue = 'A valid connection string';
        const topicName = 'A valid topic name';
        const logInConsole = 'true';
        process.env.EVENT_HANDLER_PUBLISHER_ASB_CONNECTION_STRING = connectionStringValue;
        process.env.EVENT_HANDLER_PUBLISHER_ASB_TOPIC_NAME = topicName;
        process.env.EVENT_HANDLER_PUBLISHER_CONSOLE_LOG_ACTIVATE = logInConsole;
        let instance = new PublisherConfigurations();
        expect(instance).toBeInstanceOf(PublisherConfigurations);
        const publisherConfigurationsProto = Object.getPrototypeOf(instance);
        let testInstance  = publisherConfigurationsProto.constructor.getAsbPublisherConfigurations();
        expect(testInstance.connectionString).toBe(connectionStringValue);
        process.env = {...OLD_ENV};
    })
})