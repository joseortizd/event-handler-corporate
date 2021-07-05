"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbsPublisherConfig = void 0;
var AbsPublisherConfig = /** @class */ (function () {
    function AbsPublisherConfig(connectionString, topicName, logInConsole) {
        this.connectionString = connectionString;
        this.topicName = topicName;
        this.logInConsole = logInConsole ? logInConsole : false;
    }
    return AbsPublisherConfig;
}());
exports.AbsPublisherConfig = AbsPublisherConfig;
