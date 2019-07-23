import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/header'
import Footer from '../components/footer'
import Section1 from '../components/sections/section1'
import Section2 from '../components/sections/section2'
import Section3 from '../components/sections/section3'
import Section4 from '../components/sections/section4'
import Section5 from '../components/sections/section5'
import Section6 from '../components/sections/section6'
import Section7 from '../components/sections/section7'
import Section8 from '../components/sections/section8'
import Section9 from '../components/sections/section9'
import Section10 from '../components/sections/section10'
import Section11 from '../components/sections/section11'
import Section12 from '../components/sections/section12'
import Section13 from '../components/sections/section13'
import Section14 from '../components/sections/section14'

const Index = () =>
(
<>
<Header />
<div className="wrap" role="document">
   <div className="content">
      <div className="inner-container">
         <section className="content-editor">
            <div data-elementor-type="post" data-elementor-id="8547" className="elementor elementor-8547" data-elementor-settings="[]">
               <div className="elementor-inner">
                  <div className="elementor-section-wrap">
                     <Section1 />
                     <Section2 />
                     <Section3 />
                     <Section4 />
                     <Section5 />
                     <Section6 />
                     <Section7 />
                     <Section8 />
                     <Section9 />
                     <Section10 />
                     <Section11 />
                     <Section12 />
                     <Section13 />
                     <Section14 />
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

export default Index