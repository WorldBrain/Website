import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import Card from 'reusecore/src/elements/Card';
import Image from 'reusecore/src/elements/Image';
import FeatureBlock from 'common/src/components/FeatureBlock';
import Container from 'common/src/components/UI/Container';
import MobileSectionWrapper, { SectionObject } from './visitor.style';

import ImageOne from '../../../img/annotate_raw1270x760.gif';
import ImageBg from 'common/src/assets/image/saas/visitor_bg.png';

const MobileSection = ({
  title,
  description,
  textArea,
  imageWrapper,
  gifStyle,
}) => {
  return (
    <MobileSectionWrapper id="visitorSection">
      <Container>
        <Box {...textArea}>
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
        </Box>
      </Container>
      <SectionObject>
        <Card className="objectWrapper" {...imageWrapper}>
          <Zoom>
            <Image src={ImageBg} alt="BgImage" />
          </Zoom>
          <Card className="dashboardWrapper" {...gifStyle}>
            <Fade right>
              <Image src={ImageOne} alt="VisitorDashboard1" />
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
  gifStyle: {
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',
    borderRadius: '5px',
  },
  title: {
    fontSize: ['20px', '26px', '26px', '36px', '48px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
    lineHeight: '1.5',
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '33px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
  },
};

export default MobileSection;
