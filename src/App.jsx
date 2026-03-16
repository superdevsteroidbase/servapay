import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from './assets/01.png';
import './index.css';

// Pages
import Home from './pages/Home';
import About from './pages/About';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isDarkTop = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const themeIconFilter = (!isDarkTop || isScrolled) ? 'none' : 'brightness(0) invert(1)';
  const themeTextColor = (!isDarkTop && !isScrolled) ? 'var(--charcoal)' : '';
  const menuIconColor = (!isDarkTop || isScrolled) ? 'var(--charcoal)' : 'white';

  return (
    <nav className={`glass-nav ${isScrolled ? 'nav-scrolled' : ''}`} style={{
      padding: isScrolled ? '0.75rem 0' : '1.5rem 0'
    }}>
      <div className="nav-container">
        <Link to="/">
          <img
            src={logo}
            alt="ServaPay"
            style={{ height: '32px', filter: themeIconFilter }}
          />
        </Link>

        <div className="hidden md-flex nav-links">
          <Link to="/" style={{ fontWeight: 500, color: themeTextColor }}>Personal</Link>
          <Link to="/" style={{ fontWeight: 500, color: themeTextColor }}>Business</Link>
          <Link to="/about" style={{ fontWeight: 500, color: themeTextColor }}>About Us</Link>
          <Link to="/" className="btn-primary" style={isDarkTop && !isScrolled ? { background: 'white', color: 'var(--primary)' } : {}}>Get Started</Link>
        </div>

        <div className="md-hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', color: menuIconColor }}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'white',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              overflow: 'hidden'
            }}
          >
            <Link to="/" style={{ color: 'var(--charcoal)', fontSize: '1.1rem', fontWeight: 500 }} onClick={() => setMobileMenuOpen(false)}>Personal</Link>
            <Link to="/" style={{ color: 'var(--charcoal)', fontSize: '1.1rem', fontWeight: 500 }} onClick={() => setMobileMenuOpen(false)}>Business</Link>
            <Link to="/about" style={{ color: 'var(--charcoal)', fontSize: '1.1rem', fontWeight: 500 }} onClick={() => setMobileMenuOpen(false)}>About Us</Link>
            <Link to="/" className="btn-primary" style={{ justifyContent: 'center', marginTop: '0.5rem' }} onClick={() => setMobileMenuOpen(false)}>Get Started</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <footer style={{ padding: '4rem 0', borderTop: '1px solid var(--slate-100)', marginTop: 'auto' }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <img src={logo} alt="ServaPay" style={{ height: '24px', marginBottom: '1.5rem' }} />
              <p style={{ color: 'var(--secondary)', maxWidth: '300px' }}>
                Introducing smarter paymennt solutions that meet the evolving need of modern users
              </p>
            </div>
            <div className="footer-links-container flex-gap-md" style={{ display: 'flex' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <h4 style={{ marginBottom: '0.5rem' }}>Platform</h4>
                <Link to="/" style={{ color: 'var(--secondary)' }}>Personal</Link>
                <Link to="/" style={{ color: 'var(--secondary)' }}>Business</Link>
                <Link to="/" style={{ color: 'var(--secondary)' }}>Developer</Link>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <h4 style={{ marginBottom: '0.5rem' }}>Company</h4>
                <Link to="/about" style={{ color: 'var(--secondary)' }}>About</Link>
                <Link to="/" style={{ color: 'var(--secondary)' }}>Careers</Link>
                <Link to="/" style={{ color: 'var(--secondary)' }}>Contact</Link>
              </div>
            </div>
          </div>
          <div className="container mt-lg" style={{ paddingTop: '2rem', borderTop: '1px solid var(--slate-100)', textAlign: 'center', color: 'var(--secondary)', fontSize: '0.875rem' }}>
            &copy; 2026 ServaPay. All rights reserved. Registered with CBN.
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
