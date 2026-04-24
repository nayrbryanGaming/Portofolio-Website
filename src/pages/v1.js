import Head from 'next/head';
import { useEffect, useState, useRef } from 'react';

// ===================== DATA =====================
const PROJECTS = [
  {
    id: 'quantcoin',
    icon: '⚛️',
    title: 'QUANTCOIN',
    status: 'live',
    statusText: 'Active',
    featured: true,
    desc: "World's first hyper-sharded Layer 1 blockchain engineered for sovereign finance in the quantum epoch. Achieves 1 Trillion TPS with post-quantum cryptography using Lattice-based ML-DSA-87 / ML-KEM-1024. Features a Quadratic Representative DAO where voting power = √(your stake), ensuring the many always outweigh the few.",
    tags: ['Rust', 'Blockchain', 'Post-Quantum', 'DAO', 'Layer 1', 'Web3'],
    links: [
      { label: 'GitHub', href: 'https://github.com/nayrbryanGaming/QUANTCOIN', icon: '📦' },
    ],
  },
  {
    id: 'solq',
    icon: '💳',
    title: 'SOLQ',
    status: 'live',
    statusText: 'Live',
    featured: true,
    desc: 'Next-generation Solana payment infrastructure. Lightning-fast, near-zero fee crypto payment gateway built natively on Solana for merchants, developers, and Web3 builders. Enabling real-world commerce on-chain.',
    tags: ['Solana', 'TypeScript', 'Next.js', 'Web3', 'Payments', 'DeFi'],
    links: [
      { label: 'Live Site', href: 'https://solq.my.id', icon: '🌐', primary: true },
      { label: 'GitHub', href: 'https://github.com/nayrbryanGaming', icon: '📦' },
    ],
  },
  {
    id: 'portfolio',
    icon: '🚀',
    title: 'Portfolio Website',
    status: 'live',
    statusText: 'Live',
    desc: 'This portfolio — built with Next.js 14, pure CSS animations, dark/light mode, deployed on Vercel. Designed for maximum recruiter impact.',
    tags: ['Next.js', 'CSS', 'Vercel', 'React'],
    links: [
      { label: 'View', href: 'https://nayrbryanGaming.vercel.app', icon: '🌐', primary: true },
      { label: 'GitHub', href: 'https://github.com/nayrbryanGaming', icon: '📦' },
    ],
  },
  {
    id: 'more',
    icon: '🔭',
    title: 'More Projects',
    status: 'wip',
    statusText: 'In Progress',
    desc: 'Continuously building at the intersection of Web3, AI, and infrastructure. Follow on GitHub for the latest experiments and open-source contributions.',
    tags: ['Web3', 'Open Source', 'Experiments'],
    links: [
      { label: 'View All', href: 'https://github.com/nayrbryanGaming', icon: '📦', primary: true },
    ],
  },
];

const SKILLS = [
  {
    icon: '⛓️',
    name: 'Blockchain & Web3',
    items: ['Solana', 'Ethereum', 'Smart Contracts', 'DeFi', 'NFTs', 'DAO', 'Web3.js', 'Anchor'],
  },
  {
    icon: '⚡',
    name: 'Languages',
    items: ['Rust', 'TypeScript', 'JavaScript', 'Python', 'Solidity', 'Go', 'HTML', 'CSS'],
  },
  {
    icon: '🛠️',
    name: 'Frontend',
    items: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Redux'],
  },
  {
    icon: '🔧',
    name: 'Backend & DevOps',
    items: ['Node.js', 'Express', 'PostgreSQL', 'Docker', 'Git', 'Vercel', 'AWS'],
  },
  {
    icon: '🧠',
    name: 'Concepts',
    items: ['DeFi Protocols', 'Post-Quantum Crypto', 'Zero-Knowledge', 'Layer 1/2', 'Tokenomics', 'DAO Governance'],
  },
  {
    icon: '🎮',
    name: 'Other',
    items: ['Content Creation', 'Community Building', 'Technical Writing', 'Open Source'],
  },
];

const CERTS = [
  { icon: '🏅', title: 'Web3 Development Fundamentals', issuer: 'LinkedIn Learning', date: '2024' },
  { icon: '⛓️', title: 'Blockchain & Cryptocurrency', issuer: 'LinkedIn Learning', date: '2024' },
  { icon: '⚡', title: 'Solana Developer Bootcamp', issuer: 'Solana Foundation', date: '2024' },
  { icon: '🦀', title: 'Rust Programming Language', issuer: 'LinkedIn Learning', date: '2024' },
  { icon: '🔐', title: 'Smart Contract Security', issuer: 'LinkedIn Learning', date: '2024' },
  { icon: '🌐', title: 'Full-Stack Web Development', issuer: 'LinkedIn Learning', date: '2023' },
  { icon: '☁️', title: 'Cloud Computing Essentials', issuer: 'LinkedIn Learning', date: '2023' },
  { icon: '🤖', title: 'AI & Machine Learning Basics', issuer: 'LinkedIn Learning', date: '2023' },
  { icon: '📱', title: 'React & Next.js Mastery', issuer: 'LinkedIn Learning', date: '2023' },
];

const SOCIALS = [
  { icon: '🐙', name: 'GitHub', handle: '@nayrbryanGaming', href: 'https://github.com/nayrbryanGaming' },
  { icon: '𝕏', name: 'X / Twitter', handle: '@nayrbryanGaming', href: 'https://x.com/nayrbryanGaming' },
  { icon: '💼', name: 'LinkedIn', handle: 'Bryan Kwandou', href: 'https://linkedin.com/in/bryankwandou' },
  { icon: '📸', name: 'Instagram', handle: '@nayrbryan_gaming', href: 'https://instagram.com/nayrbryan_gaming' },
  { icon: '📱', name: 'TikTok', handle: '@nayrbryan_gaming', href: 'https://tiktok.com/@nayrbryan_gaming' },
  { icon: '✈️', name: 'Telegram', handle: '@nayrbryangaming', href: 'https://t.me/nayrbryangaming' },
  { icon: '🎮', name: 'Discord', handle: 'nayrbryan_gaming', href: 'https://discord.com/users/648155670545301504' },
  { icon: '🌐', name: 'SOLQ', handle: 'solq.my.id', href: 'https://solq.my.id' },
];

// ===================== COMPONENTS =====================

function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#certs', label: 'Certs' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-inner">
            <a href="/" className="nav-logo">nayrbryan_v1</a>
            <ul className="nav-links">
              {navLinks.map(l => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setMobileOpen(false)}>{l.label}</a>
                </li>
              ))}
            </ul>
            <div className="nav-right">
              <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <button className="mobile-close" onClick={() => setMobileOpen(false)}>✕</button>
        {navLinks.map(l => (
          <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)}>{l.label}</a>
        ))}
      </div>
    </>
  );
}

function Hero() {
  const titles = [
    'Full-Stack Developer',
    'Web3 Builder',
    'Blockchain Architect',
    'Solana Developer',
    'Open Source Creator',
  ];
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = titles[titleIdx];
    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
        return () => clearTimeout(t);
      } else {
        setTitleIdx((titleIdx + 1) % titles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, titleIdx]);

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            V1 — Original Legacy Design
          </div>
          <h1 className="hero-name">
            Bryan
            <span>Kwandou.</span>
          </h1>
          <div className="hero-title">
            $ {displayed}<span className="cursor" />
          </div>
          <p className="hero-desc">
            The original clean architectural design that started it all. Modular, accessible, and high-performance.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn-primary">
              View My Work ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===================== VERSION 1 PAGE =====================
export default function Version1() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark';
    setTheme(saved);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
  };

  return (
    <div className="v1-wrapper" data-theme={theme}>
      <Head>
        <title>Bryan Kwandou — V1 Legacy Edition</title>
      </Head>

      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        {/* Simplified V1 views here */}
        <section id="projects" className="container" style={{ padding: '80px 0' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Projects</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                {PROJECTS.map(p => (
                    <div key={p.id} style={{ padding: '30px', border: '1px solid var(--accent)', borderRadius: '16px' }}>
                        <h3>{p.icon} {p.title}</h3>
                        <p style={{ opacity: 0.7 }}>{p.desc}</p>
                    </div>
                ))}
            </div>
        </section>
      </main>

      <style jsx global>{`
        .v1-wrapper {
          --accent: #6366f1;
          --bg: ${theme === 'dark' ? '#0a0a0f' : '#f8f8ff'};
          --text: ${theme === 'dark' ? '#f0f0ff' : '#0a0a1a'};
          background: var(--bg);
          color: var(--text);
          min-height: 100vh;
          font-family: 'Inter', sans-serif;
        }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .hero { padding: 160px 0 100px; }
        .hero-name { font-size: 5rem; font-weight: 900; line-height: 0.9; margin-bottom: 20px; }
        .hero-name span { color: var(--accent); display: block; }
        .btn-primary { background: var(--accent); color: white; padding: 15px 30px; border-radius: 100px; font-weight: 700; }
        .navbar { position: fixed; top: 0; width: 100%; z-index: 100; padding: 20px 0; background: rgba(0,0,0,0.5); backdrop-filter: blur(10px); }
        .navbar-inner { display: flex; justify-content: space-between; align-items: center; }
        .nav-logo { font-weight: 900; font-size: 1.5rem; }
      `}</style>
    </div>
  );
}
