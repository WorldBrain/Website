import { AuthService } from "./auth";
import { NetworkService } from "./network";
import { PaymentService } from "./payment";

export interface Services {
    auth: AuthService
    network: NetworkService,
    payment: PaymentService
}

export type UserPlans =
    | 'free'
    | 'backup-monthly'
    | 'backup-yearly'
    | 'sync-monthly'
    | 'sync-yearly'
