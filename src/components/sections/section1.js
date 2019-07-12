import React from 'react'
import { FaTimes} from 'react-icons/fa';


export default class Section1 extends React.Component {

constructor() {
    super();
    this.state = { showModal: false };
               
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
}

openModal = () => {
      this.setState({showModal: true});
};

closeModal = () => {
      this.setState(prevState => ({
        showModal: !prevState.showModal
      }));
};

render(){
return(
<section className="elementor-element elementor-element-7a108a6c elementor-section-full_width elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section" data-id="7a108a6c" data-element_type="section">
    <div className="elementor-container elementor-column-gap-default">
       <div className="elementor-row">
          <div className="elementor-element elementor-element-510d8d51 elementor-column elementor-col-50 elementor-top-column" data-id="510d8d51" data-element_type="column" id="frontWrapper">
             <div className="elementor-column-wrap  elementor-element-populated">
                <div className="elementor-widget-wrap">
                   <div className="elementor-element elementor-element-3e2725f elementor-section-full_width elementor-section-height-default elementor-section-height-default elementor-section elementor-inner-section" data-id="3e2725f" data-element_type="section">
                      <div className="elementor-container elementor-column-gap-default">
                         <div className="elementor-row">
                            <div className="elementor-element elementor-element-5e057eb elementor-column elementor-col-100 elementor-inner-column" data-id="5e057eb" data-element_type="column">
                               <div className="elementor-column-wrap  elementor-element-populated">
                                  <div className="elementor-widget-wrap">
                                     <div className="elementor-element elementor-element-e328450 elementor-widget elementor-widget-heading" data-id="e328450" data-element_type="widget" data-widget_type="heading.default">
                                        <div className="elementor-widget-container">
                                           <h3 className="elementor-heading-title elementor-size-default">The Power Upgrade for your Browser</h3>
                                        </div>
                                     </div>
                                     <div className="elementor-element elementor-element-0d398d6 elementor-widget elementor-widget-heading" data-id="0d398d6" data-element_type="widget" data-widget_type="heading.default">
                                        <div className="elementor-widget-container">
                                           <p className="elementor-heading-title elementor-size-default">A privacy focused extension to annotate, search and organize what you've seen online.</p>
                                        </div>
                                     </div>
                                     <div className="elementor-element elementor-element-face03b elementor-mobile-align-center elementor-widget elementor-widget-popup" data-id="face03b" data-element_type="widget" data-widget_type="popup.default">
                                        <div className="elementor-widget-container">
                                           <div className="elementor-button-wrapper">
                                              <a className="elementor-button elementor-size-sm modal-popup" data-target="#popup-4832" onClick={this.openModal}> <span className="elementor-button-content-wrapper"> <span className="elementor-button-text">Download for Free</span> </span>
                                              </a>
                                           </div>
                                           
                                           <div className="modal fade in" id="popup-4832" tabIndex="-1" role="dialog" aria-labelledby="popup-4832-label" aria-hidden={this.state.showModal ? "false" : "true"} style={{display: this.state.showModal ? "block" : "none"}}>
                                            <div className="modal-content">

                                               <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.closeModal}> 
                                                  <span aria-hidden="true"><FaTimes /></span> 
                                               </button>

                                               <div className="modal-body">
                                                  <div data-elementor-type="post" data-elementor-id="4832" className="elementor elementor-4832" data-elementor-settings="[]">
                                                     <div className="elementor-inner">
                                                        <div className="elementor-section-wrap">
                                                           <section className="elementor-element elementor-element-9fb20a0 elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section" data-id="9fb20a0" data-element_type="section">
                                                              <div className="elementor-container elementor-column-gap-default">
                                                                 <div className="elementor-row">
                                                                    <div className="elementor-element elementor-element-5e33764f elementor-column elementor-col-100 elementor-top-column" data-id="5e33764f" data-element_type="column">
                                                                       <div className="elementor-column-wrap  elementor-element-populated">
                                                                          <div className="elementor-widget-wrap">
                                                                             <div className="elementor-element elementor-element-1eebdab9 elementor-widget elementor-widget-heading" data-id="1eebdab9" data-element_type="widget" data-widget_type="heading.default">
                                                                                <div className="elementor-widget-container">
                                                                                   <h2 className="elementor-heading-title elementor-size-default">Pick your browser</h2>
                                                                                </div>
                                                                             </div>
                                                                          </div>
                                                                       </div>
                                                                    </div>
                                                                 </div>
                                                              </div>
                                                           </section>
                                                           <section className="elementor-element elementor-element-498dd614 elementor-section-full_width elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section" data-id="498dd614" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                                                              <div className="elementor-container elementor-column-gap-default">
                                                                 <div className="elementor-row">
                                                                    <div className="elementor-element elementor-element-2c93ddda elementor-column elementor-col-100 elementor-top-column" data-id="2c93ddda" data-element_type="column">
                                                                       <div className="elementor-column-wrap  elementor-element-populated">
                                                                          <div className="elementor-widget-wrap">
                                                                             <section className="elementor-element elementor-element-60b47d31 elementor-section-content-middle elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section elementor-inner-section" data-id="60b47d31" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
                                                                                <div className="elementor-container elementor-column-gap-default">
                                                                                   <div className="elementor-row">
                                                                                      <div className="elementor-element elementor-element-5027f8e2 elementor-column elementor-col-33 elementor-inner-column" data-id="5027f8e2" data-element_type="column">
                                                                                         <div className="elementor-column-wrap  elementor-element-populated">
                                                                                            <div className="elementor-widget-wrap">
                                                                                               <div className="elementor-element elementor-element-5c4af95 elementor-widget elementor-widget-image" data-id="5c4af95" data-element_type="widget" id="firefox" data-widget_type="image.default">
                                                                                                  <div className="elementor-widget-container">
                                                                                                     <div className="elementor-image">
                                                                                                        <a href="https://chrome.google.com/webstore/detail/abkfbakhjpmblaafnpgjppbmioombali" data-elementor-open-lightbox="">
                                                                                                           <img src="/images/Google_Chrome_icon_September_2014.svg" data-lazy-src="/images/Google_Chrome_icon_September_2014.svg" title="Google_Chrome_icon_(September_2014)" alt="Google_Chrome_icon_(September_2014)" />
                                                                                                           <noscript><img src="/images/Google_Chrome_icon_September_2014.svg" title="Google_Chrome_icon_(September_2014)" alt="Google_Chrome_icon_(September_2014)" /></noscript>
                                                                                                        </a>
                                                                                                     </div>
                                                                                                  </div>
                                                                                               </div>
                                                                                            </div>
                                                                                         </div>
                                                                                      </div>
                                                                                      <div className="elementor-element elementor-element-7bd4f25b elementor-column elementor-col-33 elementor-inner-column" data-id="7bd4f25b" data-element_type="column">
                                                                                         <div className="elementor-column-wrap  elementor-element-populated">
                                                                                            <div className="elementor-widget-wrap">
                                                                                               <div className="elementor-element elementor-element-36b1f984 elementor-widget elementor-widget-image" data-id="36b1f984" data-element_type="widget" id="firefox" data-widget_type="image.default">
                                                                                                  <div className="elementor-widget-container">
                                                                                                     <div className="elementor-image">
                                                                                                        <a href="https://addons.mozilla.org/en-US/firefox/addon/worldbrain/" data-elementor-open-lightbox="">
                                                                                                           <img src="/images/Firefox_Logo_2017.svg" data-lazy-src="/images/Firefox_Logo_2017.svg" title="Firefox_Logo,_2017" alt="Firefox_Logo,_2017" />
                                                                                                           <noscript><img src="/images/Firefox_Logo_2017.svg" title="Firefox_Logo,_2017" alt="Firefox_Logo,_2017" /></noscript>
                                                                                                        </a>
                                                                                                     </div>
                                                                                                  </div>
                                                                                               </div>
                                                                                            </div>
                                                                                         </div>
                                                                                      </div>
                                                                                      <div className="elementor-element elementor-element-2ec6e6db elementor-column elementor-col-33 elementor-inner-column" data-id="2ec6e6db" data-element_type="column">
                                                                                         <div className="elementor-column-wrap  elementor-element-populated">
                                                                                            <div className="elementor-widget-wrap">
                                                                                               <div className="elementor-element elementor-element-aeb4cf1 elementor-widget elementor-widget-image" data-id="aeb4cf1" data-element_type="widget" id="firefox" data-widget_type="image.default">
                                                                                                  <div className="elementor-widget-container">
                                                                                                     <div className="elementor-image">
                                                                                                        <a href="https://chrome.google.com/webstore/detail/abkfbakhjpmblaafnpgjppbmioombali" data-elementor-open-lightbox="">
                                                                                                           <img src="/images/Vivaldi_web_browser_logo.svg" data-lazy-src="/images/Vivaldi_web_browser_logo.svg" title="Vivaldi_web_browser_logo" alt="Vivaldi_web_browser_logo" />
                                                                                                           <noscript><img src="/images/Vivaldi_web_browser_logo.svg" title="Vivaldi_web_browser_logo" alt="Vivaldi_web_browser_logo" /></noscript>
                                                                                                        </a>
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
                   </div>
                   <section className="elementor-element elementor-element-1766ef8 elementor-section-full_width elementor-section-height-default elementor-section-height-default elementor-section elementor-inner-section" data-id="1766ef8" data-element_type="section">
                      <div className="elementor-container elementor-column-gap-default">
                         <div className="elementor-row">
                            <div className="elementor-element elementor-element-a6e14ac elementor-column elementor-col-100 elementor-inner-column" data-id="a6e14ac" data-element_type="column">
                               <div className="elementor-column-wrap  elementor-element-populated">
                                  <div className="elementor-widget-wrap">
                                     <div className="elementor-element elementor-element-22f1d39 elementor-widget elementor-widget-heading" data-id="22f1d39" data-element_type="widget" data-widget_type="heading.default">
                                        <div className="elementor-widget-container">
                                           <p className="elementor-heading-title elementor-size-default">Get started in less than 30 seconds.
                                              <br /> No account necessary. All data stored locally.
                                              <br />
                                           </p>
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
          <div className="elementor-element elementor-element-e6b0629 elementor-hidden-phone elementor-column elementor-col-50 elementor-top-column" data-id="e6b0629" data-element_type="column">
             <div className="elementor-column-wrap  elementor-element-populated">
                <div className="elementor-widget-wrap">
                   <div className="elementor-element elementor-element-4eb725b elementor-hidden-phone animated-fast elementor-widget elementor-widget-image" data-id="4eb725b" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="image.default">
                      <div className="elementor-widget-container" style={{margin: '0'}}>
                         <div className="elementor-image">
                            <img width="1024" height="659" src="/images/main_screen_new-1024x659.png" data-lazy-src="/images/main_screen_new-1024x659.png" className="attachment-large size-large" alt="" data-lazy-srcset="/images/main_screen_new-1024x659.png 1024w, /images/main_screen_new-300x193.png 300w, /images/main_screen_new-768x494.png 768w, /images/main_screen_new-62x40.png 62w, /images/main_screen_new-124x80.png 124w, /images/main_screen_new-394x253.png 394w, /images/main_screen_new-915x589.png 915w, /images/main_screen_new-1240x798.png 1240w, /images/main_screen_new.png 1278w" data-lazy-sizes="(max-width: 1024px) 100vw, 1024px" />
                            <noscript><img width="1024" height="659" src="/images/main_screen_new-1024x659.png" className="attachment-large size-large" alt="" srcset="/images/main_screen_new-1024x659.png 1024w, /images/main_screen_new-300x193.png 300w, /images/main_screen_new-768x494.png 768w, /images/main_screen_new-62x40.png 62w, /images/main_screen_new-124x80.png 124w, /images/main_screen_new-394x253.png 394w, /images/main_screen_new-915x589.png 915w, /images/main_screen_new-1240x798.png 1240w, /images/main_screen_new.png 1278w" sizes="(max-width: 1024px) 100vw, 1024px" /></noscript>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
 </section>    	
)}
}

