import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Link from 'reusecore/src/elements/Link';
import Text from 'reusecore/src/elements/Text';
import Image from 'gatsby-image';
import Heading from 'reusecore/src/elements/Heading';
import Container from 'common/src/components/UI/Container';
import SponsorsWrapper from './sponsorsSection.style';
import Fade from 'react-reveal/Fade';

const SponsorsSection = ({
  row,
  col,
  sectionTitle,
  sectionHeader,
  blockWrapperStyle,
  text,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      saasJson {
        Sponsors {
          id
          logo {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          company
          url
        }
      }
    }
  `);

  return (
    <SponsorsWrapper>
      <Container>
          <Box {...sectionHeader}>
          <Heading 
            as="h5" 
            content="Supported by"
            {...sectionTitle}
          />
          <Text content="This project has received funding from the European Union’s Horizon 2020 research and innovation programme within the framework of the LEDGER Project funded under grant agreement No825268" {...text} />
          </Box>
          <Box className="row" {...row}>
            {Data.saasJson.Sponsors.map((sponsor, index) => (
              <Box className="col" {...col} key={index}>
              <a href={sponsor.url}>
                  <Image
                    fluid={sponsor.logo.childImageSharp.fluid}
                      alt="Client Image"
                  />
                </a>
              </Box>
            ))}
          </Box>
      </Container>
    </SponsorsWrapper>
  );
};

// FeatureSection style props
SponsorsSection.propTypes = {
  sectionHeader: PropTypes.object,
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
  },
  // feature col default style
  col: {
    width: [1, 1 / 2, 1 / 3, 1 / 4],
    textAlign: 'center',
  },
  // feature block wrapper default style
  blockWrapperStyle: {
    p: ['30px', '20px', '20px', '20px'],
    alignItems: 'center'
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '1.125rem',
    fontWeight: '500',
  },
  text: {
    color: 'textColor',
    fontSize: '0.875rem',
    width: '70%',
    display: 'flex'
  }
};

export default SponsorsSection;
