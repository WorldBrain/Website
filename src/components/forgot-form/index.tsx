import React, { Component } from 'react'
import { navigate } from 'gatsby';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import Input from 'reusecore/src/elements/Input';
import SignInWrapper, { SuccessMessage, ErrorMessage } from './forgotForm.style';

export default class ForgotForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      error: '',
      success: ''
    };
  }

  handleFieldChange = (field) => (value) => {
    this.setState({
      [field]: value,
    });
  }

  handleForgot = (e: Event) => {
    e.preventDefault();

    const { authService } = this.props;
    const { email } = this.state;

    authService.forgotPassword(email)
      .then(res => {
        this.setState({
          success: "Reset link has been sent. Check your email for instruction"
        })
      })
      .catch(error => this.setState({ error, success: '' }));
  }

  render() {
    const { authService } = this.props;
    const { success, error, email } = this.state;

    const currentUser = authService.currentUser();
    if (currentUser) {
      return (
        <p>Hello {currentUser.displayName}</p>
      )
    }

    return (
      <SignInWrapper>
        <form onSubmit={this.handleForgot}>
          <Heading as="h3" content="Forgot password?" />
          <label forhtml="email">Email</label>
          <Input
            inputType="email"
            name="email"
            placeholder="Your email"
            value={email}
            onChange={this.handleFieldChange('email')}
          />

          {error && <ErrorMessage>
            <i className="fa fa-exclamation-circle" aria-hidden="true"></i> {error}
          </ErrorMessage>}

          {success && <SuccessMessage>
            {success}
          </SuccessMessage>}
          <br />
          <Button type="submit" onClick={this.handleForgot} title="Get my password" />
        </form>
      </SignInWrapper>
    )
  }
}