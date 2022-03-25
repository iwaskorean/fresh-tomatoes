import styled from '@emotion/styled';
import { HtmlHTMLAttributes, PropsWithChildren } from 'react';

interface MessageProps
  extends PropsWithChildren<HtmlHTMLAttributes<HTMLHeadingElement>> {}

export default function Message({ children, ...props }: MessageProps) {
  return <ErrorMessage {...props}>{children}</ErrorMessage>;
}

const ErrorMessage = styled.h2`
  font-weight: var(--font-regular);
  color: var(--grayDark1);
  letter-spacing: 1px;
`;
