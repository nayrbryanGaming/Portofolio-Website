import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function VersionSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const versions = [
    { id: 'perfect', label: 'PERFECT', path: '/', desc: 'Synthesized Edition' },
    { id: 'v1', label: 'V1', path: '/v1', desc: 'Legacy Clean' },
    { id: 'v2', label: 'V2', path: '/v2', desc: 'Modern Glow' },
    { id: 'v3', label: 'V3', path: '/v3', desc: 'Terminal Retro' },
    { id: 'v4', label: 'V4', path: '/v4', desc: 'Cyber Architect' },
  ];

  return (
    <div className={`switcher-wrap ${isOpen ? 'open' : ''}`}>
      <button className="switcher-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span className="toggle-icon">◈</span>
        <span className="toggle-text">DESIGN_VERSIONS</span>
      </button>

      <div className="switcher-menu">
        {versions.map(v => (
          <Link key={v.id} href={v.path} className={`version-item ${router.pathname === v.path ? 'active' : ''}`}>
            <div className="v-label">{v.label}</div>
            <div className="v-desc">{v.desc}</div>
          </Link>
        ))}
      </div>

      <style jsx>{`
        .switcher-wrap {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 9999;
          font-family: 'Inter', sans-serif;
        }
        .switcher-toggle {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #fff;
          padding: 12px 20px;
          border-radius: 100px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 1px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          transition: 0.3s;
        }
        .switcher-toggle:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }
        .toggle-icon { color: #6366f1; font-size: 18px; }

        .switcher-menu {
          position: absolute;
          bottom: calc(100% + 15px);
          right: 0;
          background: rgba(10, 10, 15, 0.9);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: 20px;
          padding: 10px;
          width: 240px;
          display: flex;
          flex-direction: column;
          gap: 5px;
          opacity: 0;
          pointer-events: none;
          transform: translateY(20px) scale(0.95);
          transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .open .switcher-menu {
          opacity: 1;
          pointer-events: all;
          transform: translateY(0) scale(1);
        }

        .version-item {
          padding: 12px 15px;
          border-radius: 12px;
          color: #fff;
          text-decoration: none;
          transition: 0.2s;
          display: flex;
          flex-direction: column;
        }
        .version-item:hover {
          background: rgba(99, 102, 241, 0.15);
        }
        .version-item.active {
          background: rgba(99, 102, 241, 0.3);
          border-left: 3px solid #6366f1;
        }
        .v-label { font-weight: 800; font-size: 14px; }
        .v-desc { font-size: 11px; opacity: 0.6; }
      `}</style>
    </div>
  );
}
