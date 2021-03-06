import { Global, css } from '@emotion/react';

export const GlobalStyle = () => <Global styles={globalStyle} />;

export const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktopSmall: '1024px',
  desktopLarge: '1366px',
  desktopExtraLarge: '1920px',
};

const globalStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;400;500;600;700&family=Oswald:wght@600&display=swap');

  :root {
    --red: #fa320a;
    --redDark1: #a33e2a;
    --blue: #3976dc;
    --blueHover: #2a62c0;
    --gray: #757a84;
    --grayLight1: #f3f3f3;
    --grayLight2: #e9e9ea;
    --grayLight3: #dcdce6;
    --grayLight4: #bcbdbe;
    --grayDark1: #505257;
    --grayDark2: #2a2c32;
    --yellow: #ffb600;
    --white: #ffffff;
    --black: #000000;
    --font-bold: 700;
    --font-regluar: 400;
    --font-light: 300;

    --font-oswald: Oswald, 'sans-serif';

    --layout-width: 80%;
    @media (max-width: ${breakpoints.mobile}) {
      --layout-width: 95%;
    }
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

    @media (min-width: ${breakpoints.desktopExtraLarge}) {
      font-size: 20px;
    }

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 14px;
    }
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 12px;
    }
  }

  body {
    background-color: var(--grayLight2);
  }
`;
