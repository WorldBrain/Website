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
<div class="wrap" role="document">
   <div class="content">
      <div class="inner-container">
         <section class="content-editor">
            <div data-elementor-type="post" data-elementor-id="8547" class="elementor elementor-8547" data-elementor-settings="[]">
               <div class="elementor-inner">
                  <div class="elementor-section-wrap">
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
         <div class='container'>
            <div class="row">
               <div class="col-md-12"></div>
            </div>
         </div>
      </div>
   </div>
</div>

<Footer />
</>
)

export default Index