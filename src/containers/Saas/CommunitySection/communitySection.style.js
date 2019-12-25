import styled from 'styled-components';

const CommunityWrapper = styled.section`
  background: #F8F9FE;
  padding: 40px 0 40px 0;
  height: 300px;
  
  .container {
    max-width: 1200px;  
    display: flex;
    align-items: center;
  }

  @media (max-width: 990px) {
    padding: 60px 0 60px 0;
  }
  @media (max-width: 850px) {
    padding: 60px 0 30px 0;
    height: 80vh;
    text-align: left;
  }
  .community-image {
    float: left;
    margin-right: 5%;
    width: 15%;
  }
`;

const CommunityText = styled.section`
  float: left;
  width: 75%;
`;

export { CommunityText };

export default CommunityWrapper;
