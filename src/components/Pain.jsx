import AnimatedSection from './AnimatedSection';
import { AlertCircle } from 'lucide-react';

const pains = [
  { title: "Leads go cold", desc: "Someone fills out your form. It sits unread for hours. By the time you follow up, they've moved on." },
  { title: "Buried in email", desc: "Account managers spend hours triaging, replying, and labeling emails that don't need a human near them." },
  { title: "Reporting eats Fridays", desc: "Monthly reports pulled manually, written by hand, formatted, emailed. Every month. Every client." },
];

export default function Pain() {
  return (
    <section style={{ padding: '120px 24px', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <AnimatedSection>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--text-muted)', marginBottom: 16 }}>Sound Familiar?</p>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, lineHeight: 1.1, maxWidth: 480 }}>
            The manual tax your agency pays every week.
          </h2>
        </AnimatedSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginTop: 56 }}>
          {pains.map((p, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div style={{ padding: 28, borderRadius: 12, border: '1px solid var(--border)',
                background: 'var(--surface)', height: '100%', transition: 'border-color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-light)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--blue-dim)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <AlertCircle size={16} color="var(--blue)" />
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10, color: 'var(--text)' }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--text-dim)', lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}