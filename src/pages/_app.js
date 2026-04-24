import '../styles/globals.css';
import { useEffect, useState } from 'react';

import VersionSwitcher from '../components/VersionSwitcher';

export default function App({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check saved theme and proMode preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const savedProMode = localStorage.getItem('proMode') || 'indigo';
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.documentElement.setAttribute('data-pro-mode', savedProMode);
  }, []);

  return (
    <>
      <Component {...pageProps} />
      {mounted && <VersionSwitcher />}
    </>
  );
}
