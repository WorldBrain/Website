import styled from 'styled-components';

const LoginForms = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 120px;

  @media (max-width: 767px) {
  	flex-direction: column;
  }
`;

export default LoginForms;
