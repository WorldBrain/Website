import styled from 'styled-components';

const FooterWrapper = styled.footer`
  position: relative;
  background-color: #fff;
  overflow: hidden;
  font-size: 1rem;;
  background: linear-gradient(to bottom, #fff 0%, #fafbff 100%);
  a, p {
    color: #265A4E;
    text-decoration: none;
  }
  a:hover {
    color: #13382F;
    text-decoration: none;
  }
  padding-top: 130px;
  &:before {
    content: '';
    position: absolute;
    width: 114%;
    padding-bottom: 104%;
    top: 25%;
    left: -50px;
    pointer-events: none;
    background: linear-gradient(180deg, rgba(99, 242, 199, 0.44) 0%, rgba(22, 213, 155, 0.44) 87.98%);
    transform: rotate(3deg);
  }

  .footer_container {
    padding-top: 30px;
    padding-bottom: 30px;
    position: relative;
    @media (max-width: 990px) {
      padding-bottom: 20px;
      .support-links {
        font-size: 0.875rem;
      }
    }
    @media (max-width: 767px) {
      padding-top: 60px;
      .support-links {
        flex-direction: column;
        font-size: 1rem;
        align-items: start;
        a { margin-bottom: 3px; }
      }
      img { margin-bottom: 20px; }
      .subscribe {
        display: none;
      }
    }
  }
`;

const List = styled.ul``;

const ListItem = styled.li`
  margin-bottom: 3px;
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
