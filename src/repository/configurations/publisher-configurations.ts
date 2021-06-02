import {AbsPublisherConfig} from "./abs-publisher-config.model";

export class PublisherConfigurations {
    public static getAbsPublisherConfigurations():  AbsPublisherConfig {
        let connectionString = process.env.EVENT_HANDLER_PUBLISHER_ABS_CONNECTION_STRING;
        let topicName = process.env.EVENT_HANDLER_PUBLISHER_ABS_TOPIC_NAME;
        let logInConsole = process.env.EVENT_HANDLER_PUBLISHER_CONSOLE_LOG_ACTIVATE === "true";
        if (!connectionString || !topicName) { throw new Error(`Azure bus service configuration not provided, check for documentation.`);}
        return new AbsPublisherConfig(connectionString, topicName, logInConsole);
    }
}