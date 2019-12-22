import styled from 'styled-components';

const StoreLocalSectionWrapper = styled.section`
  min-height: 700px;
  display: flex;
  align-items: center;
  margin-bottom: 55px;
  position: relative;

  @media (max-width: 2600px) {
    min-height: 1000px;
  }

  @media (max-width: 1440px) {
    min-height: 700px;
  }

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
`;

const SectionObject = styled.div`
  position: absolute;
  width: 51%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 767px) {
    width: 100%;
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
    position: relative;
    .dashboardWrapper {
      box-shadow: none;
      position: absolute;
      top: 4vw;
      left: 0;
      .banner-img {
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
        border-radius: 5px;
      }
    }
  }
`;

export { SectionObject };

export default StoreLocalSectionWrapper;
