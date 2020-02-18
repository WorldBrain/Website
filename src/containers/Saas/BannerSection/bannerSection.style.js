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
      margin-left: 0px;
    }
  }
  @media (max-width: 850px) {
    width:  50%;
    justify-content: space-around;
  }
`;

const View = styled.div `
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1800px
    justify-content: center;

    .textBox {
        padding-left: 50px;
        width: 60%;
    }

    @media (max-width: 850px) {
      flex-direction: column;
      width: 100%;
      justify-content: center;
      align-items: center;
      padding: 0 3%;

      & * {
        margin: 0px;
        padding: 0px;
        width: 100%;
      }

      & h1 {
        margin-bottom: 10px;
      }

      .textBox {
        padding: 5%;
        width: 100%;
      }

      & h2 {
        font-size: 1.5rem;
      }
    }
  }
`;

const BannerWrapper = styled.section`
  padding-top: 120px;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 990px) {
    padding-bottom: 60px;
    min-height: auto;
  }
  @media (max-width: 850px) {
    padding-top: 140px;
    padding-bottom: 20px;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
  }

  @media (max-width: 576px) {
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
    width: 90%;
    @media (max-width: 850px) {
      width: 100%;
    }
    @media (max-width: 850px) {
      flex-direction: column;
      margin-bottom: 30px;
      margin-top: 80px;
    }
    @media (max-width: 576px) {
      width: 100%;
    }
    button {
      font-weight: 600;
      padding: 12px 20px;
      min-height: 0;
      @media (max-width: 850px) {
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
  max-width: 100%;
  height: auto;
  margin-top: -10px;
  right: 0;
  display: flex;
  align-items: center;
  @media (max-width: 576px) {
    width: 100%;
    position: static;
  }

  .objectWrapper {
    position: relative;
    max-width: 100%;
    height: auto;

    & img {
      max-width: 100%;
    }

    @media (max-width: 850px) {
        display: none;
      }
    .banner-bg {
      @media (max-width: 850px) {
        display: none;
      }
    }

    .dashboardWrapper {
      position: absolute;
      max-width: 100%;
      height: auto;
      top: 50px;
      right: -40px;
      
      & img {
        max-width: 120%;
        height: auto;
      }

      @media (max-width: 1000px) {
        display: none; 

        & img {
          max-width: 80%;
          height: auto;
        }
      }

      @media (max-width: 850px) {
        display: none; 

        & img {
          display:none
        }
      }
      @media (max-width: 576px) {
        position: static;
      }
    }
  }
`;

export { BannerObject, BrowserIcons, View };

export default BannerWrapper;
