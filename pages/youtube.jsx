// instagram.jsx

import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/youtube.module.css';

const Instagram = () => {

  useEffect(() => {
    // Add Instagram embed script dynamically
    const script = document.createElement('script');
    script.src = '//www.youtube.com/embed.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Kris8an - YouTube</title>
        <meta name="description" content="Kris8an's YouTube Page" />
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
    {/* Display YouTube videos */}
    <div className={styles.containe}>
        <div className={styles.post}>
            <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/PNSIDKaeFpY?si=FreIlkGSyGhZQDNg"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div>
        <div className={styles.post}>
            <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/luS0KFyXEOE?si=c5ScDJxAAGvMa1Zh"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div>
    </div>
    <div className={styles.profileBox}>
          <div className={styles.imageContainer}>
            <Image src="/ontop.jpeg" width={230} height={230} />
          </div>
          <h1 className='goody'>Good vibes only :)</h1>
        </div>

    <div className={styles.buttonContainer}>
        <a href='https://www.youtube.com/@kris8an/'>
            <button className={styles.instagramButton}>
                <span className={styles.buttonText}>Subscribe To Me On YouTube</span>
            </button>
        </a>
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
              <Link href="/home">Home</Link>
            </li>
            <li className={styles.footerItem}>
              <Link href="/instagram">Instagram</Link>
            </li>
            <li className={styles.footerItem}>
              <Link href="/tiktok">TikTok</Link>
            </li>
            <li className={styles.footerItem}>
              <Link href="/youtube">YouTube</Link>
            </li>
            <li className={styles.footerItem}>
              <Link href="/fanart">Fan Art</Link>
            </li>
            <li className={styles.footerItem}>
              <Link href="/business">Business</Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Instagram;
