import React, { Component } from 'react'
import { navigate, Link } from 'gatsby';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import Input from 'reusecore/src/elements/Input';
import SignInWrapper, { ErrorMessage } from './signin.style';

export default class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: ''
    };
  }

  handleFieldChange = (field) => (value) => {
    this.setState({
      [field]: value,
    });
  }

  handleOnLogin = (e: Event) => {
    e.preventDefault();
    const { authService } = this.props;
    const { email, password } = this.state;
    authService.logIn(email, password)
      .then(data => {
        // TODO: Shoud navigate back to last state
        // Eg: Shoping cart
        navigate('/');

      })
      .catch(error => {
        console.log(error);
        switch (error.code) {
          case 'auth/user-not-found':
            this.setState({
              error: 'Not found any credential. Did you sign up?'
            });
            break;
          default:
            this.setState({
              error: error.message
            });
        }
      })
  }

  render() {
    const { authService } = this.props;
    const { error, email, password } = this.state;

    const currentUser = authService.currentUser();
    if (currentUser) {
      return (
        <p>Hello {currentUser.displayName}</p>
      )
    }

    return (
      <SignInWrapper>
        <form onSubmit={this.handleOnLogin}>
          <Heading as="h3" content="Login" />
          <label forhtml="email">Email</label>
          <Input
            inputType="email"
            name="email"
            placeholder="Your email"
            value={email}
            onChange={this.handleFieldChange('email')}
          />
          <br />
          <label forhtml="password">Password</label>
          <Input
            inputType="password"
            passwordShowHide
            placeholder="Password"
            value={password}
            onChange={this.handleFieldChange('password')}
          />
          <br />

          {error && <ErrorMessage>
            <i className="fa fa-exclamation-circle" aria-hidden="true"></i> {error}
          </ErrorMessage>}

          <Button type="submit" onClick={this.handleOnLogin} title="Login" />

          <Link to="/forgot">I forgot my password</Link>
        </form>
      </SignInWrapper>
    )
  }
}