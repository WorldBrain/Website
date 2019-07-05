import React from "react";
import Helmet from "react-helmet"

import '../css/inline.css'

import jQuery from "jquery";
if (typeof window !== `undefined`) {
  window.$ = window.jQuery = jQuery;
}


const Homepage = () =>
(
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
            "data-api-key": "NzFmMzk5OWYtYmVmMC00NmQ2LTliY2YtYTU2MmFkN2U0NDhmNjM2OTcxNjgyOTE1MjIzNDQ4",
            src:"https://cdn.snipcart.com/scripts/2.0/snipcart.js" 
          },
          {
            type: 'text/javascript',
            src:"https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"
          }]}
      />

   <header className="banner navbar navbar-default navbar-static-top " role="banner">
      <div className="container">
         <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
            <div id="logo"> <a href="https://worldbrain.io/"> <img className="logo-main logo-reg" src="https://worldbrain.io/wp-content/uploads/2019/04/logo_horizontal_small-164x40.png" height='40' width='164' alt="Memex by worldbrain.io" /> </a></div>
         </div>
         <nav className="collapse navbar-collapse bs-navbar-collapse" role="navigation">
            <ul id="menu-main-menu-bar" className="nav navbar-nav">
               <li className="dropdown menu-about">
                  <a className="dropdown-toggle">About <b className="caret"></b></a>
                  <ul className="dropdown-menu">
                     <li className="menu-jobs"><a href="https://www.notion.so/worldbrain/4d79e20aa01d4b9e8b8c12d88bb1b4ad">Jobs</a></li>
                     <li className="menu-faqs"><a href="https://worldbrain.io/faq/">FAQs</a></li>
                     <li className="menu-vision"><a href="https://medium.com/@WorldBrain/where-we-are-heading-with-worldbrain-65f244f540b8">Vision</a></li>
                     <li className="menu-roadmap"><a href="https://www.notion.so/worldbrain/Release-Notes-Roadmap-262a367f7a2a48ff8115d2c71f700c14">Roadmap</a></li>
                     <li className="menu-team"><a href="https://www.notion.so/worldbrain/TEAM-9ca5429f6a5c480289386a5cb49f173c">Team</a></li>
                  </ul>
               </li>
               <li className="menu-github"><a href="https://github.com/WorldBrain">GitHub</a></li>
               <li className="active menu-upgrade"><a href="https://worldbrain.io/pricing/" aria-current="page">Upgrade</a></li>
               <li className="menu-login"><a href="https://worldbrain.io/community/myreferrals/">Login</a></li>
            </ul>
         </nav>
      </div>
   </header>
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
                                          <div className="elementor-element elementor-element-4b71b73 elementor-widget elementor-widget-heading" data-id="4b71b73" data-element_type="widget" data-widget_type="heading.default">
                                             <div className="elementor-widget-container">
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
																	 data-item-url="https://master.d29ju0mnpjd1z1.amplifyapp.com/homepage"
																	 data-item-price="10.00"
																	 data-item-payment-interval="Month"
																	 data-item-payment-interval-count="1"
																	>
																	Upgrade Membership
															      </button>
                                                                  </div>

                                                                  <div className="elementor-button-wrapper">
                                                                  	<div className="snipcart-summary">Snipcart summary</div>
                                                                  </div>

                                                                  <a href="#" className="snipcart-user-profile">User profile</a> 
                                                                  {` | `}
                                                                  <a href="#" className="snipcart-edit-profile">Edit profile</a>

                                                                  {` | `}
                                                                  <a href="#" className="snipcart-user-profile"><span className="snipcart-user-email">Login</span></a>

                                                                  {` | `}
                                                                  <a href="#" className="snipcart-user-logout">Logout</a>
                                                               
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
                                                                  <div className="elementor-button-wrapper"> <a href="https://worldbrain.io/roadmap" className="elementor-button-link elementor-button elementor-size-sm" target="_blank" role="button"> <span className="elementor-button-content-wrapper"> <span className="elementor-button-text">Status & Roadmap</span> </span> </a></div>
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
                                                         <div className="eael-toggle-switch-container eael-toggle-switch-rectangle"> <label className="eael-toggle-switch"> <input type="checkbox"/> <span className="eael-toggle-slider"></span> </label></div>
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
                                                                                             <div className="elementor-price-table__footer"> <a className="elementor-price-table__button elementor-button elementor-size-md" href="https://worldbrain.io/#download">Download Memex</a></div>
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
                                                                                                <span className="elementor-price-table__currency elementor-currency--before">&#128;</span> <span className="elementor-price-table__integer-part">1</span>
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
                                                                                                         <p title="Sync your Memex data across multiple computers &amp; mobile phones. 2 devices included. 1€ per additional device" className="tooltips">Sync between your devices <br /><span style={{backgroundColor: '#5cd9a6', color: 'white', borderRadius: '3px', padding: '0.2em 0.5em', fontSize: '14px', fontWeight: '600', marginLeft: '5px'}}>Work in Progress</span></p>
                                                                                                      </span>
                                                                                                   </div>
                                                                                                </li>
                                                                                                <li className="elementor-repeater-item-d46ff67">
                                                                                                   <div className="elementor-price-table__feature-inner"> &nbsp;</div>
                                                                                                </li>
                                                                                             </ul>
                                                                                             <div className="elementor-price-table__footer"> <a className="elementor-price-table__button elementor-button elementor-size-md" href="https://worldbrain.io/checkout/?add-to-cart=7542&amp;variation_id=7544">Upgrade</a></div>
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
                                                                                             <div className="elementor-price-table__footer"> <a className="elementor-price-table__button elementor-button elementor-size-md" href="https://worldbrain.io/#download">Download Memex</a></div>
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
                                                                                             <div className="elementor-price-table__price"> <span className="elementor-price-table__currency elementor-currency--before">&#128;</span> <span className="elementor-price-table__integer-part">12</span></div>
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
                                                                                                         <p title="Sync your Memex data across multiple computers &amp; mobile phones. 2 devices included. 1€ per additional device" className="tooltips">Sync between your devices <br /><span style={{backgroundColor: '#5cd9a6', color: 'white', borderRadius: '3px', padding: '0.2em 0.5em', fontSize: '14px', fontWeight: '600', marginLeft: '5px'}}>Work in Progress</span></p>
                                                                                                      </span>
                                                                                                   </div>
                                                                                                </li>
                                                                                                <li className="elementor-repeater-item-d46ff67">
                                                                                                   <div className="elementor-price-table__feature-inner"> &nbsp;</div>
                                                                                                </li>
                                                                                             </ul>
                                                                                             <div className="elementor-price-table__footer"> <a className="elementor-price-table__button elementor-button elementor-size-md" href="https://worldbrain.io/checkout/?add-to-cart=7542&amp;variation_id=7545">Upgrade</a></div>
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
   <div className="prefooter"></div>
   <footer className="footer" role="contentinfo">
      <div className="container">
         <div className="footer-widgets row th-widget-area">
            <div className="footer-area-1 col-md-4 col-sm-6">
               <section className="widget frm_show_form-7 widget_frm_show_form">
                  <div className="widget-inner">
                     <div className="frm_form_widget">
                        <h3 className="widget-title">Subscribe to our monthly update email</h3>
                        <div className="frm_forms  with_frm_style frm_style_formidable-style" id="frm_form_6_container">
                           <form encType="multipart/form-data" method="post" className="frm-show-form Formidable Style" id="form_contact2">
                              <div className="frm_form_fields ">
                                 <fieldset>
                                    <div className="frm_fields_container">
                                       <input type="hidden" name="frm_action" value="create" /> <input type="hidden" name="form_id" value="6" /> <input type="hidden" name="frm_hide_fields_6" id="frm_hide_fields_6" value="" /> <input type="hidden" name="form_key" value="contact2" /> <input type="hidden" name="item_meta[0]" value="" /> <input type="hidden" id="frm_submit_entry_6" name="frm_submit_entry_6" value="eae9733f9a" /><input type="hidden" name="_wp_http_referer" value="/pricing/" /><label htmlFor="frm_verify_6" className="frm_screen_reader frm_hidden">If you are human, leave this field blank.</label> <input type="text" className="frm_hidden frm_verify" id="frm_verify_6" name="frm_verify" value="" />
                                       <div id="frm_field_27_container" className="frm_form_field form-field  frm_required_field frm_none_container frm_full"> <label htmlFor="field_r3pr0d" className="frm_primary_label">Name <span className="frm_required">*</span> </label> <input type="text" id="field_r3pr0d" name="item_meta[27]" value="" placeholder="Name" data-reqmsg="This field cannot be blank." aria-required="true" data-invmsg="Name is invalid" /></div>
                                       <div id="frm_field_28_container" className="frm_form_field form-field  frm_required_field frm_none_container frm_full"> <label htmlFor="field_29yf4d2" className="frm_primary_label">Email <span className="frm_required">*</span> </label> <input type="text" id="field_29yf4d2" name="item_meta[28]" value="" placeholder="Email" data-reqmsg="This field cannot be blank." aria-required="true" data-invmsg="Email is invalid" /></div>
                                       <input type="hidden" name="item_key" value="" />
                                       <div className="frm_submit"><input type="submit" value="Submit" /> <img className="frm_ajax_loading" src="https://worldbrain.io/wp-content/plugins/formidable/images/ajax_loader.gif" alt="Sending" style={{visibility: 'hidden'}} /></div>
                                    </div>
                                 </fieldset>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </section>
            </div>
            <div className="footer-area-2 col-md-4 col-sm-6">
               <section className="widget text-3 widget_text">
                  <div className="widget-inner">
                     <div className="textwidget">
                        <p><strong>LEGAL</strong></p>
                        <p><a style={{textDecoration: 'none'}} href="https://worldbrain.io/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></p>
                        <p><a style={{textDecoration: 'none'}} href="https://worldbrain.io/tos" target="_blank" rel="noopener noreferrer">Terms of Service</a></p>
                        <p><a style={{textDecoration: 'none'}} href="https://worldbrain.io/imprint" target="_blank" rel="noopener noreferrer">Imprint</a></p>
                     </div>
                  </div>
               </section>
            </div>
            <div className="footer-area-3 col-md-4 col-sm-6">
               <section className="widget text-4 widget_text">
                  <div className="widget-inner">
                     <div className="textwidget">
                        <p><strong>PRODUCT</strong></p>
                        <p><a style={{textDecoration: 'none'}} href="https://worldbrain.io/help" target="_blank" rel="noopener noreferrer">Support</a></p>
                        <p><a style={{textDecoration: 'none'}} href="https://worldbrain.io/roadmap" target="_blank" rel="noopener noreferrer">Roadmap</a></p>
                        <p><a style={{textDecoration: 'none'}} href="https://github.com/worldbrain" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                     </div>
                  </div>
               </section>
               <section className="widget widget-social">
                  <div className="widget-inner">
                     <div className="soc-widget"> <a target="_blank" href="https://www.facebook.com/realworldbrain"><i className="fa fa-facebook"></i></a><a target="_blank" href="https://twitter.com/worldbrain"><i className="fa fa-twitter"></i></a><a target="_blank" href="https://github.com/worldbrain"><i className="fa fa-github"></i></a></div>
                  </div>
               </section>
            </div>
         </div>
      </div>
      <div className="footer-btm-bar">
         <div className="container">
            <div className="footer-copyright row">
               <div className="col-xs-12">
                  <p></p>
               </div>
            </div>
         </div>
      </div>
   </footer>	
</>   
)

export default Homepage