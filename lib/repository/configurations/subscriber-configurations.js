"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriberConfigurations = void 0;
var asb_subscriber_config_model_1 = require("./asb-subscriber-config.model");
var SubscriberConfigurations = /** @class */ (function () {
    function SubscriberConfigurations() {
    }
    SubscriberConfigurations.getAsbSubscriberConfigurations = function () {
        var connectionString = process.env.EVENT_HANDLER_SUBSCRIBER_ASB_CONNECTION_STRING;
        var topicName = process.env.EVENT_HANDLER_SUBSCRIBER_ASB_TOPIC_NAME;
        var subscriptionName = process.env.EVENT_HANDLER_SUBSCRIBER_ASB_SUBSCRIPTION_NAME;
        var logInConsole = process.env.EVENT_HANDLER_SUBSCRIBER_CONSOLE_LOG_ACTIVATE === "true";
        if (!connectionString || !topicName || !subscriptionName) {
            throw new Error("Azure bus service configuration not provided, check for documentation.");
        }
        return new asb_subscriber_config_model_1.AsbSubscriberConfig(connectionString, topicName, subscriptionName, logInConsole);
    };
    return SubscriberConfigurations;
}());
exports.SubscriberConfigurations = SubscriberConfigurations;
