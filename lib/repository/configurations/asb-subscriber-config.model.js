"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsbSubscriberConfig = void 0;
var AsbSubscriberConfig = /** @class */ (function () {
    function AsbSubscriberConfig(connectionString, topicName, subscriptionName, logInConsole) {
        this.connectionString = connectionString;
        this.topicName = topicName;
        this.subscriptionName = subscriptionName;
        this.logInConsole = logInConsole ? logInConsole : false;
    }
    return AsbSubscriberConfig;
}());
exports.AsbSubscriberConfig = AsbSubscriberConfig;
