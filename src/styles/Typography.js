import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
  html{
    font-family: 'Roboto Mono', monospace;
    color: var(--gray-1);
  }
  *{
    font-family: 'Roboto Mono', monospace;
    color: var(--gray-1);
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
  }

`;

export default Typography;
