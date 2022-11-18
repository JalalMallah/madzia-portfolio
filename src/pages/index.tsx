import type { NextPage } from 'next';
import Head from 'next/head';
import HomePage from 'components/HomePage/HomePage';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Magdalena Sobkiewicz Photography</title>
        <meta name='description' content='Magdalena Sobkiewicz Photography' />
        <link rel='icon' href='/favicon.png' type='image/png' />
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
