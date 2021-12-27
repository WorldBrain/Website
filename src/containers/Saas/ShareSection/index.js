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
import ShareSectionWrapper, { SectionObject, View, PrimaryButton, SecondaryButton, ButtonGroup } from './share.style';

import ImageOne from '../../../img/publish.png';
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
                content="Share years of research in seconds"
                {...title}
              />
            }
            description={
              <Text
                content= <p>Want to share your research or reading lists with your friends, followers and clients? <br/><br/> 
                Share <a href="https://memex.social/c/oiLz5UIXw9JXermqZmXW" target="_blank">spaces</a>, annotated <a href="https://memex.social/p/lfuD8KIDyvUsIN61DsGM" target="_blank">pages</a> and individual <a href="https://memex.social/a/YVTUgrUcAiK7cAjjllis" target="_blank">annotations</a> with just a link.<br/>
                Your peers don’t need Memex installed to view or reply to your notes.</p>
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
    ml: [0, 20, 20, 20],
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
