import Head from 'next/head';
import { useEffect, useState } from 'react';

// Version 2: Emerald Quantum Design (Programmer 2)
export default function Version2() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-pro-mode', 'emerald');
    return () => document.documentElement.removeAttribute('data-pro-mode');
  }, []);

  return (
    <div className="v2-theme">
      <Head>
        <title>Bryan Kwandou — V2 Emerald Quantum</title>
      </Head>
      
      <nav className="navbar">
        <div className="container">
          <div className="navbar-inner">
            <a href="/" className="nav-logo">nayrbryan_v2</a>
            <div className="nav-right">
              <span className="badge badge-live">PRO_MODE: EMERALD</span>
            </div>
          </div>
        </div>
      </nav>

      <main style={{ paddingTop: '120px', minHeight: '100vh' }}>
        <div className="container">
          <section className="hero">
            <div className="section-label">Version 2.0</div>
            <h1 className="hero-name">Emerald <span>Quantum</span></h1>
            <p className="hero-desc">
                High-sharding Layer 1 architecture. Engineered for the quantum epoch. 
                Designed by the world&apos;s second best backend architect.
            </p>
            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-value">1T</div>
                    <div className="stat-label">TPS ENGINE</div>
                </div>
                <div className="stat-card">
                    <div className="stat-value">NIST 5</div>
                    <div className="stat-label">CRYPTO STANDARDS</div>
                </div>
            </div>
          </section>
        </div>
      </main>

      <style jsx>{`
        .v2-theme {
          background: var(--bg);
          color: var(--text-primary);
          min-height: 100vh;
        }
        .container { max-width: 1100px; margin: 0 auto; padding: 0 24px; }
        .navbar { position: fixed; top: 0; width: 100%; z-index: 100; padding: 24px 0; border-bottom: 1px solid var(--border); }
        .navbar-inner { display: flex; justify-content: space-between; align-items: center; }
        .nav-logo { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.2rem; color: var(--accent); }
        .hero { padding: 60px 0; }
        .hero-name { font-size: clamp(4rem, 10vw, 6rem); font-weight: 800; line-height: 1; margin-bottom: 24px; }
        .hero-name span { color: var(--accent); display: block; }
        .hero-desc { font-size: 1.2rem; color: var(--text-secondary); max-width: 600px; margin-bottom: 40px; line-height: 1.6; }
        .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; }
        .stat-card { background: var(--bg-card); border: 1px solid var(--border); padding: 30px; border-radius: 20px; }
        .stat-value { font-size: 2.5rem; font-weight: 800; color: var(--accent); }
        .stat-label { font-size: 0.8rem; letter-spacing: 0.1em; color: var(--text-muted); }
      `}</style>
    </div>
  );
}
