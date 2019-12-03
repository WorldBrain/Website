import styled from 'styled-components';
import { themeGet } from 'styled-system';
import BannerBG from 'common/src/assets/image/saas/saas-banner.jpg';


const BrowserIcons = styled.div`
  display: flex;
  justify-content: center;
  .browser-icon {
    width: 48px;
    height: 48px;
    margin-left: 25px;
    @media (max-width: 990px) {
      margin-left: 15px;
    }
  }
  @media (max-width: 767px) {
    width: 100%;
    justify-content: space-around;
  }
`;

const BannerWrapper = styled.section`
  padding-top: 120px;
  padding-bottom: 120px;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  @media (max-width: 990px) {
    padding-bottom: 60px;
    min-height: auto;
  }
  @media (max-width: 767px) {
    padding-top: 50px;
    padding-bottom: 20px;
    min-height: auto;
  }

  @media (max-width: 576px) {
    text-align: center;
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
    align-items: center;
    margin-top: 60px;
    margin-bottom: 32px;
    width: 90%;
    @media (max-width: 990px) {
      width: 70%;
    }
    @media (max-width: 767px) {
      flex-direction: column;
      margin-bottom: 30px;
      margin-top: 30px;
    }
    @media (max-width: 576px) {
      width: 100%;
    }
    button {
      font-weight: 600;
      padding: 12px 20px;
      min-height: 0;
      @media (max-width: 767px) {
        padding: 10px 14px;
        margin-bottom: 20px;
      }
    }
    button:hover {
      box-shadow: 0px 1px 15px 0px rgba(0, 0, 0, 0.25);
    }
  }
`;

const BannerObject = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  @media (max-width: 576px) {
    width: 100%;
    position: static;
  }

  .objectWrapper {
    margin-left: auto;
    position: relative;

    .banner-bg {
      width: 85%;
      @media (max-width: 576px) {
        display: none;
      }
    }
    .dashboardWrapper {
      position: absolute;
      top: 50px;
      right: -40px;
      @media (max-width: 576px) {
        position: static;
      }
    }
  }
`;

export { BannerObject, BrowserIcons };

export default BannerWrapper;
