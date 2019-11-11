import * as firebase from 'firebase/app';
import 'firebase/functions';
import { firebaseConfig, chargebeeConfig } from '../config';
import { CheckoutLinkResult } from './types';

export class PaymentService {
  public firebase = null;
  public chargebeeConfig = process.env.NODE_ENV === 'production' ? chargebeeConfig.production : chargebeeConfig.staging

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

  async getCheckoutLink(options): Promise<CheckoutLinkResult> {
    const result = await this.firebase
      .functions()
      .httpsCallable('getCheckoutLink')(options)

    if (result.data != null) {
      return result.data['hosted_page']
    }
  }

  async getManageLink(options): Promise<string> {
    const result = await this.firebase
      .functions()
      .httpsCallable('getManageLink')(options)

    if (result.data != null) {
      return result.data['portal_session']
    }
  }
}
