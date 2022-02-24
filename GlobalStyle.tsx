import { Global, css } from '@emotion/react';

export const GlobalStyle = () => <Global styles={globalStyle} />;

const globalStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;400;500;600;700&family=Oswald:wght@600&display=swap');

  :root {
    --color-primary: #3976dc;
    --color-secondary: #fa320a;
    --color-black: #000;
    --color-white: #fff;
    --font-bold: 700;
    --font-regluar: 400;
    --font-light: 300;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: 'Libre Franklin', sans-serif;
    font-weight: 400;
    font-size: 16px;
  }
`;
