import styled from '@emotion/styled';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: var(--grayLight1);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
