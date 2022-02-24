import Layout from '../components/Layout';
import { GlobalStyle } from '../GlobalStyle';

export default function App({ Component, pageProps }: any) {
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}
