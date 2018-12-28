import { HostDetails } from './host-details';

export class PongMessage {

    public message: string;
    public host: HostDetails;

    constructor(message, host) {
        this.message = message;
        this.host = host;
    }
}
