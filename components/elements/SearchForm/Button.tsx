import styled from '@emotion/styled';
import { ButtonHTMLAttributes } from 'react';

export default function Button({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <SubmitButton type='submit' aria-label='submit' {...props} />;
}

const SubmitButton = styled.button`
  width: 3rem;
  height: 100%;
  border: none;
  outline: none;
  background: url('/static/icons/icon-search.png') no-repeat;
  background-size: 1.5rem;
  background-position: center;
  background-color: var(--white);
  cursor: pointer;
`;
