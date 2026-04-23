import Head from 'next/head';
import { useEffect, useState } from 'react';
import { PROJECTS, SKILLS, CERTS, SOCIALS } from '../data/portfolioData';

// Version 2: Modern Glow Design
export default function Version2() {
  const [theme, setTheme] = useState('dark');

  return (
    <div className="v2-theme">
      <Head>
        <title>Bryan Kwandou — V2 Modern Glow</title>
      </Head>
      
      <div className="glow-container">
        <div className="glow-orb" />
        <nav className="nav">
          <div className="container">
            <span className="logo">BRYAN.V2</span>
          </div>
        </nav>

        <main className="container">
          <section className="hero">
            <div className="badge">VERSION 2 — MODERN GLOW</div>
            <h1 className="title">Backend Excellence<br /><span>On-Chain.</span></h1>
          </section>

          <div className="grid">
            {PROJECTS.map(p => (
              <div key={p.id} className="card">
                <div className="card-icon">{p.icon}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </main>
      </div>

      <style jsx global>{`
        .v2-theme {
          --bg: #050505;
          --accent: #00f2ff;
          --text: #ffffff;
          background: var(--bg);
          color: var(--text);
          font-family: 'Syne', sans-serif;
        }
        .glow-orb {
          position: fixed;
          top: -100px;
          right: -100px;
          width: 400px;
          height: 400px;
          background: var(--accent);
          filter: blur(150px);
          opacity: 0.2;
          z-index: 0;
        }
        .container { max-width: 1000px; margin: 0 auto; padding: 40px 20px; position: relative; z-index: 1; }
        .title { font-size: 4rem; font-weight: 800; line-height: 1; }
        .title span { color: var(--accent); }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-top: 60px; }
        .card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); padding: 30px; border-radius: 24px; transition: 0.3s; }
        .card:hover { border-color: var(--accent); transform: translateY(-5px); }
        .badge { background: var(--accent); color: #000; padding: 4px 12px; border-radius: 100px; font-weight: 700; font-size: 12px; display: inline-block; margin-bottom: 20px; }
      `}</style>
    </div>
  );
}
