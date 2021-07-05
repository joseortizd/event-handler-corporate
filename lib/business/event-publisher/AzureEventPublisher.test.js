"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var AzureEventPublisher_1 = require("./AzureEventPublisher");
var event_model_1 = require("../models/event.model");
var ASBEvent_model_1 = require("../models/ASBEvent.model");
var service_bus_1 = require("@azure/service-bus");
var metadata = {
    "attribute": "test",
    "attribute1": "12121",
    "attribute2": "Another atrribute",
    "attribute3": "12121"
};
var today = new Date();
today = today.toISOString();
var ExampleEvent = new event_model_1.EventModel('test-Entity', '12345', today, '1.0', 'TEST', 'test-commerce', 'test-channel', 'test-domain', 'tests', 'tests', "testType", JSON.stringify(metadata));
describe('Azure Event publisher', function () {
    it('Should return a valid  AzureEventPublisher instance', function () {
        var instance = new AzureEventPublisher_1.AzureEventPublisher();
        expect(instance).toBeInstanceOf(AzureEventPublisher_1.AzureEventPublisher);
    });
    it('Should return a valid  asb event', function () {
        var publisher = new AzureEventPublisher_1.AzureEventPublisher();
        var publisherProto = Object.getPrototypeOf(publisher);
        var testData = publisherProto.constructor.buildEvent(ExampleEvent);
        expect(testData).toBeInstanceOf(ASBEvent_model_1.ASBEventModel);
    });
    it('Should/nt log a event', function () {
        console.log = jest.fn();
        var publisher = new AzureEventPublisher_1.AzureEventPublisher();
        var publisherProto = Object.getPrototypeOf(publisher);
        var logInConsoleTrue = true;
        var topicName = 'test-topic';
        publisherProto.constructor.logEvent(logInConsoleTrue, ExampleEvent, topicName);
        expect(console.log).toHaveBeenCalledTimes(1);
        publisherProto.constructor.logEvent(false, ExampleEvent, topicName);
        console.log = jest.fn();
        expect(console.log).toHaveBeenCalledTimes(0);
    });
    it('Sending a message to a topic', function () { return __awaiter(void 0, void 0, void 0, function () {
        var OLD_ENV, sbClientStub, eventPublisher, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    OLD_ENV = process.env;
                    sbClientStub = {
                        createMessageBatch: jest.fn().mockReturnValue({
                            tryAddMessage: jest.fn().mockReturnValue(true)
                        }),
                        tryAddMessage: jest.fn(),
                        createSender: jest.fn(),
                        sendMessages: jest.fn(),
                        send: jest.fn(),
                        close: jest.fn(),
                    };
                    process.env.EVENT_HANDLER_PUBLISHER_ASB_CONNECTION_STRING = "Endpoint=sb://testloggerjg2021.servicebus.windows.net/;SharedAccessKeyName=test-access;SharedAccessKey=lol/hjgfdssdfsfsfsadasda=;EntityPath=marco-test-salud";
                    process.env.EVENT_HANDLER_PUBLISHER_ASB_TOPIC_NAME = 'A valid topic name';
                    process.env.EVENT_HANDLER_PUBLISHER_CONSOLE_LOG_ACTIVATE = 'true';
                    jest.mock('@azure/service-bus', function () { return jest.fn(); });
                    service_bus_1.ServiceBusClient.prototype.createSender = jest.fn().mockReturnValue(sbClientStub);
                    eventPublisher = new AzureEventPublisher_1.AzureEventPublisher();
                    return [4 /*yield*/, eventPublisher.publish(ExampleEvent)];
                case 1:
                    result = _a.sent();
                    expect(result).toBe(true);
                    process.env = OLD_ENV;
                    jest.resetModules();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should publish a message to a topic', function () { return __awaiter(void 0, void 0, void 0, function () {
        var OLD_ENV, sbClientStub, eventPublisher, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    OLD_ENV = process.env;
                    process.env.EVENT_HANDLER_PUBLISHER_ASB_CONNECTION_STRING = "Endpoint=sb://testloggerjg2021.servicebus.windows.net/;SharedAccessKeyName=test-access;SharedAccessKey=lol/hjgfdssdfsfsfsadasda=;EntityPath=marco-test-salud";
                    process.env.EVENT_HANDLER_PUBLISHER_ASB_TOPIC_NAME = 'A valid topic name';
                    process.env.EVENT_HANDLER_PUBLISHER_CONSOLE_LOG_ACTIVATE = 'true';
                    sbClientStub = {
                        createMessageBatch: jest.fn().mockReturnValue({
                            tryAddMessage: jest.fn().mockReturnValue(false)
                        }),
                        createSender: jest.fn(),
                        sendMessages: jest.fn(),
                        send: jest.fn(),
                        close: jest.fn(),
                    };
                    jest.mock('@azure/service-bus', function () { return jest.fn(); });
                    service_bus_1.ServiceBusClient.prototype.createSender = jest.fn().mockReturnValue(sbClientStub);
                    eventPublisher = new AzureEventPublisher_1.AzureEventPublisher();
                    return [4 /*yield*/, eventPublisher.publish(ExampleEvent)];
                case 1:
                    _a.sent();
                    jest.resetModules();
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    expect(e_1).toBe('Was not possible to publish message, check for limitations in docs.');
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
});
