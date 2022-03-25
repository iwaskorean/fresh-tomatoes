import { HTMLAttributes, PropsWithChildren } from 'react';
import styled from '@emotion/styled';

interface CustomErrorPageLayoutProps
  extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {}

export default function CustomErrorPageLayout({
  children,
  ...props
}: CustomErrorPageLayoutProps) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

const Wrapper = styled.section`
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
