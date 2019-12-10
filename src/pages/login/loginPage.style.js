import styled from 'styled-components';
import { themeGet } from 'styled-system';

const SignupMessage = styled.div`
  width: 40%;
  max-width: 400px;
  margin: 40px auto 0;
  color: ${themeGet('colors.lightestText')};
  font-size: 0.875rem;
  text-align: center;

  .heading-wrapper {
    align-items: center;
    display: flex;
  }

  h4 {
    font-size: 1.125rem;
    font-weight: 500;
    text-align: center;
    padding: 10px;
    width: 70%;
    color: ${themeGet('colors.lightestText')};
  }

  .line {
    background: #BDBDBD;
    height: 1px;
    width: 15%;
  }
`;

export default SignupMessage;
