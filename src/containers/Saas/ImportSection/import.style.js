import styled from 'styled-components';
import BgImage from 'common/src/assets/image/saas/map.png';

const ImportSectionWrapper = styled.section`
  background-color: #fafbff;
  background-image: url(${BgImage});
  background-repeat: no-repeat;
  background-position: 25% center;
  background-size: 100%;
  padding: 40px 0;

  img {
    max-width: 400px;
    margin: auto;
  }

  @media (max-width: 575px) {
    background-image: none;
  }
`;

export default ImportSectionWrapper;
