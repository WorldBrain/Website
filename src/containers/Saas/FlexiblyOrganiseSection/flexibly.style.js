import styled from 'styled-components';

const FlexiblyOrganiseSectionWrapper = styled.section`
  min-height: 500px; // this height is needed to vertically position the text correctly
  display: flex;
  align-items: center;
  margin: 100px 0;
  padding: 5px;
  position: relative;
  justify-content: center;
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

const View = styled.div `
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1500px

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


const SectionObject = styled.div`
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
  .objectWrapper {
    position: relative;
    .dashboardWrapper {
      max-width: 100%;
      height: auto;
      align-items: flex-start;
      diplay: flex;
      flex-direction: column;
      width: auto;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      @media (max-width: 767px) {
        position: relative;
        top: 0vw;
      }
      .browser {
        max-width: 100%;
        height: auto;
      }
      .banner-img {
          border-bottom-right-radius: 10px;
          border-bottom-left-radius: 10px;
          max-width: 100%;
          height: auto;
          width: 100%;
      }
    }
  }
`;

export { SectionObject, View};

export default FlexiblyOrganiseSectionWrapper;
