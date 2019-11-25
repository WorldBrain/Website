import styled from 'styled-components';
import { themeGet } from 'styled-system';
import BannerBG from 'common/src/assets/image/saas/saas-banner.jpg';

const BannerWrapper = styled.section`
  padding-top: 120px;
  padding-bottom: 250px;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  @media (max-width: 990px) {
    padding-top: 180px;
    padding-bottom: 60px;
    min-height: auto;
  }
  @media (max-width: 767px) {
    padding-top: 50px;
    padding-bottom: 20px;
    min-height: auto;
  }

  .content__wrapper {
    margin-top: 65px;
  }

  .row {
    position: relative;
    z-index: 1;
  }

  .button__wrapper {
    display: flex;
    margin-top: 40px;
    margin-bottom: 32px;
    @media (max-width: 767px) {
      margin-bottom: 30px;
    }
    .reusecore__button {
      &.outlined {
        border-color: rgba(82, 104, 219, 0.2);
      }
    }

    .browser-icon {
      width: 48px;
      height: 48px;
      margin-left: 20px;
    }
  }
`;

const BannerObject = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  top: 30px;
  right: 0;
  display: flex;
  align-items: center;

  .objectWrapper {
    margin-left: auto;
    position: relative;

    .banner-bg {
      width: 85%;
    }
    .dashboardWrapper {
      position: absolute;
      top: 50px;
      right: -40px;
      .chatObject {
        position: absolute;
        top: 20px;
        left: 120px;
      }
    }
  }
`;

const DiscountLabel = styled.div`
  display: inline-block;
  border-radius: 4em;
  border: 1px solid ${themeGet('colors.lightBorder', '#f1f4f6')};
  padding: 7px 25px;
  box-shadow: 0px 7px 25px 0px rgba(22, 53, 76, 0.05);
  margin-bottom: 30px;
  background-color: ${themeGet('colors.white', '#ffffff')};
  @media (max-width: 767px) {
    padding: 7px 15px;
  }
`;

export { DiscountLabel, BannerObject };

export default BannerWrapper;
