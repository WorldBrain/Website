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
import { SponsorsWrapper, SubText } from './sponsorsSection.style';

const SponsorsSection = ({
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
    <SponsorsWrapper id="sponsorsSection">
      <Container {...containerBox}>
        <Box>
          <Heading 
            as="h5" 
            content="Supported by"
            {...sectionTitle}
          />
        </Box>
        <SubText> Thanks to <Link href="/wallofthanks">all our contributors, financial supporters and investors</Link> for making this journey possible.</SubText>
        <Box className="row" {...row}>
          <Link href="https://ec.europa.eu" target="_blank">
            <Image width="100px" src={EuComissionLogo} className="banner-img" alt="A gif showing someone highlight content and add a note to it" />
          </Link>
          <Link href="https://ledgerproject.eu" target="_blank">
            <Image {...image} src={LedgerLogo} className="banner-img" alt="A gif showing someone highlight content and add a note to it" />
          </Link>
          <Link href="https://foundation.mozilla.org/en" target="_blank">
          <Image {...image} src={MozillaLogo} className="banner-img" alt="A gif showing someone highlight content and add a note to it" />
          </Link>
          <Link href="https://www.digital-science.com" target="_blank">
          <Image {...image} src={DigitalScienceLogo} className="banner-img" alt="A gif showing someone highlight content and add a note to it" />
          </Link>
        </Box>
        <Text className="sub-text" content="This project has received funding from the European Union’s Horizon 2020 research and innovation programme within the framework of the LEDGER Project funded under grant agreement No825268" {...text} />
      </Container>
    </SponsorsWrapper>
  );
};

// FeatureSection style props
SponsorsSection.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
};

// FeatureSection default style
SponsorsSection.defaultProps = {
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
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '1.7em',
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

export default SponsorsSection;
