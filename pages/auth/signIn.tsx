import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';
import { getProviders, getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Seo from '@layouts/app/Seo/Seo';
import SignInLayout from '@layouts/auth/SignIn';

export default function SignIn({
  providers,
}: InferGetServerSidePropsType<GetServerSideProps>) {
  const { query } = useRouter();
  const error = query.error;

  return (
    <>
      <Seo title='Sign In' />
      <SignInLayout providers={providers} error={error} />
    </>
  );
}

export const getServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => {
  const session = await getSession({ req });
  const providers = await getProviders();

  if (session) {
    return {
      redirect: {
        destination: '/',
      },
    };
  }

  return {
    props: { providers },
  };
};
