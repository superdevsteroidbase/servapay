import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Shield, 
  Zap, 
  ChevronRight, 
  Building2,
  Lock,
  FolderDown,
  CheckCircle,
  ArrowUpRight,
  Download,
  ShieldCheck,
  BadgeCheck,
  Gauge,
  Lightbulb,
  ThumbsUp
} from 'lucide-react';
import logo from '../assets/01.png';
import heroGraphic from '../assets/home-hero.png';
import promiseGraphic from '../assets/promise-graphic.png';
import featureGridGraphic from '../assets/feature-grid.png';
import shopifyLogo from '../assets/brands/shopify.svg';
import wixLogo from '../assets/brands/wix.svg';
import textBgImage from '../assets/text-bg.png';
import { SiWoocommerce } from 'react-icons/si';
import { FaMagento } from 'react-icons/fa';


const FloatingBadge = ({ children, color, top, left, right, bottom, delay, textColor }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    style={{ 
      position: 'absolute', 
      top, left, right, bottom,
      background: color,
      color: textColor || 'white',
      padding: '0.75rem 1.5rem',
      borderRadius: '99px',
      fontWeight: 500,
      fontSize: '0.875rem',
      boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
      zIndex: 2,
      whiteSpace: 'nowrap'
    }}
  >
    {children}
  </motion.div>
);

const FloatingIcon = ({ children, color, top, left, right, bottom, delay, textColor }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    style={{ 
      position: 'absolute', 
      top, left, right, bottom,
      background: color,
      color: textColor || 'white',
      width: '56px',
      height: '56px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
      zIndex: 2
    }}
  >
    {children}
  </motion.div>
);

const CodeSection = () => (
  <div className="code-block">
    <div><span className="code-comment">// Initialize ServaPay Checkout</span></div>
    <div><span className="code-keyword">const</span> servapay = <span className="code-keyword">new</span> <span className="code-function">ServaPay</span>({'{'}</div>
    <div style={{ marginLeft: '1.5rem' }}>public_key: <span className="code-string">'pk_live_xxxx'</span>,</div>
    <div style={{ marginLeft: '1.5rem' }}>amount: <span className="code-function">5000</span>,</div>
    <div style={{ marginLeft: '1.5rem' }}>currency: <span className="code-string">'NGN'</span></div>
    <div>{'}'});</div>
    <div style={{ marginTop: '0.5rem' }}><span className="code-comment">// Trigger Payment</span></div>
    <div>servapay.<span className="code-function">setup</span>().<span className="code-function">open</span>();</div>
  </div>
);

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ width: '100%', marginBottom: '1.5rem' }}>
              <span className="beta-badge" style={{ 
                padding: '0.5rem 1.25rem', 
                borderRadius: '99px', 
                fontSize: '0.875rem', 
                fontWeight: 600,
                display: 'inline-block'
              }}>
                Now in Private Beta — Join the Revolution
              </span>
            </div>
            <h1 
              className="animated-text-bg"
              style={{ 
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
                maxWidth: '900px', 
                margin: '0 auto 1.5rem', 
                lineHeight: '1.2',
                backgroundImage: `url(${textBgImage})`
              }}
            >
              Payments, made simple 
            </h1>
            <p style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
              Servapay simplify digital transactions that allows users to send, recieve, and manage money quickly and effortlessly
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#" className="btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                Join the Waitlist <ArrowRight size={20} />
              </a>
              <a href="#" className="read-mission" style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                fontWeight: 600,
                padding: '1rem 2rem'
              }}>
                Read our Mission <ChevronRight size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            style={{ marginTop: '5rem', position: 'relative' }}
          >
            {/* Main Hero Graphic */}
            <div style={{ 
              background: 'linear-gradient(180deg, var(--slate-100) 0%, var(--white) 100%)',
              borderRadius: '2rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
              padding: '1rem',
              maxWidth: '1000px',
              margin: '0 auto',
              overflow: 'hidden'
            }}>
               <img 
                src={heroGraphic} 
                alt="ServaPay Interface" 
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  borderRadius: '1.5rem',
                  display: 'block'
                }} 
               />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating Network Section */}
      <section className="section-padding" style={{ background: 'var(--slate-50)', position: 'relative', overflow: 'hidden', minHeight: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Abstract Background Gradient Blob */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(20, 78, 247, 0.03) 0%, transparent 70%)',
          zIndex: 0, pointerEvents: 'none'
        }}></div>

        <div className="hidden md-flex" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <FloatingBadge color="#0CE3F2" textColor="var(--dark)" top="10%" left="15%" delay={0.1}>Reliable</FloatingBadge>
          <FloatingIcon color="#0C0574" top="8%" left="30%" delay={0.2}><FolderDown size={24} /></FloatingIcon>
          <FloatingBadge color="#4ADE80" top="10%" left="55%" delay={0.3}>Receive</FloatingBadge>
          
          <FloatingIcon color="#FDE047" textColor="var(--dark)" top="15%" right="15%" delay={0.4}><CheckCircle size={28} /></FloatingIcon>
          <FloatingBadge color="#144EF7" top="35%" right="5%" delay={0.5}>Send</FloatingBadge>
          
          <FloatingBadge color="#144EF7" top="45%" left="5%" delay={0.6}>Digital Payments</FloatingBadge>
          <FloatingBadge color="#FFFFFF" textColor="var(--charcoal)" top="75%" left="35%" delay={0.7}>Secure</FloatingBadge>
          
          <FloatingBadge color="#F97316" top="70%" right="35%" delay={0.8}>Seamless</FloatingBadge>
          <FloatingBadge color="#A3E635" textColor="var(--dark)" top="55%" right="5%" delay={0.9}>Money Transfer</FloatingBadge>
          
          <FloatingBadge color="#FDE047" textColor="var(--dark)" top="85%" left="10%" delay={1.0}>Fast</FloatingBadge>
          <FloatingIcon color="#4ADE80" top="80%" left="20%" delay={1.1}><Download size={24} /></FloatingIcon>
          
          <FloatingBadge color="#0C0574" top="85%" left="55%" delay={1.2}>Platform</FloatingBadge>
          <FloatingIcon color="#144EF7" top="80%" right="20%" delay={1.3}><ArrowUpRight size={24} /></FloatingIcon>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p style={{ fontSize: '1.25rem', color: 'var(--charcoal)', marginBottom: '1.5rem', lineHeight: '1.8', fontWeight: 500 }}>
              ServaPay provides a secure and easy to use digital payment platform that enables individuals and businesses to send, receive, and manage money seamlessly.
            </p>
            <p style={{ fontSize: '1.25rem', color: 'var(--charcoal)', lineHeight: '1.8', fontWeight: 500 }}>
              Built on reliable technology and an intuitive experience, ServaPay simplifies everyday transactions while ensuring payments are fast, transparent, and dependable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid Section */}
      <section className="section-padding-sm" style={{ background: 'var(--white)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ borderRadius: '2rem', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}
          >
            <img 
              src={featureGridGraphic} 
              alt="ServaPay Platform Features" 
              style={{ width: '100%', height: 'auto', display: 'block' }} 
            />
          </motion.div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="section-padding" style={{ background: 'white', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle grid background */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'linear-gradient(to right, rgba(148, 163, 184, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          zIndex: 0
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="flex-gap-md" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ flex: '1 1 500px' }}>
              <p style={{ color: 'var(--charcoal)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                ServaPay promises simple, secure, and dependable digital payments. Every transaction is designed to be fast, transparent, and reliable, giving users confidence that their money will move exactly when and where they need it to. By removing unnecessary friction and complexity, ServaPay ensures that sending and receiving money feels effortless and trustworthy every time.
              </p>
              <p style={{ color: 'var(--charcoal)', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: '1.8' }}>
                This promise reflects ServaPay's commitment to providing a payment experience people can rely on for their everyday financial needs.
              </p>
              <p style={{ color: 'var(--primary)', fontSize: '1.1rem', fontWeight: 600, lineHeight: '1.6' }}>
                In Short: ServaPay moves your money quickly,<br />
                securely, and without the stress.
              </p>
            </div>
            
            <div style={{ flex: '1 1 500px', display: 'flex', justifyContent: 'center' }}>
               <div style={{ width: '100%', maxWidth: '600px', aspectRatio: '6/5', overflow: 'hidden', position: 'relative', borderRadius: '2rem' }}>
                 <img 
                   src={promiseGraphic} 
                   alt="ServaPay Promise" 
                   style={{ position: 'absolute', top: 0, right: 0, width: '200%', height: '100%', objectFit: 'cover', objectPosition: 'right' }} 
                 />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding" style={{ background: 'var(--slate-50)', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle grid background */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'linear-gradient(to right, rgba(20, 78, 247, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(20, 78, 247, 0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px', zIndex: 0
        }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="flex-gap-lg" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start' }}>
            {/* Left Column: Huge Titles */}
            <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: 'var(--charcoal)', lineHeight: '1.2', margin: 0 }}>Trust</motion.h2>
              <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: 'var(--charcoal)', lineHeight: '1.2', margin: 0 }}>Simplicity</motion.h2>
              <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: 'var(--charcoal)', lineHeight: '1.2', margin: 0 }}>Speed</motion.h2>
              <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: 'var(--charcoal)', lineHeight: '1.2', margin: 0 }}>Innovation</motion.h2>
              <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }} style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: 'var(--charcoal)', lineHeight: '1.2', margin: 0 }}>Reliability</motion.h2>
            </div>

            {/* Right Column: Values List */}
            <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: '3rem', paddingTop: '1rem' }}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--primary)', flexShrink: 0 }}><ShieldCheck size={40} strokeWidth={1.5} /></div>
                <div>
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--charcoal)', marginBottom: '0.5rem' }}>Trust</h4>
                  <p style={{ color: 'var(--secondary)', fontSize: '1.05rem', lineHeight: '1.6' }}>We prioritize security, transparency, and reliability in every transaction, ensuring users feel confident moving their money through the ServaPay platform.</p>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--primary)', flexShrink: 0 }}><BadgeCheck size={40} strokeWidth={1.5} /></div>
                <div>
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--charcoal)', marginBottom: '0.5rem' }}>Simplicity</h4>
                  <p style={{ color: 'var(--secondary)', fontSize: '1.05rem', lineHeight: '1.6' }}>We believe digital payments should be effortless. ServaPay is designed to make sending and receiving money fast, clear, and easy for everyone.</p>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--primary)', flexShrink: 0 }}><Gauge size={40} strokeWidth={1.5} /></div>
                <div>
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--charcoal)', marginBottom: '0.5rem' }}>Speed</h4>
                  <p style={{ color: 'var(--secondary)', fontSize: '1.05rem', lineHeight: '1.6' }}>Time matters in financial transactions. We focus on delivering fast and seamless payment experiences that keep users connected and in control.</p>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--primary)', flexShrink: 0 }}><Lightbulb size={40} strokeWidth={1.5} /></div>
                <div>
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--charcoal)', marginBottom: '0.5rem' }}>Innovation</h4>
                  <p style={{ color: 'var(--secondary)', fontSize: '1.05rem', lineHeight: '1.6' }}>We continuously improve our technology to create smarter, more efficient financial solutions that meet the evolving needs of individuals and businesses.</p>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--primary)', flexShrink: 0 }}><ThumbsUp size={40} strokeWidth={1.5} /></div>
                <div>
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--charcoal)', marginBottom: '0.5rem' }}>Reliability</h4>
                  <p style={{ color: 'var(--secondary)', fontSize: '1.05rem', lineHeight: '1.6' }}>ServaPay is built to perform consistently, providing dependable payment services users can trust anytime they need to move money.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="section-padding-sm" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Works with your favorite tools</h2>
          <div className="integration-grid flex-gap-md mt-lg" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
            <img src={shopifyLogo} alt="Shopify" style={{ height: '48px', opacity: 0.7, transition: 'opacity 0.3s ease', cursor: 'pointer', filter: 'grayscale(100%)' }} onMouseOver={(e) => { e.currentTarget.style.opacity = 1; e.currentTarget.style.filter = 'none'; }} onMouseOut={(e) => { e.currentTarget.style.opacity = 0.7; e.currentTarget.style.filter = 'grayscale(100%)'; }} />
            <SiWoocommerce size={48} style={{ color: '#96588a', opacity: 0.7, transition: 'opacity 0.3s ease, filter 0.3s ease', cursor: 'pointer', filter: 'grayscale(100%)' }} onMouseOver={(e) => { e.currentTarget.style.opacity = 1; e.currentTarget.style.filter = 'none'; }} onMouseOut={(e) => { e.currentTarget.style.opacity = 0.7; e.currentTarget.style.filter = 'grayscale(100%)'; }} />
            <img src={wixLogo} alt="Wix" style={{ height: '48px', opacity: 0.7, transition: 'opacity 0.3s ease', cursor: 'pointer', filter: 'grayscale(100%)' }} onMouseOver={(e) => { e.currentTarget.style.opacity = 1; e.currentTarget.style.filter = 'none'; }} onMouseOut={(e) => { e.currentTarget.style.opacity = 0.7; e.currentTarget.style.filter = 'grayscale(100%)'; }} />
            <FaMagento size={48} style={{ color: '#ee672f', opacity: 0.7, transition: 'opacity 0.3s ease, filter 0.3s ease', cursor: 'pointer', filter: 'grayscale(100%)' }} onMouseOver={(e) => { e.currentTarget.style.opacity = 1; e.currentTarget.style.filter = 'none'; }} onMouseOut={(e) => { e.currentTarget.style.opacity = 0.7; e.currentTarget.style.filter = 'grayscale(100%)'; }} />
          </div>
          
          <div className="mt-lg">
            <h3 style={{ marginBottom: '1.5rem' }}>Coming soon to your pocket</h3>
            <div className="app-badge-group" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <a href="#" style={{ transition: 'transform 0.2s', display: 'inline-block' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" style={{ height: '48px', display: 'block' }} />
              </a>
              <a href="#" style={{ transition: 'transform 0.2s', display: 'inline-block' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" style={{ height: '48px', display: 'block' }} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
