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
import QuoteLinkSectionWrapper, { SectionObject, View, PrimaryButton, SecondaryButton, ButtonGroup} from './quoteLink.style';

import ImageOne from '../../../img/QuoteLink.png';
import ImageBg from 'common/src/assets/image/saas/visitor_bg.png';
import browserImg from '../../../img/browser.png';

const QuoteLinkSection = ({
  title,
  description,
  textArea,
  imageWrapper,
  sectionWrapper,
  buttonGroup,
}) => {
  return (
    <QuoteLinkSectionWrapper id="QuoteLinkSection">
      <View className="sectionBox">
          <Box {...textArea}>
            <FeatureBlock
              title={
                <Heading
                  content="Quote sections of websites"
                  {...title}
                />
              }
              description={
                <Text
                  content="Share links to highlights and notes to point people to relevant sections."
                  {...description}
                />
              }
            />
            <ButtonGroup {...buttonGroup}>
              <PrimaryButton
                onClick={()=>window.open('https://worldbrain.io/request-early-access')}
              >
              Get Early Access
              </PrimaryButton>
              <SecondaryButton
                onClick={()=>window.open('https://worldbrain.io/tutorials/memex-social')}
              >
              Learn More
              </SecondaryButton>
            </ButtonGroup>
          </Box>
        <SectionObject>
          <Card className="objectWrapper" {...imageWrapper}>
            <Card className="dashboardWrapper">
              <Image src={ImageOne} className="banner-img" alt="Gif showing someone use asearch bar to find content" />
            </Card>
          </Card>
        </SectionObject>
      </View>
    </QuoteLinkSectionWrapper>
  );
};

QuoteLinkSection.propTypes = {
  title: PropTypes.object,
  description: PropTypes.object,
  btnStyle: PropTypes.object,
};

QuoteLinkSection.defaultProps = {
  textArea: {
    width: ['50%', '50%', '40%'],
    pl: [0, 0, 130],
    pr: [60, 60, 60],
  },
  sectionWrapper: {
      maxWidth: 1000,
  },
  buttonGroup: {
      zIndex: 1,
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

export default QuoteLinkSection;
