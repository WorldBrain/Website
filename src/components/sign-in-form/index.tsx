import React, { Component } from 'react'
import { navigate } from 'gatsby';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import SignInWrapper, { ErrorMessage } from './signin.style';

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

  handleFieldChange = (field) => (e: Event) => {
    this.setState({
      [field]: e.target.value,
    });
  }

  handleOnLogin = (e) => {
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
  }

  render() {
    const { authService, currentUser } = this.props;
    const { firebase, error, email, password } = this.state;

    if (currentUser) {
      return (
        <p>Hello {currentUser.displayName}</p>
      )
    }

    if (!firebase) {
      return null;
    }

    return (
      <SignInWrapper>
        <Heading as="h3" content="Login"/>
        <label for="email">Email</label>
        <input
          type="text"
          name="email"
          placeholder="Your email"
          value={email}
          onChange={this.handleFieldChange('email')}
        />
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={this.handleFieldChange('password')}
        />

        {error && <p className="error">
          <i className="fa fa-exclamation-circle" aria-hidden="true"></i> {error}
        </p>}

        <Button type="submit" onClick={this.handleOnLogin} title="Login" />
        
        <a href="#">I forgot my password</a>

      </SignInWrapper>
    )
  }
}