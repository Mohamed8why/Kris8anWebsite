import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import styles from '../styles/fanart.module.css';

const FanArt = () => {
  useEffect(() => {
    // Load Curator.io script after the component mounts
    const script = document.createElement('script');
    script.src = 'https://cdn.curator.io/published/68b3ecbd-432f-4f49-93fb-0fab9309a1b2.js';
    script.async = true;
    script.charset = 'UTF-8';
    document.body.appendChild(script);

    return () => {
      // Clean up function to remove the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Kris8an - Fan Art</title>
        <meta name="description" content="Kris8an's Fan Art Page" />
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
        <p className={styles.note}>Note: Only some posts uploaded to Instagram under #kris8anart will be added here</p>
        
        {/* Curator.io Feed */}
        <div id="curator-feed-default-feed-layout"></div>
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
              <a href="/home">Home</a>
            </li>
            <li className={styles.footerItem}>
              <a href="/instagram">Instagram</a>
            </li>
            <li className={styles.footerItem}>
              <a href="/tiktok">TikTok</a>
            </li>
            <li className={styles.footerItem}>
              <a href="/youtube">YouTube</a>
            </li>
            <li className={styles.footerItem}>
              <a href="/fanart">Fan Art</a>
            </li>
            <li className={styles.footerItem}>
              <a href="/business">Business</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default FanArt;
