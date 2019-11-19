import styled from 'styled-components';

const FooterWrapper = styled.footer`
  position: relative;
  background-color: #f9fbfd;
  overflow: hidden;
  background: linear-gradient(to bottom, #f7f8fd 0%, #fafbff 100%);
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
    padding-top: 80px;
    padding-bottom: 80px;
    position: relative;
    @media (max-width: 990px) {
      padding-bottom: 20px;
    }
  }
`;

const List = styled.ul``;

const ListItem = styled.li`
  a {
    color: rgba(52, 61, 72, 0.8);
    font-size: 14px;
    line-height: 36px;
    transition: all 0.2s ease;
    &:hover,
    &:focus {
      outline: 0;
      text-decoration: none;
      color: #343d48;
    }
  }
`;

export { List, ListItem };

export default FooterWrapper;
