import { ServiceBusClient } from "@azure/service-bus";
import {Subscriber} from "./strategy-event-subscriber.service";
import {eventHandler} from "./eventHandler";
import {ASBReceivedEvent} from "../models/ASBReceivedEvent.model";
const { SubscriberConfigurations } = require("../../repository/configurations/subscriber-configurations");
const connectionString = "Endpoint=sb://testloggerjg2021.servicebus.windows.net/;SharedAccessKeyName=jggg;SharedAccessKey=mc7lFaXPiedMUhb7olUElaclSULaRe/RV6uhwLU3iYw=;EntityPath=testjg";
const topicName = "testjg";
const subscriptionName = "testjgsubscription";

export class AzureEventSubscriberConfig implements Subscriber {
     public async getMessages(handler: eventHandler) {
         const configurations = SubscriberConfigurations.getAsbSubscriberConfigurations();
         const sbClient = new ServiceBusClient(configurations.connectionString);
         const receiver = sbClient.createReceiver(configurations.topicName,configurations.subscriptionName);
         try {
             receiver.receiveMode = "peekLock";
             receiver.subscribe({
                 processMessage: async (brokeredMessage) => {
                     let event = new ASBReceivedEvent(brokeredMessage);
                     AzureEventSubscriberConfig.logReceivedEvent(true, event, configurations.topicName);
                     try {
                         handler.process(event);

                     } catch (e) {
                         if (e.message === 'abadon') {
                             await receiver.abandonMessage(brokeredMessage);
                         }
                         if (e.message === 'deadletter') {
                             await receiver.deadLetterMessage(brokeredMessage);
                         }
                     }
                 },
                 processError: async (args) => {
                     console.log(`Error from source ${args.errorSource} occurred: `, args.error);
                 }
             })
         } catch (e) {
             throw e;
         }
    }

    private  static logReceivedEvent(logInConsole: boolean, event : ASBReceivedEvent, topicName: string) {
        if (logInConsole) console.log(`Event received from ${topicName}: `,JSON.stringify(event));
    }
}

