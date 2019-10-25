import { Services } from "../services/types";

export type UIServices<Required extends keyof Services> = Pick<Services, Required>
