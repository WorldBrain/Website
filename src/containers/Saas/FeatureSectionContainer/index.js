import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { propTypes } from 'react-stickynode/dist/Sticky';
import { flex } from 'styled-system';

const FeatureSection = ({
  featureHeading,
  featureDescription,
  featureImage,
  flexDirection,
}) => {
  return (
    <SectionContainer flexDirection={flexDirection}>
      <SectionDescriptionContainer>
        <Heading>
          {featureHeading}
        </Heading>
        <Description>
          {featureDescription}
        </Description>
      </SectionDescriptionContainer>
      <SectionImageContainer>
        <FeatureImage
          src={featureImage}
        />
      </SectionImageContainer>
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  max-width: 1000px;
  align-items: center;
  grid-gap: 100px;
  flex-direction: ${(props) => props.flexDirection === 'row-reverse' ? 'row-reverse' : 'row'};
`

const SectionImageContainer = styled.div``

const FeatureImage = styled.img`
  width: auto;
  max-width: 700px;
  display: flex;
  border-radius: 10px;
  max-height: 400px;
  height: auto;
`

const SectionDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  grid-gap: 15px;
  min-width: 400px;
  flex: 1;
`

const Heading = styled.div`
  font-weight: bold;
  font-size: 26px;
  font-family: 'Inter', sans-serif;
  color: #347AE2;
  line-height: 36px;
`

const Description = styled.div`
  font-weight: 400;
  font-size: 18px;
  font-family: 'Inter', sans-serif;
  color: #96A0B5;
  line-height: 27px;
`

export default FeatureSection;
