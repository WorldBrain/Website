import styled from 'styled-components';

const MobileSectionWrapper = styled.section`
  min-height: 630px;
  display: flex;
  align-items: center;
  margin-bottom: 55px;
  position: relative;
  @media only screen and (max-width: 1200px) {
    min-height: 500px;
  }
  @media only screen and (max-width: 991px) {
    min-height: 370px;
    margin-bottom: 40px;
  }
  @media (max-width: 767px) {
    min-height: auto;
    display: block;
  }

  .mobileDownload {
    opacity: 0.5;
    margin-left: -15px;
  }
`;

const SectionObject = styled.div`
  position: absolute;
  width: 55%;
  height: 100%;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 767px) {
    position: relative;
    height: auto;
    top: auto;
    left: auto;
  }
  img {
    margin-right: 20px;
    height: auto;
  }
  .objectWrapper {
    margin-right: auto;
    position: relative;

    .bg-image {
      opacity: 0.6;
    }

    .imageOne {
      position: absolute;
      top: 5vw;
      left: 0;

      .mobile-img {
        width: auto;
        height: 500px;
      }
    }
    .imageTwo {
      position: absolute;
      top: 2.5vw;
      left: 170px;

      .mobile-img {
        width: auto;
        height: 500px;
      }
    }
  }
`;

export { SectionObject };

export default MobileSectionWrapper;
