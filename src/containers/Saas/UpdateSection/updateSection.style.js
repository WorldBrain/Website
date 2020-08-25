import styled from 'styled-components';

const ButtonGroup = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content center;
`


const PrimaryButton = styled.div`
    border-radius: 5px;
    border: 2px solid #5cd9a6;
    margin: 0 15px;
    padding: 5px 20px;
    background-color: #5cd9a6;
    font-weight: 500;
    color: white;
    font-size: 12px;
    cursor: pointer;
`

const SecondaryButton = styled.div`
    border-radius: 5px;
    border: 2px solid #5671CF;
    margin: 0 5px 0 15;
    padding: 5px 20px;
    font-weight: 500;
    color: #5671CF;
    font-size: 12px;
    cursor: pointer;
`



const UpdateWrapper = styled.section`
  padding: 5px 0;
  display: flex;
  justify-content: center;
  background-color: #FFF5F5;

  z-index: 1;
  text-align: center;


  @media (max-width: 990px) {
    padding: 5px 0;
    margin-bottom: -100px;
    top: 56px;
  }
  @media (max-width: 767px) {
    padding: 5px 0;
    margin-bottom: -100px;
    top: 56px;
    .row { 
      flex-direction: column;
    }
  }

  .sub-text {
    width: 70%;
    margin: auto auto 20px auto;
    @media (max-width: 767px) {
      width: 100%;
    }
  }
`;


const SubText = styled.div`
  margin-bottom: 30px;
  display:inline-block;
  text-align: center;
 `;

export { UpdateWrapper, SubText, PrimaryButton, SecondaryButton, ButtonGroup };

export default UpdateWrapper;