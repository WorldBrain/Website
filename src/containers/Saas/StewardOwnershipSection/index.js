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
import StewardOwnershipSectionWrapper, { SectionObject, View, FloatingImage, infoContainer } from './stewardOwnership.style';
import ImageOne from '../../../img/search.gif';
import ImageBg from 'common/src/assets/image/saas/visitor_bg.png';
import privacyImage from '../../../img/privacy.svg';

const StewardOwnershipSection = ({
  title,
  description,
  textArea,
  imageWrapper,
  sectionWrapper,
  gifStyle,
  buttonStyle,
  infoContainer,
}) => {
  return (
    <StewardOwnershipSectionWrapper id="StewardOwnershipSection">
      <View {...sectionWrapper} className="sectionBox">
        <SectionObject>
          <FloatingImage className="floatingImage">
            <Image src={privacyImage} />
          </FloatingImage>
        </SectionObject>
        <Box {...textArea}>
          <FeatureBlock
            title={
              <Heading
                content="Built without Venture Capital"
                {...title}
              />
            }
            description={
              <infoContainer>
                <Text
                  content=<p>Memex can't be sold, and our team and investors <a target='_blank' href='https://community.worldbrain.io/t/why-worldbrain-io-does-not-take-venture-capital/75'>receive capped profits.</a><br /><br />We do this to remove profit-maximisation incentives that usually lead to exploitation of your attention and data, and unhealthy lock-ins.</p>
                {...description}
                  />
                <Button title="Learn More" onClick={() => window.open("https://community.worldbrain.io/t/why-worldbrain-io-does-not-take-venture-capital/75", "_blank")} {...buttonStyle} />
              </infoContainer>
            }
          />
        </Box>
      </View>
    </StewardOwnershipSectionWrapper>
  );
};

StewardOwnershipSection.propTypes = {
  title: PropTypes.object,
  description: PropTypes.object,
  btnStyle: PropTypes.object,
};

StewardOwnershipSection.defaultProps = {
  textArea: {
    width: ['50%', '50%', '40%'],
    pl: [0, 0, 130],
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
  buttonStyle: {
    fontSize: '1.125rem',
    lineHeight: '1.3',
    width: '150px',
    mb: 30,
    backgroundColor: '#5cd9a6',
    padding: '5px 25px',
    color: 'white',
    mt: '5',
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

export default StewardOwnershipSection;
