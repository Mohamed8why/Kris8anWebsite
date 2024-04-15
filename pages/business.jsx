// pages/business.jsx

import Head from 'next/head';
import styles from '../styles/business.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Business = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kris8an - Business</title>
        <meta name="description" content="Kris8an's Business Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.profileContainer}>
          <div className={styles.profile}>
            <Image
              src="/phot.jpg"
              alt="Profile Photo"
              width={50}
              height={50}
              className={styles.profilePhoto}
            />
            <span className={styles.profileName}>Kris8an</span>
          </div>
          <nav className={styles.navigation}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <Link href="/home">Home</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/instagram">Instagram</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/tiktok">TikTok</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/youtube">YouTube</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/fanart">Fan Art</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/business">Business</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className={styles.main}>
        {/* First Box */}
        <div className={styles.box}>
          <h1 style={{ fontSize: '2.5rem' }}>8.5M+ Followers On TikTok</h1>
          <h1 style={{ fontSize: '2.5rem' }}>5M+ Subscribers On YouTube</h1>
          <h1 style={{ fontSize: '2.5rem' }}>2.3M+ Followers On Instagram</h1>
        </div>

        {/* Second Box */}
        <div className={styles.profileBox}>
          <h2>For any business inquiries, send me an email at</h2>
          <h2>kris@attachedagency.com</h2>
        </div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerColumn}>
          <h3 className={styles.footerHeading}>Links</h3>
          <ul className={styles.footerList}>
            <li className={styles.footerItem}>
              <a href="https://www.tiktok.com/@kris8an/">TikTok</a>
            </li>
            <li className={styles.footerItem}>
              <a href="https://www.instagram.com/kris8an/">Instagram</a>
            </li>
            <li className={styles.footerItem}>
              <a href="https://www.youtube.com/@kris8an/">YouTube</a>
            </li>
            <li className={styles.footerItem}>
              <a href="https://linktr.ee/kris8an">Linktree</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h3 className={styles.footerHeading}>Navigation</h3>
          <ul className={styles.footerList}>
            <li className={styles.footerItem}>
              <Link href="/home">Home</a>
            </li>
            <li className={styles.footerItem}>
              <Link href="/instagram">Instagram</a>
            </li>
            <li className={styles.footerItem}>
              <Link href="/tiktok">TikTok</a>
            </li>
            <li className={styles.footerItem}>
              <Link href="/youtube">YouTube</a>
            </li>
            <li className={styles.footerItem}>
              <Link href="/fanart">Fan Art</a>
            </li>
            <li className={styles.footerItem}>
              <Link href="/business">Business</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Business;