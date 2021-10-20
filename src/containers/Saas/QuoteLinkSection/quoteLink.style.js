import styled from 'styled-components';

const ButtonGroup = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content flex-start;

@media (max-width: 850px) {
  width: auto;
  justify-content: center;
  margin-top: -20px;
  margin-bottom: -30px;
}

`


const PrimaryButton = styled.div`
    border-radius: 5px;
    border: 2px solid #5cd9a6;
    margin: 0 15px 0 0;
    padding: 5px 20px;
    background-color: #5cd9a6;
    font-weight: 500;
    color: white;
    font-size: 12px;
    cursor: pointer;
    white-space: nowrap;
`

const SecondaryButton = styled.div`
    border-radius: 5px;
    border: 2px solid #5671CF;
    margin: 0 5px 0 15px;
    padding: 5px 20px;
    font-weight: 500;
    color: #5671CF;
    font-size: 12px;
    cursor: pointer;
    white-space: nowrap;
`



const QuoteLinkSectionWrapper = styled.section`
  min-height: 630px; // this height is needed to vertically position the text correctly
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 0px;
  margin-top: 0px;
  justify-content: center;
  padding: 5px;
  @media only screen and (max-width: 1200px) {
    min-height: 500px;
  }
    @media (max-width: 850px) {
    min-height: auto;
    display: block;
    text-align: center;
    margin-bottom: 50px;
    margin-top: 100px;
    
    .text-container {
      order: 0;
      width: 100%;
    }
  }
  .tools {
    width: 60%;
  }
`;

const View = styled.div `
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1500px
    justify-content: center;
    
    @media (max-width: 850px) {
      flex-direction: column;
      width: 100%;
      justify-content: center;
      align-items: center;
      padding: 0 3%;

      & > div {
        margin: 0px;
        padding: 0px;
        width: 100%;
      }

      & .textArea {
        z-index: 2;
      }

      & h2 {
        font-size: 1.5rem;
      }

      & p {
        font-size: 1.1rem;
        margin-bottom: 35px;
        padding: 0px 20px;
      }
    }
}`;

const SectionObject = styled.div`
  top: 0;
  left: 0;
  width: 60%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  order: 0;
  @media (max-width: 850px) {
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
      width: 100%;
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
        width: 100%;
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

export { SectionObject, View, PrimaryButton, SecondaryButton, ButtonGroup };

export default QuoteLinkSectionWrapper;
