import styled from 'styled-components';
import { themeGet } from 'styled-system';

const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  max-width: 400px;
  margin: auto;
  @media (max-width: 767px) {
     width: 100%;
  }
  form {
    display: flex;
    flex-direction: column;
  }
`;

const ErrorMessage = styled.p`
  color: ${themeGet('colors.warning')};
`
export { ErrorMessage };

export default SignUpWrapper;
