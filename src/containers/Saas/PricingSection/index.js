import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Icon from 'react-icons-kit';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import Container from 'common/src/components/UI/Container';
import Input from 'reusecore/src/elements/Input';

import PricingTable, {
  PricingHead,
  PricingPrice,
  PricingButton,
  PricingList,
  ListItem,
  PricingButtonWrapper,
  DeviceSelection,
} from './pricing.style';

import { checkmark } from 'react-icons-kit/icomoon/checkmark';

const PricingSection = ({
  sectionWrapper,
  row,
  secTitleWrapper,
  secText,
  nameStyle,
  descriptionStyle,
  priceStyle,
  buttonStyle,
  buttonFillStyle,
  listContentStyle,
  subContentStyle,
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

  const data = state.data;
  const activeStatus = state.active;

  return (
    <Box {...sectionWrapper} id="pricingSection">
      <Container>
        <Box {...secTitleWrapper}>
          <Text {...secText} />
          <PricingButtonWrapper>
            <Button
              title="Monthly Plan"
              className={activeStatus ? 'active-item' : ''}
              onClick={() =>
                setState({
                  data: Data.saasJson.MONTHLY_PRICING_TABLE,
                  active: true,
                })
              }
            />
            <Button
              title="Annual Plan"
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
        <Box {...row}>
          <>
            {data.map((pricingTable, index) => (
              <PricingTable
                freePlan={pricingTable.freePlan}
                className={pricingTable.freePlan ? "free-plan pricing-table" : "pro-plan pricing-table"}
              >
                <>
                  <PricingHead>
                    <Heading content={pricingTable.name} {...nameStyle} />
                  </PricingHead>
                  <PricingPrice>
                    <Text content={pricingTable.price} {...priceStyle} />
                  </PricingPrice>
                  
                  <span>TODO - hide on free, make functional</span>
                  <DeviceSelection>
                    <span>for</span>
                    <Input inputType="number" value="1" />
                    <span>device</span>
                  </DeviceSelection>

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
                </>
                <PricingButton>
                  <a href={pricingTable.url}>
                      <Button
                        title={pricingTable.buttonLabel}
                        colors={pricingTable.freePlan ? "primaryWithBg" : "secondaryWithBg"}
                        {...buttonStyle}
                      />
                  </a>
                </PricingButton>
              </PricingTable>
            ))}
          </>
        </Box>
      </Container>
    </Box>
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
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  secTitleWrapper: {
    mb: ['50px', '75px'],
  },
  secText: {
    content: 'PRICING PLAN',
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: 'secondary',
    mb: '10px',
  },
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 2],
    pr: '15px',
    pl: '15px',
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
    display: 'flex',
  },
};

export default PricingSection;
