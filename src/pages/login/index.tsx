import React from 'react'
import DefaultPageLayout from '../../components/layout/default-page-layout'
import SignInForm from '../../components/sign-in-form'
import SignUpForm from '../../components/sign-up-form';
import Container from 'common/src/components/UI/Container';
import LoginForms from './loginForms.style';

export default class LoginPage extends React.PureComponent {
  render() {
    return (
      <DefaultPageLayout pageTitle="Login">
        <Container>
          <LoginForms>
            <SignInForm {...this.props} />
            <SignUpForm {...this.props} />
          </LoginForms>
        </Container>
      </DefaultPageLayout>
    )
  }
}
