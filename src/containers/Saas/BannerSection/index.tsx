import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Image from 'reusecore/src/elements/Image';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import FeatureBlock from 'common/src/components/FeatureBlock';
import Container from 'common/src/components/UI/Container';
import { detect } from 'detect-browser';
import BannerWrapper, {
  BannerObject,
  BrowserIcons,
  View,
} from './bannerSection.style';
import styled from 'styled-components';

import BannerObject1 from 'common/src/assets/image/saas/banner/bannerObject1.png';
import BannerObject2 from '../../../img/bannerImg.png';
import ChromeIcon from '../../../img/logos/logo-chrome.svg';
import FirefoxIcon from '../../../img/logos/logo-firefox.svg';
import BraveIcon from '../../../img/logos/logo-brave.svg';
import AppleIcon from '../../../img/logos/logo-apple.svg';
import AndroidIcon from '../../../img/logos/logo-android.svg';
import styledComponents from 'styled-components';
import ReactPlayer from 'react-player'

const DownloadButton = styled.div`
  background-color: #347AE2;
  color: #F7F9F9;
  width: 150px;
  height: 40px;
  font-weight: bold;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  cursor: pointer;
`

const Spacer = styled.div<{ space: string }>`
  height: ${props => props.space};
`

const BannerContainer = styled.div`
border-radius: 30px;
overflow: hidden;
  max-width: 1000px;
  height: auto;
  min-height: 600px;
  min-width: 800px;
  display: flex;
  justify-content: center;
  position: relative;
      max-width: 100%;
      height: auto;

      & img {
        max-width: 100%;
        margin-top: 0px;
      }
`

const onClickDownload = (e: Event) => {
  e.preventDefault();
  const browser = detect();
  let downloadLink = '';
  switch (browser && browser.name) {
    case 'chrome':
      downloadLink = 'https://chrome.google.com/webstore/detail/abkfbakhjpmblaafnpgjppbmioombali';
      break;
    case 'firefox':
      downloadLink = 'https://addons.mozilla.org/en-US/firefox/addon/worldbrain/';
      break;
    case 'brave':
      downloadLink = 'https://chrome.google.com/webstore/detail/abkfbakhjpmblaafnpgjppbmioombali';
      break;
    default:
      // TODO: Fallback case? Default is Chrome link
      downloadLink = 'https://chrome.google.com/webstore/detail/abkfbakhjpmblaafnpgjppbmioombali';
      break;
  }

  if (window) {
    window.open(downloadLink, '_blank');
  }
}

const downloadChrome = () => {
  window.open('https://chrome.google.com/webstore/detail/abkfbakhjpmblaafnpgjppbmioombali', '_blank');
}

const downloadFirefox = () => {
  window.open('https://addons.mozilla.org/en-US/firefox/addon/worldbrain/', '_blank');
}

const downloadIOS = () => {
  window.open('https://apps.apple.com/us/app/memex-go/id1471860331', '_blank');
}

const downloadAndroid = () => {
  window.open('https://play.google.com/store/apps/details?id=io.worldbrain&hl=en&gl=US', '_blank');
}

const BannerSection = ({
  row,
  col,
  title,
  btnStyle,
  description,
  downloadDescription,
  SectionWrapper,
  browserImage,
}) => {
  const ButtonGroup = () => (
    <Fragment>
      <Spacer space={"20px"} />
      <DownloadButton onClick={onClickDownload}>Download</DownloadButton>
      <Spacer space={"30px"} />
      <BrowserIcons>
        <Image {...browserImage} onClick={downloadChrome} src={ChromeIcon} className="browser-icon" alt="Chrome logo" />
        <Image {...browserImage} onClick={downloadFirefox} src={FirefoxIcon} className="browser-icon" alt="Firefox logo" />
        <Image {...browserImage} onClick={downloadChrome} src={BraveIcon} className="browser-icon" alt="Brave logo" />
        <Image {...browserImage} onClick={downloadIOS} src={AppleIcon} className="browser-icon" alt="Brave logo" />
        <Image {...browserImage} onClick={downloadAndroid} src={AndroidIcon} className="browser-icon" alt="Brave logo" />
      </BrowserIcons>
    </Fragment>
  );

  return (
    <BannerWrapper id="banner_section">
      <View className="sectionBox">
        <View className="textBox">
          <FeatureBlock
            title={
              <Heading
                as="h1"
                content="A reader made for collaboration."
                {...title}
              />
            }
            description={
              <Text
                content=<h2>Organise, annotate and discuss the most valuable content and ideas on the web. <br/>By yourself, or with your team and community.</h2>
                {...description}
          />
            }
          button={<ButtonGroup />}
          />
        </View>
        <BannerObject>
          <BannerContainer>
            <ReactPlayer url='https://youtu.be/MPgeMpGbma0'
              light={BannerObject2}
              autoplay
              controls={true}
              preload={false}
              style={ReactPlayerStyles}
              width="1280px"
              height="640px"
            />
          </BannerContainer>
        </BannerObject>
      </View>
    </BannerWrapper>
  );
};

const ReactPlayerStyles = {
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  width: "1280px",
  height: "640px",
  maxWidth: "90%",
  maxWidth: "90%",
  borderRadius: "15px",
  overflow: "hidden",
}

BannerSection.propTypes = {
  title: PropTypes.object,
  btnStyle: PropTypes.object,
  description: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    justifyContent: 'center',
    textAlign: 'middle',
    alignItems: 'center',
    fontSize: 40,
  },
  col: {
    flexBox: true,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'middle',
    alignItems: 'center',
  },
  browserImage: {
    margin: '0 10px',
  },
  title: {
    fontSize: ['1.5625rem', '2.125rem', '1.875rem', '2.2rem'],
    fontWeight: '700',
    letterSpacing: '1px',
    color: 'headingColor',
    mb: ['20px', '25px'],
    lineHeight: '1.3',
    width: ['100%', '100%', '100%', '100%', '100%'],
  },
  description: {
    fontSize: '1.125rem',
    color: 'textColor',
    lineHeight: '1.5',
    mb: '0',
    mt: '-10px',
    width: ['100%', '100%', '100%', '100%'],
  },
  downloadDescription: {
    fontSize: '0.8125rem',
    color: 'lightestText',
    lineHeight: '1.5',
    width: '100%',
    mb: '5px',
  },
  btnStyle: {
    minWidth: ['100%', '100%', '120px', '265px'],
    fontSize: ['1.125rem', '1.125rem', '1rem', '1.125rem'],
    colors: '#F7F9F9',
    backgroundColor: '#347AE2',
  },
};

export default BannerSection;
