import React from 'react'
import DefaultPageLayout from '../../components/layout/default-page-layout'
import Page from '../../components/page'
import ScriptLoader from 'react-script-loader-hoc';
import styles from './styles.scss';
import { navigate } from 'gatsby';

const chargeBeeScriptSource = 'https://js.chargebee.com/v2/chargebee.js'

class PricingPage extends Page {
  chargebeeInstance: any

  _initChargebee = (): void => {
    const { payment } = this.getServices();
    if (this.chargebeeInstance != null) {
      return
    }

    // todo: Handle offline cases better
    if (window['Chargebee'] == null) {
      return console.error(
        'Could not load payment provider as external script is not currently loaded.',
      )
    }

    this.chargebeeInstance = window['Chargebee'].init({
      site: payment.chargebeeConfig.site,
      // domain: payment.chargebeeConfig.domain
    })
  }

  componentDidMount() {
    this._initChargebee();
  }

  componentDidUpdate() {
    this._initChargebee();
  }

  handleOnClickBuy = (planId) => {
    const { payment } = this.getServices();

    try {
      const checkoutLink = payment.getCheckoutLink({
        planId
      });

      this.chargebeeInstance.openCheckout({
        hostedPage: () => checkoutLink,
        success: id => alert(`Charged ${id}, redirect me to success page`),
        error: (error) => {
          console.log(error);
          alert('You need login or Internal Error');
          navigate('/login');
        },
        close: () => console.log('closed'),
      })

    } catch (error) {
      // TODO: Show some toast that we got a problem
      console.log(error);
    }

  }

  render() {
    return (
      <DefaultPageLayout pageTitle="Pricing">
        <div className={styles.pricingPage}>
          <h1>
            We crowdfund 50.000€ to develop Memex' multi-device sync & mobile apps.
          </h1>

          <div className="upgrade-btn">
            <button onClick={() => this.handleOnClickBuy('pro-1-device')} className="btn btn-primary">
              Monthly Pro 1 Device
            </button>

            <button onClick={() => this.handleOnClickBuy('pro-2-devices')} className="btn btn-primary">
              Monthly Pro 2 Devices
            </button>

            <hr />

            <button onClick={() => this.handleOnClickBuy('pro-1-device-yrl')} className="btn btn-primary">
              Yearly Pro 1 Device
            </button>

            <button onClick={() => this.handleOnClickBuy('pro-2-devices-yrl')} className="btn btn-primary">
              Yearly Pro 2 Devices
          </button>
          </div>
        </div>

      </DefaultPageLayout>
    )
  }
}

export default ScriptLoader(chargeBeeScriptSource)(PricingPage);
