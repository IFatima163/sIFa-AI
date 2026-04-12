import AnimatedSection from './AnimatedSection';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Outstanding work with great attention to detail and a high level of professionalism. She understood my requirements clearly and executed everything flawlessly and on time. Communication was prompt and clear — she always made sure I was satisfied with every step.",
    name: "Emmad",
    role: "Freelance Client",
  },
  {
    quote: "Even on tight deadlines, she never missed a delivery.",
    name: "Hammad",
    role: "Freelance Client",
  },
  {
    quote: "Great dedication and a positive attitude. Always eager to learn and adapt quickly. She provided great support wherever needed. I would definitely recommend her.",
    name: "Sunbla",
    role: "Data Analyst, Former Colleague",
  },
  {
    quote: "Very responsible and thorough. She didn't hesitate to ask questions when needed but also did her own research independently. Reliable and professional and I would definitely consider working with her again.",
    name: "Yulia",
    role: "Former Employer, Kiddyschool",
  },
];

export default function Testimonials() {
  return (
    <section style={{ padding: '120px 24px', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <AnimatedSection>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--text-muted)', marginBottom: 16 }}>What People Say</p>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, lineHeight: 1.1, marginBottom: 56 }}>
            Trusted to deliver.
          </h2>
        </AnimatedSection>

        {/* for 3 testimonialsin a row: display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16
        for 2 testimonials in a row: display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}> 
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div style={{ padding: 28, borderRadius: 12, border: '1px solid var(--border)',
                background: 'var(--surface)', height: '100%', display: 'flex', flexDirection: 'column', gap: 20 }}>
                <Quote size={20} color="var(--blue)" />
                <p style={{ fontSize: 14, color: 'var(--text-dim)', lineHeight: 1.8, flex: 1, fontStyle: 'italic' }}>
                  "{t.quote}"
                </p>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: 16 }}>
                  <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)', marginBottom: 2 }}>{t.name}</p>
                  <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>{t.role}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}