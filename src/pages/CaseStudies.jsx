import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import CaseStudyCard from '../components/CaseStudyCard';
import leadVideo from '../assets/videos/lead-engine.mp4';
import supportVideo from '../assets/videos/client-support.mp4';
import adminVideo from '../assets/videos/admin-reporting.mp4';

const cases = [
  {
    id: 'lead-engine',
    label: 'Revenue System',
    title: 'Agency Lead Engine',
    problem: 'Every inbound lead required manual CRM entry, deal creation, and a follow-up email. At 10–20 minutes per lead, response times were inconsistent and leads regularly fell through the cracks.',
    before: 'Form submitted. Someone reads it. Manually creates contact and deal in HubSpot. Writes and sends a follow-up. Sometimes same day. Sometimes not.',
    after: 'Form submitted. AI generates a personalized response. Contact and deal created in HubSpot automatically. Follow-up email sent ; all within 2 minutes, no human involved.',
    tools: ['Google Forms', 'OpenAI', 'HubSpot CRM', 'Gmail', 'Make'],
    impact: 'Response time reduced from hours to under 2 minutes. Estimated 3–5 hours/week recovered for a 20-lead/week agency. 100% follow-up consistency.',
    videoUrl: leadVideo,
  },
  {
    id: 'client-support',
    label: 'Retention System',
    title: 'Client Support Automation',
    problem: 'Account managers manually read, categorized, and replied to every client email. Routine emails consumed 1–2 hours daily, leaving less time for work that actually required human judgment.',
    before: 'Every email read manually. Reply written. Inbox labeled by hand. Urgent and routine emails treated the same way.',
    after: 'Every inbound email classified by AI. Routine emails auto-replied and labeled. Emails requiring human review flagged, labeled, and escalated.',
    tools: ['Gmail', 'OpenAI', 'Make'],
    impact: 'Estimated 70–80% of routine emails handled automatically. ~1.5 hours/day recovered per account manager. Human attention reserved for complex issues.',
    videoUrl: supportVideo,  
  },
  {
    id: 'admin-reporting',
    label: 'Operations Leverage',
    title: 'Admin & Reporting Automation',
    problem: 'Monthly client reports took 2–4 hours each to pull, write, and send. Invoice follow-up depended on someone remembering to check a spreadsheet.',
    before: 'Data pulled from sheets manually. Report written by a team member. Formatted and emailed. Overdue invoices chased when someone remembered.',
    after: 'Sheet data aggregated automatically. Claude generates the report narrative. Row logged, email sent ; no human involvement. Invoice tracker scans and sends reminders on schedule.',
    tools: ['Google Sheets', 'Claude API', 'Gmail', 'Make'],
    impact: 'Report generation reduced from 2–4 hours to under 5 minutes per client. Invoice follow-up 100% consistent with zero manual effort.',
    videoUrl: adminVideo,  
  },
];

export default function CaseStudies() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <main style={{ maxWidth: 860, margin: '0 auto', padding: '120px 24px 80px' }}>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6,
          color: 'var(--text-muted)', textDecoration: 'none', fontSize: 14, marginBottom: 48 }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
          <ArrowLeft size={14} /> Back to home
        </Link>
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
          color: 'var(--text-muted)', marginBottom: 12 }}>Case Studies</p>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, marginBottom: 12 }}>
          Three systems. Real outcomes.
        </h1>
        <p style={{ fontSize: 16, color: 'var(--text-dim)', marginBottom: 64, lineHeight: 1.7 }}>
          Built for marketing agencies. Projected impact based on spec builds ; numbers are conservative estimates.
        </p>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {cases.map((c, i) => (
          <CaseStudyCard key={c.id} {...c} />
        ))}
      </div>

      <div style={{ marginTop: 80, textAlign: 'center' }}>
        <p style={{ color: 'var(--text-dim)', marginBottom: 24, fontSize: 16 }}>Seen enough?</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <motion.a href="https://cal.com/inaraai/30min?user=inaraai&overlayCalendar=true"
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px',
              borderRadius: 10, background: 'var(--blue)', color: 'white', textDecoration: 'none',
              fontWeight: 600, fontSize: 15 }}>
            Book a Call
          </motion.a>
          <motion.a href="mailto:inayat.fatima.qureshi@gmail.com"
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px',
              borderRadius: 10, border: '1px solid var(--border-light)', color: 'var(--text-dim)',
              textDecoration: 'none', fontWeight: 500, fontSize: 15 }}>
            Email Us
          </motion.a>
        </div>
      </div>
    </main>
  );
}