import styles from './About.module.css';
import { personal, social } from '../data/portfolio';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.grid}>
          <div className={`${styles.imageWrap} animate-fade-up`}>
            <div className={styles.avatar}>
              🧑‍💻
              <div className={styles.avatarBorder} />
            </div>
            <div className={styles.badgeFloat}>
              <strong>∞</strong>
              Always Building
            </div>
          </div>

          <div className={`${styles.text} animate-fade-up`}>
            <div className="section-label">About</div>
            <h2 className="section-title">
              The Builder Behind<br />the <span>Code</span>
            </h2>
            <div className="section-divider" />
            <p>
              I&apos;m <strong>{personal.name}</strong> — a Full-Stack Developer and Web3 builder from {personal.location} on a mission to architect the decentralized future. I go by <strong>@{personal.alias}</strong> across the internet.
            </p>
            <p>
              I founded <strong>SOLQ</strong>, a Solana-based payment infrastructure enabling instant, near-zero-fee transactions for the next billion users. I also built <strong>QUANTCOIN</strong> — a post-quantum Layer 1 blockchain designed to survive the quantum computing era with 1 Trillion TPS.
            </p>
            <p>
              My tech stack spans <strong>Rust, TypeScript, Next.js, Solana, and beyond</strong>. I believe in open source, community, and shipping products that work in the real world — not just on whitepapers.
            </p>
            <p>
              When I&apos;m not building, I&apos;m creating content on social media, connecting with the Web3 community, and exploring the intersection of <strong>gaming, blockchain, and the creator economy</strong>.
            </p>
            <div className={styles.socialLinks}>
              {social.map((s) => (
                <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer" className={styles.socialChip}>
                  <span className={styles.socialIcon} aria-hidden="true">
                    {s.name === 'GitHub' && '🐙'}
                    {s.name === 'LinkedIn' && '💼'}
                    {s.name === 'X (Twitter)' && '𝕏'}
                    {s.name === 'Instagram' && '📸'}
                    {s.name === 'TikTok' && '📱'}
                    {s.name === 'Telegram' && '✈️'}
                    {s.name === 'Discord' && '🎮'}
                  </span>
                  {s.handle}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}