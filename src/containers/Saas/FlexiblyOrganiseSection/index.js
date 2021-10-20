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
import FlexiblyOrganiseSectionWrapper, { SectionObject, View } from './flexibly.style';
import ImageOne from '../../../img/search.png';
import ImageBg from 'common/src/assets/image/saas/visitor_bg.png';
import browserImg from '../../../img/browser.png';

const FlexiblyOrganiseSection = ({
  title,
  description,
  textArea,
  imageWrapper,
  textWrapper,
  sectionWrapper,
}) => {
  return (
    <FlexiblyOrganiseSectionWrapper id="tagsSection">
      <View {...sectionWrapper} className="sectionBox">
          <Box {...textArea}>
            <FeatureBlock
              title={
                <Heading
                  content="Instantly save & recover content. Without upfront organisation."
                  {...title}
                />
              }
              description={
                <Text
                  content=<p>Save websites and PDFs with one click, and find them again in milliseconds. <br/>Search with any word you remember in title or text, the time frame, domain or tags.<br/><br/>You don't need to but you can organise what you find with tags and spaces.</p>
                  {...description}
                />
              }
            />
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
    </FlexiblyOrganiseSectionWrapper>
  );
};

FlexiblyOrganiseSection.propTypes = {
  title: PropTypes.object,
  description: PropTypes.object,
  btnStyle: PropTypes.object,
  textWrapper: PropTypes.object,
};

FlexiblyOrganiseSection.defaultProps = {
  textArea: {
    width: ['50%', '50%', '40%'],
    pl: [0, 0, 130],
    pr: [30, 30, 50],
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

export default FlexiblyOrganiseSection;
