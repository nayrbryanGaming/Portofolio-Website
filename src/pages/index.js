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
