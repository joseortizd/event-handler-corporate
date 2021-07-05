import { AsbSubscriberConfig } from "./asb-subscriber-config.model";

export class SubscriberConfigurations {
    public static getAsbSubscriberConfigurations(): AsbSubscriberConfig {
        let connectionString = process.env.EVENT_HANDLER_SUBSCRIBER_ASB_CONNECTION_STRING;
        let topicName = process.env.EVENT_HANDLER_SUBSCRIBER_ASB_TOPIC_NAME;
        let subscriptionName = process.env.EVENT_HANDLER_SUBSCRIBER_ASB_SUBSCRIPTION_NAME;
        let logInConsole = process.env.EVENT_HANDLER_SUBSCRIBER_CONSOLE_LOG_ACTIVATE === "true";
        if (!connectionString || !topicName || !subscriptionName) { throw new Error(`Azure bus service configuration not provided, check for documentation.`);}
        return new AsbSubscriberConfig(connectionString, topicName, subscriptionName, logInConsole);
    }
}