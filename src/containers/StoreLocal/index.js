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
import VisitorSectionWrapper, { SectionObject } from './visitor.style';

import ImageOne from '../../img/store_local.gif';
import ImageBg from 'common/src/assets/image/saas/visitor_bg.png';

const StoreLocal = ({
  title,
  description,
  textArea,
  imageWrapper,
  gifStyle,
}) => {
  return (
    <VisitorSectionWrapper id="visitorSection">
      <SectionObject>
        <Card className="objectWrapper" {...imageWrapper}>
          <Zoom>
            <Image src={ImageBg} alt="BgImage" />
          </Zoom>
          <Card className="dashboardWrapper" {...gifStyle}>
            <Fade left>
              <Image src={ImageOne} alt="VisitorDashboard1" />
            </Fade>
          </Card>
        </Card>
      </SectionObject>
      <Container>
        <Box {...textArea}>
          <FeatureBlock
            title={
              <Heading
                content="All Data Stored Locally"
                {...title}
              />
            }
            description={
              <Text
                content="Offline first - Your data is stored locally unless you choose to backup to a cloud service provider."
                {...description}
              />
            }
          />
        </Box>
      </Container>
    </VisitorSectionWrapper>
  );
};

StoreLocal.propTypes = {
  title: PropTypes.object,
  description: PropTypes.object,
  btnStyle: PropTypes.object,
};

StoreLocal.defaultProps = {
  textArea: {
    width: ['100%', '100%', '45%'],
    ml: [0, 0, '58%'],
  },
  imageWrapper: {
    boxShadow: 'none',
  },
  gifStyle: {
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

export default StoreLocal;
