import React from 'react'
import Helmet from "react-helmet"
import Layout from "../components/layout"

import jQuery from "jquery";
if (typeof window !== `undefined`) {
  window.$ = window.jQuery = jQuery;
}

export default class Pricing extends React.Component {

componentDidMount() { 
  if (typeof window !== `undefined`) {
    //import ('../js/jquery-1.12.4-wp.js').then(console.log('imported jquery'))
    import ('../js/cached.js').then(console.log('imported javascript'))
  }
}

render(){
return(
<>
<Layout>
<Helmet
    htmlAttributes={{ lang: 'en' }}
    meta={[{ name: 'description', content: "Memex" }]}
    title="Pricing"
    link={[{
      href:"https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css",
      rel:"stylesheet",
      type:"text/css" 
    }]}
    script={[
    { 
      type: 'text/javascript',
      id: "snipcart",
      "data-api-key": process.env.GATSBY_SNIPCART_API_KEY,
      src:"https://cdn.snipcart.com/scripts/2.0/snipcart.js" 
    },
    {
      type: 'text/javascript',
      src:"https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"
    }]}
/>

<Helmet>
  <body className="page-template-default page page-id-7320 woocommerce-js yith-ctpw elementor-default elementor-page elementor-page-7320 th-sticky-header loaded headhesive" />
</Helmet>

<div className="wrap" role="document">
  <div className="content">
     <div className="inner-container">
        <section className="content-editor">
           <div data-elementor-type="post" data-elementor-id="7320" className="elementor elementor-7320" data-elementor-settings="[]">
              <div className="elementor-inner">
                 <div className="elementor-section-wrap">
                    <section className="elementor-element elementor-element-aeac1c5 elementor-section-full_width elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section" data-id="aeac1c5" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                       <div className="elementor-container elementor-column-gap-default">
                          <div className="elementor-row">
                             <div className="elementor-element elementor-element-0f3d48d elementor-column elementor-col-100 elementor-top-column" data-id="0f3d48d" data-element_type="column">
                                <div className="elementor-column-wrap  elementor-element-populated">
                                   <div className="elementor-widget-wrap">
                                      <div className="elementor-element elementor-element-0d14da5 elementor-widget elementor-widget-menu-anchor" data-id="0d14da5" data-element_type="widget" data-widget_type="menu-anchor.default">
                                         <div className="elementor-widget-container">
                                            <div id="crowdfund" className="elementor-menu-anchor"></div>
                                         </div>
                                      </div>
                                      <div className="elementor-element elementor-element-4b71b73 elementor-widget elementor-widget-heading" 
                                        data-id="4b71b73" data-element_type="widget" data-widget_type="heading.default"
                                        style={{marginTop: '80'}}
                                      >
                                         <div className="elementor-widget-container" style={{padding: '120px 0 0 0'}}>
                                            <h2 className="elementor-heading-title elementor-size-default">We crowdfund 50.000€ to develop Memex' multi-device sync &amp; mobile apps.</h2>
                                         </div>
                                      </div>
                                      <div className="elementor-element elementor-element-30be1ee elementor-widget elementor-widget-heading" data-id="30be1ee" data-element_type="widget" data-widget_type="heading.default">
                                         <div className="elementor-widget-container">
                                            <p className="elementor-heading-title elementor-size-default">Chip in 10€ now and get 40€ in premium credits once they are released.</p>
                                         </div>
                                      </div>
                                      <section className="elementor-element elementor-element-186250c elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-inner-section" data-id="186250c" data-element_type="section">
                                         <div className="elementor-container elementor-column-gap-default">
                                            <div className="elementor-row">
                                               <div className="elementor-element elementor-element-767054b elementor-column elementor-col-50 elementor-inner-column" data-id="767054b" data-element_type="column">
                                                  <div className="elementor-column-wrap  elementor-element-populated">
                                                     <div className="elementor-widget-wrap">
                                                        <div className="elementor-element elementor-element-44d2a85 elementor-align-right elementor-mobile-align-center elementor-widget elementor-widget-button" data-id="44d2a85" data-element_type="widget" data-widget_type="button.default">
                                                           <div className="elementor-widget-container">
                                                              <div className="elementor-button-wrapper"> 
                                                                <button className="elementor-button-link elementor-button elementor-size-sm snipcart-add-item"
                                                                   data-item-name="Year Subscription"
                                                                   data-item-id="subscriptionyear"
                                                                   data-item-url={process.env.GATSBY_SNIPCART_PRODUCT_URL}
                                                                   data-item-price="12"
                                                                   data-item-payment-interval="Year"
                                                                   data-item-payment-interval-count="1"
                                                                   data-item-quantity="1"
                                                                   data-item-max-quantity="1"
                                                                   data-item-shippable={false}

                                                                   >
                                                                
                                                                  <span className="elementor-button-content-wrapper"> 
                                                                    <span className="elementor-button-text">Count me in!</span> 
                                                                  </span> 
                                                                </button>

                                                                {/*<button className="snipcart-add-item"
                                                                   data-item-name="Year Subscription"
                                                                   data-item-id="subscription"
                                                                   data-item-url={process.env.GATSBY_SNIPCART_PRODUCT_URL}
                                                                   data-item-price="12"
                                                                   data-item-payment-interval="Year"
                                                                   data-item-payment-interval-count="1"
                                                                   data-item-quantity="1"
                                                                   data-item-max-quantity="1"
                                                                   data-item-shippable={false}
                                                                   >
                                                                
                                                                  
                                                                    Count me in!
                                                                  
                                                                </button>*/}
                                                              </div>
                                                           </div>
                                                        </div>
                                                     </div>
                                                  </div>
                                               </div>
                                               <div className="elementor-element elementor-element-921c0f4 elementor-column elementor-col-50 elementor-inner-column" data-id="921c0f4" data-element_type="column">
                                                  <div className="elementor-column-wrap  elementor-element-populated">
                                                     <div className="elementor-widget-wrap">
                                                        <div className="elementor-element elementor-element-039c69a elementor-align-left elementor-mobile-align-center elementor-widget elementor-widget-button" data-id="039c69a" data-element_type="widget" data-widget_type="button.default">
                                                           <div className="elementor-widget-container">
                                                              <div className="elementor-button-wrapper"> <a href="https://www.notion.so/worldbrain/Release-Notes-Roadmap-262a367f7a2a48ff8115d2c71f700c14" className="elementor-button-link elementor-button elementor-size-sm" target="_blank" role="button"> <span className="elementor-button-content-wrapper"> <span className="elementor-button-text">Status & Roadmap</span> </span> </a></div>
                                                           </div>
                                                        </div>
                                                     </div>
                                                  </div>
                                               </div>
                                            </div>
                                         </div>
                                      </section>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </section>
                    <section className="elementor-element elementor-element-1890711 elementor-section-stretched elementor-section-full_width elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section" data-id="1890711" data-element_type="section" data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;}">
                       <div className="elementor-container elementor-column-gap-no">
                          <div className="elementor-row">
                             <div className="elementor-element elementor-element-fc9b858 elementor-column elementor-col-100 elementor-top-column" data-id="fc9b858" data-element_type="column">
                                <div className="elementor-column-wrap  elementor-element-populated">
                                   <div className="elementor-widget-wrap">
                                      <div className="elementor-element elementor-element-45932b3 eael-toggle-center elementor-widget elementor-widget-eael-toggle" data-id="45932b3" data-element_type="widget" data-settings="{&quot;toggle_switch_alignment&quot;:&quot;center&quot;}" data-widget_type="eael-toggle.default">
                                         <div className="elementor-widget-container">
                                            <div className="eael-toggle-container" id="eael-toggle-container-45932b3" data-toggle-target="#eael-toggle-container-45932b3">
                                               <div className="eael-toggle-switch-wrap">
                                                  <div className="eael-toggle-switch-inner">
                                                     <div className="eael-primary-toggle-label"> Monthly</div>
                                                     <div className="eael-toggle-switch-container eael-toggle-switch-rectangle"> <label className="eael-toggle-switch"> <input type="checkbox" /> <span className="eael-toggle-slider"></span> </label></div>
                                                     <div className="eael-secondary-toggle-label"> Yearly</div>
                                                  </div>
                                               </div>
                                               <div className="eael-toggle-content-wrap primary">
                                                  <div className="eael-toggle-primary-wrap">
                                                     <div data-elementor-type="section" data-elementor-id="8903" className="elementor elementor-8903" data-elementor-settings="[]">
                                                        <div className="elementor-inner">
                                                           <div className="elementor-section-wrap">
                                                              <section className="elementor-element elementor-element-1fb6abab elementor-section-stretched elementor-section-full_width elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section" data-id="1fb6abab" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;,&quot;stretch_section&quot;:&quot;section-stretched&quot;}">
                                                                 <div className="elementor-container elementor-column-gap-no">
                                                                    <div className="elementor-row">
                                                                       <div className="elementor-element elementor-element-277549c5 elementor-column elementor-col-50 elementor-top-column" data-id="277549c5" data-element_type="column">
                                                                          <div className="elementor-column-wrap  elementor-element-populated">
                                                                             <div className="elementor-widget-wrap">
                                                                                <div className="elementor-element elementor-element-7b8ad010 animated-fast pricing_list elementor-invisible elementor-widget elementor-widget-price-table" data-id="7b8ad010" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:200}" data-widget_type="price-table.default">
                                                                                   <div className="elementor-widget-container">
                                                                                      <div className="elementor-price-table">
                                                                                         <div className="elementor-price-table__header">
                                                                                            <h3 className="elementor-price-table__heading">basic</h3>
                                                                                            <span className="elementor-price-table__subheading">Memex Browser Extension</span>
                                                                                         </div>
                                                                                         <div className="elementor-price-table__price"> <span className="elementor-price-table__integer-part">Free</span> <span className="elementor-price-table__period elementor-typo-excluded">Forever</span></div>
                                                                                         <ul className="elementor-price-table__features-list">
                                                                                            <li className="elementor-repeater-item-em453v5">
                                                                                               <div className="elementor-price-table__feature-inner">
                                                                                                  <span>
                                                                                                     <p title="Full-text search as many websites as your hard drive can save" className="tooltips">∞ Full-text history search</p>
                                                                                                  </span>
                                                                                               </div>
                                                                                            </li>
                                                                                            <li className="elementor-repeater-item-jg42wct">
                                                                                               <div className="elementor-price-table__feature-inner">
                                                                                                  <span>
                                                                                                     <p title="Make as many annotations as your computer can save" className="tooltips">∞ Annotations</p>
                                                                                                  </span>
                                                                                               </div>
                                                                                            </li>
                                                                                            <li className="elementor-repeater-item-qpuxonp">
                                                                                               <div className="elementor-price-table__feature-inner">
                                                                                                  <span>
                                                                                                     <p title="Create as many collections (and soon sub-collections) as you want" className="tooltips">∞ Collections</p>
                                                                                                  </span>
                                                                                               </div>
                                                                                            </li>
                                                                                            <li className="elementor-repeater-item-xz8gem7">
                                                                                               <div className="elementor-price-table__feature-inner">
                                                                                                  <span>
                                                                                                     <p title="You can make incremental backups to your local hard drive and any cloud provider that syncs via a folder (e.g. Dropbox). You just have to remember doing them regularly." className="tooltips">Manual backup to any cloud provider</p>
                                                                                                  </span>
                                                                                               </div>
                                                                                            </li>
                                                                                            <li className="elementor-repeater-item-d46ff67">
                                                                                               <div className="elementor-price-table__feature-inner"> &nbsp;</div>
                                                                                            </li>
                                                                                         </ul>
                                                                                         <div className="elementor-price-table__footer"> <a className="elementor-price-table__button elementor-button elementor-size-md" href="/#download">Download Memex</a></div>
                                                                                      </div>
                                                                                   </div>
                                                                                </div>
                                                                             </div>
                                                                          </div>
                                                                       </div>
                                                                       <div className="elementor-element elementor-element-fd87511 elementor-column elementor-col-50 elementor-top-column" data-id="fd87511" data-element_type="column">
                                                                          <div className="elementor-column-wrap  elementor-element-populated">
                                                                             <div className="elementor-widget-wrap">
                                                                                <div className="elementor-element elementor-element-a39f784 animated-fast pricing_list elementor-invisible elementor-widget elementor-widget-price-table" data-id="a39f784" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:500}" data-widget_type="price-table.default">
                                                                                   <div className="elementor-widget-container">
                                                                                      <div className="elementor-price-table">
                                                                                         <div className="elementor-price-table__header">
                                                                                            <h3 className="elementor-price-table__heading">Pro</h3>
                                                                                            <span className="elementor-price-table__subheading">Automatic Backups & Sync</span>
                                                                                         </div>
                                                                                         <div className="elementor-price-table__price">
                                                                                            <span className="elementor-price-table__currency elementor-currency--before">€</span> <span className="elementor-price-table__integer-part">1</span>
                                                                                            <div className="elementor-price-table__after-price"> <span className="elementor-price-table__fractional-part">50</span></div>
                                                                                         </div>
                                                                                         <ul className="elementor-price-table__features-list">
                                                                                            <li className="elementor-repeater-item-em453v5">
                                                                                               <div className="elementor-price-table__feature-inner">
                                                                                                  <span>
                                                                                                     <p title="Use all of Memex' features as much as you want" className="tooltips">Everything in Basic</p>
                                                                                                  </span>
                                                                                               </div>
                                                                                            </li>
                                                                                            <li className="elementor-repeater-item-jg42wct">
                                                                                               <div className="elementor-price-table__feature-inner">
                                                                                                  <span>
                                                                                                     <p title="Worry-free automatic backups every 15 minutes" className="tooltips">Automatic Backups every 15 min</p>
                                                                                                  </span>
                                                                                               </div>
                                                                                            </li>
                                                                                            <li className="elementor-repeater-item-qpuxonp">
                                                                                               <div className="elementor-price-table__feature-inner">
                                                                                                  <span>
                                                                                                     <p title="Sync your Memex data across multiple computers &amp; mobile phones. 2 devices included. 1€ per additional device" className="tooltips">Sync between your devices <br /><span style={{backgroundColor:'#5cd9a6', color: 'white', borderRadius: '3px', padding: '0.2em 0.5em', fontSize: '14px', fontWeight: '600', marginLeft: '5px'}}>Work in Progress</span></p>
                                                                                                  </span>
                                                                                               </div>
                                                                                            </li>
                                                                                            <li className="elementor-repeater-item-d46ff67">
                                                                                               <div className="elementor-price-table__feature-inner"> &nbsp;</div>
                                                                                            </li>
                                                                                         </ul>
                                                                                         <div className="elementor-price-table__footer"> 
                                                                                            <button className="elementor-price-table__button elementor-button elementor-size-md snipcart-add-item"
                                                                                              data-item-name="Monthly Subscription"
                                                                                               data-item-id="subscription"
                                                                                               data-item-url={process.env.GATSBY_SNIPCART_PRODUCT_URL}
                                                                                               data-item-price="1.5"
                                                                                               data-item-payment-interval="Month"
                                                                                               data-item-payment-interval-count="1"
                                                                                               data-item-quantity="1"
                                                                                               data-item-max-quantity="1"
                                                                                               data-item-shippable={false}
                                                                                               >
                                                                                               Upgrade
                                                                                            </button>
                                                                                         </div>
                                                                                      </div>
                                                                                   </div>
                                                                                </div>
                                                                             </div>
                                                                          </div>
                                                                       </div>
                                                                    </div>
                                                                 </div>
                                                              </section>
                                                           </div>
                                                        </div>
                                                     </div>
                                                  </div>
                                                  <div className="eael-toggle-secondary-wrap">
                                                     <div data-elementor-type="page" data-elementor-id="9328" className="elementor elementor-9328" data-elementor-settings="[]">
                                                        <div className="elementor-inner">
                                                           <div className="elementor-section-wrap">
                                                              <section className="elementor-element elementor-element-1fb6abab elementor-section-stretched elementor-section-full_width elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section" data-id="1fb6abab" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;,&quot;stretch_section&quot;:&quot;section-stretched&quot;}">
                                                                 <div className="elementor-container elementor-column-gap-no">
                                                                    <div className="elementor-row">
                                                                       <div className="elementor-element elementor-element-277549c5 elementor-column elementor-col-50 elementor-top-column" data-id="277549c5" data-element_type="column">
                                                                          <div className="elementor-column-wrap  elementor-element-populated">
                                                                             <div className="elementor-widget-wrap">
                                                                                <div className="elementor-element elementor-element-7b8ad010 animated-fast pricing_list elementor-invisible elementor-widget elementor-widget-price-table" data-id="7b8ad010" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:200}" data-widget_type="price-table.default">
                                                                                   <div className="elementor-widget-container">
                                                                                      <div className="elementor-price-table">
                                                                                         <div className="elementor-price-table__header">
                                                                                            <h3 className="elementor-price-table__heading">basic</h3>
                                                                                            <span className="elementor-price-table__subheading">Memex Browser Extension</span>
                                                                                         </div>
                                                                                         <div className="elementor-price-table__price"> <span className="elementor-price-table__integer-part">Free</span> <span className="elementor-price-table__period elementor-typo-excluded">Forever</span></div>
                                                                                         <ul className="elementor-price-table__features-list">
                                                                                            <li className="elementor-repeater-item-em453v5">
                                                                                               <div className="elementor-price-table__feature-inner">
                                                                                                  <span>
                                                                                                     <p title="Full-text search as many websites as your hard drive can save" className="tooltips">∞ Full-text history search</p>
                                                                                                  </span>
                                                                                               </div>
                                                                                            </li>
                                                                                            <li className="elementor-repeater-item-jg42wct">
                                                                                               <div className="elementor-price-table__feature-inner">
                                                                                                  <span>
                                                                                                     <p title="Make as many annotations as your computer can save" className="tooltips">∞ Annotations</p>
                                                                                                  </span>
                                                                                               </div>
                                                                                            </li>
                                                                                            <li className="elementor-repeater-item-qpuxonp">
                                                                                               <div className="elementor-price-table__feature-inner">
                                                                                                  <span>
                                                                                                     <p title="Create as many collections (and soon sub-collections) as you want" className="tooltips">∞ Collections</p>
                                                                                                  </span>
                                                                                               </div>
                                                                                            </li>
                                                                                            <li className="elementor-repeater-item-xz8gem7">
                                                                                               <div className="elementor-price-table__feature-inner">
                                                                                                  <span>
                                                                                                     <p title="You can make incremental backups to your local hard drive and any cloud provider that syncs via a folder (e.g. Dropbox). You just have to remember doing them regularly." className="tooltips">Manual backup to any cloud provider</p>
                                                                                                  </span>
                                                                                               </div>
                                                                                            </li>
                                                                                            <li className="elementor-repeater-item-d46ff67">
                                                                                               <div className="elementor-price-table__feature-inner"> &nbsp;</div>
                                                                                            </li>
                                                                                         </ul>
                                                                                         <div className="elementor-price-table__footer"> <a className="elementor-price-table__button elementor-button elementor-size-md" href="/#download">Download Memex</a></div>
                                                                                      </div>
                                                                                   </div>
                                                                                </div>
                                                                             </div>
                                                                          </div>
                                                                       </div>
                                                                       <div className="elementor-element elementor-element-fd87511 elementor-column elementor-col-50 elementor-top-column" data-id="fd87511" data-element_type="column">
                                                                          <div className="elementor-column-wrap  elementor-element-populated">
                                                                             <div className="elementor-widget-wrap">
                                                                                <div className="elementor-element elementor-element-a39f784 animated-fast pricing_list elementor-invisible elementor-widget elementor-widget-price-table" data-id="a39f784" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:500}" data-widget_type="price-table.default">
                                                                                   <div className="elementor-widget-container">
                                                                                      <div className="elementor-price-table">
                                                                                         <div className="elementor-price-table__header">
                                                                                            <h3 className="elementor-price-table__heading">Pro</h3>
                                                                                            <span className="elementor-price-table__subheading">Automatic Backups & Sync</span>
                                                                                         </div>
                                                                                         <div className="elementor-price-table__price"> <span className="elementor-price-table__currency elementor-currency--before">€</span> <span className="elementor-price-table__integer-part">12</span></div>
                                                                                         <ul className="elementor-price-table__features-list">
                                                                                            <li className="elementor-repeater-item-em453v5">
                                                                                               <div className="elementor-price-table__feature-inner">
                                                                                                  <span>
                                                                                                     <p title="Use all of Memex' features as much as you want" className="tooltips">Everything in Basic</p>
                                                                                                  </span>
                                                                                               </div>
                                                                                            </li>
                                                                                            <li className="elementor-repeater-item-jg42wct">
                                                                                               <div className="elementor-price-table__feature-inner">
                                                                                                  <span>
                                                                                                     <p title="Worry-free automatic backups every 15 minutes" className="tooltips">Automatic Backups every 15 min</p>
                                                                                                  </span>
                                                                                               </div>
                                                                                            </li>
                                                                                            <li className="elementor-repeater-item-qpuxonp">
                                                                                               <div className="elementor-price-table__feature-inner">
                                                                                                  <span>
                                                                                                     <p title="Sync your Memex data across multiple computers &amp; mobile phones. 2 devices included. 1€ per additional device" className="tooltips">Sync between your devices <br /><span style={{backgroundColor:'#5cd9a6', color: 'white', borderRadius: '3px', padding: '0.2em 0.5em', fontSize: '14px', fontWeight: '600', marginLeft: '5px'}}>Work in Progress</span></p>
                                                                                                  </span>
                                                                                               </div>
                                                                                            </li>
                                                                                            <li className="elementor-repeater-item-d46ff67">
                                                                                               <div className="elementor-price-table__feature-inner"> &nbsp;</div>
                                                                                            </li>
                                                                                         </ul>
                                                                                         <div className="elementor-price-table__footer"> 
                                                                                          <button className="elementor-price-table__button elementor-button elementor-size-md snipcart-add-item"
                                                                                           data-item-name="Year Subscription"
                                                                                           data-item-id="subscriptionyear2"
                                                                                           data-item-url={process.env.GATSBY_SNIPCART_PRODUCT_URL}
                                                                                           data-item-price="12.00"
                                                                                           data-item-payment-interval="Year"
                                                                                           data-item-payment-interval-count="1"
                                                                                           data-item-quantity="1"
                                                                                           data-item-max-quantity="1"
                                                                                          >
                                                                                          Upgrade
                                                                                          </button>
                                                                                         </div>
                                                                                      </div>
                                                                                   </div>
                                                                                </div>
                                                                             </div>
                                                                          </div>
                                                                       </div>
                                                                    </div>
                                                                 </div>
                                                              </section>
                                                           </div>
                                                        </div>
                                                     </div>
                                                  </div>
                                               </div>
                                            </div>
                                         </div>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </section>
                    <section className="elementor-element elementor-element-0f43dd9 elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section" data-id="0f43dd9" data-element_type="section">
                       <div className="elementor-container elementor-column-gap-default">
                          <div className="elementor-row">
                             <div className="elementor-element elementor-element-f892f70 elementor-column elementor-col-100 elementor-top-column" data-id="f892f70" data-element_type="column">
                                <div className="elementor-column-wrap  elementor-element-populated">
                                   <div className="elementor-widget-wrap">
                                      <div className="elementor-element elementor-element-3b70e89 elementor-widget elementor-widget-heading" data-id="3b70e89" data-element_type="widget" data-widget_type="heading.default">
                                         <div className="elementor-widget-container">
                                            <h2 className="elementor-heading-title elementor-size-default">💰 30-Day Money-Back Guarantee 💰</h2>
                                         </div>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </section>
                 </div>
              </div>
           </div>
        </section>
        <div className='container'>
           <div className="row">
              <div className="col-md-12"></div>
           </div>
        </div>
     </div>
  </div>
</div>

</ Layout>

</>
)}
}