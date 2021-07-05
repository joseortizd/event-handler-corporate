"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logEventHandler = void 0;
var logEventHandler = /** @class */ (function () {
    function logEventHandler() {
    }
    logEventHandler.prototype.process = function (event) {
        console.log("Application properties:");
        console.log(event.applicationProperties);
        console.log("SEGUNDO BODY");
        console.log(event.body);
    };
    return logEventHandler;
}());
exports.logEventHandler = logEventHandler;
