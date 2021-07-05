import {Publisher} from "./strategy-event-publisher.service";
import {EventModel} from "../models/event.model";
import {ASBEventModel} from "../models/ASBEvent.model";
const { ServiceBusClient } = require("@azure/service-bus");
const { PublisherConfigurations } = require("../../repository/configurations/publisher-configurations");

export class ASBPublisher implements Publisher {
    public async publish(event: EventModel): Promise<boolean> {
        try {
            let configurations = PublisherConfigurations.getAbsPublisherConfigurations();
            const sbClient = new ServiceBusClient(configurations.connectionString);
            const sender = sbClient.createSender(configurations.topicName);
            let batch = await sender.createMessageBatch();
            let eventTemp : any = ASBPublisher.buildEvent(event);
            if (!batch.tryAddMessage(eventTemp)) { throw new Error(`Was not possible to publish message, check for limitations in docs.`); }
            await sender.sendMessages(batch);
            await sender.close();
            await sbClient.close();
            ASBPublisher.logEvent(configurations.logInConsole, event, configurations.topicName);
            return true;
        } catch (e) {
            throw e;
        }
    }
    private static  buildEvent (event : EventModel): ASBEventModel {
        return new ASBEventModel(event);
    }

    public static logEvent (logInConsole: boolean, event : any, topicName: string) : void {
        if (logInConsole) console.log(`Event sent to ${topicName}: `,JSON.stringify(event));
    }
}