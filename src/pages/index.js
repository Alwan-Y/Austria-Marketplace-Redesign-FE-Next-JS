import Head from 'next/head';
import Link from 'next/link';

import styles from '@/styles/Pages/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Austria-next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-info">Hallo word</h1>
        <p className="text-white-50 bg-dark">Nyobak boostrap</p>
        {/* Tes Link */}
        <Link href="/catalog/electronic">Electornic</Link>
        <Link href="/catalog/fashion">Fashion</Link>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
