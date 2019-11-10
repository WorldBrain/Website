import { AuthenticatedUser } from "./types";
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from '../config';

export class AuthService {
  public firebase = null;
  public user = null;

  constructor() {
    // Check on static build
    if (typeof window !== 'undefined') {
      if (!firebase.apps.length)
        firebase.initializeApp(
          process.env.NODE_ENV === 'production'
            ? firebaseConfig.production
            : firebaseConfig.staging,
        );

      this.firebase = firebase.apps[0];
    }
  }

  currentUser(): AuthenticatedUser | null {
    return this.firebase.currentUser;
  }

  logOut(): null {
    return this.firebase.auth().signOut();
  }
}
