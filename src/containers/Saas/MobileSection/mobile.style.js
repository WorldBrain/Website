import styled from 'styled-components';

const MobileSectionWrapper = styled.section`
  min-height: 630px;
  display: flex;
  align-items: center;
  margin-bottom: 150px;
  margin-top: 150px;
  justify-content: center;
  position: relative;
  @media only screen and (max-width: 1200px) {
    min-height: 500px;
  }
  @media only screen and (max-width: 991px) {
    min-height: 500px;
    margin-bottom: 40px;
  }
  @media (max-width: 767px) {
    min-height: auto;
    display: block;
    text-align: center;
  }

  .mobileDownload {
    max-width: 150px;
    height: auto;
    margin-right: 10px;
    cursor: pointer;

    @media (max-width: 850px) {
      margin: auto;
      width: 100%;
      height: auto;
    }
  }
`;

const View = styled.div `
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1500px
    flex-direction: row-reverse;
 
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

      & h2 {
        font-size: 1.5rem;
      }

      & p {
        font-size: 1.1rem;
        margin-bottom: 15px;
      }

      & img {
        width: 100%;
      }
    }
  }
`;

const DownloadButtons = styled.div `
    display: flex;
    align-items: center;
    width: 100%;
  }
`;

const SectionObject = styled.div`
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: flex-start;
  @media (max-width: 767px) {
    position: relative;
    width: auto;
    height: auto;
    top: auto;
    left: auto;
  }
  img {
    height: auto;
    width: 90%
    max-height: 100%;
    align-self: flex-start;
  }

  @media (max-width: 850px) {
      & img {
        width: 100%;
        margin-top: 20px;
        height: 100%;
      }
    }

  .objectWrapper {
    position: relative;
    justify-content: flex-start;
    display: flex;
    height: 'auto',

    .bg-image {
      opacity: 0.6;
      @media (max-width: 575px) {
        display: none;
      }
    }

    .imageOne {
      position: absolute;
      top: 5vw;
      left: 160px;

      @media (max-width: 575px) {
        position: static;
        width: 80%;
        margin: auto;
        height: 100%;
      }

      .mobile-img {
        width: auto;
        height: 100%;

       @media (max-width: 850px) {
          max-height: 450px;
       } 
      }
    }
  }
`;

export { SectionObject, View, DownloadButtons };

export default MobileSectionWrapper;
