import styled from '@emotion/styled';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

interface ButtonProps
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  provider: string;
}

export default function Button({ provider, children, ...props }: ButtonProps) {
  return (
    <Wrapper provider={provider} {...props}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.button<{ provider: string }>`
  min-width: 20rem;
  width: 30vw;
  border: none;
  font-size: 1.5rem;
  color: var(--white);
  background-color: var(--blue);
  padding: 1.2rem 1.4rem;
  border-radius: 0.3rem;
  font-weight: var(--font-bold);
  cursor: pointer;
  margin-bottom: 3rem;
  text-transform: uppercase;

  ${({ provider }) =>
    provider === 'kakao' &&
    `
    background: #FFBC3F;
  `}
  ${({ provider }) =>
    provider === 'google' &&
    `
    background: var(--white);
    border: #E3E3E3 solid 1px;
    color: var(--black);
  `}
  ${({ provider }) =>
    provider === 'github' &&
    `
      background: var(--black);
  `}
`;
