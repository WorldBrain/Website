import { AuthService } from "./auth";
import { NetworkService } from "./network";

export interface Services {
    auth: AuthService
    network: NetworkService
}
