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
  DiscountLabel,
  BannerObject,
} from './bannerSection.style';

import BannerObject1 from 'common/src/assets/image/saas/banner/bannerObject1.png';
import BannerObject2 from '../../../img/main_screen_new.png';

import ChromeIcon from '../../../img/logo-chrome.svg';
import FirefoxIcon from '../../../img/logo-firefox.svg';
import BraveIcon from '../../../img/logo-brave.svg';

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
      <Image src={ChromeIcon} className="browser-icon" />
      <Image src={FirefoxIcon} className="browser-icon" />
      <Image src={BraveIcon} className="browser-icon" />
    </Fragment>
  );
  return (
    <BannerWrapper id="banner_section">
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <FeatureBlock
              title={
                <Heading
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
          </Box>
        </Box>
      </Container>
      <BannerObject>
        <div className="objectWrapper">
          <Image src={BannerObject1} className="banner-bg" />
          <div className="dashboardWrapper">
            <Image src={BannerObject2} alt="BannerObject2" />
          </div>
        </div>
      </BannerObject>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  title: PropTypes.object,
  btnStyle: PropTypes.object,
  description: PropTypes.object,
  contentStyle: PropTypes.object,
  contentStyle: PropTypes.object,
  discountAmount: PropTypes.object,
  outlineBtnStyle: PropTypes.object,
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
    width: [1, '70%', '70%', '55%'],
  },
  title: {
    fontSize: ['1.375rem', '2.125rem', '1.875rem', '2rem'],
    fontWeight: '600',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px'],
    lineHeight: '1.3',
    width: '80%',
  },
  description: {
    fontSize: '1.125rem',
    color: 'textColor',
    lineHeight: '1.5',
    mb: '0',
    width: '80%',
  },
  downloadDescription: {
    fontSize: '0.8125rem',
    color: 'lightestText',
    lineHeight: '1.5',
    width: '320px',
    mb: '5px',
  },
  btnStyle: {
    minWidth: ['120px', '120px', '120px', '156px'],
    fontSize: ['1.125rem', '1.125rem', '1.375rem'],
    colors: 'primaryWithBg',
  },
  outlineBtnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#5167db',
    ml: '18px',
  },
  discountAmount: {
    fontSize: '14px',
    color: '#eb4d4b',
    mb: 0,
    as: 'span',
    mr: '0.4em',
    fontWeight: 700,
  },
  discountText: {
    fontSize: ['0.8125rem', '0.875rem'],
    color: '#0f2137',
    mb: 0,
    as: 'span',
    fontWeight: 500,
  },
};

export default BannerSection;
