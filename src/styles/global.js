import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  html, body, #root {
    height: 100%;
  }

  html {
    font-size: 62.5%;
    font-family: "Roboto", sans-serif;
    height: 100%;
  }

  input, button {
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  ul li {
    list-style: none;
  }

  a {
    text-decoration: none !important;
  }

  .collapse-css-transition {
    transition: height 280ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .mg-md-top {
    margin-top: 7rem;
  }

  @media(max-width: 56rem) {
    .mg-md-top {
      margin-top: 0;
    }
  }
`;
