import React, { Component } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import FetchingExample from '../containers/FetchingExample'
import SignOut from '../containers/SignOut'
import Helmet from "react-helmet"

const Pricing = () => (
<>  
  <Helmet
      htmlAttributes={{ lang: 'en' }}
      meta={[{ name: 'description', content: "Memex" }]}
      title="Test"
      link={[{
        href:"https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css",
        rel:"stylesheet",
        type:"text/css" 
      }]}
      script={[
      { 
        type: 'text/javascript',
        id: "snipcart",
        "data-api-key": process.env.SNIPCART_API_KEY,
        src:"https://cdn.snipcart.com/scripts/2.0/snipcart.js" 
      },
      {
        type: 'text/javascript',
        src:"https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"
      }]}
  />

  <Layout>
    <h1>Hello!</h1>
    <div style={{margin: '50px'}}>
      <button
      style={{
          backgroundColor: "#212121",
          borderRadius: "5px",
          color: "#F5F5F5",
          fontWeight: "bold",
          paddingBottom: "15px",
          paddingTop: "15px",
          paddingRight: "35px",
          paddingLeft: "35px",
          fontSize: "24"
      }}
       className="snipcart-add-item"
       data-item-name="Monthly Subcription"
       data-item-id="subscription"
       data-item-url={process.env.SNIPCART_PRODUCT_URL}
       data-item-price="10.00"
       data-item-payment-interval="Month"
       data-item-payment-interval-count="1"
      >
      Upgrade Membership
      </button>
    </div>

    <div style={{margin: '30px'}}>
    
        <div className="snipcart-summary">Snipcart summary</div>
        {` | `}
        <a href="#" className="snipcart-user-profile">User profile</a> 

        {` | `}
        <a href="#" className="snipcart-edit-profile">Edit profile</a>

        {` | `}
        <a href="#" className="snipcart-user-profile"><span className="snipcart-user-email">Login</span></a>

        {` | `}
        <a href="#" className="snipcart-user-logout">Logout</a>
     
    </div>

    <FetchingExample />
    
    <SignOut />
  </Layout>
</>  
)

export default class PricePage extends Component {

  constructor(props) {
  super(props);
  
    //this.state = { auth: true };
    this.handleAuthentication = this.handleAuthentication.bind(this);
  }

  handleAuthentication (e) {
    console.log(e)
  }

  componentWillMount() {
    
  }

  componentDidMount() {
    /*
    if (typeof window !== `undefined`) {
      window.Snipcart.subscribe('authentication.success', function (email) {
         console.log(email);
      });
    }*/
    //window.addEventListener('authentication.success', this.handleAuthentication);
    if (typeof window !== `undefined`) {
      console.log(window.Snipcart)
    }
  }

  render = () => {
    return (
      <Pricing />
    )
  }
}