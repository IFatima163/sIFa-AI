import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const tiers = [
  {
    name: 'Starter Ops',
    tier: 'Tier 1',
    setup: '$1,500',
    monthly: '$500',
    highlight: false,
    promise: 'Leads answered instantly. No missed inquiries. Faster response than your competitors.',
    results: '30–50% faster lead response. 10–20% lift in conversions.',
    items: [
      'AI customer-facing assistant (website or WhatsApp)',
      'Lead capture and qualification',
      'CRM auto-update',
      'Automated follow-ups (email or WhatsApp)',
      'Basic analytics dashboard',
    ],
  },
  {
    name: 'Growth Ops',
    tier: 'Tier 2',
    setup: '$4,000',
    monthly: '$1,200',
    highlight: false,
    promise: 'Founder stops micromanaging. Team stops asking repetitive questions. Business finally feels under control.',
    results: '20–40 hrs saved/month. Reduces need to hire 1 admin role.',
    items: [
      'Everything in Starter Ops',
      'AI lead qualification and routing',
      'Internal AI assistant (SOP + knowledge base)',
      'Multi-channel automation (CRM, email, WhatsApp)',
      'Appointment scheduling automation',
      'Monthly optimization and prompt tuning',
    ],
  },
  {
    name: 'Full Ops Leverage',
    tier: 'Tier 3',
    setup: '$7,500',
    monthly: '$2,000',
    highlight: true,
    promise: 'Business runs even if the founder steps away. Fewer staff needed. Predictable, scalable operations.',
    results: '40–60 hrs saved/month. Avoids 1–2 hires. Long-term operations leverage.',
    items: [
      'Everything in Growth Ops',
      'Fully customized internal AI ops system',
      'Admin and reporting automation',
      'Financial ops dashboard',
      'Priority support',
      'Quarterly system expansion',
      'SLA and uptime guarantee',
    ],
  },
];

export default function Pricing() {
  return (
    <section style={{ padding: '120px 24px', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <AnimatedSection>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--text-muted)', marginBottom: 16 }}>Pricing</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16, marginBottom: 56 }}>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, lineHeight: 1.1, maxWidth: 480 }}>
              Choose your level of leverage.
            </h2>
            <p style={{ fontSize: 14, color: 'var(--text-dim)', maxWidth: 280, lineHeight: 1.6 }}>
              All setups delivered in 2 weeks. Maintenance keeps systems tuned and running.
            </p>
          </div>
        </AnimatedSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
          {tiers.map((tier, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}
                style={{
                  borderRadius: 12, border: `1px solid ${tier.highlight ? 'var(--blue)' : 'var(--border)'}`,
                  background: tier.highlight ? 'rgba(13,26,61,0.9)' : 'var(--surface)',
                  display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden',
                }}>

                {/* Header */}
                <div style={{
                  padding: '24px 24px 20px',
                  background: tier.highlight ? 'var(--blue)' : 'var(--surface-2)',
                  borderBottom: `1px solid ${tier.highlight ? 'transparent' : 'var(--border)'}`,
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                    <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
                      color: tier.highlight ? 'rgba(255,255,255,0.7)' : 'var(--text-muted)' }}>
                      {tier.tier}
                    </span>
                    {tier.highlight && (
                      <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                        color: 'white', background: 'rgba(255,255,255,0.2)', padding: '3px 10px', borderRadius: 100 }}>
                        Best Value
                      </span>
                    )}
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 800, color: 'white', marginBottom: 16 }}>{tier.name}</h3>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                    <span style={{ fontSize: 32, fontWeight: 800, color: 'white' }}>{tier.setup}</span>
                    <span style={{ fontSize: 13, color: tier.highlight ? 'rgba(255,255,255,0.6)' : 'var(--text-muted)' }}>setup</span>
                  </div>
                  <p style={{ fontSize: 13, color: tier.highlight ? 'rgba(255,255,255,0.6)' : 'var(--text-muted)', marginTop: 4 }}>
                    + {tier.monthly}/mo maintenance
                  </p>
                </div>

                {/* Body */}
                <div style={{ padding: 24, flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {/* Promise */}
                  <p style={{ fontSize: 13, color: 'var(--text-dim)', lineHeight: 1.7, fontStyle: 'italic' }}>
                    "{tier.promise}"
                  </p>

                  {/* Items */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {tier.items.map((item, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                        <div style={{ width: 16, height: 16, borderRadius: 4, background: 'var(--blue-dim)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                          <Check size={10} color="var(--blue)" strokeWidth={3} />
                        </div>
                        <span style={{ fontSize: 13, color: item.startsWith('Everything') ? 'var(--text-muted)' : 'var(--text-dim)',
                          lineHeight: 1.5, fontStyle: item.startsWith('Everything') ? 'italic' : 'normal' }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Results */}
                  <div style={{ padding: '12px 16px', borderRadius: 8,
                    background: tier.highlight ? 'rgba(59,130,246,0.15)' : 'var(--surface-2)',
                    border: '1px solid var(--blue-dim)', marginTop: 'auto' }}>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                      color: 'var(--blue)', marginBottom: 6 }}>Projected Results</p>
                    <p style={{ fontSize: 12, color: 'var(--text)', lineHeight: 1.6 }}>{tier.results}</p>
                  </div>

                  {/* CTA */}
                  <motion.a href="https://cal.com/inaraai/30min?user=inaraai&overlayCalendar=true" target="_blank" rel="noopener noreferrer"
                    whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                      padding: '12px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14,
                      background: tier.highlight ? 'var(--blue)' : 'transparent',
                      color: tier.highlight ? 'white' : 'var(--blue)',
                      border: `1px solid ${tier.highlight ? 'var(--blue)' : 'var(--blue-dim)'}` }}>
                    Get Started <ArrowRight size={14} />
                  </motion.a>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Guarantee strip */}
        <AnimatedSection delay={0.3}>
          <div style={{ marginTop: 24, padding: '20px 28px', borderRadius: 10,
            border: '1px solid var(--border-light)', background: 'var(--surface)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
            <p style={{ fontSize: 14, color: 'var(--text-dim)', lineHeight: 1.6 }}>
              <span style={{ color: 'var(--blue)', fontWeight: 600 }}>Guarantee: </span>
              If we don't save you at least 10 hours/month within 60 days, we keep working for free until we do.
            </p>
            <a href="mailto:inayat.fatima.qureshi@gmail.com" style={{ fontSize: 13, color: 'var(--text-muted)',
              textDecoration: 'none', whiteSpace: 'nowrap' }}>
              Questions? Email Me →
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}