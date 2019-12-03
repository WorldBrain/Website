import styled from 'styled-components';

const SponsorsWrapper = styled.section`
  padding: 40px 0 60px 0;
  margin-bottom: -100px;
  z-index: 1;

  @media (max-width: 990px) {
    padding: 60px 0 60px 0;
  }
  @media (max-width: 767px) {
    padding: 60px 0 30px 0;
    margin-bottom: -150px;
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

export default SponsorsWrapper;
