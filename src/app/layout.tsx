import type { Metadata, Viewport } from 'next'
import { WalletProvider } from '../providers/WalletProvider'
import { SimulationProvider } from '../contexts/SimulationContext'
import { Toaster } from 'react-hot-toast'
import ClientIntegrityGuard from '../components/ClientIntegrityGuard'
import '../styles/globals.css'

export const viewport: Viewport = {
  themeColor: '#030810',
  colorScheme: 'dark',
}

export const metadata: Metadata = {
  title: 'Nusa Harvest - AgroFi Protocol',
  description: 'Infrastruktur AgroFi pertama di Indonesia. Asuransi parametrik otomatis dan DeFi yield pools untuk 73 juta petani.',
  keywords: ['DeFi', 'Solana', 'AgroFi', 'parametric insurance', 'Indonesia', 'farmer', 'yield pool'],
  authors: [{ name: 'Nusa Harvest Team' }],
  openGraph: {
    title: 'Nusa Harvest - AgroFi Protocol',
    description: 'Blockchain-powered parametric crop insurance and yield pools for Indonesian farmers. Built on Solana.',
    type: 'website',
    locale: 'id_ID',
    siteName: 'Nusa Harvest',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nusa Harvest - AgroFi Protocol',
    description: 'Parametric crop insurance on Solana for Indonesian farmers.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="antialiased">
        <ClientIntegrityGuard />
        <WalletProvider>
          <SimulationProvider>
            <Toaster
              position="top-right"
              gutter={8}
              toastOptions={{
                duration: 4500,
                style: {
                  background: '#0f1c2e',
                  color: '#e2e8f0',
                  border: '1px solid rgba(52,211,153,0.2)',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontWeight: '500',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                  backdropFilter: 'blur(16px)',
                },
                success: {
                  iconTheme: { primary: '#4ade80', secondary: '#0f1c2e' },
                  style: { borderColor: 'rgba(52,211,153,0.35)' },
                },
                error: {
                  iconTheme: { primary: '#f87171', secondary: '#0f1c2e' },
                  style: { borderColor: 'rgba(248,113,113,0.35)' },
                },
                loading: {
                  iconTheme: { primary: '#60a5fa', secondary: '#0f1c2e' },
                  style: { borderColor: 'rgba(96,165,250,0.35)' },
                },
              }}
            />
            {children}
          </SimulationProvider>
        </WalletProvider>
      </body>
    </html>
  )
}
