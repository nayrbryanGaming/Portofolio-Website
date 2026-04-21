import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.logo}>
            <span className={styles.acc}>{'{'}</span>nayrbryan<span className={styles.acc}>{'}'}</span>
          </span>
          <p className={styles.copy}>
            © {year} Vincentius Bryan Kwandou. All rights reserved.
          </p>
        </div>
        <div className={styles.right}>
          <span className={styles.built}>
            Built with Next.js · Deployed on{' '}
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
              Vercel ↗
            </a>
          </span>
          <a href="https://github.com/nayrbryanGaming" target="_blank" rel="noopener noreferrer" className={styles.link}>
            @nayrbryanGaming
          </a>
        </div>
      </div>
    </footer>
  );
}
