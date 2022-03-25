import styled from '@emotion/styled';
import { HTMLAttributes, PropsWithChildren } from 'react';

interface CodeProps
  extends PropsWithChildren<HTMLAttributes<HTMLHeadingElement>> {}

export default function Code({ children, ...props }: CodeProps) {
  return <ErrorCode {...props}>{children}</ErrorCode>;
}

const ErrorCode = styled.h1`
  font-size: 3rem;
`;
