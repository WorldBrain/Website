import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Card from 'reusecore/src/elements/Card';
import Image from 'reusecore/src/elements/Image';
import FeatureBlock from 'common/src/components/FeatureBlock';
import Container from 'common/src/components/UI/Container';
import MobileSectionWrapper, { SectionObject } from './mobile.style';
import MobileSync from '../../../img/mobileSync.png';
import DownloadMobile from '../../../img/download-mobile.png';
import ImageBg from 'common/src/assets/image/saas/banner/bannerObject1.png';

const MobileSection = ({
  tag,
  title,
  description,
  textArea,
  imageWrapper,
  imageDownload,
}) => {
  return (
    <MobileSectionWrapper id="deviceSection">
      <Container>
        <Box {...textArea}>
          <Heading
            content="Comming soon"
            {...tag}
          />
          <FeatureBlock
            title={
              <Heading
                content="Quickly save & organise content on the go"
                {...title}
              />
            }
            description={
              <Text
                content="Securely sync your Memex between browsers, iOS & Android devices."
                {...description}
              />
            }
          />
          <Image src={DownloadMobile} {...imageDownload} className="mobileDownload" alt="Download mobile" />
        </Box>
      </Container>
      <SectionObject>
        <Card className="objectWrapper" {...imageWrapper}>
          <Fade>
            <Image src={ImageBg} className="bg-image" alt="BgImage" />
          </Fade>
          <Card className="imageOne" {...imageWrapper}>
            <Fade right>
              <Image src={MobileSync} className="mobile-img" alt="Two screens showing saving tags on mobile" />
            </Fade>
          </Card>
        </Card>
      </SectionObject>
    </MobileSectionWrapper>
  );
};

MobileSection.propTypes = {
  title: PropTypes.object,
  description: PropTypes.object,
  btnStyle: PropTypes.object,
};

MobileSection.defaultProps = {
  textArea: {
    width: ['100%', '100%', '45%'],
    mr: [0, 0, '58%'],
  },
  imageWrapper: {
    boxShadow: 'none',
  },
  tag: {
    fontWeight: '600',
    fontSize: '1.5rem',
  },
  title: {
    fontSize: ['1.375rem', '1.5rem', '1.75rem', '2rem'],
    fontWeight: '400',
    color: 'headingColor',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
    lineHeight: '1.4',
  },
  description: {
    fontSize: '1.125rem',
    lineHeight: '1.5',
    color: 'textColor',
    mb: '33px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
  },
  imageDownload: {
    opacity: 0.5,
    height: '80px',
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: '0.875rem',
    color: '#fff',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
  },
};

export default MobileSection;
