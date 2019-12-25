import styled from 'styled-components';

const FlexiblyOrganiseSectionWrapper = styled.section`
  min-height: 600px;
  display: flex;
  align-items: center;
  position: relative;
  padding: 5px;
  @media only screen and (max-width: 1200px) {
    min-height: 500px;
  }
  @media only screen and (max-width: 991px) {
    min-height: 500px;
    margin-bottom: 40px;
  }
  @media (max-width: 850px) {
    min-height: auto;
    display: block;
    text-align: center;
    margin-bottom: 60px;
  }
`;

const SectionObject = styled.div`
  position: absolute;
  width: 51%;
  top: 0;
  left: 0;
  display: flex;
  padding: 5px;
  border-radius: 5px;
  align-items: center;
  justify-content: flex-end;
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
      top: 4vw;
      left: 0;
      position: absolute;
      @media (max-width: 850px) {
        position: relative;
        top: 0vw;
      }

      .banner-img {
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
        border-radius: 5px;
      }
    }
  }
`;

export { SectionObject };

export default FlexiblyOrganiseSectionWrapper;
