import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa'

import {
  UnderlineNone, FooterSocialLink
} from "./StyledComponents.jsx";

export default class Footer extends React.Component {

constructor() {
    super();
    this.state = { email: '', name: '', emailRequired: false, nameRequired: false };
               
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
}

handleChange = e => this.setState({ [e.target.name]: e.target.value })


handleSubmit = (e) => {
        e.preventDefault();

        //console.log('submit', this.state);

        if(this.state.email && this.state.name){
          addToMailchimp(this.state.email, this.state)
              .then(({ msg, result }) => {
                  console.log('msg', `${result}: ${msg}`);

                  if (result !== 'success') {
                      throw msg;
                  }
                  alert(msg);
              })
              .catch((err) => {
                  console.log('err', err);
                  alert(err);
              });

          this.setState(prevState => ({
            emailRequired: !prevState.emailRequired,
            nameRequired: !prevState.nameRequired,
            email: '',
            name: ''
          }));
        
        }
        else if(!this.state.name)
        {
          this.setState(prevState => ({
            nameRequired: !prevState.nameRequired
          }));
        }
        else if(!this.state.email)
        {
          this.setState(prevState => ({
            emailRequired: !prevState.emailRequired
          }));
        }
         
    }


render(){
return(
<>	
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
                     <form className="frm-show-form Formidable Style" id="form_contact2"
                        onSubmit={this.handleSubmit}>
                        {/*<div className="frm_form_fields">
                           <fieldset>*/}
                              {/*<div className="frm_fields_container">
                                 <div id="frm_field_27_container" className="frm_form_field form-field frm_required_field frm_full">*/}
                                    <label id="name_label" htmlFor="field_r3pr0d" className="frm_primary_label">
                                      <div style={{display: this.state.nameRequired ? 'block' : 'none'}}>
                                        Name Required<span className="frm_required">*</span>
                                      </div>
                                      <input type="text" id="field_r3pr0d" name="name" placeholder="Name" 
                                         onChange={ this.handleChange } value={this.state.name}
                                         data-reqmsg="This field cannot be blank." aria-required="true" aria-label="name input" aria-labelledby="name_label" data-invmsg="Name is invalid" 
                                      />
                                    </label>
                                 {/*</div>*/}
                                 {/*<div id="frm_field_28_container" className="frm_form_field form-field frm_required_field frm_full">*/}
                                    <label id="email_label" htmlFor="field_29yf4d2" className="frm_primary_label">
                                      <div style={{display: this.state.emailRequired ? 'block' : 'none'}}>
                                        Email Required<span className="frm_required">*</span>
                                      </div>
                                      <input type="text" id="field_29yf4d2" name="email" placeholder="Email" 
                                         onChange={ this.handleChange } value={this.state.email}
                                         data-reqmsg="This field cannot be blank." aria-required="true" aria-label="email input" aria-labelledby="email_label" data-invmsg="Email is invalid" 
                                      />
                                    </label>
                                 {/*</div>*/}
                                 <div className="frm_submit">
                                    <input type="submit" value="Submit" />
                                 </div>
                              {/*</div>*/}
                           {/*</fieldset>
                        </div>*/}
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
                  <p><UnderlineNone href="https://www.notion.so/Privacy-Policy-061ac77759f8445282c36fcf6702a81c" target="_blank" rel="noopener noreferrer" aria-label="Privacy Policy">Privacy Policy</UnderlineNone></p>
                  <p><UnderlineNone href="/tos" target="_blank" rel="noopener noreferrer" aria-label="Terms of Service">Terms of Service</UnderlineNone></p>
                  <p><UnderlineNone href="/imprint" target="_blank" rel="noopener noreferrer" aria-label="Imprint">Imprint</UnderlineNone></p>
               </div>
            </div>
         </section>
      </div>
      <div className="footer-area-3 col-md-4 col-sm-6">
         <section className="widget text-4 widget_text">
            <div className="widget-inner">
               <div className="textwidget">
                  <p><strong>PRODUCT</strong></p>
                  <p><UnderlineNone href="https://worldbrain.helprace.com/" target="_blank" rel="noopener noreferrer" aria-label="Support">Support</UnderlineNone></p>
                  <p><UnderlineNone href="https://www.notion.so/Release-Notes-Roadmap-262a367f7a2a48ff8115d2c71f700c14" target="_blank" rel="noopener noreferrer" aria-label="Roadmap">Roadmap</UnderlineNone></p>
                  <p><UnderlineNone href="https://github.com/worldbrain" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</UnderlineNone></p>
               </div>
            </div>
         </section>
         <section className="widget widget-social">
            <div className="widget-inner">
               <div className="soc-widget"> 
                  <FooterSocialLink target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/realworldbrain" aria-label="facebook">
                     <FaFacebook size={35} />
                  </FooterSocialLink>
                  <FooterSocialLink target="_blank" rel="noopener noreferrer" href="https://twitter.com/worldbrain" aria-label="twitter">
                     <FaTwitter size={35}/>
                  </FooterSocialLink>
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/worldbrain" style={{boxShadow: 'none'}} aria-label="github">
                     <FaGithub size={35} />
                  </a>
               </div>
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
)}
}
