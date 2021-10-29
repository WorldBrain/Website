import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { saasTheme } from 'common/src/theme/saas';
import { ResetCSS } from 'common/src/assets/css/style';
import { GlobalStyle, ContentWrapper } from '../../containers/Saas/saas.style';
import Navbar from '../../containers/Saas/Navbar';
import BannerSection from '../../containers/Saas/BannerSection';
import FeatureSection from '../../containers/Saas/FeatureSection';
import FulltextSearchSection from '../../containers/Saas/FulltextSearchSection';
import Footer from '../../containers/Saas/Footer';
import PricingSection from '../../containers/Saas/PricingSection';
import ImportSection from '../../containers/Saas/ImportSection';
import SponsorsSection from '../../containers/Saas/SponsorsSection';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import FlexiblyOrganiseSection from '../../containers/Saas/FlexiblyOrganiseSection';
import StoreLocalSection from '../../containers/SaaS/StoreLocalSection';
import StewardOwnershipSection from '../../containers/SaaS/StewardOwnershipSection';
import AnnotationsSection from '../../containers/Saas/AnnotationsSection';
import ShareSection from '../../containers/Saas/ShareSection';
import CopyPasterSection from '../../containers/Saas/CopyPasterSection';
import QuoteLinkSection from '../../containers/Saas/QuoteLinkSection';
import MobileSection from '../../containers/Saas/MobileSection';
import CommunitySection from '../../containers/Saas/CommunitySection';
import View from 'reusecore/src/elements/Box';

import Page from '../../components/page'

export default class HomePage extends Page {
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
      <ThemeProvider theme={saasTheme}>
        <Fragment>
          <ResetCSS />
          <GlobalStyle />
          <ContentWrapper>
            <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
              <DrawerProvider>
                <Navbar user={auth.user} authService={auth} />
              </DrawerProvider>
            </Sticky>
            <BannerSection />
            <FlexiblyOrganiseSection />
            <AnnotationsSection />
            <FulltextSearchSection />
            <ShareSection />
            <QuoteLinkSection />
            <StoreLocalSection />
            <StewardOwnershipSection />
            <ImportSection />
            <View id="upgrade"/>
            <PricingSection />
            <SponsorsSection />
            <Footer />
          </ContentWrapper>
        </Fragment>
      </ThemeProvider>
    );
  }
};
