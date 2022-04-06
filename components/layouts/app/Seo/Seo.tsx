import Head from 'next/head';

export default function Seo({ title }: { title: string }) {
  return (
    <Head>
      <meta name='description' content={title} />
      <link rel='shortcut icon' href='/favicon.ico' />
      <title>{title} | Fresh Tomatoes </title>
    </Head>
  );
}
