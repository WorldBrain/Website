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

import BannerObject1 from 'common/src/assets/image/saas/banner/bannerObject1.png';
import BannerObject2 from '../../../img/bannerImg.png';
import ChromeIcon from '../../../img/logos/logo-chrome.svg';
import FirefoxIcon from '../../../img/logos/logo-firefox.svg';
import BraveIcon from '../../../img/logos/logo-brave.svg';
import AppleIcon from '../../../img/logos/logo-apple.svg';
import AndroidIcon from '../../../img/logos/logo-android.svg';

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
      <Button title="Download" onClick={onClickDownload} {...btnStyle} />
      <BrowserIcons>
        <Image {...browserImage} onClick={downloadChrome} src={ChromeIcon} className="browser-icon" alt="Chrome logo" />
        <Image {...browserImage} onClick={downloadFirefox} src={FirefoxIcon} className="browser-icon" alt="Firefox logo" />
        <Image {...browserImage} onClick={downloadChrome} src={BraveIcon} className="browser-icon" alt="Brave logo"/>
        <Image {...browserImage} onClick={downloadIOS} src={AppleIcon} className="browser-icon" alt="Brave logo"/>
        <Image {...browserImage} onClick={downloadAndroid} src={AndroidIcon} className="browser-icon" alt="Brave logo"/>
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
                    content="Battle information overload. Collaboratively."
                    {...title}
                  />
                }
                description={
                  <Text
                    content="Curate, annotate and discuss the web. As individuals, teams and communities."
                    {...description}
                  />
                }
                button={<ButtonGroup />}
              />
        </View>
        <BannerObject>
            <div className="objectWrapper">
                <Image src={BannerObject2} alt="Screenshot of the dashboard page"/>
            </div>
        </BannerObject>
      </View>
    </BannerWrapper>
  );
};

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
    colors: 'primaryWithBg',
  },
};

export default BannerSection;
