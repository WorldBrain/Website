import styled from 'styled-components';
import { themeGet } from 'styled-system';

const PricingTable = styled.div`
  border-radius: 5px;
  padding: 60px 45px;
  border-radius: 5px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 600px;
  width: 40%;
  max-width: 400px;

  &.free-plan {
    border: 3px solid ${themeGet('colors.primary')};
    margin-right: 15px;
    h2 {
      color: ${themeGet('colors.primary')};
    }
    @media (max-width: 767px) {
      margin-right: 0;
    }
  }

  &.pro-plan {
    border: 3px solid ${themeGet('colors.secondary')};
    margin-left: 15px;
    h2 {
      color: ${themeGet('colors.secondary')};
    }
    @media (max-width: 767px) {
      margin-left: 0;
    }
  }

  @media (max-width: 767px) {
    padding: 35px 25px;
    width: 100%;
    min-height: 0;
  }
`;

const DeviceSelection = styled.div`
  color: ${themeGet('colors.secondary')};
  input {
    border: 1px solid ${themeGet('colors.secondary')};
    width: 55px;
    margin: 0 10px;
    &:focus {
      border: 1px solid ${themeGet('colors.secondary')};
    }
  }
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;


const PricingHead = styled.div`
  display: flex;
`;

const PricingPrice = styled.div`
  margin-bottom: 20px;
  display: flex;
`;

const PricingButton = styled.div`
  flex-direction: column;
`;

const PricingList = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.div`
  margin-bottom: 19px;
  display: inline-flex;
  &:last-child {
    margin-bottom: 0;
  }
  .price_list_icon {
    color: #18d379;
    margin-right: 10px;
  }
`;

const SwitchWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
  .reusecore__switch {
    .reusecore__field-label {
      font-size: 16px;
      font-weight: 400;
      color: ${themeGet('colors.secondary')}
      cursor: pointer;
    }
    input[type='checkbox'] {
      &:checked {
        + div {
          width: 40px !important;
          background-color: ${themeGet('colors.primary')};
          > div {
            left: 17px !important;
          }
        }
      }
      + div {
        background-color: #f0f0f0;
        background-color: #f0f0f0;
        border: 0;
        width: 40px;
        height: 25px;
        > div {
          background-color: #fff;
          box-shadow: 0px 2px 3px 0.24px rgba(31, 64, 104, 0.25);
          width: 21px;
          height: 21px;
          top: 2px;
          left: 2px;
        }
      }
    }
  }
`;

const PricingButtonWrapper = styled.div`
  text-align: center;
  margin-top: 30px;
  .reusecore__button {
    font-size: 1rem;
    font-weight: 400;
    color: ${themeGet('colors.headingColor')};
    background: #fff;
    height: 50px;
    width: 165px;
    border: 1px solid ${themeGet('colors.headingColor')};
    &:nth-child(1) {
      border-top-left-radius: 5px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 5px;
      border-right-color: transparent;
    }
    &:nth-child(2) {
      border-top-left-radius: 0;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      border-bottom-left-radius: 0;
      border-left-color: transparent;
    }
    &.active-item {
      color: #fff;
      background: ${themeGet('colors.secondary')};
      border-color: ${themeGet('colors.secondary')};
    }
    @media (max-width: 575px) {
      font-size: 14px;
      height: 44px;
      width: 120px;
      padding: 0 5px;
    }
  }
`;

export {
  PricingHead,
  PricingPrice,
  PricingButton,
  PricingList,
  ListItem,
  SwitchWrapper,
  PricingButtonWrapper,
  DeviceSelection,
};
export default PricingTable;
