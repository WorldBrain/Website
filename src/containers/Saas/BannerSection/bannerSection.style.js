import styled from 'styled-components';
import { themeGet } from 'styled-system';
import BannerBG from 'common/src/assets/image/saas/saas-banner.jpg';

const BrowserIcons = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  .browser-icon {
    height: 30px;
    width: auto;
    margin: 0 12px;
    @media (max-width: 990px) {
      flex-direction: column;
    }
  }
  @media (max-width: 1000px) {
    width:  50%;
    justify-content: space-around;
  }
`;

const View = styled.div `
    display: flex;
    align-items: center;
    width: 90%;
    max-width: 1800px
    justify-content: center;
    flex-direction: column;

    .textBox {
        width: 60%;
        text-align: center;
        margin: 50px 0px;
    }

    @media (max-width: 1000px) {
      flex-direction: column;
      width: 100%;
      justify-content: center;
      align-items: center;
      padding: 0 3%;

      & div {
        padding: 0 15px;
        width: fit-content;
      }

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

    @media (max-width: 576px) {
      padding: 0%;

      .objectWrapper {
        padding: 0px;
        
        img {
          padding: 0px;
        }
      }
    }
  }
`;

const BannerWrapper = styled.section`
  padding-top: 190px;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 100px;

  @media (max-width: 990px) {
    padding-bottom: 100px;
    min-height: auto;

    & img {
      margin: 20px 20px 10px 20px;
    }
  }
  @media (max-width: 1000px) {
    padding-top: 140px;
    padding-bottom: 20px;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  @media (max-width: 576px) {
    text-align: center;

    & img {
      margin: 0px;
    }
  }

  .row {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
  }

  .button__wrapper {
    display: flex;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 32px;
    flex-direction: column;
    @media (max-width: 1000px) {
      flex-direction: column;
    }
    @media (max-width: 1000px) {
      flex-direction: column;
      margin-bottom: 30px;
      margin-top: 80px;
      width: 100%;
    }
    @media (max-width: 650px) {
      width: 100%;
      flex-direction: column;
    }
    button {
      font-weight: 600;
      margin-bottom: 15px;
      padding: 10px 14px;
      font-size: 16px;
      min-height: 0;
      @media (max-width: 1000px) {
        padding: 10px 14px;
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
  flex-direction: column;
  align-items: center;

  @media (max-width: 576px) {
    width: 100%;
    position: static;

    .objectWrapper {
      position: relative;
      max-width: 100%;
      height: auto;

      & img {
        max-width: 100%;
        margin-top: 0px;
      }
    }
  }

  .objectWrapper {
    position: relative;
    max-width: 100%;
    height: auto;

    & img {
      max-width: 100%;
      margin-top: 150px;
    }

    @media (max-width: 576px) {
      img {
          max-width: 100%;
          margin-top: 50px;
        }
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

        & img {
          max-width: 80%;
          height: auto;
        }
      }

      @media (max-width: 1000px) {
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
