import { HTMLAttributes, PropsWithChildren } from 'react';
import styled from '@emotion/styled';

export interface NavWrapperProps
  extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {}

export default function NavWrapper({ children, ...props }: NavWrapperProps) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;
`;
