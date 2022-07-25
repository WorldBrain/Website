import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { saasTheme } from 'common/src/theme/saas';
import { ResetCSS } from 'common/src/assets/css/style';
import { GlobalStyle, ContentWrapper } from '../../containers/Saas/saas.style';
import Navbar from '../../containers/Saas/Navbar';
import BannerSection from '../../containers/Saas/BannerSection';;
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import FeatureSectionContainer from '../../containers/Saas/FeatureSectionContainer'
import FeatureSectionSeparator from '../../containers/Saas/FeatureSectionSeparator'
import PricingSectionContainer from '../../containers/Saas/PricingSectionContainer'
import View from 'reusecore/src/elements/Box';
import Page from '../../components/page'
import styled from 'styled-components'


// Images
import ImageOne from '../../img/search.png';
import ContentTypeImage from '../../img/contentTypes.svg';
import AnnotateAcrossDevices from '../../img/AnnotateAcrossDevices.svg';
import OrganiseSpaces from '../../img/OrganiseSpaces.gif';
import keyboardShortcuts from '../../img/keyboardShortcuts.svg';

// Styles

const FeatureSection = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  grid-gap: 200px;
  flex-direction: column;
  align-items: center;
  margin: 100px 0px;
`

// end Styles
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
            <FeatureSectionSeparator
              heading={'Stay in the Flow of your research'}
              description={'Designed to end context-switches.'}
            />
            <FeatureSection>
              <FeatureSectionContainer
                featureHeading={<span>Save anything with 1 click. <br /> Find it again in miliseconds.</span>}
                featureDescription={<span>No need to organise things anymore in order to find them again.<br /> Search for any word you remember with our blazing fast full-text search.</span>}
                featureImage={ContentTypeImage}
              />
              <FeatureSectionContainer
                featureHeading={<span>Retain more without tedious copy-paste work.</span>}
                featureDescription={<span>Highlight and annotate what you read, across all your devices</span>}
                featureImage={AnnotateAcrossDevices}
                flexDirection={'row-reverse'}
              />
              <FeatureSectionContainer
                featureHeading={<span>Organise Content the way you need it.</span>}
                featureDescription={<span>Add articles and annotations one or many Spaces. <br />They’re much like tags you can also share and co-curate.</span>}
                featureImage={OrganiseSpaces}
              />
              <FeatureSectionContainer
                featureHeading={<span>Keyboard Shortcuts <br /> for everything.</span>}
                featureDescription={<span>Enjoy swift saving, annotating, organising & searching  with customisable keyboard shortcuts.</span>}
                featureImage={keyboardShortcuts}
                flexDirection={'row-reverse'}
              />
            </FeatureSection>

            <View id="upgrade" />
            <PricingSectionContainer />
          </ContentWrapper>
        </Fragment>
      </ThemeProvider>
    );
  }
};
