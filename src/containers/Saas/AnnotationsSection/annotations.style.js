import styled from 'styled-components';

const AnnotationsSectionWrapper = styled.section`
  min-height: 630px;
  display: flex;
  align-items: center;
  margin-bottom: 100px;
  position: relative;
  @media only screen and (max-width: 1200px) {
    min-height: 500px;
  }
  @media only screen and (max-width: 991px) {
    min-height: 370px;
    margin-bottom: 80px;
  }
  @media (max-width: 767px) {
    min-height: auto;
    flex-direction: column;
    .text-container {
      order: 1;
      width: 100%;
    }
  }
`;

const SectionObject = styled.div`
  position: absolute;
  width: 51%;
  height: 100%;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  order: 0;
  @media (max-width: 767px) {
    width: 100%;
    position: relative;
    padding: 0 30px;
    height: auto;
    top: auto;
    left: auto;
    .bg-img {
      display: none;
    }
  }
  img {
    margin-right: 20px;
    height: auto;
  }
  .objectWrapper {
    margin-right: auto;
    position: relative;

    .dashboardWrapper {
      position: absolute;
      top: 4vw;
      left: 0;
      @media (max-width: 767px) {
        position: static;
      }

      .banner-img {
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
        border-radius: 5px;
      }
    }
  }
`;

export { SectionObject };

export default AnnotationsSectionWrapper;
