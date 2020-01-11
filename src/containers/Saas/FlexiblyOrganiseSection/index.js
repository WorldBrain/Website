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
import FlexiblyOrganiseSectionWrapper, { SectionObject } from './flexibly.style';
import ImageOne from '../../../img/organisation.gif';
import ImageBg from 'common/src/assets/image/saas/visitor_bg.png';

const FlexiblyOrganiseSection = ({
  title,
  description,
  textArea,
  imageWrapper,
  textWrapper,
}) => {
  return (

    <FlexiblyOrganiseSectionWrapper id="tagsSection">
      <Container>
        <Box {...textArea}>
          <FeatureBlock
            title={
              <Heading
                content="Flexibly Organise"
                {...title}
              />
            }
            description={
              <Text
                content="Tag and sort what you find online into full-text searchable collections."
                {...description}
              />
            }
          />
        </Box>
        <SectionObject>
          <Card className="objectWrapper" {...imageWrapper}>
            <Zoom left duration={700}>
              <Image src={ImageBg} className="bg-img" alt="Background image" />
            </Zoom>
            <Card className="dashboardWrapper" {...imageWrapper}>
              <Image src={ImageOne} className="banner-img" alt="Gif showing tags and notes being applied while on a website" />
            </Card>
          </Card>
        </SectionObject>
      </Container>
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
    width: ['100%', '100%', '45%'],
    ml: [0, 0, '58%'],
  },
  imageWrapper: {
    boxShadow: 'none',
  },
  title: {
    fontSize: ['1.375rem', '1.5rem', '1.75rem'],
    fontWeight: '400',
    color: 'headingColor',
    mb: '20px',
    mt: ['20px', '20px', '-20px', '-20px'],
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
