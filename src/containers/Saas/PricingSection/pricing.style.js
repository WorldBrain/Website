import styled from 'styled-components';
import { themeGet } from 'styled-system';
import { css } from 'styled-components'

import checkMark from '../../../img/check.svg';


const PricingWrapper= styled.section`
  padding: 40px 0 40px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  
  .container {
    max-width: 1500px;  
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

// const PricingTable = styled.div`
//   border-radius: 5px;
//   padding: 60px 45px;
//   border-radius: 5px;
//   margin-bottom: 30px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: flex-start;
//   min-height: 600px;
//   width: 40%;
//   max-width: 400px;

//   &.free-plan {
//     border: 3px solid ${themeGet('colors.primary')};
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     margin-right: 15px;
//     h2 {
//       color: ${themeGet('colors.primary')};
//     }
//     @media (max-width: 850px) {
//       margin-right: 0px;
//     }
//   }

//   &.pro-plan {
//     border: 3px solid ${themeGet('colors.secondary')};
//     margin-left: 15px;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     h2 {
//       color: ${themeGet('colors.secondary')};
//     }
//     @media (max-width: 850px) {
//       margin-right: 0px;
//     }
//   }

//   @media (max-width: 900px) {
//     padding: 35px 25px;
//     min-height: 0;
//     width: 100%;
//     margin: 10 0;
//   }
// `;

// const DeviceSelection = styled.div`
//   color: ${themeGet('colors.secondary')};
//   input {
//     border: 1px solid ${themeGet('colors.secondary')};
//     width: 55px;
//     margin: 0 10px;
//     &:focus {
//       border: 1px solid ${themeGet('colors.secondary')};
//     }
//   }
//   display: flex;
//   align-items: center;
//   margin-bottom: 20px;
// `;


const UpperSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
 `;

// const PricingList = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 90%;

//   @media (max-width: 900px) {
//       width: 98%;
//   }
// `;

// const ListItem = styled.div`
//   margin-bottom: 19px;
//   display: inline-flex;
//   &:last-child {
//     margin-bottom: 0;
//   }
//   .price_list_icon {
//     color: #18d379;
//     margin-right: 10px;
//   }
// `;

// const SwitchWrapper = styled.div`
//   text-align: center;
//   margin-top: 20px;
//   .reusecore__switch {
//     .reusecore__field-label {
//       font-size: 16px;
//       font-weight: 400;
//       color: ${themeGet('colors.secondary')}
//       cursor: pointer;
//     }
//     input[type='checkbox'] {
//       &:checked {
//         + div {
//           width: 40px !important;
//           background-color: ${themeGet('colors.primary')};
//           > div {
//             left: 17px !important;
//           }
//         }
//       }
//       + div {
//         background-color: #f0f0f0;
//         background-color: #f0f0f0;
//         border: 0;
//         width: 40px;
//         height: 25px;
//         > div {
//           background-color: #fff;
//           box-shadow: 0px 2px 3px 0.24px rgba(31, 64, 104, 0.25);
//           width: 21px;
//           height: 21px;
//           top: 2px;
//           left: 2px;
//         }
//       }
//     }
//   }
// `;

// const PricingButtonWrapper = styled.div`
//   text-align: center;
//   margin-top: 30px;
//   .reusecore__button {
//     font-size: 1rem;
//     font-weight: 400;
//     color: ${themeGet('colors.headingColor')};
//     background: #fff;
//     height: 50px;
//     width: 165px;
//     border: 1px solid ${themeGet('colors.headingColor')};
//     &:nth-child(1) {
//       border-top-left-radius: 5px;
//       border-top-right-radius: 0;
//       border-bottom-right-radius: 0;
//       border-bottom-left-radius: 5px;
//       border-right-color: transparent;
//     }
//     &:nth-child(2) {
//       border-top-left-radius: 0;
//       border-top-right-radius: 5px;
//       border-bottom-right-radius: 5px;
//       border-bottom-left-radius: 0;
//       border-left-color: transparent;
//     }
//     &.active-item {
//       color: #fff;
//       background: ${themeGet('colors.secondary')};
//       border-color: ${themeGet('colors.secondary')};
//     }
//     @media (max-width: 575px) {
//       font-size: 14px;
//       height: 44px;
//       width: 120px;
//       padding: 0 5px;
//     }
//   }
// `;

const SubscriptionOptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    max-width: 800px;
`

const PricingTable = styled.div`
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: rgb(84, 73, 96);
    width: 200px;
    margin: 10px;

    &:hover {
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
        cursor: pointer;
    }

    @media (max-width: 1300px) {
        padding: 10px 13px;
        width: 100%;
        min-height: 0;
    }
`

const DeviceSelection = styled.div`
    input {
        width: 55px;
        margin: 0 10px;
    }
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const PricingPlanTitle = styled.div`
    box-sizing: border-box;
    font-weight: 700;
    color: #3a2f45;
    margin: 0 0 20px;
    text-align: center;
    display: flex;
    justify-content: center;
`

const PricingPlanItem = styled.div`
    box-sizing: border-box;
    font-weight: 300;
    font-size: 18px;
    margin: 30px 0;
    text-align: center;
`
const LoginTitle = styled.div`
    box-sizing: border-box;
    font-weight: 300;
    font-size: 18px;
    margin: 30px 0 10px;
    text-align: center;
`
const LoginButton = styled.div`
    box-sizing: border-box;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 20px;
    text-align: center;
    cursor: pointer;
`

const PricingHead = styled.div`
    display: flex;
    justify-content: center;
    color: #3a2f45;
    font-weight: 700;
`

const WhiteSpacer30 = styled.div`
    height: 30px;
`

const PricingHeadTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    color: #3a2f45;
    text-align: center;
`

const PricingPrice = styled.div`
    margin-bottom: 20px;
    display: flex;
    font-size: 25px;
    color: #5cd9a6;
    text-align: center;
    justify-content: center;
`

const PricingButton = styled.div`
    flex-direction: column;
    background: ${(props) =>
        props.background ? props.background : 'rgb(64, 182, 154)'};
    color: white;
    cursor: pointer;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    min-width: 48px;
    font-family: inherit;
    font-size: 16px;
    font-weight: 500;
    padding-top: 8px;
    margin-bottom: 20px;
    padding-bottom: 8px;
    //background-color: rgb(86, 113, 207);
    box-sizing: border-box;
    padding-left: 10px;
    padding-right: 10px;
    width: 222px;
    max-width: 100%;
    display: flex;
    border-radius: 3px;
    text-decoration: none;
    border-width: 0px;
    border-style: initial;
    border-image: initial;
    transition: all 0.3s ease 0s;
`

const PricingList = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    line-height: 1.3em;
    text-align: center;
    margin-bottom: 40px;
`

const TimeButtonBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const TimeButtonRight = styled.div`
    border-color: #e0e0e0;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-width: 1px;
    border-style: solid;
    padding: 5px 25px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    border-left: 0.5px;
    background-color: ${(props) => (props.active ? '#E0E0E0' : 'white')};
`

const TimeButtonLeft = styled.div`
    border-color: #e0e0e0;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-width: 1px;
    border-style: solid;
    padding: 5px 25px;
    border-right: 0.5px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    background-color: ${(props) => (props.active ? '#E0E0E0' : 'white')};
`

const ListItem = styled.div`
    margin-bottom: 19px;
    justify-content: center;
    display: inline-flex;
    &:last-child {
        margin-bottom: 0;
    }
    svg {
        color: #18d379;
        fill: #18d379;
        margin-right: 10px;
    }
`

const SwitchWrapper = styled.div`
  text-align: center;
  .reusecore__switch {
    .reusecore__field-label {
      font-size: 16px;
      font-weight: 400;
      cursor: pointer;
    }
    input[type='checkbox'] {
      &:checked {
        + div {
          width: 40px !important;
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
`

const PricingButtonWrapper = styled.div`
    text-align: center;
    margin-top: 30px;
    .reusecore__button {
        font-size: 1rem;
        font-weight: 400;
        background: #fff;
        height: 50px;
        width: 165px;
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
        }
        @media (max-width: 575px) {
            font-size: 14px;
            height: 44px;
            width: 120px;
            padding: 0 5px;
        }
    }
`

const PricingBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 130px;
    flex-direction: column;
`

const PlanBox = styled.div`
    display: flex;
    justify-content: center;
    margin-top: -30px;
    margin-bottom: 30px;
`

const PlanTitle = styled.div`
    font-size: 20px;
    font-weight: 400;
`

const PlanName = styled.div`
    font-size: 20px;
    font-weight: 800;
    margin-left: 10px;
`

const PricingGrid = styled.div`
    display: grid;
    grid-template-columns: 52% 16% 16% 16%;
    //grid-gap: 10px;
    background-color: #fff;
    width: 100%;
    margin-top: 40px;

    @media (max-width: 1300px) {
        grid-template-columns: 52% 16% 16% 16%;
    }
`

const gridPadding = css`
    padding: 2px;
`

const PricingGridPlanSpacer = styled.div`
    ${gridPadding}
    color: #E0E0E0
    grid-column: 1;
`

const PricingGridPlanTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 18px;
`

const PricingGridFeatureTitle = styled.div`
    ${gridPadding}
`

const PricingGridFeatureDescription = styled.div`
    grid-column: 1;
    display: flex;
    align-items: center;
    padding-left: 30px;
    flex-direction: row;
    justify-content: flex-start;
    color: ${themeGet('colors.headingColor')}
    font-size: 13px;
    height: 70px

    @media (max-width: 1300px) {
        padding: 0px;
        padding-left: 30px;
    }
`

const PricingGridCheck = styled.div`
    padding: 25px 5px;
    height: 20px;
    width: 20px;
    mask-size: 15px;
    mask-repeat: no-repeat;
    mask-position: center;
    background-color: ${themeGet('colors.headingColor')}
    mask-image: url(${checkMark});
    color: #2f2f2f;

    @media (max-width: 700px) {
        padding: 10px 5px;
        mask-size: 12px;
    }
`

const PricingGridCheckWithText = styled(PricingGridCheck)`
    padding: 0px 5px;
    margin-top: 15px;
`

const PricingGridButton = styled(PricingButton)``
const Line = styled.div`
    grid-column: span 5 / 5;
    width: 100%;
    border-top: 1px solid #e0e0e0;
`

const LinkSpan = styled.span`
    text-decoration: underline;
    font-weight: 600;
    cursor: pointer;
    font-size: 12px;
    padding-left: 3px;
`

const ColExplorer = styled.div`
    grid-column: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const ColThinker = styled.div`
    grid-column: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const ColPioneer = styled.div`
    grid-column: 4;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const PriceBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 40px;
`

const PriceText = styled.div`
    display: inline-block;
    text-align: center;
    font-weight: bold;
`

const AdditionalText = styled.div`
    font-size: 12px;
    font-color: ${themeGet('colors.textColor')};
    font-weight: bold
`

const PriceInputBox = styled.select`
    display: inline-block;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
    margin: 0 2px 0 5px;
`

const UpgradeInfo = styled.div`
    background-color: ${themeGet('colors.primary')};
    padding: 20px 60px;
    color: white;
    font-size: 16px;
    border-radius: 5px;
    width: 100%;
    text-align: center;
    margin: 30px;
    font-weight: bold;
    cursor: pointer;
`

export {
  PricingHead,
  PricingPrice,
  PricingButton,
  PricingList,
  ListItem,
  SwitchWrapper,
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
  PricingBox,
  TimeButtonLeft,
  TimeButtonRight,
  TimeButtonBox,
  LinkSpan,
  AdditionalText,
  PricingGridCheckWithText,
  UpgradeInfo,
};
export default PricingTable;
