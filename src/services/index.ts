import { Services } from "./types";
import { AuthService } from "./auth";
import { NetworkService } from "./network";
import { PaymentService } from "./payment";

export function createServices(): Services {
    return {
        auth: new AuthService(),
        network: new NetworkService(),
        payment: new PaymentService(),
    }
}
