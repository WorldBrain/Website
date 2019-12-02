import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Button from 'reusecore/src/elements/Button';
import Heading from 'reusecore/src/elements/Heading';
import Container from 'common/src/components/UI/Container';
import Fade from 'react-reveal/Fade';

const CommunitySection = ({
  row,
  col,
  title,
  blockWrapperStyle,
  text,
}) => {

  return (

    <Container>
      <Box className="row" {...row}>
        <Box {...col}>
          <Heading 
            as="h2" 
            content="Join the Community"
            {...title}
          />
          <Text content="Copy. Modify. Innovate. Contribute. Adapt Memex' code and move your data to a version that suits you best." {...text}/>
        </Box>
        <Box {...col}>
          <Heading 
            as="h2" 
            content="Open Source"
            {...title}
          />
          <Text content="Leave your feature ideas, engage in the feedback process and shape the future of Memex" {...text}/>
        </Box>
      </Box>
    </Container>
  );
};

// FeatureSection style props
CommunitySection.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
};

// FeatureSection default style
CommunitySection.defaultProps = {
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
    width: [1, 1 / 2],
    textAlign: 'center',
  },
  text: {
    color: 'textColor',
    fontSize: '0.875rem',
  },
  title: {
    fontSize: ['1.375rem', '1.5rem', '1.75rem'],
    fontWeight: '400',
  },
};

export default CommunitySection;
