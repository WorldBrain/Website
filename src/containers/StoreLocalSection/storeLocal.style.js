import styled from 'styled-components';

const StoreLocalSectionWrapper = styled.section`
  min-height: 570px; // this gif has a smaller height to the rest
  display: flex;
  align-items: center;
  margin: 100px 0;
  padding: 5px;

  @media (min-width: 2000px) and (max-width: 2600px) {
    min-height: 900px;
  }

  @media (max-width: 1440px) {
    min-height: 590px;
  }

  @media only screen and (max-width: 1200px) {
    min-height: 500px;
  }

  @media only screen and (max-width: 991px) {
    min-height: 370px;
    margin-bottom: 80px;
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
  @media (max-width: 767px) {
    width: 100%;
    position: relative;
    height: auto;
    .bg-img {
      display: none;
    }
  }
  img {
    margin-right: 20px;
    height: auto;
  }
  .dashboardWrapper {
      top: 4vw;
      left: 0;
      position: absolute;
      @media (max-width: 767px) {
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

export default StoreLocalSectionWrapper;
