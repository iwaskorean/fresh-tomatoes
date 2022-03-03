import Head from 'next/head';

export default function Seo({ title }: { title: string }) {
  return (
    <Head>
      <link rel='shortcut icon' href='/favicon.ico' />
      <title>{title} | Fresh Tomatoes </title>
    </Head>
  );
}
