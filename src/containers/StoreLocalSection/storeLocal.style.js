import styled from 'styled-components';

const StoreLocalSectionWrapper = styled.section`
  min-height: 630px;
  display: flex;
  align-items: center;
  margin-bottom: 100px;
  margin-top: 100px;
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
    margin-left: -5px;
    max-width: 350px;
    height: auto;
    margin-bottom: 10px;
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
    flex-direction: row;
  
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
    }
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

export { SectionObject, View };

export default StoreLocalSectionWrapper;
