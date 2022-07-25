import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { propTypes } from 'react-stickynode/dist/Sticky';
import { flex } from 'styled-system';
import PricingPage from './PricingPage'

import checkIcon from '../../../img/checkIcon.svg';

const PricingSectionContainer = ({
  featureHeading,
  featureDescription,
  featureImage,
  flexDirection,
}) => {
  return (
    <SectionContainer flexDirection={flexDirection}>
      < PricingBox >
        <PricingBoxTitle>Pricing</PricingBoxTitle>
        <PricingTable>
          <PricingTableRow>
            <PricingTableCell></PricingTableCell>
            <PricingTableCell>Free</PricingTableCell>
            <PricingTableCell>Pro</PricingTableCell>
          </PricingTableRow>
          <PricingTableRow>
            <PricingTableCell>Save & Search</PricingTableCell>
            <PricingTableCell><CheckIcon src={checkIcon} /></PricingTableCell>
            <PricingTableCell><CheckIcon src={checkIcon} /></PricingTableCell>
          </PricingTableRow>
          <PricingTableRow>
            <PricingTableCell>Annotations</PricingTableCell>
            <PricingTableCell><CheckIcon src={checkIcon} /></PricingTableCell>
            <PricingTableCell><CheckIcon src={checkIcon} /></PricingTableCell>
          </PricingTableRow>
          <PricingTableRow>
            <PricingTableCell>Organise in Spaces</PricingTableCell>
            <PricingTableCell><CheckIcon src={checkIcon} /></PricingTableCell>
            <PricingTableCell><CheckIcon src={checkIcon} /></PricingTableCell>
          </PricingTableRow>
          <PricingTableRow>
            <PricingTableCell>Share & Collaborate on Spaces</PricingTableCell>
            <PricingTableCell></PricingTableCell>
            <PricingTableCell><CheckIcon src={checkIcon} /></PricingTableCell>
          </PricingTableRow>
          <PricingTableRow>
            <PricingTableCell>Readwise Sync</PricingTableCell>
            <PricingTableCell></PricingTableCell>
            <PricingTableCell><CheckIcon src={checkIcon} /></PricingTableCell>
          </PricingTableRow>
          <PricingTableRow>
            <PricingTableCell>Customisable Text Export</PricingTableCell>
            <PricingTableCell><CheckIcon src={checkIcon} /></PricingTableCell>
            <PricingTableCell><CheckIcon src={checkIcon} /></PricingTableCell>
          </PricingTableRow>
          <PricingTableRow>
            <PricingTableCell>Offline Use</PricingTableCell>
            <PricingTableCell><CheckIcon src={checkIcon} /></PricingTableCell>
            <PricingTableCell><CheckIcon src={checkIcon} /></PricingTableCell>
          </PricingTableRow>
          <PricingTableRow>
            <PricingTableCell>Device Sync & Cloud Backup</PricingTableCell>
            <PricingTableCell></PricingTableCell>
            <PricingTableCell><CheckIcon src={checkIcon} /></PricingTableCell>
          </PricingTableRow>
        </PricingTable>
        <UpgradeBox>
          <UpgradeTitelBox>
            <UpgradeTitle>$5 / month</UpgradeTitle>or <UpgradeTitle>$50 / year</UpgradeTitle>
          </UpgradeTitelBox>
          <UpgradeButton>
            Upgrade
          </UpgradeButton>
          <UpgradeSubTitle>
            30 day free trial
          </UpgradeSubTitle>
        </UpgradeBox>
      </PricingBox >
    </SectionContainer >
  );
};

const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 250px 0 200px 0;
`

const PricingBox = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 60%;
  min-width: 800px;
  border: 1px solid #38444D;
  padding: 50px 30px;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
`

const PricingBoxTitle = styled.div`
  font-weight: 900;
  color: #f7f9f9;
  font-size: 40px;
  margin-bottom: 30px;
`

const PricingTable = styled.table`
border-collapse: collapse;
width: 70%;

`

const CheckIcon = styled.img`
  height: 30px;
  width: 30px;
  display: flex;
`

const PricingTableRow = styled.tr`
  border-bottom: 1px solid #38444D;
  height: 80px;
  display: flex;

  &:first-child td {
    font-weight: 800;
    color: #347AE2;
    font-size: 28px;
  }
  &:first-child {
    border-bottom: none;
  }
  &:last-child {
    border-bottom: none;
  }
`

const PricingTableCell = styled.td`
font-weight: 800;
color: #f7f9f9;
font-size: 16px;
width: 25%;
display: flex;
justify-content: center;
align-items: center;

&:first-child {
    font-weight: 800;
    width: 50%;
    text-align: left;
    justify-content: flex-start;
  }
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

const UpgradeBox = styled.div`
  background: #fffff010;
  border-radius: 15px;
  padding: 40px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin-top: 30px;
  flex-direction: column;
  grid-gap: 20px;
`

const UpgradeTitelBox = styled.div`
  display: flex;
  align-items: center;
  color: #f7f9f9;
  grid-gap: 10px;
  font-size: 20px;
`

const UpgradeTitle = styled.div`
  font-size: 24px;
  font-weight: 800;
  color: #f7f9f9;
  text-align: center;
`
const UpgradeSubTitle = styled.div`
  margin-top: -10px;
  color: #f7f9f9;
`
const UpgradeButton = styled.div`
  width: 150px;
  height: 50px;
  border-radius: 5px;
  background-color: #347AE2;
  color: #f7f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  cursor: pointer;

  &:hover {
    background-color: #347AE270;

  }
`


export default PricingSectionContainer;
