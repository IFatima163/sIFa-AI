import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

export default function CaseStudyCard({ id, label, title, problem, before, after, tools, impact, videoUrl }) {
  return (
    <AnimatedSection>
      <div id={id} style={{ borderRadius: 16, border: '1px solid var(--border)',
        background: 'var(--surface)', overflow: 'hidden', scrollMarginTop: 100 }}>
        <div style={{ padding: '4px 0 0', background: 'var(--blue)', width: '100%', height: 3 }} />
        <div style={{ padding: 'clamp(28px, 4vw, 48px)' }}>
          <div style={{ marginBottom: 28 }}>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'var(--blue)', padding: '4px 12px', borderRadius: 100,
              border: '1px solid var(--blue-dim)', background: 'rgba(59,130,246,0.08)' }}>
              {label}
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, marginBottom: 32, color: 'var(--text)' }}>
            {title}
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24, marginBottom: 28 }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'var(--text-muted)', marginBottom: 10 }}>Problem</p>
              <p style={{ fontSize: 14, color: 'var(--text-dim)', lineHeight: 1.75 }}>{problem}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div>
                <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: 'var(--text-muted)', marginBottom: 10 }}>Before</p>
                <p style={{ fontSize: 14, color: 'var(--text-dim)', lineHeight: 1.75 }}>{before}</p>
              </div>
              <div>
                <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: 'var(--blue)', marginBottom: 10 }}>After</p>
                <p style={{ fontSize: 14, color: 'var(--text)', lineHeight: 1.75 }}>{after}</p>
              </div>
            </div>
          </div>

          {videoUrl && (
            <div style={{ marginBottom: 24, borderRadius: 10, overflow: 'hidden', border: '1px solid var(--border)' }}>
              <video
                src={videoUrl}
                controls
                style={{ width: '100%', display: 'block', maxHeight: 360, background: '#000' }}
              />
            </div>
          )}

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
            {tools.map((t, i) => (
              <span key={i} style={{ fontSize: 12, padding: '5px 12px', borderRadius: 100,
                border: '1px solid var(--border)', color: 'var(--text-dim)',
                background: 'var(--surface-2)' }}>{t}</span>
            ))}
          </div>

          <div style={{ borderRadius: 10, padding: '16px 20px',
            background: 'rgba(59,130,246,0.07)', border: '1px solid var(--blue-dim)' }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'var(--blue)', marginBottom: 6 }}>Projected Impact</p>
            <p style={{ fontSize: 14, color: 'var(--text)', lineHeight: 1.7 }}>{impact}</p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}