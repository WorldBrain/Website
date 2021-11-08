import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Box from 'reusecore/src/elements/Box';
import Link from 'reusecore/src/elements/Link';
import Text from 'reusecore/src/elements/Text';
import Image from 'reusecore/src/elements/Image';
import Heading from 'reusecore/src/elements/Heading';
import Container from 'common/src/components/UI/Container';
import EuComissionLogo from '../../../img/logos/logo-eu.png';
import LedgerLogo from '../../../img/logos/logo-ledger.png';
import DigitalScienceLogo from '../../../img/logos/logo-digitalscience.png';
import MozillaLogo from '../../../img/logos/logo-mozilla.svg';
import { UpdateWrapper, SubText, PrimaryButton, SecondaryButton, ButtonGroup} from './updateSection.style';

const UpdateSection = ({
  row,
  col,
  sectionTitle,
  sectionHeader,
  sectionWrapper,
  text,
  image,
  containerBox,
}) => {

  return (
    <UpdateWrapper id="sponsorsSection">
        <Box {...containerBox}>
          <Text 
            {...sectionTitle}
            content="Memex.Garden is now in Beta"
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
    </UpdateWrapper>
  );
};

// FeatureSection style props
UpdateSection.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
};

// FeatureSection default style
UpdateSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ['40px', '40px', '40px', '40px'],
  },
  // feature row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  // feature col default style
  col: {
    width: [1, 1 / 2, 1 / 3, 1 / 4],
    textAlign: 'center',
  },
  containerBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '1em',
    fontWeight: '700',
  },
  text: {
    color: 'lightestText',
    fontSize: '0.8125rem',
    display: 'flex',
    textAlign: 'center',
  },
  image: {
    width: '150px',
    mt: ['20px', '20px' , 0, 0]
  }
};

export default UpdateSection;
