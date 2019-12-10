import React, { Component } from 'react'
import { navigate } from 'gatsby';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import Link from 'reusecore/src/elements/Link';
import Input from 'reusecore/src/elements/Input';
import LoginForm, { ErrorMessage, FormActions, LoginHeading } from './login.style';

export default class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firebase: null,
      email: '',
      password: '',
      error: ''
    };
  }

  componentDidMount() {
    const { authService } = this.props;
    this.setState({
      firebase: authService.firebase
    });

  }

  handleFieldChange = (field) => (value) => {
    this.setState({
      [field]: value,
    });
  }

  handleOnLogin = (e: Event) => {
    e.preventDefault();

    const { firebase, email, password } = this.state;
    if (firebase) {
      firebase.auth().signInWithEmailAndPassword(email, password)
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
                error: 'That email and password combination is incorrect.'
              });
              break;
            default:
              this.setState({
                error: error.message
              });
          }
        })
    }
  }

  render() {
    const { authService, currentUser } = this.props;
    const { firebase, error, email, password } = this.state;
    console.log({ currentUser })

    if (currentUser) {
      return (
        <p>Hello {currentUser.displayName}</p>
      )
    }

    if (!firebase) {
      return null;
    }

    return (
      <LoginForm>
        <Heading as="h3" content="Welcome Back" />
        <form onSubmit={this.handleOnLogin}>
          <Input
            inputType="email"
            name="email"
            label="Email"
            placeholder="Your email"
            value={email}
            onChange={this.handleFieldChange('email')}
          />
          <br />
          <Input
            inputType="password"
            passwordShowHide
            label="Password"
            placeholder="Password"
            value={password}
            onChange={this.handleFieldChange('password')}
          />
          <br />

          {error && <ErrorMessage>
            <i className="fa fa-exclamation-circle" aria-hidden="true"></i> {error}
          </ErrorMessage>}

          <FormActions>
            <Button type="submit" onClick={this.handleOnLogin} title="Login" />
            <Link href="#">I forgot my password</Link>
          </FormActions>
        </form>

      </LoginForm>
    )
  }
}