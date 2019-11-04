import React from 'react'
import DefaultPageLayout from '../../components/layout/default-page-layout'
import Page from '../../components/page'
import SignInForm from '../../components/sign-in-form'
import SignUpForm from '../../components/sign-up-form';

export default class LoginPage extends Page {
  render() {
    const { auth } = this.getServices();

    return (
      <DefaultPageLayout pageTitle="Login">
        <div className="row">
          <div className="col-sm-6">
            <SignInForm authService={auth} currentUser={auth.user} />
          </div>
          <div className="col-sm-6">
            <SignUpForm authService={auth} currentUser={auth.user} />
          </div>
        </div>
      </DefaultPageLayout>
    )
  }
}
