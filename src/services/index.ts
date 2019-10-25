import { Services } from "./types";
import { AuthService } from "./auth";
import { NetworkService } from "./network";

export function createServices(): Services {
    return {
        auth: new AuthService(),
        network: new NetworkService()
    }
}
