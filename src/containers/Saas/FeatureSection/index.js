import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import FeatureBlock from 'common/src/components/FeatureBlock';
import Container from 'common/src/components/UI/Container';
import FeatureSectionWrapper from './featureSection.style';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Fade from 'react-reveal/Fade';

const FeatureSection = ({
  row,
  col,
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  featureTitle,
  iconStyles,
  iconStyle,
  contentStyle,
  heading,
  blockWrapperStyle,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      saasJson {
        Features {
          id
          icon
          title
          path
        }
      }
    }
  `);

  return (
    <FeatureSectionWrapper>
      <Container>
        <Fade>
          <Box {...sectionHeader}>
          <Heading content="Features" {...heading} />
          </Box>
          <Box className="row" {...row}>
            {Data.saasJson.Features.map((feature, index) => (
              <Box className="col" {...col} key={index}>
                <AnchorLink href={feature.path}>
                  <FeatureBlock
                    icon={<i className={feature.icon} />}
                    wrapperStyle={blockWrapperStyle}
                    iconStyle={iconStyle}
                    contentStyle={contentStyle}
                    iconPosition="left"
                    title={<Heading as="h3" content={feature.title} {...featureTitle} />}
                    className="saasFeature"
                  />
                </AnchorLink>
              </Box>
            ))}
          </Box>
        </Fade>
      </Container>
    </FeatureSectionWrapper>
  );
};

// FeatureSection style props
FeatureSection.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  // sectionTitle: PropTypes.object,
  // sectionSubTitle: PropTypes.object,
  featureTitle: PropTypes.object,
  featureDescription: PropTypes.object,
};

// FeatureSection default style
FeatureSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ['0', '40px', '40px', '40px'],
  },
  // feature row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
  },
  // feature col default style
  col: {
    width: [1, 1 / 2, 1 / 3, 1 / 3],
  },
  // feature block wrapper default style
  blockWrapperStyle: {
    p: ['30px', '20px', '20px', '20px'],
    alignItems: 'center'
  },

  heading: {
    fontSize: ['1.5625rem', '2rem', '2rem'],
  },
  // feature icon default style
  iconStyle: {
    width: ['60px', '60px', '60px', '60px'],
    height: ['60px', '60px', '60px', '60px'],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: ['32px', '36px'],
    color: '#ffffff',
    overflow: 'hidden',
    mb: ['20px', '20px', '20px', '30px'],
  },
  // feature content default style
  contentStyle: {
    textAlign: 'left',
  },
  // feature title default style

  featureTitle: {
    fontSize: '1.125rem',
    fontWeight: '400',
    color: 'textColor',
    lineHeight: '1.5',
    mb: ['10px', '10px', '10px', '20px'],
  },
};

export default FeatureSection;
