import styled from '@emotion/styled';
import { HTMLAttributes, PropsWithChildren } from 'react';

export default function Heading({
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>) {
  return (
    <Title {...props}>
      <Highlight />
      {children}
    </Title>
  );
}

const Title = styled.h1`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-oswald);
  text-transform: uppercase;
  font-size: 1.4rem;
  letter-spacing: -1px;
`;

const Highlight = styled.span`
  width: 0.3rem;
  height: 1.7rem;
  border-radius: 3px;
  background-color: var(--blue);
  margin-left: 0.5rem;
`;
