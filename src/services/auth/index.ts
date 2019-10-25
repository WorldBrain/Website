import { AuthenticatedUser } from "./types";

export class AuthService {
    getAuthenticatedUser(): AuthenticatedUser | null {
        return { displayName: `John Doe` }
    }
}
