import Head from 'next/head';
import { PROJECTS, SKILLS } from '../data/portfolioData';

// Version 4: Cyberpunk High-Tech
export default function Version4() {
  return (
    <div className="v4-theme">
      <Head>
        <title>Bryan Kwandou — V4 Cyber Architect</title>
      </Head>
      
      <div className="scanner-line" />
      
      <main className="hud">
        <header>
          <div className="logo-box">
            <span className="glitch" data-text="NAYRBRYAN">NAYRBRYAN</span>
            <span className="ver">v4.0_FINAL</span>
          </div>
          <div className="status-grid">
            <div className="status-cell">CPU: OPTIMAL</div>
            <div className="status-cell">LINK: SECURE</div>
            <div className="status-cell">NODE: JAKARTA_CORE</div>
          </div>
        </header>

        <section className="hero">
          <div className="hero-text">
            <h2>DECENTRALIZED<br />INFRASTRUCTURE</h2>
            <h1>ARCHITECT</h1>
          </div>
        </section>

        <section className="data-streams">
          <div className="stream">
            <h3>ACTIVE_PROTOCOLS</h3>
            <div className="project-grid">
              {PROJECTS.map(p => (
                <div key={p.id} className="p-card">
                  <div className="p-header">{p.title}</div>
                  <div className="p-body">{p.desc.substring(0, 80)}...</div>
                  <div className="p-footer">STATUS: {p.status.toUpperCase()}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <style jsx global>{`
        .v4-theme {
          background: #080808;
          color: #f00;
          font-family: 'Outfit', sans-serif;
          min-height: 100vh;
          overflow-x: hidden;
          padding: 30px;
        }
        .scanner-line {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: rgba(255, 0, 0, 0.3);
          z-index: 100;
          animation: scan 4s linear infinite;
        }
        @keyframes scan { 0% { top: 0; } 100% { top: 100%; } }
        
        header { display: flex; justify-content: space-between; border-bottom: 2px solid #f00; padding-bottom: 20px; }
        .logo-box { display: flex; flex-direction: column; }
        .glitch { font-size: 2.5rem; font-weight: 900; letter-spacing: 5px; position: relative; }
        .ver { font-size: 10px; opacity: 0.6; }
        
        .status-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
        .status-cell { border: 1px solid #f00; padding: 5px 10px; font-size: 10px; }
        
        .hero { margin: 100px 0; }
        .hero-text h2 { font-size: 1.5rem; opacity: 0.7; }
        .hero-text h1 { font-size: 5rem; line-height: 0.9; margin-top: 10px; color: #fff; text-shadow: 0 0 20px #f00; }
        
        .project-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 20px; }
        .p-card { border: 1px solid rgba(255, 0, 0, 0.3); padding: 20px; background: rgba(255, 0, 0, 0.05); }
        .p-header { font-weight: bold; border-bottom: 1px solid #f00; margin-bottom: 10px; padding-bottom: 5px; }
        .p-body { font-size: 13px; color: #ccc; margin-bottom: 15px; }
        .p-footer { font-size: 10px; opacity: 0.5; text-align: right; }
      `}</style>
    </div>
  );
}
