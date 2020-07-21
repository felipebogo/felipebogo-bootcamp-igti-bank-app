import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding:0;
    outline:0;
    box-sizing:border-box;
  }

  body{
    background: rgba(248,248,248,1);
    color: rgba(0,0,0,0.9);
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  h1,h2,h3,h4,h5,h6, strong {
    font-weight: 500;
    margin: 0;
  }
  button {
    cursor: pointer
  }
`;
