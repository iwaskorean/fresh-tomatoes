import { ChangeEvent, InputHTMLAttributes, RefObject } from 'react';
import styled from '@emotion/styled';
import { mobile } from '@utils/responsive';

interface SerachBarProps extends InputHTMLAttributes<HTMLInputElement> {
  handleChange(e: ChangeEvent<HTMLInputElement>): void;
  term: string;
  alert: boolean;
  inputRef: RefObject<HTMLInputElement>;
}

export default function SearchBar({
  handleChange,
  term,
  alert,
  inputRef,
  ...props
}: SerachBarProps) {
  return (
    <Input
      ref={inputRef}
      onChange={handleChange}
      term={term}
      alert={alert}
      {...props}
    />
  );
}

const Input = styled.input<{ term: string; alert: boolean }>`
  flex: 1;
  width: 20rem;
  border: none;
  border-radius: 0;
  font-size: 1rem;
  padding: 1rem 0.7rem;
  outline: 0;
  background-color: var(--white);
  ${({ term, alert }) =>
    term === '' &&
    alert &&
    `  
      border: 0.2rem solid var(--red);
      box-sizing: content-box important!;
      padding: 0.8rem 0.5rem;
    `}

  &::placeholder {
    color: grayLight4;
    font-size: 0.9rem;
  }

  ${mobile({ width: '100%' })}
`;
