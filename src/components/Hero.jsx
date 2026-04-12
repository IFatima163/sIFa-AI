import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

function GridBackground() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      <svg width="100%" height="100%" style={{ opacity: 0.04 }}>
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="var(--blue)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <div style={{
        position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%,-50%)',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
      }} />
    </div>
  );
}

export default function Hero() {
  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '0 24px', paddingTop: 80 }}>
      <GridBackground />
      <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 100,
            border: '1px solid var(--border-light)', background: 'var(--surface)', marginBottom: 32 }}>
          <Zap size={12} color="var(--blue)" fill="var(--blue)" />
          <span style={{ fontSize: 12, color: 'var(--text-dim)', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            AI Operations for Marketing Agencies
          </span>
        </motion.div>

        <div style={{ marginBottom: 24 }}>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontSize: 'clamp(42px, 7vw, 80px)', fontWeight: 800, lineHeight: 1.05, marginBottom: 8, color: 'var(--text)' }}>
            Your Agency Runs
          </motion.h1>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontSize: 'clamp(42px, 7vw, 80px)', fontWeight: 800, lineHeight: 1.05, marginBottom: 8, color: 'var(--blue)' }}>
            On Manual Work.
          </motion.h1>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            style={{ fontSize: 'clamp(42px, 7vw, 80px)', fontWeight: 800, lineHeight: 1.05, color: 'var(--text-dim)' }}>
            It Doesn't Have To.
          </motion.h1>
        </div>

        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
          style={{ fontSize: 18, color: 'var(--text-dim)', maxWidth: 560, lineHeight: 1.7, marginBottom: 40, fontWeight: 300 }}>
          We install AI systems that eliminate the manual ops work draining your agency ; from lead intake and client support to reporting, invoicing, and internal workflows. You get leverage. Your team gets time back.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
          style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <motion.a href="https://cal.com/inaraai/30min?user=inaraai&overlayCalendar=true" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 10,
              background: 'var(--blue)', color: 'white', textDecoration: 'none', fontWeight: 600, fontSize: 15 }}>
            Book a Call <ArrowRight size={16} />
          </motion.a>
          <motion.a href="mailto:inayat.fatima.qureshi@gmail.com"
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 10,
              border: '1px solid var(--border-light)', color: 'var(--text-dim)', textDecoration: 'none',
              fontWeight: 500, fontSize: 15, background: 'var(--surface)' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--blue)'; e.currentTarget.style.color = 'var(--text)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-light)'; e.currentTarget.style.color = 'var(--text-dim)'; }}>
            Email Me
          </motion.a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }}
          style={{ marginTop: 80, display: 'flex', gap: 48, flexWrap: 'wrap' }}>
          {[
            { value: '< 2 min', label: 'Lead response time' },
            { value: '~80%', label: 'Emails automated' },
            { value: '5 min', label: 'Report generation' },
            { value: '60 hrs', label: 'Saved per month (Tier 3)' },
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.1 }}>
              <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--blue)', fontFamily: 'Syne' }}>{s.value}</div>
              <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 2 }}>{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}