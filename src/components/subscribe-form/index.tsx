import React from 'react'
import Input from 'reusecore/src/elements/Input';
import Button from 'reusecore/src/elements/Button';
import SubscribeFormStyle from './subscribeForm.style';

export default class SubscribeForm extends React.Component {
  handleSubmit = (e) => {
    // TODO: Code me pls
  }

  render() {
    return (
      <SubscribeFormStyle>
        <form
          onSubmit={this.handleSubmit}
          method="post"
        >
          <fieldset>
            <Input
              id="subscribe-name"
              inputType="text"
              name="name"
              placeholder="Name"
            />
            <Input
              type="email"
              placeholder="Email"
              aria-required="true"
            />
            <Button type="submit" title="Submit" colors="secondaryWithBg"/>
            <img
              className="frm_ajax_loading"
              src="https://worldbrain.io/wp-content/plugins/formidable/images/ajax_loader.gif"
              alt="Sending"
              style={{ visibility: "hidden" }}
            />
          </fieldset>
        </form>
      </SubscribeFormStyle>
    )
  }
}