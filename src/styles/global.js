import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }

  body, button, input{
    background-color: #0D0D0F;
    font-family: 'Roboto', sans-serif;

    border: 0;
    outline: none;
  }
`;

export default GlobalStyles;