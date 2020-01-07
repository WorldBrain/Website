import { AuthenticatedUser } from "./types";
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from '../config'

export class AuthService {
  public firebase = null;
  public user = null;
  private listeners: Array<Function> = [];

  constructor() {
    // Check on static build
    if (typeof window !== 'undefined') {
      if (!firebase.apps.length)
        firebase.initializeApp(firebaseConfig);

      this.firebase = firebase.apps[0];
      this.firebase.auth().onAuthStateChanged((user) => {
        this.user = user;
        this.onUpdate();
      })
    }
  }

  setOnUpdate(onUpdate = () => { }): void {
    if (typeof onUpdate === 'function') {
      this.listeners.push(onUpdate);
    } else {
      console.warn('You need input function');
    }
  }

  onUpdate() {
    this.listeners.forEach(func => func());
  }

  register(email, password): Promise<any> {
    return this.firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  logIn(email, password): Promise<any> {
    return this.firebase.auth().signInWithEmailAndPassword(email, password);
  }

  currentUser(): AuthenticatedUser | null {
    if (!this.firebase) {
      return null;
    }
    return this.firebase.auth().currentUser;
  }

  forgotPassword(email): Promise<any> {
    return this.firebase.auth().sendPasswordResetEmail(email);
  }

  logOut(): void {
    return this.firebase.auth().signOut();
  }
}
