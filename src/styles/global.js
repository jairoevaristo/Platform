import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }

  body{
    background-color: #0D0D0F;
  }

  body, button, input {
    font-family: 'Inter', sans-serif;

    border: 0;
    outline: none;
  }

  button, input {
    background: none;
  }
`;

export default GlobalStyles;