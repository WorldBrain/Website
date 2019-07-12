import React from 'react'
import Helmet from "react-helmet"
import Header from '../components/header'
import Footer from '../components/footer'


export default () => (
<>

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
      "data-api-key": process.env.SNIPCART_API_KEY,
      src:"https://cdn.snipcart.com/scripts/2.0/snipcart.js" 
    },
    {
      type: 'text/javascript',
      src:"https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"
    }]}
/>

<Helmet>
    <body className="page-template-default page page-id-4322 woocommerce-js yith-ctpw elementor-default elementor-page elementor-page-4322 th-sticky-header loaded headhesive" />
</Helmet>

<Header />

<div className="wrap" role="document">
  <div className="content">
     <div className="inner-container">
        <h1 className="entry-title">
          Customer Dashboard
        </h1>
        <section className="content-editor">
           <div data-elementor-type="post" data-elementor-id="4322" className="elementor elementor-4322" data-elementor-settings="[]">
              <div className="elementor-inner">
                 <div className="elementor-section-wrap">
                    <section className="elementor-element elementor-element-23a8738 elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section" data-id="23a8738" data-element_type="section">
                       <div className="elementor-container elementor-column-gap-default">
                          <div className="elementor-row">
                             <div className="elementor-element elementor-element-e0150c5 elementor-column elementor-col-100 elementor-top-column" data-id="e0150c5" data-element_type="column">
                                <div className="elementor-column-wrap  elementor-element-populated">
                                   <div className="elementor-widget-wrap">
                                      <div className="elementor-element elementor-element-4350d19 elementor-widget elementor-widget-heading" data-id="4350d19" data-element_type="widget" data-widget_type="heading.default">
                                         <div className="elementor-widget-container">
                                            <h5 className="elementor-heading-title elementor-size-default">

                                              <div class="snipcart-summary">
                                                <a href="#" class="snipcart-user-profile" style={{textDecoration: 'underline'}}>
                                                  My Orders
                                                </a> {` | `} 
                                                <a href="#" class="snipcart-edit-profile" style={{textDecoration: 'underline'}}>
                                                  My profile
                                                </a>
                                              </div> 
                                             
                                            </h5>
                                         </div>
                                      </div>
                                      <div className="elementor-element elementor-element-95a15d2 elementor-widget elementor-widget-text-editor" data-id="95a15d2" data-element_type="widget" data-widget_type="text-editor.default">
                                         <div className="elementor-widget-container">
                                            <div className="elementor-text-editor elementor-clearfix">

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
        </section>
        <div className='container'>
           <div className="row">
              <div className="col-md-12"></div>
           </div>
        </div>
     </div>
  </div>
</div>

<Footer />

</>
)