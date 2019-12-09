import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Image from 'reusecore/src/elements/Image';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import FeatureBlock from 'common/src/components/FeatureBlock';
import Container from 'common/src/components/UI/Container';
import BannerWrapper, {
  BannerObject,
  BrowserIcons,
} from './bannerSection.style';

import BannerObject1 from 'common/src/assets/image/saas/banner/bannerObject1.png';
import BannerObject2 from '../../../img/main_screen_new.png';
import ChromeIcon from '../../../img/logos/logo-chrome.svg';
import FirefoxIcon from '../../../img/logos/logo-firefox.svg';
import BraveIcon from '../../../img/logos/logo-brave.svg';
import Fade from 'react-reveal/Fade';
const BannerSection = ({
  row,
  col,
  title,
  btnStyle,
  description,
  downloadDescription,
}) => {
  const ButtonGroup = () => (
    <Fragment>
      <Button title="Download for free" {...btnStyle} />
      <BrowserIcons>
        <Image src={ChromeIcon} className="browser-icon" alt="Chrome logo" />
        <Image src={FirefoxIcon} className="browser-icon" alt="Firefox logo" />
        <Image src={BraveIcon} className="browser-icon" alt="Brave logo"/>
      </BrowserIcons>
    </Fragment>
  );
  return (
    <BannerWrapper id="banner_section">
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
          <Fade>
            <FeatureBlock
              title={
                <Heading
                  as="h1"
                  content="Bookmarking for the
                  power users of the web"
                  {...title}
                />
              }
              description={
                <Text
                  content="A privacy focused extension to annotate, search and organize what you've seen online.                  "
                  {...description}
                />
              }
              button={<ButtonGroup />}
            />
            <Text
              content="Get started in less than 30 seconds."
              {...downloadDescription}
            />
            <Text
              content="No account necessary. All data stored locally."
              {...downloadDescription}
            />
            </Fade>
          </Box>
        </Box>
      </Container>
      <BannerObject>
        <Fade>
          <div className="objectWrapper">
            <Image src={BannerObject1} className="banner-bg" alt="Background colour"/>
            <div className="dashboardWrapper">
              <Image src={BannerObject2} alt="Screenshot of the dashboard page" />
            </div>
          </div>
        </Fade>
      </BannerObject>
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
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: [1, 1, '70%', '50%'],
  },
  title: {
    fontSize: ['1.5625rem', '2.125rem', '1.875rem', '2.5rem'],
    fontWeight: '600',
    color: 'headingColor',
    mb: ['20px', '25px'],
    lineHeight: '1.3',
    width: ['100%', '100%', '70%', '80%'],
  },
  description: {
    fontSize: '1.125rem',
    color: 'textColor',
    lineHeight: '1.5',
    mb: '0',
    width: ['100%', '100%', '70%', '80%'],
  },
  downloadDescription: {
    fontSize: '0.8125rem',
    color: 'lightestText',
    lineHeight: '1.5',
    width: ['100%', '100%', '320px'],
    mb: '5px',
  },
  btnStyle: {
    minWidth: ['100%', '100%', '120px', '265px'],
    fontSize: ['1.125rem', '1.125rem', '1rem', '1.25rem'],
    colors: 'primaryWithBg',
  },
};

export default BannerSection;
