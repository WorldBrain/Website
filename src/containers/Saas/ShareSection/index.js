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
import ShareSectionWrapper, { SectionObject, View, PrimaryButton, SecondaryButton, ButtonGroup} from './share.style';

import ImageOne from '../../../img/shareImg.png';
import browserImg from '../../../img/browser.png';

const ShareSection = ({
  title,
  description, 
  textArea,
  imageWrapper,
  sectionWrapper,
  btnStyle,
}) => {
  return (
    <ShareSectionWrapper id="annotationsSection">
      <View className="sectionBox">
        <Box {...textArea}>
          <FeatureBlock
            title={
              <Heading
                content="Share your research with the world"
                {...title}
              />
            }
            description={
              <Text
                content="Share collections of pages and your notes. Easily share sentence-level feedback about websites."
                {...description}
              />
            }
          />
          <ButtonGroup>
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
                <Image src={browserImg} className="browser"/>
                <Image src={ImageOne} className="banner-img" alt="Gif showing someone use asearch bar to find content" />
              </Card>
            </Card>
         </SectionObject>
      </View>
    </ShareSectionWrapper>
  );
};

ShareSection.propTypes = {
  title: PropTypes.object,
  description: PropTypes.object,
  btnStyle: PropTypes.object,
};

ShareSection.defaultProps = {
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

export default ShareSection;
