import styled from 'styled-components';
import { themeGet } from 'styled-system';
import BannerBG from 'common/src/assets/image/saas/saas-banner.jpg';

const BrowserIcons = styled.div`
  display: flex;
  justify-content: center;
  .browser-icon {
    width: 46px;
    height: 46px;
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
  align-items: center;
  display: flex;
  @media (max-width: 990px) {
    padding-bottom: 60px;
    min-height: auto;
  }
  @media (max-width: 767px) {
    padding-top: 100px;
    padding-bottom: 20px;
    min-height: auto;
    flex-direction: column;
    text-align: center;
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
    @media (max-width: 990px) {
      width: 70%;
    }
    @media (max-width: 767px) {
      flex-direction: column;
      margin: 30px auto;
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
        margin-bottom: 35px;
      }
    }
    button:hover {
      box-shadow: 0px 1px 15px 0px rgba(0, 0, 0, 0.25);
    }
  }
`;

const BannerObject = styled.div`
  position: absolute;
  width: 44%;
  height: 100%;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  @media (max-width: 767px) {
    display: none;
  }
  .objectWrapper {
    margin-left: auto;
    position: relative;
    .dashboardWrapper {
      position: absolute;
      top: -9px;
      right: -18px;
      .chatObject {
        position: absolute;
        top: 20px;
        left: 120px;
      }
    }
  }
`;

export { BannerObject, BrowserIcons };

export default BannerWrapper;
