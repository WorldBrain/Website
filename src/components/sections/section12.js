import React from 'react'
import { FaTimes} from 'react-icons/fa';

export default class Section12 extends React.Component {

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
<section className="elementor-element elementor-element-5f7a8c8 elementor-section-full_width elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section" data-id="5f7a8c8" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classNameic&quot;}">
    <div className="elementor-container elementor-column-gap-default">
       <div className="elementor-row">
          <div className="elementor-element elementor-element-6dbf41a elementor-column elementor-col-100 elementor-top-column" data-id="6dbf41a" data-element_type="column">
             <div className="elementor-column-wrap  elementor-element-populated">
                <div className="elementor-widget-wrap">
                   <div className="elementor-element elementor-element-4e6990f elementor-widget elementor-widget-heading" data-id="4e6990f" data-element_type="widget" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                         <h2 className="elementor-heading-title elementor-size-default">Get started in less than 30 seconds. No account necessary.</h2>
                      </div>
                   </div>
                   <div className="elementor-element elementor-element-f8a8602 elementor-widget elementor-widget-heading" data-id="f8a8602" data-element_type="widget" data-widget_type="heading.default">
                      <div className="elementor-widget-container">
                         <p className="elementor-heading-title elementor-size-default">Import your existing bookmarks &amp; web history from Pocket, Diigo, Raindrop.io and many more.</p>
                      </div>
                   </div>
                   <div className="elementor-element elementor-element-8ecf127 elementor-mobile-align-center elementor-align-center elementor-widget elementor-widget-popup" data-id="8ecf127" data-element_type="widget" data-widget_type="popup.default">
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
                                                                               <div className="elementor-element elementor-element-5c4af95 elementor-widget elementor-widget-image" data-id="5c4af95" data-element_type="widget" id="chrome" data-widget_type="image.default">
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
                                                                               <div className="elementor-element elementor-element-36b1f984 elementor-widget elementor-widget-image" data-id="36b1f984" data-element_type="widget" id="firefox2" data-widget_type="image.default">
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
                                                                               <div className="elementor-element elementor-element-aeb4cf1 elementor-widget elementor-widget-image" data-id="aeb4cf1" data-element_type="widget" id="vivaldi2" data-widget_type="image.default">
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
 </section>	
)}
}
