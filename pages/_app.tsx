import { AppProps } from 'next/app';
import { GlobalStyle } from '../GlobalStyle';
import Header from '@layouts/app/Header/Header';
import Layout from '@layouts/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </Layout>
  );
}
