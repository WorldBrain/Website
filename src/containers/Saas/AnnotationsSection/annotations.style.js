import styled from 'styled-components';

const AnnotationsSectionWrapper = styled.section`
  min-height: 700px;
  display: flex;
  align-items: center;
  position: relative;
  @media only screen and (max-width: 1200px) {
    min-height: 500px;
  }
  @media only screen and (max-width: 991px) {
    min-height: 370px;
    margin-bottom: 40px;
  }
  @media (max-width: 850px) {
     min-height: auto;
    display: block;
    text-align: center;
    margin-bottom: 60px;
    .text-container {
      order: 0;
      width: 100%;
    }
  }
`;

const SectionObject = styled.div`
  position: absolute;
  width: 51%;
  top: 0;
  right: 0;
  padding: 5px;
  border-radius: 5px
  display: flex;
  align-items: center;
  justify-content: flex-end;
  order: 1;
  @media (max-width: 850px) {
    width: 100%;
    position: relative;
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
    position: relative;

    .dashboardWrapper {
      position: absolute;
      top: 4vw;
      left: 0;
      @media (max-width: 850px) {
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
