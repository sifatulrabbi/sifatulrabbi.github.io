import axios, { AxiosInstance } from "axios";

export class HttpService {
    baseUrl: string;

    constructor() {
        this.baseUrl = "https://api.sifatul.com"
    }

    pathV1(path: string) {
        return `${this.baseUrl}/v1${path}`;
    }

    https(): AxiosInstance {
        const client = axios.create({
            baseURL: this.baseUrl,
            headers: {
                "Authorization": "no auth",
            },
        })
        return client;
    }
}
