import React from 'react';
import PropTypes from 'prop-types';
import Zoom from 'react-reveal/Zoom';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import Card from 'reusecore/src/elements/Card';
import Image from 'reusecore/src/elements/Image';
import FeatureBlock from 'common/src/components/FeatureBlock';
import Container from 'common/src/components/UI/Container';
import StoreLocalSectionWrapper, { SectionObject, View, FloatingImage } from './storeLocal.style';

import ImageOne from '../../img/search.gif';
import ImageBg from 'common/src/assets/image/saas/visitor_bg.png';
import privacyImage from '../../img/privacy.svg';

const StoreLocalSection = ({
  title,
  description,
  textArea,
  imageWrapper,
  sectionWrapper,
  gifStyle,
}) => {
  return (
    <StoreLocalSectionWrapper id="storeLocalSection">
      <View {...sectionWrapper} className="sectionBox">
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
                  content="Memex is offline first. You have full control over your data."
                  {...description}
                />
              }
            />
          </Box>
          <SectionObject>
            <FloatingImage className="floatingImage">
                <Image src={privacyImage}/>
            </FloatingImage>
          </SectionObject>
      </View>
    </StoreLocalSectionWrapper>
  );
};

StoreLocalSection.propTypes = {
  title: PropTypes.object,
  description: PropTypes.object,
  btnStyle: PropTypes.object,
};

StoreLocalSection.defaultProps = {
  textArea: {
    width: ['50%', '50%', '40%'],
    pl: [0, 0, 200],
    pr: [0, 0, 0],
  },
  sectionWrapper: {
      maxWidth: 1000,
  },
  imageWrapper: {
    boxShadow: 'none',
    mr: [20, 20, 20, 20],
  },
  title: {
    fontSize: ['2rem', '1.6rem', '1.5rem'],
    fontWeight: '700',
    color: 'headingColor',
    mb: '10px',
    mt: '20px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
    lineHeight: '1.5',
  },
  description: {
    fontSize: '1.125rem',
    lineHeight: '1.5',
    color: 'textColor',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
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

export default StoreLocalSection;
