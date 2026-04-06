import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { Calendar, Mail } from 'lucide-react';

export default function CTASection() {
  return (
    <section style={{ padding: '120px 24px', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <AnimatedSection>
          <div style={{ borderRadius: 16, border: '1px solid var(--border-light)',
            background: 'linear-gradient(135deg, var(--surface) 0%, var(--surface-2) 100%)',
            padding: 'clamp(40px, 6vw, 80px)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -60, right: -60, width: 300, height: 300, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />

            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'var(--blue)', marginBottom: 16 }}>Ready to Start</p>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, lineHeight: 1.1, maxWidth: 560, marginBottom: 16 }}>
              Cut the manual work. Keep the results.
            </h2>
            <p style={{ fontSize: 16, color: 'var(--text-dim)', maxWidth: 480, lineHeight: 1.7, marginBottom: 40 }}>
              Pick a time or send a message. No pitch decks, no discovery forms. A straight conversation about what your agency needs automated.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <motion.a href="https://calendly.com/placeholder" target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 28px',
                  borderRadius: 10, background: 'var(--blue)', color: 'white', textDecoration: 'none',
                  fontWeight: 600, fontSize: 15 }}>
                <Calendar size={16} /> Book a Call
              </motion.a>
              <motion.a href="mailto:hello@sifaai.com"
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 28px',
                  borderRadius: 10, border: '1px solid var(--border-light)', background: 'transparent',
                  color: 'var(--text-dim)', textDecoration: 'none', fontWeight: 500, fontSize: 15 }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--blue)'; e.currentTarget.style.color = 'var(--text)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-light)'; e.currentTarget.style.color = 'var(--text-dim)'; }}>
                <Mail size={16} /> Email Me
              </motion.a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}