import React from 'react'
import DefaultPageLayout from '../../components/layout/default-page-layout'
import Page from '../../components/page'
import SignInForm from '../../components/sign-in-form'
import SignUpForm from '../../components/sign-up-form';
import Container from 'common/src/components/UI/Container';
import LoginForms from './loginForms.style';

export default class LoginPage extends Page {
  constructor(props) {
    super(props);

    const { auth } = this.getServices();
    auth.setOnUpdate(() => {
      this.forceUpdate()
    });
  }

  render() {
    const { auth } = this.getServices();
    window.auth = auth;
    console.log('render login');

    return (
      <DefaultPageLayout pageTitle="Login">
        <Container>
          <LoginForms>
            <SignInForm authService={auth} currentUser={auth && auth.user} />
            <SignUpForm authService={auth} currentUser={auth && auth.user} />
          </LoginForms>
        </Container>
      </DefaultPageLayout>
    )
  }
}
