import * as firebase from 'firebase/app';
import 'firebase/functions';
import { firebaseConfig, chargebeeConfig, activeEnv } from '../config'
import { CheckoutLinkResult } from './types';
import { EventEmitter } from "events"

export class PaymentService {
  public firebase = null;
  public chargebeeConfig = activeEnv === 'production' ? chargebeeConfig.production : chargebeeConfig.staging
  public chargeBee = null;
  private script = 'https://js.chargebee.com/v2/chargebee.js';

  constructor() {
    // Check on static build
    if (typeof window !== 'undefined') {
      if (!firebase.apps.length)
        firebase.initializeApp(
          activeEnv === 'production'
            ? firebaseConfig.production
            : firebaseConfig.staging,
        );

      this.firebase = firebase.apps[0];
    }

    this.loadScript().then(() => {
      if (window['Chargebee'] == null) {
        return console.error(
          'Could not load payment provider as external script is not currently loaded.',
        )
      }

      this.chargeBee = window['Chargebee'].init({
        site: this.chargebeeConfig.site
      });
    }).catch(error => {
      console.log(error);
      console.log('Can not init ChargeBee');
    })
  }

  loadScript() {
    if (typeof document === 'undefined') {
      return Promise.reject('Server side rendering');
    }
    const script = document.createElement('script');
    script.src = this.script;
    script.async = true;

    const promise = new Promise((resolve, reject) => {
      script.addEventListener('load', () => resolve(true));
      script.addEventListener('error', e => reject(e));
    })

    document.body.appendChild(script);

    return promise;
  }

  async getCheckoutLink(options): Promise<CheckoutLinkResult> {
    const result = await this.firebase
      .functions()
      .httpsCallable('getCheckoutLink')(options);


    if (result.data && result.data.error) {
      throw Error(result.data.message);
    }

    if (result.data != null) {
      return result.data['hosted_page']
    }
  }

  upgrade(planId, quantity, onError, onSuccess) {
    if (!this.chargeBee) {
      console.warn('ChargeBee is not initialized');
      return;
    }

    const checkoutLink = this.getCheckoutLink({planId, quantity}).catch((error: Error) => {
      if (onError) {
        onError(error)
      }
    });

    this.chargeBee.openCheckout({
      hostedPage: () => checkoutLink,
      success: id => {
        console.log(`Charged ${id}, redirect me to success page`);
        if (onSuccess) {
          onSuccess(id);
        }
      },
      close: () => console.log('closed'),
    })
  }

  async manage( ) {
    if (!this.chargeBee) {
      console.warn('ChargeBee is not initialized');
      return;
    }

    await this.chargeBee.setPortalSession(async () => {
      return this.getManageLink({})
    })

    const cbPortal = this.chargeBee.createChargebeePortal()
    cbPortal.open({
      close: () => console.log('closed'),
    })
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
