import { HttpService } from "./http.service";

export class EmailsService {
    http: HttpService;

    constructor() {
        this.http = new HttpService();
    }

    async sendEmailTome(payload: { replyTo: string; message: string; subject: string; name: string }) {
        const res = await this.http.https().post(this.http.pathV1("/emails/to-me"), {
            sender_email: payload.replyTo,
            sender_name: payload.name,
            subject: payload.subject,
            message: payload.message,
        });
        return res.data;
    }
}
