import React from 'react'
import Helmet from "react-helmet"
import Layout from "../components/layout"
import { FaAngleRight, FaAngleUp} from 'react-icons/fa';

import jQuery from "jquery";
if (typeof window !== `undefined`) {
  window.$ = window.jQuery = jQuery;
}

import {
  SectionTop, Underline
} from "../components/StyledComponents.jsx";

export default class FAQ extends React.Component {

constructor() {
    super();
    this.state = { activeDiv: '' };
               
    this.handleClick = this.handleClick.bind(this)
    
}

handleClick (e, divName) {
  e.preventDefault();
  this.setState({
      activeDiv: this.state.activeDiv === divName ? '' : divName
  });
}


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
<Helmet>
  <body className="page-template-default page page-id-9415 woocommerce-js yith-ctpw elementor-default elementor-page elementor-page-9415 th-sticky-header loaded headhesive" />
</Helmet>

<div className="wrap" role="document">
  <div className="content">
     <div className="inner-container">
        <section className="content-editor">
           <div data-elementor-type="post" data-elementor-id="9415" className="elementor elementor-9415" data-elementor-settings="[]">
              <div className="elementor-inner">
                 <div className="elementor-section-wrap">
                    <SectionTop className="elementor-element elementor-element-54e88730 elementor-section-stretched elementor-section-full_width elementor-section-content-middle elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section" data-id="54e88730" data-element_type="section" data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;}">
                       <div className="elementor-container elementor-column-gap-no">
                          <div className="elementor-row">
                             <div className="elementor-element elementor-element-7919e4b7 elementor-column elementor-col-100 elementor-top-column" data-id="7919e4b7" data-element_type="column">
                                <div className="elementor-column-wrap  elementor-element-populated">
                                   <div className="elementor-widget-wrap">
                                      <div className="elementor-element elementor-element-c919ea6 elementor-widget elementor-widget-heading" data-id="c919ea6" data-element_type="widget" data-widget_type="heading.default">
                                         <div className="elementor-widget-container">
                                            <h2 className="elementor-heading-title elementor-size-default">Privacy</h2>
                                         </div>
                                      </div>
                                      <div className="elementor-element elementor-element-244047a elementor-widget elementor-widget-toggle" data-id="244047a" data-element_type="widget" data-widget_type="toggle.default">
                                         <div className="elementor-widget-container">
                                            <div className="elementor-toggle" role="tablist">
                                               <div className="elementor-toggle-item">

                                                  <div id="elementor-tab-title-3801" className="elementor-tab-title" data-tab="1" role="tab" aria-controls="elementor-tab-content-3801"> 
                                                    <span className="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="false"> 
                                                    {
                                                      this.state.activeDiv && this.state.activeDiv === '3801' ? <FaAngleUp /> : <FaAngleRight />
                                                    }
                                                    </span> <a href="" onClick={e => this.handleClick(e, '3801')}>Where is my data stored?</a>
                                                  </div>

                                                  <div id="elementor-tab-content-3801" className="elementor-tab-content elementor-clearfix" 
                                                    data-tab="1" role="tabpanel" aria-labelledby="elementor-tab-title-3801"
                                                    style={{display: this.state.activeDiv && this.state.activeDiv === '3801' ? 'block' : 'none'}}
                                                  >
                                                     <p>We highly value your privacy and data ownership. It&#8217;s at the core of what we do. <br />Your personal data is fully stored locally on your device. Noone will ever have access to it unless you share it, or back it up to one of your favorite cloud providers. </p>
                                                     <p>If you use Memex.Link (where you can share links to highlighted text) we only store the the url and the highlighted text on our servers. <br />We do not save any personally identifiable information with it, like IP addresses of you or the people requesting those links. </p>
                                                  </div>
                                               </div>

                                               <div className="elementor-toggle-item">
                                                  <div id="elementor-tab-title-3802" className="elementor-tab-title" data-tab="2" role="tab" aria-controls="elementor-tab-content-3802"> 
                                                    <span className="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true"> 
                                                      {
                                                        this.state.activeDiv && this.state.activeDiv === '3802' ? <FaAngleUp /> : <FaAngleRight />
                                                      } 
                                                    </span> <a href="" onClick={e => this.handleClick(e, '3802')}>How do you make money with a free product?</a>
                                                  </div>
                                                  <div id="elementor-tab-content-3802" className="elementor-tab-content elementor-clearfix" 
                                                    data-tab="2" role="tabpanel" aria-labelledby="elementor-tab-title-3802"
                                                    style={{display: this.state.activeDiv && this.state.activeDiv === '3802' ? 'block' : 'none'}}
                                                  >
                                                     <p>Our business model does not depend on analysing and/or selling your data. <br />We want to be profitable because we deliver real value to you and other users through the premium services we offer now and in the future. </p>
                                                     <p>To protect your privacy and not lock you into our services for the necessity to grow at all costs, <em>worldbrain.io </em>does not take venture capital funding. Instead we finance the company through a model called <Underline><em><a href="https://purpose-economy.org/en/">Steward Ownership</a></em></Underline>. It is a profit sharing model with capped returns for investors and team members. </p>
                                                  </div>
                                               </div>

                                               <div className="elementor-toggle-item">
                                                  <div id="elementor-tab-title-3803" className="elementor-tab-title" data-tab="3" role="tab" aria-controls="elementor-tab-content-3803"> 
                                                    <span className="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true"> 
                                                      {
                                                        this.state.activeDiv && this.state.activeDiv === '3803' ? <FaAngleUp /> : <FaAngleRight />
                                                      }
                                                    </span> <a href="" onClick={e => this.handleClick(e, '3803')}>Anonymous Analytics</a>
                                                  </div>
                                                  <div id="elementor-tab-content-3803" className="elementor-tab-content elementor-clearfix" data-tab="3" 
                                                    role="tabpanel" aria-labelledby="elementor-tab-title-3803"
                                                    style={{display: this.state.activeDiv && this.state.activeDiv === '3803' ? 'block' : 'none'}}
                                                  >
                                                     <p>To improve Memex usability and gain statistical data about its use, we collect <strong>anonymized usage statistics</strong> about how people use the extension and its features. Those will not contain anything personally identifiable like the urls visited, terms searched or annotation content. <br />We only track <b>interactions with the software itself to improve user experience and features</b>. </p>
                                                     <p>You can always <b>opt-out </b>of this analysis and we respect the browser&#8217;s &#8216;do not track&#8217; requests. See a full list of the data collected in our <a href="/privacy">privacy policy</a>. <br /><span style={{fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif'}}>Our software is open-source so you can verify these claims yourself by </span><a style={{backgroundColor: '#fbfcfd'}} href="http://github.com/WorldBrain/Memex">looking at our source code</a><span style={{fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif'}}>.</span></p>
                                                  </div>
                                               </div>

                                               <div className="elementor-toggle-item">
                                                  <div id="elementor-tab-title-3804" className="elementor-tab-title" data-tab="4" role="tab" aria-controls="elementor-tab-content-3804"> 
                                                    <span className="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true"> 
                                                      {
                                                        this.state.activeDiv && this.state.activeDiv === '3804' ? <FaAngleUp /> : <FaAngleRight />
                                                      } 
                                                    </span> <a href="" onClick={e => this.handleClick(e, '3804')}>Why does Memex need so many permissions?</a>
                                                  </div>
                                                  <div id="elementor-tab-content-3804" className="elementor-tab-content elementor-clearfix" 
                                                    data-tab="4" role="tabpanel" aria-labelledby="elementor-tab-title-3804"
                                                    style={{display: this.state.activeDiv && this.state.activeDiv === '3804' ? 'block' : 'none'}}
                                                  >
                                                     <p>Yeah, that can be a bit scary. However, those permissions are necessary for the extension to function properly. Memex does only index text that is visible on first page load. <b>It does not index password and text fields. </b></p>
                                                     <p>As you can see in <a href="http://github.com/worldbrain/Memex">our source code</a> we do not send any of your personal data anywhere. It is all on your computer. </p>
                                                  </div>
                                               </div>
                                            </div>
                                         </div>
                                      </div>
                                      <div className="elementor-element elementor-element-604f993b elementor-widget elementor-widget-text-editor" data-id="604f993b" data-element_type="widget" data-widget_type="text-editor.default">
                                         <div className="elementor-widget-container">
                                            <div className="elementor-text-editor elementor-clearfix"></div>
                                         </div>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </SectionTop>
                    <section className="elementor-element elementor-element-976ce4d elementor-section-stretched elementor-section-full_width elementor-section-content-middle elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section" data-id="976ce4d" data-element_type="section" data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;}">
                       <div className="elementor-container elementor-column-gap-no">
                          <div className="elementor-row">
                             <div className="elementor-element elementor-element-9b8eed2 elementor-column elementor-col-100 elementor-top-column" data-id="9b8eed2" data-element_type="column">
                                <div className="elementor-column-wrap  elementor-element-populated">
                                   <div className="elementor-widget-wrap">
                                      <div className="elementor-element elementor-element-e7e961d elementor-widget elementor-widget-heading" data-id="e7e961d" data-element_type="widget" data-widget_type="heading.default">
                                         <div className="elementor-widget-container">
                                            <h2 className="elementor-heading-title elementor-size-default">Crowdfunding</h2>
                                         </div>
                                      </div>
                                      <div className="elementor-element elementor-element-c0fda77 elementor-widget elementor-widget-toggle" data-id="c0fda77" data-element_type="widget" data-widget_type="toggle.default">
                                         <div className="elementor-widget-container">
                                            <div className="elementor-toggle" role="tablist">

                                               <div className="elementor-toggle-item">
                                                  <div id="elementor-tab-title-2021" className="elementor-tab-title" data-tab="1" role="tab" aria-controls="elementor-tab-content-2021"> 
                                                    <span className="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true"> 
                                                      {
                                                        this.state.activeDiv && this.state.activeDiv === '2021' ? <FaAngleUp /> : <FaAngleRight />
                                                      }
                                                    </span> <a href="" onClick={e => this.handleClick(e, '2021')}>How does it work?</a>
                                                  </div>
                                                  <div id="elementor-tab-content-2021" className="elementor-tab-content elementor-clearfix" 
                                                    data-tab="1" role="tabpanel" aria-labelledby="elementor-tab-title-2021"
                                                    style={{display: this.state.activeDiv && this.state.activeDiv === '2021' ? 'block' : 'none'}}
                                                  >
                                                     <p>For the money you chip into enabling the development of Memex Snycing features you&#8217;ll get back 4x of that money in the form of premium credits you can use for <b>any </b>paid upgrade now and in the future. <br /><br />Those credits cannot be paid out in cash. </p>
                                                  </div>
                                               </div>

                                               <div className="elementor-toggle-item">
                                                  <div id="elementor-tab-title-2022" className="elementor-tab-title" data-tab="2" role="tab" aria-controls="elementor-tab-content-2022"> 
                                                    <span className="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true"> 
                                                      {
                                                        this.state.activeDiv && this.state.activeDiv === '2022' ? <FaAngleUp /> : <FaAngleRight />
                                                      }
                                                    </span> <a href="" onClick={e => this.handleClick(e, '2022')}>When will I get my reward?</a>
                                                  </div>
                                                  <div id="elementor-tab-content-2022" className="elementor-tab-content elementor-clearfix" data-tab="2" 
                                                    role="tabpanel" aria-labelledby="elementor-tab-title-2022"
                                                    style={{display: this.state.activeDiv && this.state.activeDiv === '2022' ? 'block' : 'none'}}
                                                  >
                                                     <p>Your reward is paid out when the first syncing features launch, which is expected to happen in early June.</p>
                                                     <p> </p>
                                                  </div>
                                               </div>

                                               <div className="elementor-toggle-item">
                                                  <div id="elementor-tab-title-2023" className="elementor-tab-title" data-tab="3" role="tab" aria-controls="elementor-tab-content-2023"> 
                                                    <span className="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true"> 
                                                      {
                                                        this.state.activeDiv && this.state.activeDiv === '2023' ? <FaAngleUp /> : <FaAngleRight />
                                                      }
                                                    </span> <a href="" onClick={e => this.handleClick(e, '2023')}>Can I get a refund?</a>
                                                  </div>
                                                  <div id="elementor-tab-content-2023" className="elementor-tab-content elementor-clearfix" data-tab="3" 
                                                    role="tabpanel" aria-labelledby="elementor-tab-title-2023"
                                                    style={{display: this.state.activeDiv && this.state.activeDiv === '2023' ? 'block' : 'none'}}
                                                  >
                                                     <p>Unfortunately not on the crowdfunding. (We offer a 30-day money-back guarantee for premium upgrades) <br />Participating in crowdfunding endeavours is always bound to a risk which we compensate with the 400% reward you&#8217;ll get. The money you spend will almost immediately be used to pay for the development of the syncing features.</p>
                                                  </div>
                                               </div>
                                            </div>
                                         </div>
                                      </div>
                                      <div className="elementor-element elementor-element-8f3a1f5 elementor-widget elementor-widget-text-editor" data-id="8f3a1f5" data-element_type="widget" data-widget_type="text-editor.default">
                                         <div className="elementor-widget-container">
                                            <div className="elementor-text-editor elementor-clearfix"></div>
                                         </div>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </section>
                    <section className="elementor-element elementor-element-e011a56 elementor-section-stretched elementor-section-content-middle elementor-section-full_width elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section" data-id="e011a56" data-element_type="section" data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;}">
                       <div className="elementor-container elementor-column-gap-no">
                          <div className="elementor-row">
                             <div className="elementor-element elementor-element-84850b0 elementor-column elementor-col-100 elementor-top-column" data-id="84850b0" data-element_type="column">
                                <div className="elementor-column-wrap  elementor-element-populated">
                                   <div className="elementor-widget-wrap">
                                      <div className="elementor-element elementor-element-b1cc95a elementor-widget elementor-widget-heading" data-id="b1cc95a" data-element_type="widget" data-widget_type="heading.default">
                                         <div className="elementor-widget-container">
                                            <h2 className="elementor-heading-title elementor-size-default">System Requirements</h2>
                                         </div>
                                      </div>
                                      <div className="elementor-element elementor-element-0f18a64 elementor-widget elementor-widget-toggle" data-id="0f18a64" data-element_type="widget" data-widget_type="toggle.default">
                                         <div className="elementor-widget-container">
                                            <div className="elementor-toggle" role="tablist">

                                               <div className="elementor-toggle-item">
                                                  <div id="elementor-tab-title-1581" className="elementor-tab-title" data-tab="1" role="tab" aria-controls="elementor-tab-content-1581"> 
                                                    <span className="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true"> 
                                                      {
                                                        this.state.activeDiv && this.state.activeDiv === '1581' ? <FaAngleUp /> : <FaAngleRight />
                                                      }
                                                    </span> <a href="" onClick={e => this.handleClick(e, '1581')}>How much data does Memex need on my hard drive?</a>
                                                  </div>
                                                  <div id="elementor-tab-content-1581" className="elementor-tab-content elementor-clearfix" data-tab="1" 
                                                    role="tabpanel" aria-labelledby="elementor-tab-title-1581"
                                                    style={{display: this.state.activeDiv && this.state.activeDiv === '1581' ? 'block' : 'none'}}
                                                  >
                                                     <p>Well, it depends 🙂<br />If you only index website without the screenshot thumbnails that are taken, Memex needs ~500Mb per 25.000 websites. <br /><span style={{fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif'}}>This is roughly 1 year of research for the average person. </span></p>
                                                     <p>If you include the screenshots, Memex takes up up to 2GB for the same 25.000 websites. </p>
                                                     <p>If you backup your Memex data to your local hard drive, the data gets duplicated as of now. </p>
                                                  </div>
                                               </div>

                                               <div className="elementor-toggle-item">
                                                  <div id="elementor-tab-title-1582" className="elementor-tab-title" data-tab="2" role="tab" aria-controls="elementor-tab-content-1582"> 
                                                    <span className="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true"> 
                                                      {
                                                        this.state.activeDiv && this.state.activeDiv === '1582' ? <FaAngleUp /> : <FaAngleRight />
                                                      } 
                                                    </span> <a href="" onClick={e => this.handleClick(e, '1582')}>How much CPU and RAM do I need?</a>
                                                  </div>
                                                  <div id="elementor-tab-content-1582" className="elementor-tab-content elementor-clearfix" data-tab="2" 
                                                    role="tabpanel" aria-labelledby="elementor-tab-title-1582"
                                                    style={{display: this.state.activeDiv && this.state.activeDiv === '1582' ? 'block' : 'none'}}
                                                  >
                                                     <p>Since Memex runs fully locally, the speed of your search queries and load on the system are strongly dependent on the power of your machine. <br />Although Memex runs on 4GB RAM, we recommend having at least 8GB RAM.</p>
                                                     <p>CPU wise there are no minimum requirements. More just means its gonna be faster for you. </p>
                                                  </div>
                                               </div>

                                               <div className="elementor-toggle-item">
                                                  <div id="elementor-tab-title-1583" className="elementor-tab-title" data-tab="3" role="tab" aria-controls="elementor-tab-content-1583"> 
                                                    <span className="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true"> 
                                                      {
                                                        this.state.activeDiv && this.state.activeDiv === '1583' ? <FaAngleUp /> : <FaAngleRight />
                                                      }
                                                    </span> <a href="" onClick={e => this.handleClick(e, '1583')}>Known Issues</a>
                                                  </div>
                                                  <div id="elementor-tab-content-1583" className="elementor-tab-content elementor-clearfix" data-tab="3" 
                                                    role="tabpanel" aria-labelledby="elementor-tab-title-1583"
                                                    style={{display: this.state.activeDiv && this.state.activeDiv === '1583' ? 'block' : 'none'}}
                                                    >
                                                     <p><strong>On Firefox</strong></p>
                                                     <ul>
                                                        <li>You can&#8217;t index visited PDFs because Firefox released an update preventing extensions to extract data from PDFs. Sorry 🙁</li>
                                                     </ul>
                                                     <p><strong>All Browsers</strong></p>
                                                     <ul>
                                                        <li>When you import (and re-download) urls, some of the URLs may be deemed as potentially dangerous by your browser. It stops all processes in the import tab and causes it to freeze. There is <span style={{textDecoration: 'underline'}}><a href="https://worldbrain.helprace.com/i49-prevent-your-imports-from-stopping-midway">a workaround available</a></span>.</li>
                                                     </ul>
                                                  </div>
                                               </div>
                                            </div>
                                         </div>
                                      </div>
                                      <div className="elementor-element elementor-element-f7ccc27 elementor-widget elementor-widget-text-editor" data-id="f7ccc27" data-element_type="widget" data-widget_type="text-editor.default">
                                         <div className="elementor-widget-container">
                                            <div className="elementor-text-editor elementor-clearfix"></div>
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

</Layout>

</>
)}
}