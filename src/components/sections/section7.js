import React from 'react'
import annotateGif from '../../img/annotate_raw1270x760.gif'
//it's recommended to import GIF's directly instead of using Gatsby image: 
//https://www.gatsbyjs.org/docs/working-with-gifs/

export default () =>
(
<section className="elementor-element elementor-element-d013853 elementor-section-full_width elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section" data-id="d013853" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
    <div className="elementor-container elementor-column-gap-default">
       <div className="elementor-row">
          <div className="elementor-element elementor-element-aa452f4 elementor-column elementor-col-50 elementor-top-column" data-id="aa452f4" data-element_type="column">
             <div className="elementor-column-wrap  elementor-element-populated">
                <div className="elementor-widget-wrap">
                   <div className="elementor-element elementor-element-1ca0f1f elementor-widget elementor-widget-image" data-id="1ca0f1f" data-element_type="widget" data-widget_type="image.default">
                      <div className="elementor-widget-container">
                         <div className="elementor-image">
                            <img width="1270" height="760" src={annotateGif} data-lazy-src="/images/annotate_raw1270x760.gif" className="attachment-full size-full" alt="" />
                            <noscript><img width="1270" height="760" src={annotateGif} className="attachment-full size-full" alt="" /></noscript>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
          <div className="elementor-element elementor-element-4a41d34 elementor-hidden-phone elementor-column elementor-col-50 elementor-top-column" data-id="4a41d34" data-element_type="column">
             <div className="elementor-column-wrap  elementor-element-populated">
                <div className="elementor-widget-wrap">
                   <div className="elementor-element elementor-element-5766bb9 elementor-widget elementor-widget-image" data-id="5766bb9" data-element_type="widget" data-widget_type="image.default">
                      <div className="elementor-widget-container">
                         <div className="elementor-image">
                            <img src="/images/notes_person.svg" data-lazy-src="/images/notes_person.svg" className="attachment-full size-full" alt="" />
                            <noscript><img src="/images/notes_person.svg" className="attachment-full size-full" alt="" /></noscript>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
 </section>	
)