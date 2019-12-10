import React from 'react'
import DefaultPageLayout from '../../components/layout/default-page-layout'
import Page from '../../components/page'
import LoginForm from '../../components/login-form'
import SignUpForm from '../../components/sign-up-form';
import Container from 'common/src/components/UI/Container';
import Text from 'reusecore/src/elements/Text';
import Link from 'reusecore/src/elements/Link';
import Heading from 'reusecore/src/elements/Heading';
import SignupMessage from './loginPage.style';

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

    return (
      <DefaultPageLayout pageTitle="Login">
        <LoginForm authService={auth} currentUser={!auth && !auth.user} />
        <SignupMessage>
          <div class="heading-wrapper">
            <div className="line"/>
            <Heading as="h4" content="Don't have an account?" />
            <div className="line"/>
          </div>
          <p>You don’t need an account to use Memex. Simply <Link href="#">download</Link> the extension and get started. If you wish to use a paid feature you will need to <Link href="#">create an account</Link> so we can magane your payments. Easy!</p>
        </SignupMessage>
      </DefaultPageLayout>
    )
  }
}