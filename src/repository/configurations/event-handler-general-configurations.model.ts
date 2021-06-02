export class eventHandlerGeneralConfigurations {
    debugMode: boolean;
    provider: string;
    constructor(debugMode: boolean, provider?: string) {
        this.debugMode = debugMode;
        this.provider = provider ? provider : 'Not Provided';
    }
}