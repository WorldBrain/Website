import styled from 'styled-components';
import { themeGet } from 'styled-system';

const LoginForm = styled.div`
  width: 40%;
  max-width: 400px;
  margin: auto;
  //refactor..the props of Heading could be used
  h3 {
  	text-align: center;
  	margin: 30px;
  }
`;

const FormActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
`;

const ErrorMessage = styled.p`
  color: ${themeGet('colors.warning')};
`
export { ErrorMessage, FormActions };

export default LoginForm;
