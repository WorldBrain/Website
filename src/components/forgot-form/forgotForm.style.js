import styled from 'styled-components';
import { themeGet } from 'styled-system';

const SignInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  max-width: 400px;

  form {
    display: flex;
    flex-direction: column;
  }
`;

const ErrorMessage = styled.p`
  color: ${themeGet('colors.warning')};
`

const SuccessMessage = styled.p`
  color: ${themeGet('colors.secondary')};
`

export { SuccessMessage, ErrorMessage };

export default SignInWrapper;
