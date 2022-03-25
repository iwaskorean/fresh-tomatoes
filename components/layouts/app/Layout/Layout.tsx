import { PropsWithChildren, ReactNode } from 'react';
import styled from '@emotion/styled';

export default function Layout({ children }: PropsWithChildren<ReactNode>) {
  return (
    <StyledLayout>
      <Wrapper>{children}</Wrapper>
    </StyledLayout>
  );
}

const StyledLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: inherit;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Wrapper = styled.div`
  width: var(--layout-width);
  background-color: var(--white);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;