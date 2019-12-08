import styled from 'styled-components';

const CommunityWrapper = styled.section`
  background: #F8F9FE;
  padding: 40px 0 40px 0;

  .container {
    max-width: 900px;
  }

  @media (max-width: 990px) {
    padding: 60px 0 60px 0;
  }
  @media (max-width: 767px) {
    padding: 60px 0 30px 0;
  }
  .community-image {
    float: left;
    margin-right: 5%;
    width: 20%;
  }
`;

const CommunityText = styled.section`
  float: left;
  width: 75%;
`;

export { CommunityText };

export default CommunityWrapper;
