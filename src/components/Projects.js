import styles from './Projects.module.css';
import { projects } from '../data/portfolio';

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">Selected Work</p>
          <h2 className="section-title">Flagship Projects</h2>
          <p className="section-subtitle">
            Real infrastructure. Real chains. No vaporware.
            Every project is shipped, documented, and verifiable on-chain.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className={styles.githubCta}>
          <div className={styles.githubCtaInner}>
            <div className={styles.githubCtaText}>
              <h3>More on GitHub</h3>
              <p>Explore all repositories, experiments, and open-source contributions.</p>
            </div>
            <a
              href="https://github.com/nayrbryanGaming"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              @nayrbryanGaming
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const isLive = project.status.toLowerCase().includes('live');

  return (
    <div className={`${styles.card} ${project.featured ? styles.featured : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}>

      {/* Header */}
      <div className={styles.cardHeader}>
        <div className={styles.cardIcon}>
          {index === 0 ? '⚡' : '🔮'}
        </div>
        <span className={`badge ${isLive ? 'badge-live' : 'badge-phase'}`}>
          {project.status}
        </span>
      </div>

      {/* Content */}
      <div className={styles.cardBody}>
        <h3 className={styles.projectName}>{project.name}</h3>
        <p className={styles.projectTagline}>{project.tagline}</p>
        <p className={styles.projectDesc}>{project.description}</p>

        {/* Highlight */}
        <div className={styles.highlight}>
          <span className={styles.highlightDot}>▶</span>
          {project.highlight}
        </div>

        {/* Tech stack */}
        <div className={styles.techStack}>
          {project.tech.map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className={styles.cardActions}>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.actionBtn} ${styles.actionGithub}`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          Source Code
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.actionBtn} ${styles.actionLive}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Live Site
          </a>
        )}
      </div>
    </div>
  );
}
