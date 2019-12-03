import React from 'react'
import SubscribeFormStyle from './subscribeForm.style';

export default class SubscribeForm extends React.Component {
  handleSubmit = (e) => {
    // TODO: Code me pls
  }

  render() {
    return (
      <div className={SubscribeFormStyle}>

        <form
          onSubmit={this.handleSubmit}
          method="post"
        >
          <div>
            <fieldset>
              <div>
                <div
                >
                  <input
                    id="subscribe-name"
                    type="text"
                    name="name"
                    placeholder="Name"
                  />
                </div>
                <div
                >
                  <input
                    type="text"
                    placeholder="Email"
                    aria-required="true"
                  />
                </div>
                <div>
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

    )
  }
}