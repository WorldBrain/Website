import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { propTypes } from 'react-stickynode/dist/Sticky';
import { flex } from 'styled-system';

const FeatureSectionSeparator = ({
  heading,
  description,
}) => {
  return (
    <SectionContainer>
      <Heading>
        {heading}
      </Heading>
      <Description>
        {description}
      </Description>
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  grid-gap: 10px;
  flex-direction: column;
  grid-gap: 15px;
  background: #fffff010;
  height: 250px;
`

const Heading = styled.div`
  font-weight: bold;
  font-size: 34px;
  font-family: 'Inter', sans-serif;
  color: #f7f9f9;
  line-height: 36px;
`

const Description = styled.div`
  font-weight: 400;
  font-size: 18px;
  font-family: 'Inter', sans-serif;
  color: #f7f9f9;
  line-height: 27px;
`

export default FeatureSectionSeparator;
