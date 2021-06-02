export class ASBEventModel {
    ContentType: string;
    body: string

    constructor(body: string) {
        this.ContentType = 'application/json';
        this.body = body;
    }
}