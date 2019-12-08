import React, { Component } from 'react'
import { navigate } from 'gatsby';
import Heading from 'reusecore/src/elements/Heading';
import Input from 'reusecore/src/elements/Input';
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

  handleFieldChange = (field) => (value) => {
    this.setState({
      [field]: value,
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
        <Heading as="h3" content="Sign Up" />
        <label for="email">Email</label>
        <Input
          type="text"
          name="email"
          placeholder="Your email"
          value={email}
          onChange={this.handleFieldChange('email')}
        />
        <br />
        <label for="password">Password</label>
        <Input
          inputType="password"
          passwordShowHide
          placeholder="Password"
          value={password}
          onChange={this.handleFieldChange('password')}
        />
        <br />

        {error && <ErrorMessage>
          {error}
        </ErrorMessage>}

        <Button type="submit" onClick={this.handleSignUp} title="Sign up" />

      </SignUpWrapper>
    )
  }
}