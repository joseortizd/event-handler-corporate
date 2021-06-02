"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublisherConfigurations = void 0;
var abs_publisher_config_model_1 = require("./abs-publisher-config.model");
var PublisherConfigurations = /** @class */ (function () {
    function PublisherConfigurations() {
    }
    PublisherConfigurations.getAbsPublisherConfigurations = function () {
        var connectionString = process.env.EVENT_HANDLER_PUBLISHER_ABS_CONNECTION_STRING;
        var topicName = process.env.EVENT_HANDLER_PUBLISHER_ABS_TOPIC_NAME;
        var logInConsole = process.env.EVENT_HANDLER_PUBLISHER_CONSOLE_LOG_ACTIVATE === "true";
        if (!connectionString || !topicName) {
            throw new Error("Azure bus service configuration not provided, check for documentation.");
        }
        return new abs_publisher_config_model_1.AbsPublisherConfig(connectionString, topicName, logInConsole);
    };
    return PublisherConfigurations;
}());
exports.PublisherConfigurations = PublisherConfigurations;
