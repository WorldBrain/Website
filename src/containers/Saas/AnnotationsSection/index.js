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
import AnnotationsSectionWrapper, { SectionObject, View } from './annotations.style';

import ImageOne from '../../../img/annotate.png';
import browserImg from '../../../img/browser.png';
import { styles } from 'reusecore/node_modules/styled-system';

const AnnotationsSection = ({
  title,
  description,
  textArea,
  imageWrapper,
  sectionWrapper,
  btnStyle,
  disclaimer,
}) => {
  return (
    <AnnotationsSectionWrapper id="annotationsSection">
      <View className="sectionBox">
        <Box {...textArea}>
          <FeatureBlock
            title={
              <Heading
                content="Declutter your notes about the things you read"
                {...title}
              />
            }
            description={
              <Text
                content=<p>No more copy-pasting important sections into your scattered notes. <br/><br/>Highlight & annotate websites & PDFs (even locally stored PDFs) on all your devices.*<br/><br/><span style={{fontSize: 14 + 'px', color: '#a0a0a0'}}>*PDF annotations only work on desktop so far.</span></p>
        {...description}
          />
            }
          />
        </Box>
        <SectionObject>
          <Card className="objectWrapper" {...imageWrapper}>
            <Card className="dashboardWrapper">
              <Image src={ImageOne} className="banner-img" alt="Gif showing someone use asearch bar to find content" />
            </Card>
          </Card>
        </SectionObject>
      </View>
    </AnnotationsSectionWrapper >
  );
};

AnnotationsSection.propTypes = {
  title: PropTypes.object,
  description: PropTypes.object,
  btnStyle: PropTypes.object,
};

AnnotationsSection.defaultProps = {
  textArea: {
    width: ['50%', '50%', '40%'],
    pl: [0, 0, 80],
    pr: [30, 30, 30],
  },
  sectionWrapper: {
    maxWidth: 1000,
  },
  imageWrapper: {
    boxShadow: 'none',
    ml: [20, 20, 20, 20],
  },
  title: {
    fontSize: ['2rem', '1.6rem', '1.5rem'],
    fontWeight: '700',
    color: 'headingColor',
    mb: '10px',
    mt: '20px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
    lineHeight: '1.5',
    whiteSpace: 'nowrap',
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
  disclaimer: {
    fontSize: '12px',
  },
};

export default AnnotationsSection;
