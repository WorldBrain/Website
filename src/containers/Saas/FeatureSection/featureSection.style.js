import styled from 'styled-components';
import background from './icon-features-sprite.svg';

const FeatureSectionWrapper = styled.section`
  background: #f9fbfd;
  padding: 40px 0 60px 0;
  margin-bottom: 60px;
  @media (max-width: 990px) {
    padding: 60px 0 60px 0;
  }
  @media (max-width: 767px) {
    padding: 60px 0 30px 0;
    background: none;
  }
  @media (max-width: 575px) {
    padding: 60px 0 0 0;
    margin-bottom: 0;
  }

  a {
    text-decoration: none;
  }
  .feature__block {
    position: relative;
    height: 100%;
    transition: box-shadow 0.3s ease;
    padding-left: 0;

    &:hover {
      cursor: pointer;
    }
    &:hover i {
      background-position-x: -149px
    }
    &:hover i.tags-collections {
      background-position-x: -154px
    }
    @media (max-width: 775px) {
      display: none;
    }
  }
  .icon__wrapper {
    margin-right: 10px;
  }
  i {
    width: 100px;
    height: 70px;
    background-image: url(${background});
  }
  i.fulltext-search {
    background-position: -36px -18px;
  }
  i.annotations {
    background-position: -36px -200px;
  }
  i.stored-locally {
    background-position: -36px -115px;
  }
  i.sync-devices {
    background-position: -36px -295px;
  }
  i.tags-collections {
    background-position: -41px -391px;
  }
`;

export default FeatureSectionWrapper;
