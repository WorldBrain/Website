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
import ServiceSection from '../../containers/Saas/ServiceSection';
import FaqSection from '../../containers/Saas/FaqSection';
import Footer from '../../containers/Saas/Footer';
import PricingSection from '../../containers/Saas/PricingSection';
import TrialSection from '../../containers/Saas/TrialSection';
import TimelineSection from '../../containers/Saas/TimelineSection';
import TestimonialSection from '../../containers/Saas/TestimonialSection';
import PartnerSection from '../../containers/Saas/PartnerSection';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import FlexiblyOrganise from '../../containers/Saas/FlexiblyOrganise';
import StoreLocal from '../../containers/StoreLocal';
import AnnotationsSection from '../../containers/Saas/AnnotationsSection';
import MobileSection from '../../containers/Saas/MobileSection';

export default () => {
  return (
    <ThemeProvider theme={saasTheme}>
      <Fragment>
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection />
          <FeatureSection />
          <FulltextSearchSection />
          <AnnotationsSection />
          <FlexiblyOrganise />
          <MobileSection />
          <StoreLocal />
          <PartnerSection />
          <PricingSection />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
