import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

interface ButtonProps
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {}

export default function Button({ children, ...props }: ButtonProps) {
  const router = useRouter();

  return (
    <StyledButton onClick={() => router.push('/')} {...props}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  padding: 1rem 1.2rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 0.2rem;
  background-color: var(--blue);
  outline: none;
  color: var(--white);
  margin: 2rem 0;
  cursor: pointer;

  &:hover {
    background-color: var(--blueHover);
  }
`;
