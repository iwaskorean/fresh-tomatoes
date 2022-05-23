import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { GlobalStyle } from '../GlobalStyle';
import Header from '@layouts/app/Header/Header';
import Layout from '@layouts/app/Layout/Layout';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
