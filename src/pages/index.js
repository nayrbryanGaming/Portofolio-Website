import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
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
        <title>nayrbryan — Web3 Builder & Full-Stack Developer</title>
        <meta name="description" content="Vincentius Bryan Kwandou — Building quantum-resistant blockchains (QUANTCOIN) and Solana payment infrastructure (SOLQ). Web3 Builder & Full-Stack Developer from Indonesia." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="nayrbryan — Web3 Builder & Full-Stack Developer" />
        <meta property="og:description" content="Building on-chain. Living off-chain. Shipping real. QUANTCOIN & SOLQ creator." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@nayrbryanGaming" />
        <meta name="keywords" content="nayrbryan, bryankwandou, web3, blockchain, solana, quantcoin, solq, developer, indonesia, defi, rust, nextjs" />
      </Head>

      {/* Noise grain overlay */}
      <div className={styles.noise} />

      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Certs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
