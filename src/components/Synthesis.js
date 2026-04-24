import styles from './Synthesis.module.css';
import { stats } from '../data/portfolio';

export default function Synthesis() {
  return (
    <section className={styles.synthesis}>
      <div className="container">
        <div className={styles.header}>
          <div className="section-label">System Architecture</div>
          <h2 className="section-title">Ultimate <span>Synthesis</span></h2>
          <p className="section-subtitle">
            Merging 4 design cycles into one production-hardened core. 
            Engineered for high-availability and zero-latency performance.
          </p>
        </div>

        <div className={styles.grid}>
          {stats.map((s, i) => (
            <div key={i} className={`${styles.card} animate-fade-up`} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className={styles.icon}>{s.icon}</div>
              <div className={styles.info}>
                <div className={styles.value}>{s.value}</div>
                <div className={styles.label}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.blueprint}>
          <div className={styles.bpInner}>
            <div className={styles.bpLine} />
            <div className={styles.bpLabel}>CORE_SYNTHESIS_V1.0.0</div>
            <div className={styles.bpLine} />
          </div>
        </div>
      </div>
    </section>
  );
}
