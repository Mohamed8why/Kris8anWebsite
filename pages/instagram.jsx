// instagram.jsx

import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import InstagramComponent1 from './InstagramComponent1';
import InstagramComponent2 from './InstagramComponent2';
import InstagramComponent3 from './InstagramComponent3'; // Import the InstagramComponent
import styles from '../styles/instagram.module.css';

const Instagram = () => {
  const [showProfile, setShowProfile] = useState(false);

  // Function to toggle the visibility of the embedded profile
  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  useEffect(() => {
    // Add Instagram embed script dynamically
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
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
        <title>Kris8an - Instagram</title>
        <meta name="description" content="Kris8an's Instagram Page" />
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
        {/* Display Instagram posts */}
        <div className={styles.containe}>
          <div className={styles.post}>
            <blockquote>
              <InstagramComponent1 />
            </blockquote>
          </div>
          <div className={styles.post}>
            <blockquote>
              <InstagramComponent2 />
            </blockquote>
          </div>
          <div className={styles.post}>
            <blockquote>
              <InstagramComponent3 />
            </blockquote>
          </div>
        </div>

        {/* Button */}
        
        <div className={styles.buttonContainer}>
          <button className={styles.instagramButton} onClick={toggleProfile}>
            <span className={styles.buttonText}>View My Instagram</span>
          </button>
        </div>
        
        {/* Profile box */}
        {showProfile && (
          <div className={styles.profileBox}>
            <video src="/static/krisvid.mp4" autoPlay controls width="100%" height="100%" />
          </div>
        )}

        <div className={styles.buttonContainer}>
          <a href='https://www.instagram.com/kris8an/'>
          <button className={styles.instagramButton}>
            <span className={styles.buttonText}>Follow Me On Instagram</span>
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
