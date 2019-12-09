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
import AnnotationsSectionWrapper, { SectionObject } from './annotations.style';

import ImageOne from '../../../img/annotate.gif';
import ImageBg from 'common/src/assets/image/saas/visitor_bg.png';

const AnnotationsSection = ({
  title,
  description,
  textArea,
  imageWrapper,
  gifStyle,
}) => {
  return (
    <AnnotationsSectionWrapper id="annotationsSection">
      <Container className="text-container">
        <Box {...textArea}>
          <FeatureBlock
            title={
              <Heading
                content="Annotations on the web"
                {...title}
              />
            }
            description={
              <Text
                content="Keep your thoughts organized with their original context."
                {...description}
              />
            }
          />
        </Box>
      </Container>

      <SectionObject>
        <Card className="objectWrapper" {...imageWrapper}>
          <Zoom>
            <Image src={ImageBg} className="bg-img" alt="Background image" />
          </Zoom>
          <Card className="dashboardWrapper" {...imageWrapper}>
            <Fade right>
              <Image src={ImageOne} className="banner-img" alt="A gif showing someone highlight content and add a note to it" />
            </Fade>
          </Card>
        </Card>
      </SectionObject>
    </AnnotationsSectionWrapper>
  );
};

AnnotationsSection.propTypes = {
  title: PropTypes.object,
  description: PropTypes.object,
  btnStyle: PropTypes.object,
};

AnnotationsSection.defaultProps = {
  imageWrapper: {
    boxShadow: 'none',
  },
  textArea: {
    width: ['100%', '100%', '45%'],
    ml: '0',
    mt: ['20px', 0, 0, 0],
  },
  title: {
    fontSize: ['1.375rem', '1.5rem', '1.75rem'],
    fontWeight: '400',
    color: 'headingColor',
    maxWidth: ['100%', '100%', '100%', '440px'],
    lineHeight: '1.5',
  },
  description: {
    fontSize: '1.125rem',
    lineHeight: '1.5',
    mb: '0',
    color: 'textColor',
    maxWidth: ['100%', '100%', '100%%', '440px'],
  },
};

export default AnnotationsSection;
