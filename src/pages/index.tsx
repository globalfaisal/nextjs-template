import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.jS App</title>
        <meta name="description" content="Next.js application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hello World!</h1>

        <p className={styles.description}>
          Build something cool with this Next.js typescript starter template
        </p>
      </main>
    </div>
  );
};

export default Home;
