import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Settings } from 'lucide-react';

const systems = [
  {
    icon: TrendingUp,
    label: 'Revenue System',
    title: 'Agency Lead Engine',
    desc: 'Automated lead intake, CRM entry, deal creation, and personalized follow-up ; triggered the moment a form is submitted.',
    metric: '3–5 hrs/week recovered',
    anchor: 'lead-engine',
  },
  {
    icon: Users,
    label: 'Retention System',
    title: 'Client Support Automation',
    desc: 'AI reads, classifies, and handles inbound client emails. Routine replies sent automatically. Urgent issues escalated instantly.',
    metric: '1.5 hrs/day per AM',
    anchor: 'client-support',
  },
  {
    icon: Settings,
    label: 'Operations Leverage',
    title: 'Admin & Reporting Automation',
    desc: 'Monthly reports generated and sent without human involvement. Invoices tracked and chased automatically on schedule.',
    metric: '2–4 hrs → 5 min/report',
    anchor: 'admin-reporting',
  },
];

export default function SystemsOverview() {
  return (
    <section style={{ padding: '120px 24px', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <AnimatedSection>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--text-muted)', marginBottom: 16 }}>What We Build</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 16 }}>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, lineHeight: 1.1, maxWidth: 460 }}>
              Real systems. Documented results.
            </h2>
            <Link to="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', gap: 6,
              color: 'var(--blue)', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>
              View all case studies <ArrowRight size={14} />
            </Link>
          </div>
          <p style={{ fontSize: 15, color: 'var(--text-dim)', maxWidth: 560, lineHeight: 1.7, marginBottom: 40 }}>
            These are three systems we've built and documented. They're included across our packages depending on what your agency needs. Every engagement is scoped to your ops ; not a template dropped in.
          </p>
        </AnimatedSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
          {systems.map((s, i) => {
            const Icon = s.icon;
            return (
              <AnimatedSection key={i} delay={i * 0.12}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}
                  style={{ padding: 28, borderRadius: 12, border: '1px solid var(--border)',
                    background: 'var(--surface)', display: 'flex', flexDirection: 'column', gap: 20, height: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--blue-dim)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={18} color="var(--blue)" />
                    </div>
                    <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
                      color: 'var(--text-muted)', padding: '4px 10px', borderRadius: 100,
                      border: '1px solid var(--border)', background: 'var(--surface-2)' }}>
                      {s.label}
                    </span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: 19, fontWeight: 700, marginBottom: 10, color: 'var(--text)' }}>{s.title}</h3>
                    <p style={{ fontSize: 14, color: 'var(--text-dim)', lineHeight: 1.7 }}>{s.desc}</p>
                  </div>
                  <div style={{ paddingTop: 16, borderTop: '1px solid var(--border)',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 13, color: 'var(--blue)', fontWeight: 600 }}>{s.metric}</span>
                    <Link to={`/case-studies#${s.anchor}`}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 4,
                        color: 'var(--text-dim)', textDecoration: 'none', fontSize: 13 }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--text-dim)'}>
                      Case study <ArrowRight size={12} />
                    </Link>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}