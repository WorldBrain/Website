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
import FulltextSearchSectionWrapper, { SectionObject, View } from './fulltextSearch.style';

import ImageOne from '../../../img/collaborate.png';
import ImageBg from 'common/src/assets/image/saas/visitor_bg.png';
import browserImg from '../../../img/browser.png';

const FulltextSearchSection = ({
  title,
  description,
  textArea,
  imageWrapper,
  sectionWrapper,
}) => {
  return (
    <FulltextSearchSectionWrapper id="fullTextSearchSection">
      <View className="sectionBox">
        <Box {...textArea}>
          <FeatureBlock
            title={
              <Heading
                content=<p>Never start at Zero again. <br/> Build on each other's research.</p>
                {...title}
          />
            }
          description={
                <Text
                  content=<p>Need to do research with your team or have a shared reading list with your friends?
                  <br/><br/>Collaboratively collect content into spaces where discussions stay linked to the content. No more having to hunt for valuable comments lost in chat logs, email threads or documents.</p>
                  {...description}
          />
              }
            />
        </Box>
        <SectionObject>
          <Card className="objectWrapper" {...imageWrapper}>
            <Card className="dashboardWrapper">
              <Image src={browserImg} className="browser" />
              <Image src={ImageOne} className="banner-img" alt="Gif showing someone use asearch bar to find content" />
            </Card>
          </Card>
        </SectionObject>
      </View>
    </FulltextSearchSectionWrapper>
  );
};

FulltextSearchSection.propTypes = {
  title: PropTypes.object,
  description: PropTypes.object,
  btnStyle: PropTypes.object,
};

FulltextSearchSection.defaultProps = {
  textArea: {
    width: ['50%', '50%', '40%'],
    pl: [0, 0, 130],
    pr: [60, 60, 60],
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

export default FulltextSearchSection;
