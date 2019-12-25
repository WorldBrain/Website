import styled from 'styled-components';

const CommunityWrapper = styled.section`
  background: #F8F9FE;
  padding: 40px 0 40px 0;
  display: flex;
  align-items: center;
  height: 300px
  
  .container {
    max-width: 1200px;  
    display: flex;
    align-items: center;
  }

  @media (max-width: 850px) {
    padding-top: 100px;
    text-align: left;
    height: 500px;
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
