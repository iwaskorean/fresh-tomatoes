import { css } from '@emotion/react';
import { CSSObject } from '@emotion/serialize';
import { breakpoints } from 'GlobalStyle';

type PropsType = CSSObject | string;

export const mobile = (props: PropsType) => {
  return getMediaQuery(breakpoints.mobile, props);
};

export const tablet = (props: PropsType) => {
  return getMediaQuery(breakpoints.tablet, props);
};

export const desktopSmall = (props: PropsType) => {
  return getMediaQuery(breakpoints.desktopSmall, props);
};

const getMediaQuery = (
  breakpoint: typeof breakpoints[keyof typeof breakpoints],
  props: PropsType
) => {
  return css`
    @media (max-width: ${breakpoint}) {
      ${props}
    }
  `;
};
