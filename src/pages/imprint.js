import React from 'react'
import Helmet from "react-helmet"
import Layout from "../components/layout"

export default () => (
<>	
<Layout>
<Helmet>
    <body className="page-template-default page page-id-3022 woocommerce-no-js yith-ctpw elementor-default th-sticky-header" />
</Helmet>

<div className="wrap" role="document">
  <div className="content">
     <div className="inner-container">
        <h1 className="entry-title">Imprint</h1>
        <section className="content-editor">
           <h3>Address:</h3>
           <p>WorldBrain UG<br /> Thaerstrasse 45<br /> D-10249 Berlin</p>
           <h3>Contacts:</h3>
           <p><strong>Fon:</strong> +49 (0)171 5323694<br /> <strong>Mail:</strong> info@worldbrain.io
           		<br /> <strong>Web:</strong> http://www.worldbrain.io<br /> <strong>Skype: </strong>realworldbrain<br /> <strong>Facebook: </strong>/realworldbrain<br /> <strong>Twitter: </strong>@realworldbrain</p>
           <h3>Registered:</h3>
           <p>Amtsgericht Berlin</p>
           <h3>Registration Number:</h3>
           <p><span style={{fontWeight: '400'}}>HRB 182851 B</span></p>
           <h3>Management &amp; Responsibility:</h3>
           <p>Oliver Sauter</p>
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
)