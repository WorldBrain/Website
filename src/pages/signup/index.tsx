import React from 'react'
import DefaultPageLayout from '../../components/layout/default-page-layout'
import Page from '../../components/page'
import SignUpForm from '../../components/sign-up-form';
import Container from 'common/src/components/UI/Container';

export default class SignupPage extends Page {
  constructor(props) {
    super(props);

    const { auth } = this.getServices();
    auth.setOnUpdate(() => {
      this.forceUpdate()
    });
  }

  render() {
    const { auth } = this.getServices();

    return (
      <DefaultPageLayout pageTitle="Login">
        <Container>
          <SignUpForm authService={auth} currentUser={!auth && !auth.user} />
        </Container>
      </DefaultPageLayout>
    )
  }
}
