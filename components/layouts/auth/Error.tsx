import { errors } from './errors';
import styled from '@emotion/styled';

interface SignInErrorProps {
  error: string[] | string | undefined;
}

export default function Error({ error }: SignInErrorProps) {
  // have to fix type type assertion
  const errorMessage =
    error && (errors[error as keyof typeof errors] ?? 'Unable to sign in.');

  return <Wrapper>{errorMessage}</Wrapper>;
}

const Wrapper = styled.h2`
  color: var(--red);
  text-align: center;
  margin: 0 1rem 1rem 1rem;
  font-size: 1.3rem;
`;
