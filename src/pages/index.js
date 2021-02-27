<<<<<<< HEAD
import Head from 'next/head';
import styles from '@/styles/Pages/Home.module.scss';
=======
import Head from 'next/head'
import Link from 'next/link'
>>>>>>> 778527e... feat: add card component

import styles from '@/styles/Pages/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Austria-next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
<<<<<<< HEAD
        <h1 className="text-info">Hallo word</h1>
        <p className="text-white-50 bg-dark">Nyobak boostrap</p>
=======
        <h1 className='text-info'>Hallo word</h1>
        <p className='text-white-50 bg-dark'>Nyobak boostrap</p>
        {/* Tes Link */}
        <Link href='/catalog/electronic'>Electornic</Link>
        <Link href='/catalog/fashion'>Fashion</Link>
>>>>>>> 778527e... feat: add card component
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
