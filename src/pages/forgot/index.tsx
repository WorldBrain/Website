import React from 'react'
import DefaultPageLayout from '../../components/layout/default-page-layout'
import Page from '../../components/page'
import ForgotForm from '../../components/forgot-form'
import Container from 'common/src/components/UI/Container';
import ForgotFormContainer from './loginForms.style';

export default class ForgotPage extends Page {
  render() {
    const { auth } = this.getServices();

    return (
      <DefaultPageLayout pageTitle="Login">
        <Container>
          <ForgotFormContainer>
            <ForgotForm authService={auth} currentUser={auth && auth.user} />
          </ForgotFormContainer>
        </Container>
      </DefaultPageLayout>
    )
  }
}
