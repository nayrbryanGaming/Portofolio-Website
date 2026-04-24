import Head from 'next/head';
import { useEffect, useState } from 'react';

// Version 3: Monochrome Elite Design (Programmer 3)
export default function Version3() {
  useEffect(() => {
    document.documentElement.setAttribute('data-pro-mode', 'elite');
    return () => document.documentElement.removeAttribute('data-pro-mode');
  }, []);

  return (
    <div className="v3-theme">
      <Head>
        <title>Bryan Kwandou — V3 Monochrome Elite</title>
      </Head>
      
      <nav className="navbar">
        <div className="container">
          <div className="navbar-inner">
            <a href="/" className="nav-logo">NAYRBryan_V3</a>
            <div className="nav-right">
              <span className="badge">ELITE_EDITION</span>
            </div>
          </div>
        </div>
      </nav>

      <main style={{ paddingTop: '150px', minHeight: '100vh' }}>
        <div className="container">
          <section className="hero">
            <h1 className="hero-name">MONOCHROME<br /><span>ELITE</span></h1>
            <div className="divider" />
            <p className="hero-desc">
                The pinnacle of backend precision. Minimalist aesthetic, maximalist performance.
                Architected for the highest standards of the global financial elite.
            </p>
            <div className="action-row">
                <button className="btn-primary">INIT_CONSULTATION</button>
                <button className="btn-ghost">VIEW_INFRASTRUCTURE</button>
            </div>
          </section>
        </div>
      </main>

      <style jsx>{`
        .v3-theme {
          background: var(--bg);
          color: var(--text-primary);
          min-height: 100vh;
          font-family: 'JetBrains Mono', monospace;
        }
        .container { max-width: 1000px; margin: 0 auto; padding: 0 40px; }
        .navbar { position: fixed; top: 0; width: 100%; z-index: 100; padding: 40px 0; }
        .navbar-inner { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border); padding-bottom: 20px; }
        .nav-logo { font-weight: 700; font-size: 1rem; letter-spacing: 0.2em; }
        .hero { padding: 40px 0; }
        .hero-name { font-size: 5rem; font-weight: 800; line-height: 0.9; letter-spacing: -0.05em; margin-bottom: 40px; }
        .hero-name span { color: var(--accent); }
        .divider { width: 100px; height: 4px; background: var(--accent); margin-bottom: 40px; }
        .hero-desc { font-size: 1.1rem; color: var(--text-secondary); max-width: 500px; margin-bottom: 60px; line-height: 1.8; }
        .action-row { display: flex; gap: 20px; }
        .btn-primary { background: var(--accent); color: #000; padding: 15px 40px; border: none; font-weight: 700; cursor: pointer; }
        .btn-ghost { background: transparent; color: #fff; padding: 15px 40px; border: 1px solid var(--border); cursor: pointer; }
        .badge { font-size: 0.7rem; letter-spacing: 0.2em; border: 1px solid var(--accent); padding: 5px 15px; border-radius: 4px; color: var(--accent); }
      `}</style>
    </div>
  );
}
