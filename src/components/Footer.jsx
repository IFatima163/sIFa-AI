import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '32px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <span style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 16, color: 'var(--text)' }}>Sifa</span>
          <span style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 16, color: 'var(--blue)' }}>AI</span>
        </div>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <Link to="/case-studies" style={{ fontSize: 13, color: 'var(--text-muted)', textDecoration: 'none' }}>Case Studies</Link>
          <a href="mailto:hello@sifaai.com" style={{ fontSize: 13, color: 'var(--text-muted)', textDecoration: 'none' }}>hello@sifaai.com</a>
        </div>
        <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>© {new Date().getFullYear()} Sifa AI</p>
      </div>
    </footer>
  );
}