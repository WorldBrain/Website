import React, { Component } from 'react'
import { navigate } from 'gatsby';

import { SignInForm as SignInFormStyle } from './styles.scss';

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
      <div className={SignInFormStyle}>
        <h3 className="center">Sign In</h3>
        <div
          className="form-field"
        >
          <input
            type="text"
            name="email"
            placeholder="Your email"
            value={email}
            onChange={this.handleFieldChange('email')}
          />
        </div>

        <div
          className="form-field"
        >
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={this.handleFieldChange('password')}
          />
        </div>

        <p>
          <a href="#">I forgot my password</a>
        </p>

        {error && <p className="error">
          <i className="fa fa-exclamation-circle" aria-hidden="true"></i> {error}
        </p>}

        <div className="center">
          <input type="submit" onClick={this.handleOnLogin} className="btn btn-primary btn-large" value="Next" />
        </div>
      </div>
    )
  }
}