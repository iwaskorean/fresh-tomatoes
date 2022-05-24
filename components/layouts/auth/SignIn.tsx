import { BuiltInProviderType } from 'next-auth/providers';
import { ClientSafeProvider, LiteralUnion, signIn } from 'next-auth/react';
import Heading from '@components/Heading/Heading';
import Button from './Button';
import Error from './Error';
import styled from '@emotion/styled';

interface SignInLayoutProps {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  >;
  error: string | string[] | undefined;
}

export default function SignInLayout({ providers, error }: SignInLayoutProps) {
  return (
    <>
      <Heading style={{ margin: '3rem 0' }}>Social Login</Heading>
      <Wrapper>
        {error && <Error error={error} />}

        {Object.values(providers).map((provider) => {
          return (
            <Button
              key={provider.id}
              onClick={() => signIn(provider.id)}
              provider={provider.id}
            >
              Sign in with {provider.id}
            </Button>
          );
        })}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  width: 100%;
  height: 80vh;
  min-height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  height: 3rem;
`;
