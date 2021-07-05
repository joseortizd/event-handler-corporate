"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ASBEventModel = void 0;
var ASBApplicationProperties_1 = require("./ASBApplicationProperties");
var ASBEventModel = /** @class */ (function () {
    function ASBEventModel(event) {
        this.body = event.metadata;
        this.applicationProperties = new ASBApplicationProperties_1.ASBApplicationProperties(event);
    }
    ASBEventModel.prototype.parseReceivedMessage = function (event) {
        if (event.body)
            this.body = event.body;
        if (event.applicationProperties)
            this.applicationProperties = event.applicationProperties;
    };
    return ASBEventModel;
}());
exports.ASBEventModel = ASBEventModel;
