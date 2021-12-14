import styled, { keyframes } from 'styled-components';

const StoreLocalSectionWrapper = styled.section`
  min-height: 400px;
  display: flex;
  align-items: center;
  margin-bottom: 250px;
  margin-top: 150px;
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
    margin-top: 80px;
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

const float = keyframes `
      0% {
          transform: translateY(0px);
      }

      50% {
          transform: translateY(-20px);
      }

      100% {
          transform: translateY(0px);
      }
`;

 
const View = styled.div `
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1500px
    flex-direction: row;
    justify-content: center;
  
    @media (max-width: 850px) {
      flex-direction: column;
      width: 100%;
      justify-content: center;
      align-items: center;
      padding: 0 3%;
      text-align: center;

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

      & button {
        max-width: 150px;
        width: 150px;
        margin-bottom: 30px;
      }
    }
}
`;

const infoContainer = styled.div`
    flex-direction: column;
    align-items: flex-start;
`  

const FloatingImage = styled.div `
    animation-name:  ${float}, scale-in-center;
    animation-duration: 8s, 1s;
    animation-timing-function: ease-in-out, ease;
    animation-iteration-count: infinite, 1;
    width: 210px;
    margin: 1rem auto 2rem;
    width: 80%;
}
`;

const SectionObject = styled.div`
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: flex-start;
  width: 30%;
  @media (max-width: 767px) {
    position: relative;
    width: 40%;
    height: auto;
    top: auto;
    left: auto;
  }
  img {
    height: auto;
    width: 90%
    margin: auto;
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

export { SectionObject, View, FloatingImage};

export default StoreLocalSectionWrapper;
