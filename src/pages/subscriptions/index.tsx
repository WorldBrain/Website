import React, { Fragment } from 'react'
import Page from '../../components/page'
import { saasTheme } from 'common/src/theme/saas';
import { ThemeProvider } from 'styled-components';
import { ResetCSS } from 'common/src/assets/css/style';
import { GlobalStyle, ContentWrapper } from '../../containers/Saas/saas.style';
import Navbar from '../../containers/Saas/Navbar';
import Footer from '../../containers/Saas/Footer';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import Sticky from 'react-stickynode';
import styled from 'styled-components';
import Container from 'common/src/components/UI/Container';
import Box from 'reusecore/src/elements/Box';

export default class Subscriptions extends Page {

  open = async () => {
    await this.getServices().payment.manage()
  }

  constructor(props) {
    super(props);

    const { auth } = this.getServices();
    auth.setOnUpdate(() => {
      this.forceUpdate()
    });
  }

  render() {
    const { auth } = this.getServices();

      return (<ThemeProvider theme={saasTheme}>
        <Fragment>
          <ResetCSS />
          <GlobalStyle />
          <ContentWrapper>
            <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
              <DrawerProvider>
                <Navbar user={auth.user} authService={auth} />
              </DrawerProvider>
            </Sticky>

            <Container>
              <Box className="row">
                <Box className="col" >
                  <Center>
                    <ManageSubscriptionsButton onClick={this.open}>
                      Manage Existing Subscriptions
                    </ManageSubscriptionsButton>
                  </Center>

                </Box>
              </Box>
            </Container>

            <Footer />
          </ContentWrapper>
        </Fragment>
      </ThemeProvider>
    )
  }
}

const Center = styled.div`
  margin-top: 100px
  margin-bottom:50px;
  display:flex;
 `


const ManageSubscriptionsButton = styled.div`
    color: #ffffff;
    background-color: #5671CF;
    border-color: #5671CF;
    box-sizing: border-box;
    margin-top: 20px;
    padding-left: 10px;
    padding-right: 10px;
    height: 40px;
    min-width: 48px;
    border-radius: 3px;
    font-family: inherit;
    font-size: 16px;
    font-weight: 500;
    display:flex
    justify-content:center;
    padding:10px;
    cursor:pointer;
 `