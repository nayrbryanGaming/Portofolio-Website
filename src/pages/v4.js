import Head from 'next/head';
import { useEffect, useState } from 'react';

// Version 4: Cyber Architect Design
export default function Version4() {
  return (
    <div className="v4-theme">
      <Head>
        <title>Bryan Kwandou — V4 Cyber Architect</title>
      </Head>
      
      <div className="grid-overlay" />

      <nav className="navbar">
        <div className="container">
          <div className="navbar-inner">
            <div className="nav-logo">ARCHITECT_V4</div>
            <div className="nav-status">SYSTEM_STATUS: <span className="online">ONLINE</span></div>
          </div>
        </div>
      </nav>

      <main style={{ paddingTop: '100px', minHeight: '100vh', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <section className="hero">
            <div className="hero-grid">
                <div className="hero-main">
                    <h1 className="hero-name">CYBER<br /><span>ARCHITECT</span></h1>
                    <p className="hero-desc">
                        Building deterministic digital worlds. Non-custodial orchestration. 
                        Atomic settlement protocols.
                    </p>
                    <div className="hero-actions">
                        <a href="/" className="btn-v4">BACK_TO_CORE</a>
                    </div>
                </div>
                <div className="hero-side">
                    <div className="tech-card">
                        <div className="tech-title">CORE_TECH</div>
                        <ul className="tech-list">
                            <li>RUST_WASM</li>
                            <li>SOLANA_SDK</li>
                            <li>NEXT_JS_14</li>
                            <li>TAILWIND_PRO</li>
                        </ul>
                    </div>
                </div>
            </div>
          </section>
        </div>
      </main>

      <style jsx>{`
        .v4-theme {
          background: #050505;
          color: #00ffaa;
          min-height: 100vh;
          font-family: 'JetBrains Mono', monospace;
          overflow: hidden;
        }
        .grid-overlay {
          position: fixed;
          inset: 0;
          background-image: linear-gradient(rgba(0, 255, 170, 0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0, 255, 170, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
          z-index: 0;
        }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 30px; }
        .navbar { padding: 30px 0; border-bottom: 1px solid rgba(0, 255, 170, 0.2); }
        .navbar-inner { display: flex; justify-content: space-between; align-items: center; }
        .nav-logo { font-size: 1.5rem; font-weight: 800; letter-spacing: 2px; }
        .online { color: #fff; background: #00ffaa; padding: 2px 8px; border-radius: 4px; color: #000; }
        .hero { padding: 80px 0; }
        .hero-grid { display: grid; grid-template-columns: 1.5fr 1fr; gap: 60px; align-items: center; }
        .hero-name { font-size: 6rem; line-height: 0.8; margin-bottom: 30px; text-shadow: 0 0 20px rgba(0, 255, 170, 0.5); }
        .hero-name span { color: #fff; }
        .hero-desc { font-size: 1.2rem; color: #888; max-width: 450px; margin-bottom: 50px; }
        .btn-v4 { border: 1px solid #00ffaa; color: #00ffaa; padding: 15px 30px; text-decoration: none; transition: 0.3s; }
        .btn-v4:hover { background: #00ffaa; color: #000; box-shadow: 0 0 30px #00ffaa; }
        .tech-card { background: rgba(0, 255, 170, 0.05); border: 1px solid rgba(0, 255, 170, 0.2); padding: 40px; }
        .tech-title { font-weight: 800; margin-bottom: 20px; border-bottom: 1px solid; }
        .tech-list { list-style: none; }
        .tech-list li { margin-bottom: 10px; }
        .tech-list li::before { content: '> '; }
      `}</style>
    </div>
  );
}
