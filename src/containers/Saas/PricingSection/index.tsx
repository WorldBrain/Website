import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql, navigate } from 'gatsby';
import PropTypes from 'prop-types';
import Icon from 'react-icons-kit';
import ScriptLoader from 'react-script-loader-hoc';
import Box from 'reusecore/src/elements/Box';
import Image from 'reusecore/src/elements/Image';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import Container from 'common/src/components/UI/Container';
import { detect } from 'detect-browser';
// import Input from 'reusecore/src/elements/Input';

const chargeBeeScriptSource = 'https://js.chargebee.com/v2/chargebee.js'
import moneyback from '../../../img/moneyback.svg'

import PricingTable, {
  PricingHead,
  PricingPrice,
  PricingButton,
  PricingList,
  BetaButton,
  ListItem,
  PricingButtonWrapper,
  DeviceSelection,
  UpperSection,
  PricingWrapper,
  SubscriptionOptionsContainer,
  PriceInputBox,
  PriceText,
  PriceBox,
  ColExplorer,
  ColThinker,
  ColPioneer,
  Line,
  PricingGrid,
  PricingGridWide,
  PricingGridPricing,
  PricingGridCheck,
  PricingGridPlanTitle,
  PricingGridFeatureTitle,
  PricingGridFeatureDescription,
  PricingGridPlanSpacer,
  PricingGridButton,
  PricingPlanTitle,
  PricingPlanItem,
  PlanTitle,
  PlanName,
  PlanBox,
  LoginTitle,
  LoginButton,
  WhiteSpacer30,
  PricingHeadTitle,
  SwitchWrapper,
  PricingBox,
  TimeButtonLeft,
  TimeButtonRight,
  TimeButtonBox,
  LinkSpan,
  AdditionalText,
  PricingGridCheckWithText,
  UpgradeInfo,
  TrialTag,
  ColWide,
} from './pricing.style';

import { checkmark } from 'react-icons-kit/icomoon/checkmark';
import { PageHOC } from '../../../components/page';


const onClickDownload = (e: Event) => {
  e.preventDefault();
  const browser = detect();
  let downloadLink = '';
  switch (browser && browser.name) {
    case 'chrome':
      downloadLink = 'https://chrome.google.com/webstore/detail/abkfbakhjpmblaafnpgjppbmioombali';
      break;
    case 'firefox':
      downloadLink = 'https://addons.mozilla.org/en-US/firefox/addon/worldbrain/';
      break;
    case 'brave':
      downloadLink = 'https://chrome.google.com/webstore/detail/abkfbakhjpmblaafnpgjppbmioombali';
      break;
    default:
      // TODO: Fallback case? Default is Chrome link
      downloadLink = 'https://chrome.google.com/webstore/detail/abkfbakhjpmblaafnpgjppbmioombali';
      break;
  }

  if (window) {
    window.open(downloadLink, '_blank');
  }
}

const PricingSection = ({
  sectionWrapper,
  row,
  secTitleWrapper,
  secText,
  nameStyle,
  descriptionStyle,
  priceStyle,
  linkStyle,
  buttonStyle,
  moneybackBox,
  noText,
  moneybackText,
  moneybackImg,
  buttonFillStyle,
  listContentStyle,
  moneybackTextSmall,
  moneybackTextSmallLineTwo,
  moneybackTextLineTwo,
  subContentStyle,
  pricingButtonBox,
  payment,
  scriptsLoadedSuccessfully,
  ...rest
}) => {
  const Data = useStaticQuery(graphql`
    query {
      saasJson {
        MONTHLY_PRICING_TABLE {
          name
          price
          buttonLabel
          url
          freePlan
          planId
          subContent
          listItems {
            content
          }
        }
        YEARLY_PRICING_TABLE {
          name
          price
          buttonLabel
          url
          freePlan
          planId
          subContent
          listItems {
            content
          }
        }
      }
    }
  `);

  const [state, setState] = useState({
    monthly: true,
    yearly: false,
  });

  const handleClickUpgrade = (e: Event, planId: String) => {
    e.preventDefault();

    if (planId === 'free') {
      // TODO: Redirect to download Extension page
      return;
    }

    payment.upgrade(planId, 1, (error: Error) => {
      console.log(error);
      if (error.message === 'Not Authenticated') {
        navigate('/login', {
          state: {
            planId,
            quantity: 1, // TODO: Update me when change UI
          }
        });
      }
    });
  }


  return (
    <PricingWrapper>
     <Text {...secText} />
     <SubscriptionOptionsContainer>
          <TimeButtonBox>
              <TimeButtonLeft
                active={state.monthly}
                onClick={() =>
                  setState({
                    monthly: true,
                    yearly: false,
                  })
                }
              >
                  Monthly
              </TimeButtonLeft>
              <TimeButtonRight
                active={state.yearly}
                onClick={() =>
                  setState({
                    monthly: false,
                    yearly: true,
                  })
                }
              >
                  Yearly
              </TimeButtonRight>
          </TimeButtonBox>
          <PricingGrid>
              <PricingGridPlanSpacer />
              <PricingGridPlanTitle> Explorer </PricingGridPlanTitle>
              <PricingGridPlanTitle> Thinker </PricingGridPlanTitle>
              {/*<PricingGridPlanTitle> Pioneer </PricingGridPlanTitle>*/}
     
              <ColExplorer>
                <PriceBox>
                    <PriceText> Free</PriceText>
                </PriceBox>
              </ColExplorer>

              <ColThinker>
                  <PriceBox>
                      {state.monthly ? (<PriceText>3€</PriceText>):(<PriceText>30€</PriceText>)}
                  </PriceBox>
              </ColThinker>
              <PricingGridFeatureDescription>
                  Search, Organise and Annotate
              </PricingGridFeatureDescription>
              <ColExplorer>
                  {' '}
                  <PricingGridCheck />{' '}
              </ColExplorer>
              <ColThinker>
                  {' '}
                  <PricingGridCheck
                  />{' '}
              </ColThinker>
              {/*<ColPioneer>
                  {' '}
                  <PricingGridCheck
                  />{' '}
              </ColPioneer>*/}
              <Line />

              <PricingGridFeatureDescription>
                  Mobile App for iOS and Android
              </PricingGridFeatureDescription>
              <ColExplorer>
                  {' '}
                  <PricingGridCheck />{' '}
              </ColExplorer>
              <ColThinker>
                  {' '}
                  <PricingGridCheck
                  />{' '}
              </ColThinker>
              {/*<ColPioneer>
                  {' '}
                  <PricingGridCheck
                  />{' '}
              </ColPioneer>*/}
              <Line />

              <PricingGridFeatureDescription>
                  Sync between mobile and desktop
              </PricingGridFeatureDescription>
              <ColThinker>
                  {' '}
                  <PricingGridCheck
                  />{' '}
              </ColThinker>
              {/*<ColPioneer>
                  {' '}
                  <PricingGridCheck
                  />{' '}
              </ColPioneer>*/}
              <Line />

              <PricingGridFeatureDescription>
                  Backup locally or your favourite cloud
              </PricingGridFeatureDescription>
              <ColExplorer>
                  <PricingGridCheckWithText
                  />
                  <AdditionalText>
                      manual
                  </AdditionalText>
              </ColExplorer>
              <ColThinker>
                  <PricingGridCheckWithText
                  />
                  <AdditionalText>
                      automatic
                  </AdditionalText>
              </ColThinker>
              {/*<ColPioneer>
                  {' '}
                  <PricingGridCheck
                  />{' '}
              {/*</ColPioneer>*/}
              </PricingGrid>
              <PricingGridWide>
              <Line />
              {/*
              <PricingGridFeatureDescription>
                  Early access to beta features
              </PricingGridFeatureDescription>

              <ColPioneer>
                  {' '}
                  <PricingGridCheck
                  />{' '}
              </ColPioneer>
              <Line />
              */}
              <PricingGridFeatureDescription>
                  Sharing & Quoting <strong>BETA</strong>
              </PricingGridFeatureDescription>

              <ColWide>
                  {' '}
                  <BetaButton
                    onClick={()=>window.open('https://worldbrain.io/beta')}

                  >Get Early Access</BetaButton>
                   {' '}
              </ColWide>
              {/*
              <PricingGridFeatureDescription
                  onClick={() =>
                      window.open('https://worldbrain.io/vision')
                  }
              >
                  Support the development of an<LinkSpan> ethical business</LinkSpan>{' '}
              </PricingGridFeatureDescription>
              <ColPioneer>
                  {' '}
                  <PricingGridCheck
                  />{' '}
              </ColPioneer>*/}
              </PricingGridWide>
          <UpgradeInfo
            onClick={onClickDownload}
          >
              Upgrade via the Memex Extension. 
          </UpgradeInfo>
      </SubscriptionOptionsContainer>
    </PricingWrapper>
  );
};

PricingSection.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secText: PropTypes.object,
  nameStyle: PropTypes.object,
  priceStyle: PropTypes.object,
  listContentStyle: PropTypes.object,
  subContentStyle: PropTypes.object,
};

PricingSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['60px', '80px', '80px', '80px', '120px'],
    pb: ['20px', '20px', '20px', '80px'],
  },
  linkStyle: {
    textDecoration: 'none',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    width: '100%',
    mr: '-15px',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  secTitleWrapper: {
    mb: ['10px', '10px'],
  },
  secText: {
    content: 'Pricing',
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '1.5625rem',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: 'headingColor',
    mb: '10px',
  },
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 2],
    pr: '15px',
    pl: '15px',
  },
  moneybackBox: {
    display: 'flex',
    verticalAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    mb: 10,
    mt: 3,
  },
  moneybackImg: {
    height: 40,
    verticalAlign: 'center',
  },
  noText: {
    content: 't',
    fontSize: 16,
    alignSelf: 'center',
    color: 'white',
    fontWeight: '300',
    textAlign: 'center',
    mt: 2,
  },
  pricingButtonBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  moneybackText: {
    content: '14 days free trial',
    fontSize: 20,
    alignSelf: 'center',
    color: '#3a2f45',
    ml: 3,
    mb: 0,
    fontWeight: '300',
  },
  moneybackTextLineTwo: {
    content: 'No Credit Card Required',
    fontSize: 20,
    alignSelf: 'center',
    color: '#3a2f45',
    ml: 3,
    mb: 0,
    fontWeight: '300',
  },
   moneybackTextSmall: {
    content: '14 days free trial. No Credit Card Required',
    fontSize: 13,
    alignSelf: 'center',
    color: '#3a2f45',
    fontWeight: '300',
    textAlign: 'center',
    mt: 2,
  },
   moneybackTextSmallLine2: {
    content: 'No Credit Card Required',
    fontSize: 16,
    alignSelf: 'center',
    color: '#3a2f45',
    fontWeight: '300',
    textAlign: 'center',
    mt: 2,
  },
  nameStyle: {
    fontSize: ['1.5rem', '1.5rem', '1.5rem', '2rem'],
    fontWeight: '500',
    color: 'headingColor',
    textAlign: 'center',
    mb: '0',
    display: 'flex',
  },
  priceStyle: {
    as: 'span',
    display: 'flex',
    fontSize: ['2rem', '2rem', '2rem', '2.5rem'],
    color: 'headingColor',
    textAlign: 'center',
    mb: '5px',
  },
  buttonStyle: {
    type: 'button',
    fontWeight: '600',
    borderRadius: '3px',
    pl: '10px',
    pr: '10px',
    mt: '20px',
    width: '222px',
    maxWidth: '100%',
    display: 'flex',
    textDecoration: 'none',
  },
  listContentStyle: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: 'textColor',
    mb: '0',
  },
  subContentStyle: {
    fontSize: '13px',
    color: 'lightestText',
    mt: '20px',
    textAlign: 'center',
    display: 'flex',
  },
};

export default PageHOC(({ payment }) => ({ payment }))(PricingSection);
