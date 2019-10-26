import React from 'react'

export default class SubscribeForm extends React.Component {
  render() {
    return (
      <section className="widget frm_show_form-7 widget_frm_show_form">
        <div className="widget-inner">
          <div className="frm_form_widget">
            <h3 className="widget-title">
              Subscribe to our monthly update email
            </h3>
            <div
              className="frm_forms  with_frm_style frm_style_formidable-style"
            >
              <form
                encType="multipart/form-data"
                method="post"
                className="frm-show-form Formidable Style"
              >
                <div className="frm_form_fields ">
                  <fieldset>
                    <div className="frm_fields_container">
                      <div
                        className="form-field"
                      >
                        <input
                          id="subscribe-name"
                          type="text"
                          name="name"
                          placeholder="Name"
                        />
                      </div>
                      <div
                        className="form-field"
                      >
                        <input
                          type="text"
                          placeholder="Email"
                          aria-required="true"
                        />
                      </div>
                      <div className="frm_submit">
                        <input type="submit" className="btn btn-secondary btn-block" defaultValue="Submit" />
                        <img
                          className="frm_ajax_loading"
                          src="https://worldbrain.io/wp-content/plugins/formidable/images/ajax_loader.gif"
                          alt="Sending"
                          style={{ visibility: "hidden" }}
                        />
                      </div>
                    </div>
                  </fieldset>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}