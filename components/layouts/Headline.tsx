import { HTMLAttributes, PropsWithChildren } from 'react';
import styled from '@emotion/styled';

export default function Headline({
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

const Wrapper = styled.div`
  width: 90%;
  height: 22rem;
  display: grid;
  grid-template-columns: 1fr 15rem 15rem;
  gap: 0.1rem;
`;
