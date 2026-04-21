import styles from './Skills.module.css';
import { skills } from '../data/portfolio';

const categoryIcons = {
  'Blockchain / Web3': '⛓️',
  'Frontend': '🎨',
  'Backend': '⚙️',
  'DevOps & Tools': '🛠️',
  'Domains': '🌐',
};

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.left}>
            <p className="section-label">Expertise</p>
            <h2 className="section-title">Tech Stack &<br />Domains</h2>
            <p className="section-subtitle">
              Specialized in Web3 infrastructure, post-quantum cryptography,
              and production-grade DeFi protocols — across both frontend and protocol layers.
            </p>

            <div className={styles.highlights}>
              {[
                { icon: '🔮', text: 'Post-Quantum Cryptography (ML-DSA-87 / ML-KEM-1024)' },
                { icon: '⚡', text: 'Solana Mainnet & Jupiter V2 Integration' },
                { icon: '🏗️', text: 'Layer 1 Protocol Architecture (DAG + BFT)' },
                { icon: '🌐', text: 'Full-Stack: Flutter · Node.js · React / Next.js' },
              ].map((h, i) => (
                <div key={i} className={styles.highlight}>
                  <span className={styles.highlightIcon}>{h.icon}</span>
                  <span>{h.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.right}>
            {skills.map((group, i) => (
              <div key={i} className={styles.skillGroup}>
                <div className={styles.groupHeader}>
                  <span className={styles.groupIcon}>{categoryIcons[group.category]}</span>
                  <h3 className={styles.groupName}>{group.category}</h3>
                </div>
                <div className={styles.tags}>
                  {group.items.map(item => (
                    <span key={item} className={styles.skillTag}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
