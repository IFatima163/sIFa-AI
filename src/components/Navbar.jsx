import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          position: 'fixed', top: 0, width: '100%', zIndex: 50,
          background: scrolled ? 'rgba(8,12,20,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          transition: 'all 0.3s ease',
          padding: '0 24px',
        }}
      >
        <div style={{ maxWidth: 1100, margin: '0 auto', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 2 }}>
            <span style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 20, color: 'var(--text)' }}>Inara</span>
            <span style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 20, color: 'var(--blue)' }}>AI</span>
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="hidden md:flex">
            <Link to="/case-studies" style={{ color: 'var(--text-dim)', fontSize: 14, textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--text)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-dim)'}>
              Case Studies
            </Link>
            <a href="mailto:inayat.fatima.qureshi@gmail.com" style={{
              fontSize: 14, padding: '8px 20px', borderRadius: 8,
              background: 'var(--blue)', color: 'white', textDecoration: 'none',
              fontWeight: 500, transition: 'opacity 0.2s',
            }}
              onMouseEnter={e => e.target.style.opacity = 0.85}
              onMouseLeave={e => e.target.style.opacity = 1}>
              Get in Touch
            </a>
          </div>

          <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', color: 'var(--text)', cursor: 'pointer' }} className="md:hidden">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            style={{
              position: 'fixed', top: 64, left: 0, right: 0, zIndex: 49,
              background: 'var(--surface)', borderBottom: '1px solid var(--border)',
              padding: '24px',
            }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <Link to="/case-studies" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontSize: 15 }}>Case Studies</Link>
              <a href="https://cal.com/inaraai/30min?user=inaraai&overlayCalendar=true" target="_blank" rel="noopener noreferrer"
                style={{ color: 'var(--blue)', textDecoration: 'none', fontSize: 15 }}>Book a Call</a>
              <a href="mailto:inayat.fatima.qureshi@gmail.com" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontSize: 15 }}>inayat.fatima.qureshi@gmail.com</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}