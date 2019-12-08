import React, { Component } from 'react'
import { navigate } from 'gatsby';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import SignUpWrapper, { ErrorMessage } from './signup.style';

export default class SignUpForm extends Component {
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

  handleSignUp = (e) => {
    const { firebase, email, password } = this.state;
    if (firebase) {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(data => {
          // TODO: Shoud navigate back to last state
          // Eg: Shoping cart
          navigate('/');

        })
        .catch(error => {
          this.setState({
            error: error.message
          });
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
      <SignUpWrapper>
        <Heading as="h3" content="Sign Up"/>
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

        {error && <ErrorMessage>
          {error}
        </ErrorMessage>}

        <Button type="submit" onClick={this.handleSignUp} title="Sign up" />

      </SignUpWrapper>
    )
  }
}