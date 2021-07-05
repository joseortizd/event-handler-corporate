export class AsbPublisherConfig {
    connectionString : string;
    topicName : string;
    logInConsole : boolean;
    constructor(connectionString: string, topicName: string, logInConsole?: boolean) {
        this.connectionString = connectionString;
        this.topicName = topicName;
        this.logInConsole = logInConsole ? logInConsole : false;
    }
}