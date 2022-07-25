import styled, { createGlobalStyle } from 'styled-components';
import { themeGet } from 'styled-system';

export const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Inter', sans-serif;
    color: ${themeGet('colors.textColor')};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Inter', sans-serif;
  }

  a {
    color: ${themeGet('colors.secondary')};
    text-decoration: underline;
    &:hover {
      color: #8BA2F1;
      text-decoration: underline;
    }
  }

  ol li, ul li {
    margin-bottom: 10px;
  }

  ol li {
    list-style-type: decimal;
  }

  section {
    position: relative;
  }

  .drawer-content-wrapper{
    @media (max-width: 767px) {
      width: 300px!important;
    }
    .drawer-content {
      padding: 60px;    
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media (max-width: 767px) {
        padding: 50px 40px 30px 40px;
      }
      .mobile_menu {
        margin-bottom: 40px;
        flex-grow: 1;
        @media (max-width: 767px) {
          margin-bottom: 30px;
        }
        li{
          margin-bottom: 35px;
          padding: 5px 10px;
          color: #347AE2;
          @media (max-width: 767px) {
            margin-bottom: 25px;
          }
          a{
            font-size: 20px;
            font-weight: 400;
            color: #347AE2;
            text-decoration: none;
            position: relative;
            transition: 0.15s ease-in-out;
            @media (max-width: 767px) {
              font-size: 18px;
            }
            &:hover {
              color: ${themeGet('colors.primary')};
              background: #fff003;

            }
            &:before{
              content: '';
              width: 7px;
              height: 7px;
              background: ${themeGet('colors.primary')};
              border-radius: 50%;
              position: absolute;
              top: 50%;
              left: -15px;
              transform: translateY(-50%);
              opacity: 0;
            }
          }
          &.is-current {
            a {
              color: ${themeGet('colors.primary')};
              &:before{
                opacity: 1;
              }
            }
          }
        }
      }
      .navbar_drawer_button button{
        width: 100%;
      }
    }

    .reusecore-drawer__close{
      width: 34px;
      height: 34px;
      position: absolute;
      top: 20px;
      right: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      @media (max-width: 767px) {
        top: 15px;
        right: 15px;
      }
      &:before{
        content: '\f10b';
        font-family: Flaticon;
        font-size: 26px;
        color: ${themeGet('colors.primary')};
        transform: rotate(45deg);
        display: block;
      }
    }
  }

  /* Modal default style */
  button.modalCloseBtn {
    color: ${themeGet('colors.white', '#ffffff')} !important;

    &.alt {
      background-color: ${themeGet('colors.primary')} !important;
      box-shadow: 0px 9px 20px -5px rgba(82, 104, 219, 0.57) !important;
    }   
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  overflow: hidden;
  /* for pages with minimal content we want to footer to still be at the bottom */
  /* calc page height as total minus footer and header height */
  min-height: calc(100vh - 502px);
  background: #15202B;

  .sticky-nav-active {
    .hosting_navbar {
      background: #15202B;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.10);
      padding: 10px 0;
      display: flex;
    }
  }

  .hosting_navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    transition: 0.35s ease-in-out;
    padding: 30px 0;
    color: #347AE2;
    .main_menu {
      margin-right: 40px;
      display: flex;
      grid-gap: 20px;
      li {
        display: inline-block;
        color: #347AE2;
        margin-bottom: 0;
        &:first-child {
          padding-left: 0;
        }
        &:last-child {
          padding-right: 0;
        }
        &.is-current {
          a {
            color: ${themeGet('colors.secondary')};
          }
        }
        a {
          text-decoration: none;
          padding: 10px 20px;
          border-radius: 5px;
          color: #347AE2;
          font-size: 14px;
          font-weight: 500;
          transition: 0.15s ease-in-out;
          &:hover {
            color: #F7F9F9;
            background: #fffff005;
          }
        }
      }
      @media (max-width: 990px) {
        display: none;
      }
    }
    .navbar_button {
      @media (max-width: 990px) {
        display: none;
      }
    }
    .reusecore-drawer__handler {
      @media (min-width: 991px) {
        display: none !important;
      }
      .hamburgMenu__bar {
        > span {
        }
      }
    }
  }

`;

export const ButtonGroup = styled.div``;
