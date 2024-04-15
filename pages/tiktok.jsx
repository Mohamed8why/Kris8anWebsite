import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/tiktok.module.css';

const TikTok = () => {
  const [showProfile, setShowProfile] = useState(false);

  // Function to toggle the visibility of the embedded profile
  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  useEffect(() => {
    // Add TikTok embed script dynamically
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Kris8an - TikTok</title>
        <meta name="description" content="Kris8an's TikTok Page" />
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
        {/* Display TikTok posts */}
        <div className={styles.container}>
          <div className={styles.post}>
            <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@kris8an/video/7335498754755153184" data-video-id="7335498754755153184" style={{ maxWidth: '605px', minWidth: '325px' }}>
              <section>
                <a target="_blank" title="@kris8an" href="https://www.tiktok.com/@kris8an?refer=embed">@kris8an</a> Kris vs Yusuf🥊 @Panseri Yusuf
                <a target="_blank" title="♬ Automotivo XM, Taka Taka Taka Tá - Dj Brunin XM &#38; Mc Lullu &#38; Mc Erikah &#38; Kinechan" href="https://www.tiktok.com/music/Automotivo-XM-Taka-Taka-Taka-Tá-7320383822729168897?refer=embed">♬ Automotivo XM, Taka Taka Taka Tá - Dj Brunin XM &#38; Mc Lullu &#38; Mc Erikah &#38; Kinechan</a>
              </section>
            </blockquote>
          </div>
          <div className={styles.post}>
            <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@kris8an/video/7342945238228536609" data-video-id="7342945238228536609" style={{ maxWidth: '605px', minWidth: '325px' }}>
              <section>
                <a target="_blank" title="@kris8an" href="https://www.tiktok.com/@kris8an?refer=embed">@kris8an</a> trying the lip trick😳👄 cr: @hi &lt3
                <a target="_blank" title="♬ original sound - cartiiculture" href="https://www.tiktok.com/music/original-sound-7335451376627108640?refer=embed">♬ original sound - cartiiculture</a>
              </section>
            </blockquote>
          </div>
          <div className={styles.post}>
            <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@kris8an/video/7354761643802299681" data-video-id="7354761643802299681" style={{ maxWidth: '605px', minWidth: '325px' }}>
              <section>
                <a target="_blank" title="@kris8an" href="https://www.tiktok.com/@kris8an?refer=embed">@kris8an</a>
                <p>brawl stars rizz</p>
                <a target="_blank" title="♬ Chopin Nocturne No. 2 Piano Mono - moshimo sound design" href="https://www.tiktok.com/music/Chopin-Nocturne-No-2-Piano-Mono-6817665487665629186?refer=embed">♬ Chopin Nocturne No. 2 Piano Mono - moshimo sound design</a>
              </section>
            </blockquote>
          </div>
        </div>

        {/* Button */}

        <div className={styles.buttonContainer}>
          <button className={styles.instagramButton} onClick={toggleProfile}>
            <span className={styles.buttonText}>View My TikTok</span>
          </button>
        </div>

        {/* Profile box */}
        {showProfile && (
          <div className={styles.profileBox}>
            <video src="/static/kristan.mp4" autoPlay controls width="100%" height="100%" />
          </div>
        )}

        <div className={styles.buttonContainer}>
          <a href='https://www.tiktok.com/@kris8an/'>
            <button className={styles.instagramButton}>
              <span className={styles.buttonText}>Follow Me On TikTok</span>
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

export default TikTok;
