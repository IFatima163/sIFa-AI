import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CaseStudies from './pages/CaseStudies';

const basename = import.meta.env.PROD ? '/inara-ai' : '/';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router basename={basename}>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies" element={<CaseStudies />} />
      </Routes>
      <Footer />
    </Router>
  );
}