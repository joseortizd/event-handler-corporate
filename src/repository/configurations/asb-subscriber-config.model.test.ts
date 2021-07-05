import {AsbSubscriberConfig} from "./asb-subscriber-config.model";

describe('Subscriber configurations model tests suite', () => {
    it('should return a valid instance of AsbSubscriberConfig', () => {
        let instance = new AsbSubscriberConfig('a valid connection string','a valid topic name', 'a valid subscription name', true);
        expect(instance).toBeInstanceOf(AsbSubscriberConfig);
        expect(instance.connectionString).toBe('a valid connection string');
        expect(instance.topicName).toBe('a valid topic name');
        expect(instance.subscriptionName).toBe('a valid subscription name');
        expect(instance.logInConsole).toBe(true);
        instance = new AsbSubscriberConfig('a valid connection string','a valid topic name', 'a valid subscription name', false);
        expect(instance).toBeInstanceOf(AsbSubscriberConfig);
        expect(instance.connectionString).toBe('a valid connection string');
        expect(instance.topicName).toBe('a valid topic name');
        expect(instance.subscriptionName).toBe('a valid subscription name');
        expect(instance.logInConsole).toBe(false);
    });
})

