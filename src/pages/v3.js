import Head from 'next/head';
import { PROJECTS } from '../data/portfolioData';

// Version 3: Terminal Retro Design
export default function Version3() {
  return (
    <div className="v3-theme">
      <Head>
        <title>Bryan Kwandou — V3 Terminal Retro</title>
      </Head>
      
      <main className="terminal">
        <div className="header">
          [SYSTEM ONLINE] — BRYAN_KWANDOU_OS v3.0.0
        </div>
        
        <div className="content">
          <div className="cmd">
            <span className="prompt">visitor@nayrbryan:~$</span> ./show-intro.sh
          </div>
          <p className="output">
            Loading backend profile...<br />
            &gt; Expert in Rust & Solana<br />
            &gt; Architect of QUANTCOIN (1T TPS)<br />
            &gt; SOLQ Infrastructure Lead
          </p>

          <div className="cmd">
            <span className="prompt">visitor@nayrbryan:~$</span> ls projects/
          </div>
          <div className="projects-list">
            {PROJECTS.map(p => (
              <div key={p.id} className="project-item">
                <span className="p-title">./{p.title.toLowerCase()}</span>
                <span className="p-desc"># {p.desc.substring(0, 60)}...</span>
              </div>
            ))}
          </div>

          <div className="cmd">
            <span className="prompt">visitor@nayrbryan:~$</span> <span className="cursor" />
          </div>
        </div>
      </main>

      <style jsx global>{`
        .v3-theme {
          background: #000;
          color: #0f0;
          font-family: 'JetBrains Mono', 'Courier New', monospace;
          min-height: 100vh;
          padding: 20px;
        }
        .terminal { border: 1px solid #0f0; padding: 20px; min-height: 90vh; }
        .header { border-bottom: 1px solid #0f0; padding-bottom: 10px; margin-bottom: 20px; opacity: 0.7; }
        .cmd { margin-bottom: 5px; font-weight: bold; }
        .prompt { color: #0af; }
        .output { margin-bottom: 20px; line-height: 1.5; color: #fff; }
        .projects-list { margin-bottom: 20px; padding-left: 20px; }
        .project-item { margin-bottom: 5px; display: flex; gap: 20px; }
        .p-title { color: #f0f; min-width: 150px; }
        .p-desc { color: #666; font-style: italic; }
        .cursor { display: inline-block; width: 10px; height: 20px; background: #0f0; animation: blink 1s infinite; vertical-align: middle; }
        @keyframes blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
      `}</style>
    </div>
  );
}
