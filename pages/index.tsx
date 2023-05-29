import Head from 'next/head';
import Layout from '@/components/layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>alok</title>
      </Head>
      <section>
        <p>ALOK SINGH</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}