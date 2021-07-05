"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsbPublisherConfig = void 0;
var AsbPublisherConfig = /** @class */ (function () {
    function AsbPublisherConfig(connectionString, topicName, logInConsole) {
        this.connectionString = connectionString;
        this.topicName = topicName;
        this.logInConsole = logInConsole ? logInConsole : false;
    }
    return AsbPublisherConfig;
}());
exports.AsbPublisherConfig = AsbPublisherConfig;
