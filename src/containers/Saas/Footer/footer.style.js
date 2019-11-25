import styled from 'styled-components';

const FooterWrapper = styled.footer`
  position: relative;
  background-color: #f9fbfd;
  overflow: hidden;
  font-size: 0.875rem;
  background: linear-gradient(to bottom, #f7f8fd 0%, #fafbff 100%);
  a {
    color: #265A4E;
  }
  a:hover {
    color: #13382F;
  }
  @media (min-width: 576px) {
    padding-top: 130px;
    &:before {
      content: '';
      position: absolute;
      width: 104%;
      padding-bottom: 104%;
      top: 25%;
      left: -50px;
      pointer-events: none;
      background: linear-gradient(180deg, rgba(99, 242, 199, 0.44) 0%, rgba(22, 213, 155, 0.44) 87.98%);
      transform: rotate(3deg);
      @media (max-width: 767px) {
        padding-bottom: 150%;
      }
    }
  }

  .footer_container {
    padding-top: 30px;
    padding-bottom: 30px;
    position: relative;
    @media (max-width: 990px) {
      padding-bottom: 20px;
    }
  }
`;

const List = styled.ul``;

const ListItem = styled.li`
  a {
    transition: all 0.2s ease;
    &:hover,
    &:focus {
      outline: 0;
      text-decoration: none;
    }
  }
`;

export { List, ListItem };

export default FooterWrapper;
