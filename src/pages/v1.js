import Head from 'next/head';
import { useEffect, useState } from 'react';
import { PROJECTS, SKILLS, CERTS, SOCIALS } from '../data/portfolioData';

// Version 1: Legacy Clean Design
export default function Version1() {
  const [theme, setTheme] = useState('dark');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="v1-theme">
      <Head>
        <title>Bryan Kwandou — V1 Legacy Clean</title>
      </Head>
      
      {/* Version 1 Layout Logic Here */}
      <nav className="navbar scrolled">
        <div className="container">
          <div className="navbar-inner">
            <a href="/" className="nav-logo">nayrbryan_v1</a>
            <div className="nav-right">
              <button className="theme-toggle" onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}>
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main style={{ paddingTop: '100px', minHeight: '100vh' }}>
        <div className="container">
          <section className="hero">
            <h1 className="hero-name">Legacy <span>V1</span></h1>
            <p className="hero-desc">The original clean architectural design.</p>
          </section>
          
          <section id="projects">
             <h2 className="section-title">Projects</h2>
             <div className="projects-grid">
               {PROJECTS.map(p => (
                 <div key={p.id} className="project-card">
                   <h3>{p.icon} {p.title}</h3>
                   <p>{p.desc}</p>
                 </div>
               ))}
             </div>
          </section>
        </div>
      </main>

      <style jsx global>{`
        .v1-theme {
          --accent: #6366f1;
          --bg: ${theme === 'dark' ? '#0a0a0f' : '#f8f8ff'};
          --text: ${theme === 'dark' ? '#f0f0ff' : '#0a0a1a'};
          background: var(--bg);
          color: var(--text);
          font-family: 'Inter', sans-serif;
        }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
        .project-card { padding: 20px; border: 1px solid var(--accent); border-radius: 12px; }
      `}</style>
    </div>
  );
}
