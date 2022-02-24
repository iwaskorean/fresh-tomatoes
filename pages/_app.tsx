import { AppProps } from 'next/app';
import { GlobalStyle } from '../GlobalStyle';
import Header from '../components/Header';
import Layout from '../components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </Layout>
  );
}
