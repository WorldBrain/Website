import { AuthService } from "./auth";
import { NetworkService } from "./network";
import { PaymentService } from "./payment";

export interface Services {
    auth: AuthService
    network: NetworkService,
    payment: PaymentService
}