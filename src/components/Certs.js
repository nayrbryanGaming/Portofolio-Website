import styles from './Certs.module.css';
import { certifications } from '../data/portfolio';

export default function Certs() {
  return (
    <section className="section" id="certs">
      <div className="container">
        <p className="section-label">Credentials</p>
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle" style={{ marginBottom: '48px' }}>
          Continuous learning across blockchain, Web3, and software engineering disciplines.
          View full credentials on{' '}
          <a
            href="https://www.linkedin.com/in/bryankwandou"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkedinLink}
          >
            LinkedIn ↗
          </a>
        </p>

        <div className={styles.grid}>
          {certifications.map((cert, i) => (
            <a
              key={i}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.certCard}
            >
              <div className={styles.certIcon} aria-hidden="true">
                {cert.icon || '🏅'}
              </div>
              <div className={styles.certYear}>{cert.year}</div>
              <div className={styles.certBody}>
                <h3 className={styles.certName}>{cert.name}</h3>
                <p className={styles.certIssuer}>{cert.issuer}</p>
              </div>
              <div className={styles.certArrow}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                </svg>
              </div>
            </a>
          ))}
        </div>

        <div className={styles.linkedinBanner}>
          <div className={styles.linkedinBannerLeft}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#0A66C2">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <div>
              <h3>Full credential history on LinkedIn</h3>
              <p>Connect for complete certifications, endorsements, and professional history.</p>
            </div>
          </div>
          <a
            href="https://www.linkedin.com/in/bryankwandou"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            View LinkedIn Profile ↗
          </a>
        </div>
      </div>
    </section>
  );
}
