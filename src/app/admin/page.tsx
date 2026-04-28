'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { RefreshCw, Database, TrendingUp, Shield, BarChart3, ArrowUpRight } from 'lucide-react'
import Sidebar from '../../components/Sidebar'
import { getApiUrl } from '../../utils/api'
import { PROGRAM_ID_STR } from '../../utils/constants'

type MetricsState = {
  tvlUsdc: number
  tvlIdr: number
  activePolicies: number
  totalClaims: number
  avgApy: number
  backendConnected: boolean
  loading: boolean
  lastSync: string
}

type LedgerRow = {
  id: string
  label: string
  amount: number
  wallet: string
  type: 'CLAIM' | 'STAKE'
  ts: string
}

function toNumber(value: unknown, fallback = 0): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback
}

function shortWallet(value: string): string {
  if (!value) return '-'
  if (value.length < 12) return value
  return `${value.slice(0, 6)}...${value.slice(-4)}`
}

function usd(value: number): string {
  return `$${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

function idr(value: number): string {
  return `Rp ${Math.round(value).toLocaleString('id-ID')}`
}

export default function AdminPage() {
  const [metrics, setMetrics] = useState<MetricsState>({
    tvlUsdc: 0,
    tvlIdr: 0,
    activePolicies: 0,
    totalClaims: 0,
    avgApy: 0,
    backendConnected: false,
    loading: true,
    lastSync: '-',
  })
  const [ledger, setLedger] = useState<LedgerRow[]>([])

  const fetchMetrics = useCallback(async () => {
    setMetrics((prev) => ({ ...prev, loading: true }))

    const metricsApi = getApiUrl('/api/pool/metrics')
    if (!metricsApi) {
      setMetrics((prev) => ({ ...prev, loading: false, backendConnected: false, lastSync: 'API URL not configured' }))
      return
    }

    try {
      const res = await fetch(metricsApi, { cache: 'no-store' })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)

      const payload = await res.json()
      if (!payload?.success || !payload?.data) throw new Error('Invalid payload')

      const data = payload.data
      const tvlUsdc = toNumber(data.finance?.totalTvlUsdc)
      const tvlIdr = toNumber(data.program?.balanceIdr, tvlUsdc * toNumber(data.network?.usdcToIdr, 0))
      const activePolicies = toNumber(data.insurance?.activePolicies)
      const totalClaims = toNumber(data.insurance?.totalClaims)
      const avgApy = toNumber(data.finance?.avgApy)

      const claimRows: LedgerRow[] = Array.isArray(data.recent?.claims)
        ? data.recent.claims.map((item: any) => ({
            id: String(item.id || `claim-${Math.random()}`),
            label: `Claim ${item.commodity || 'N/A'}`,
            amount: toNumber(item.payoutUsdc),
            wallet: item.farmName ? String(item.farmName) : '-',
            type: 'CLAIM',
            ts: String(item.processedAt || new Date().toISOString()),
          }))
        : []

      const stakeRows: LedgerRow[] = Array.isArray(data.recent?.investments)
        ? data.recent.investments.map((item: any) => ({
            id: String(item.id || `stake-${Math.random()}`),
            label: `Stake ${item.poolSymbol || 'POOL'}`,
            amount: toNumber(item.amountUsdc),
            wallet: shortWallet(String(item.walletAddress || '')),
            type: 'STAKE',
            ts: String(item.stakedAt || new Date().toISOString()),
          }))
        : []

      setLedger([...claimRows, ...stakeRows].slice(0, 10))
      setMetrics({
        tvlUsdc,
        tvlIdr,
        activePolicies,
        totalClaims,
        avgApy,
        backendConnected: true,
        loading: false,
        lastSync: new Date().toLocaleTimeString('id-ID'),
      })
    } catch {
      setMetrics((prev) => ({ ...prev, loading: false, backendConnected: false, lastSync: 'Fallback mode' }))
    }
  }, [])

  useEffect(() => {
    void fetchMetrics()
    const timer = window.setInterval(() => {
      void fetchMetrics()
    }, 30000)

    return () => window.clearInterval(timer)
  }, [fetchMetrics])

  const health = useMemo(() => {
    if (metrics.loading) return 'SYNCING'
    return metrics.backendConnected ? 'LIVE' : 'FALLBACK'
  }, [metrics.backendConnected, metrics.loading])

  return (
    <div className="flex min-h-screen bg-[#02060c] text-slate-100">
      <Sidebar />
      <div className="flex-1 min-w-0 flex flex-col">
        <div className="h-12 flex items-center justify-between px-8 border-b border-white/[0.05] sticky top-0 z-10 bg-[#02060c]/90 backdrop-blur">
          <div className="font-mono text-[11px] text-slate-500">Nusa Harvest / Admin Center</div>
          <button
            onClick={() => void fetchMetrics()}
            className="p-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all"
            title="Refresh metrics"
            aria-label="Refresh metrics"
          >
            <RefreshCw size={14} className={metrics.loading ? 'animate-spin' : ''} />
          </button>
        </div>

        <div className="px-8 py-8 max-w-6xl w-full mx-auto">
          <header className="mb-8 flex items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl font-black tracking-tight">Admin Command Center</h1>
              <p className="text-slate-500 text-sm uppercase tracking-widest mt-2">Backend + on-chain observable metrics</p>
            </div>
            <div className="text-[10px] font-black px-3 py-2 rounded-lg border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 uppercase tracking-widest">
              Status: {health}
            </div>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'TVL (USDC)', value: metrics.loading ? 'Syncing...' : usd(metrics.tvlUsdc), icon: <Database size={18} className="text-amber-400" /> },
              { label: 'TVL (IDR)', value: metrics.loading ? 'Syncing...' : idr(metrics.tvlIdr), icon: <TrendingUp size={18} className="text-blue-400" /> },
              { label: 'Active Policies', value: metrics.loading ? 'Syncing...' : metrics.activePolicies.toLocaleString('id-ID'), icon: <Shield size={18} className="text-emerald-400" /> },
              { label: 'Avg APY', value: metrics.loading ? 'Syncing...' : `${metrics.avgApy.toFixed(2)}%`, icon: <BarChart3 size={18} className="text-purple-400" /> },
            ].map((card, index) => (
              <motion.div key={card.label} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.06 }} className="glass-panel p-5 rounded-2xl">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{card.label}</div>
                  {card.icon}
                </div>
                <div className="text-2xl font-black text-white tracking-tight">{card.value}</div>
              </motion.div>
            ))}
          </section>

          <section className="glass-panel p-6 rounded-3xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-black uppercase tracking-widest text-slate-400">Recent Ledger</h2>
              <a
                href={`https://explorer.solana.com/address/${PROGRAM_ID_STR}?cluster=devnet`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-300 hover:text-emerald-200"
              >
                Verify Program <ArrowUpRight size={12} />
              </a>
            </div>

            {ledger.length === 0 ? (
              <div className="text-sm text-slate-500 py-8 text-center border border-dashed border-white/10 rounded-2xl">
                Belum ada data ledger dari backend.
              </div>
            ) : (
              <div className="space-y-3">
                {ledger.map((row) => (
                  <div key={row.id} className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                    <div>
                      <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">{row.label}</div>
                      <div className="text-sm text-white mt-1">{row.wallet}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-black text-emerald-400">{usd(row.amount)}</div>
                      <div className="text-[10px] text-slate-500 mt-1">{new Date(row.ts).toLocaleString('id-ID')}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <p className="text-[11px] text-slate-600 mt-5">Last sync: {metrics.lastSync}</p>
          </section>
        </div>
      </div>
    </div>
  )
}
