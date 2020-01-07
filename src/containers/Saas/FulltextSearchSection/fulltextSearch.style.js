import styled from 'styled-components';

const FulltextSearchSectionWrapper = styled.section`
  min-height: 630px; // this height is needed to vertically position the text correctly
  display: flex;
  align-items: center;
  margin: 100px 0;
  padding: 5px;
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
    display: block;
    text-align: center;
    margin-bottom: 100px;
    flex-direction: column;
  }
`;

const SectionObject = styled.div`
  position: absolute;
  width: 51%;
  top: 0;
  left: 0;
  padding: 5px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  order: 0;
  @media (max-width: 767px) {
    width: 100%;
    position: static;
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

export default FulltextSearchSectionWrapper;
