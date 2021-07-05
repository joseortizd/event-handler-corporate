import {AsbPublisherConfig} from "./asb-publisher-config.model";

describe('AbsPublisher configurations model tests suite', () => {
    it('should return a valid instance of AbsPublisher', () => {
        const connectionString = 'a valid connection string';
        const topicName = 'a valid topic name';
        const logInConsoleTrue = true;
        const logInConsoleFalse = false;
        let instance = new AsbPublisherConfig(connectionString, topicName, logInConsoleTrue);
        expect(instance).toBeInstanceOf(AsbPublisherConfig);
        expect(instance.connectionString).toBe(connectionString);
        expect(instance.topicName).toBe(topicName);
        expect(instance.logInConsole).toBe(logInConsoleTrue);
        instance = new AsbPublisherConfig(connectionString, topicName, logInConsoleFalse);
        expect(instance.logInConsole).toBe(logInConsoleFalse);
    });
})