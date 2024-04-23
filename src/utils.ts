import axios from "axios";

export function http() {
    const serverUrl = import.meta.env.VITE_SERVER_URL;
    if (!serverUrl) {
        console.error("No server url found. App is not functional any more.");
    }
    const c = axios.create({
        baseURL: serverUrl,
    });
    return c;
}
