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
// import Input from 'reusecore/src/elements/Input';

const chargeBeeScriptSource = 'https://js.chargebee.com/v2/chargebee.js'
import moneyback from '../../../img/moneyback.svg'

import PricingTable, {
  PricingHead,
  PricingPrice,
  PricingButton,
  PricingList,
  ListItem,
  PricingButtonWrapper,
  DeviceSelection,
  UpperSection,
  PricingWrapper,
} from './pricing.style';

import { checkmark } from 'react-icons-kit/icomoon/checkmark';
import { PageHOC } from '../../../components/page';

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
    data: Data.saasJson.MONTHLY_PRICING_TABLE,
    active: true,
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

  const data = state.data;
  const activeStatus = state.active;

  return (
    <PricingWrapper>
      <Container >
        <Box {...secTitleWrapper}>
          <Text {...secText} />
          <PricingButtonWrapper>
            <Button
              title="Monthly"
              className={activeStatus ? 'active-item' : ''}
              onClick={() =>
                setState({
                  data: Data.saasJson.MONTHLY_PRICING_TABLE,
                  active: true,
                })
              }
            />
            <Button
              title="Yearly -20%"
              className={activeStatus === false ? 'active-item' : ''}
              onClick={() =>
                setState({
                  data: Data.saasJson.YEARLY_PRICING_TABLE,
                  active: false,
                })
              }
            />
          </PricingButtonWrapper>
        </Box>
        <Box {...moneybackBox}>
          <Image src={moneyback} {...moneybackImg}></Image>
          <Text {...moneybackText}/> {'\n'}
          <Text {...moneybackTextLineTwo}/> 
        </Box>
        <Box {...row}>
          <>
            {data.map((pricingTable) => (
              <PricingTable
                key={pricingTable.planId}
                freePlan={pricingTable.freePlan}
                className={pricingTable.freePlan ? "free-plan pricing-table" : "pro-plan pricing-table"}
              >
                <UpperSection>
                  <PricingHead>
                    <Heading content={pricingTable.name} {...nameStyle} />
                  </PricingHead>
                  <PricingPrice>
                    <Text content={pricingTable.price} {...priceStyle} />
                  </PricingPrice>
                  {/*
                  <span>TODO - hide on free, make functional</span>
                  <DeviceSelection>
                    <span>for</span>
                    <Input inputType="number" value="1" />
                    <span>device</span>
                  </DeviceSelection>
*/}
                  <PricingList>
                    {pricingTable.listItems.map((item, index) => (
                      <ListItem key={`pricing-table-list-${index}`}>
                        <Icon
                          icon={checkmark}
                          className="price_list_icon"
                          size={13}
                        />
                        <Text content={item.content} {...listContentStyle} />
                      </ListItem>
                    ))}
                  </PricingList>
                  <Text content={pricingTable.subContent} {...subContentStyle} />
                </UpperSection>
                <div {...pricingButtonBox} >
                <PricingButton>
                  <a {...linkStyle} href={pricingTable.url}>
                    <Button
                      title={pricingTable.buttonLabel}
                      onClick={(e: Event) => handleClickUpgrade(e, pricingTable.planId)}
                      colors={pricingTable.freePlan ? "primaryWithBg" : "secondaryWithBg"}
                      {...buttonStyle}
                    />
                  </a>
                </PricingButton>
                  {pricingTable.freePlan ? <Text {...noText}/> : <><Text {...moneybackTextSmall}/><Text {...moneybackTextSmallLineTwo}/></>}
                </div>
              </PricingTable>
            ))}
          </>
        </Box>
      </Container>
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
