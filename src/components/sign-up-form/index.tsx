import React, { Component, useState } from 'react'
import { navigate, Link } from 'gatsby';
import Heading from 'reusecore/src/elements/Heading';
import Input from 'reusecore/src/elements/Input';
import Button from 'reusecore/src/elements/Button';
import SignUpWrapper, { ErrorMessage } from './signup.style';
import { PageHOC } from '../page';

const SignUpForm = ({
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

  const rehydratePayment = (plan) => {
    console.log('Start rehydrate');
    payment.upgrade(plan);
  }

  const handleSignUp = (e: Event | React.FormEvent) => {
    e.preventDefault();
    const { email, password } = formValue;
    handleFieldChange('isLoading')(true);
    auth.register(email, password)
      .then(data => {
        navigate('/');
        setFormValue({
          ...formValue,
          isLoading: false
        })

        // Navigate back to Homepage
        navigate('/');

        // Rehydrate payment
        if (location.state && location.state.planId) {
          rehydratePayment(location.state);
        }
      })
      .catch((error: Error) => {
        setFormValue({
          ...formValue,
          error: error.message,
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
    <SignUpWrapper>
      <form onSubmit={handleSignUp}>
        <Heading as="h3" content="Sign Up" />
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

        <Button isLoading={formValue.isLoading} type="submit" onClick={handleSignUp} title="Register" />
      </form>
    </SignUpWrapper>
  )
};

export default PageHOC(({ auth, payment }) => ({ auth, payment }))(SignUpForm);
