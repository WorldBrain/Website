import React from 'react'
import DefaultPageLayout from '../../components/layout/default-page-layout'
import Page from '../../components/page'
import LoginForm from '../../components/login-form'

export default class LoginPage extends Page {
  render() {
    const { auth } = this.getServices();

    return (
      <DefaultPageLayout pageTitle="Login">
        <LoginForm authService={auth} currentUser={auth.user} />
      </DefaultPageLayout>
    )
  }
}
