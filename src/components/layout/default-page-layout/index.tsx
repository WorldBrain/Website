import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { saasTheme } from 'common/src/theme/saas';
import { ResetCSS } from 'common/src/assets/css/style';
import { GlobalStyle, ContentWrapper } from '../../../containers/Saas/saas.style';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import PageContainer from './defaultLayout.style';
import Navbar from '../../../containers/Saas/Navbar';
import Footer from '../../../containers/Saas/Footer';
import FirebaseProvider from '../../../store';

export interface DefaultPageLayoutProps {
  pageTitle: string
  children: React.ReactNode
}

export default class DefaultPageLayout extends React.Component<
  DefaultPageLayoutProps
  > {
  render() {
    return (
      <ThemeProvider theme={saasTheme}>
        <Fragment>
          <ResetCSS />
          <GlobalStyle />
          <FirebaseProvider>
            <ContentWrapper>
              <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
                <DrawerProvider>
                  <Navbar />
                </DrawerProvider>
              </Sticky>
              <PageContainer>
                {this.props.children}
              </PageContainer>
            </ContentWrapper>
          </FirebaseProvider>
          <Footer />
        </Fragment>
      </ThemeProvider>
    )
  }
}
