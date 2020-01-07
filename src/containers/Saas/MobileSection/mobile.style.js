import styled from 'styled-components';

const MobileSectionWrapper = styled.section`
  min-height: 730px;
  display: flex;
  align-items: center;
  margin-bottom: 140px;
  margin-top: 140px;
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
    opacity: 0.5;
    margin-left: -5px;
    max-width: 350px;
    height: auto;
    margin-bottom: 10px;

    @media (max-width: 850px) {
      margin: auto;
      width: 100%;
      height: auto;
    }
  }
`;

const SectionObject = styled.div`
  position: absolute;
  width: 55%;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 767px) {
    position: relative;
    width: auto;
    height: auto;
    top: auto;
    left: auto;
  }
  img {
    height: auto;
  }
  .objectWrapper {
    position: relative;

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
      }

      .mobile-img {
        width: auto;
        max-height: 600px;

       @media (max-width: 850px) {
          max-height: 450px;
       } 
      }
    }
  }
`;

export { SectionObject };

export default MobileSectionWrapper;
