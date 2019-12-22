import React, { Component, useState } from 'react'
import { navigate, Link } from 'gatsby';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import Input from 'reusecore/src/elements/Input';
import SignInWrapper, { ErrorMessage } from './signin.style';
import { PageHOC } from '../page';

const SignInForm = ({
  auth,
  payment,
  location,
  ...props
}) => {
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
    error: '',
    isLoading: false,
  })

  const handleFieldChange = (field) => (value) => {
    setFormValue({
      ...formValue,
      [field]: value
    });
  }

  const rehydratePayment = (planId) => {
    console.log('Start rehydrate');
    payment.upgrade(planId);
  }

  const handleOnLogin = (e: Event | React.FormEvent) => {
    e.preventDefault();
    const { email, password } = formValue;
    handleFieldChange('isLoading')(true);
    auth.logIn(email, password)
      .then(data => {
        setFormValue({
          ...formValue,
          isLoading: false
        })

        // Navigate back to Homepage
        navigate('/');

        // Rehydrate payment
        if (location.state && location.state.planId) {
          rehydratePayment(location.state.planId);
        }
      })
      .catch(error => {
        let errorMessage = '';
        switch (error.code) {
          case 'auth/user-not-found':
            errorMessage = 'Not found any credential. Did you sign up?';
            break;
          default:
            errorMessage = error.message;
            break;
        }

        setFormValue({
          ...formValue,
          error: errorMessage,
          isLoading: false
        })
      })
  }

  const currentUser = auth.currentUser();
  if (currentUser) {
    return (
      <p>Hello {currentUser.displayName}</p>
    )
  }

  return (
    <SignInWrapper>
      <form onSubmit={handleOnLogin}>
        <Heading as="h3" content="Login" />
        <label htmlFor="email">Email</label>
        <Input
          inputType="email"
          name="email"
          placeholder="Your email"
          value={formValue.email}
          onChange={handleFieldChange('email')}
        />
        <br />
        <label htmlFor="password">Password</label>
        <Input
          inputType="password"
          passwordShowHide
          placeholder="Password"
          value={formValue.email}
          onChange={handleFieldChange('password')}
        />
        <br />

        {formValue.error && <ErrorMessage>
          <i className="fa fa-exclamation-circle" aria-hidden="true"></i> {formValue.error}
        </ErrorMessage>}

        <Button isLoading={formValue.isLoading} type="submit" onClick={handleOnLogin} title="Login" />

        <Link to="/forgot">I forgot my password</Link>
      </form>
    </SignInWrapper>
  )
};

export default PageHOC(({ auth, payment }) => ({ auth, payment }))(SignInForm);