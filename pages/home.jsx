import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Kris8an</title>
                <meta name="description" content="Kris8an is cool" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

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

            <main className={styles.main}>
                <Image
                    src="/phuto.jpg" // Replace with your large profile photo
                    alt="Large Profile Photo"
                    width={400}
                    height={400}
                    className={styles.largeProfilePhoto}
                />
                <h1 className={styles.bigText}>Don't be afraid to be yourself</h1>
                <a href='https://www.famousbirthdays.com/people/kris8an.html'><button className={styles.button}>Boost Me On Famous Birthdays</button></a>
                <h2 className={styles.aboutMe}>Who Am I?</h2>
                <p className={styles.po}>My name is Kris Grippo. I am a 21 year old content creator, who posts on Instagram, TikTok and Youtube.
                    I was born and raised in Switzerland, so I am Swiss, but my family is Italian. 
                </p>
                <p className={styles.po}>You can change this if you want.</p>
                <a href='https://linktr.ee/kris8an'><button className={styles.button}>Check Out My Socials</button></a>
            </main>

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

export default Home;
