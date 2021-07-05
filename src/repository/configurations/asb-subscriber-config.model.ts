export class AsbSubscriberConfig {
    connectionString : string;
    topicName : string;
    subscriptionName : string;
    logInConsole : boolean;
    constructor(connectionString: string, topicName: string, subscriptionName: string, logInConsole?: boolean) {
        this.connectionString = connectionString;
        this.topicName = topicName;
        this.subscriptionName = subscriptionName;
        this.logInConsole = logInConsole ? logInConsole : false;
    }
}