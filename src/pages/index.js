import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Certs from '../components/Certs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>nayrbryan — Ultimate Consolidated Portfolio</title>
        <meta name="description" content="The synthesis of 4 legendary designs. Web3 Builder & Full-Stack Developer." />
      </Head>

      <div className={styles.noise} />
      <div className="grid-bg" />
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        
        {/* Synthesis Section: System Architecture */}
        <section className={styles.synthesis}>
          <div className="container">
            <h2 className="section-title">Ultimate <span>Synthesis</span></h2>
            <p className="section-subtitle">Combining the best practices of 4 design iterations into 1 production-hardened system.</p>
            <div className={styles.synthGrid}>
              <div className={styles.synthCard}>
                <div className={styles.synthIcon}>🛡️</div>
                <h3>Post-Quantum Core</h3>
                <p>NIST Level 5 cryptography integration for future-proof security.</p>
              </div>
              <div className={styles.synthCard}>
                <div className={styles.synthIcon}>⚡</div>
                <h3>1T TPS Engine</h3>
                <p>High-sharding Layer 1 architecture for massive scalability.</p>
              </div>
              <div className={styles.synthCard}>
                <div className={styles.synthIcon}>💎</div>
                <h3>$907K Precision</h3>
                <p>Engineered with the meticulous standards of world-class backend architects.</p>
              </div>
            </div>
          </div>
        </section>

        <Certs />
        <Contact />
      </main>
      <Footer />

      <style jsx global>{`
        :root {
          --accent: #6366f1;
          --bg: #030303;
          --text: #ffffff;
        }
        body {
          background: var(--bg);
          color: var(--text);
          overflow-x: hidden;
        }
        .grid-bg {
          position: fixed;
          inset: 0;
          background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0);
          background-size: 40px 40px;
          z-index: -1;
        }
      `}</style>
    </>
  );
}
