export type UserPlans =
    | 'free'
    | 'backup-monthly'
    | 'backup-yearly'
    | 'sync-monthly'
    | 'sync-yearly'


export interface CheckoutLinkResult {
    url: string
}
