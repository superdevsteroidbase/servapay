import { motion } from 'framer-motion';
import aboutImage from '../assets/about-header.png';
import visionImage from '../assets/vision-header.png';
import missionImage from '../assets/mission-header.png';

const About = () => {
  return (
    <div className="section-padding" style={{ minHeight: '100vh', background: 'var(--slate-50)' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span style={{ 
            background: 'rgba(24, 73, 237, 0.1)', 
            color: 'var(--primary)', 
            padding: '0.5rem 1.25rem', 
            borderRadius: '99px', 
            fontSize: '0.875rem', 
            fontWeight: 600,
            display: 'inline-block',
            marginBottom: '1.5rem'
          }}>
            Our Story
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '2.5rem' }}>
            Built for better <span className="gradient-text">financial transactions</span>
          </h1>

          <div style={{ marginBottom: '3rem', borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
            <img 
              src={aboutImage} 
              alt="ServaPay User Diversity" 
              style={{ width: '100%', height: 'auto', display: 'block' }} 
            />
          </div>
          
          <div className="card-padding-sm mb-lg" style={{ background: 'white', borderRadius: '1.5rem', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', textAlign: 'left', border: '1px solid var(--slate-100)' }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--charcoal)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              ServaPay began as a response to a common challenge many people face when making digital payments. Sending or receiving money should be simple, fast, and reliable, yet users often experience delays, failed transactions, and platforms that feel complicated or untrustworthy. ServaPay was created to provide a better solution.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--charcoal)', marginBottom: '2.5rem', lineHeight: '1.8' }}>
              The brand is built on the belief that financial transactions should be seamless, secure, and accessible to everyone. By focusing on simplicity, speed, and reliability, ServaPay aims to remove the stress from everyday payments and provide users with a platform they can confidently depend on for their financial needs, while growing into a trusted digital payment brand.
            </p>

            {/* Core Values Bubbles */}
            <div className="mt-lg" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
              {/* Top Row: 4 Bubbles */}
              <div className="about-bubbles-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
                <motion.div whileHover={{ scale: 1.05 }} className="value-bubble">
                  Simplicity
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="value-bubble">
                  Speed
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="value-bubble">
                  Trust
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="value-bubble">
                  Security
                </motion.div>
              </div>
              
              {/* Bottom Row: 3 Bubbles */}
              <div className="about-bubbles-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
                <motion.div whileHover={{ scale: 1.05 }} className="value-bubble">
                  Accessibility
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="value-bubble">
                  Convenience
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="value-bubble">
                  Confidence
                </motion.div>
              </div>
            </div>
          </div>

          {/* Goals Section */}
          <div className="mb-lg" style={{ textAlign: 'left' }}>
            <span style={{ 
              background: 'rgba(24, 73, 237, 0.1)', 
              color: 'var(--primary)', 
              padding: '0.5rem 1.25rem', 
              borderRadius: '99px', 
              fontSize: '0.875rem', 
              fontWeight: 600,
              display: 'inline-block',
              marginBottom: '1.5rem'
            }}>
              Our Goals
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: '2.5rem', lineHeight: '1.3' }}>
              What we aim to achieve
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
              
              {/* Goal 1 */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                style={{
                  background: '#2563EB', // Blue
                  color: 'white',
                  padding: '2rem 2.5rem',
                  borderRadius: '1rem',
                  width: '100%',
                  maxWidth: '700px',
                  boxShadow: '0 10px 25px rgba(37, 99, 235, 0.2)',
                  transform: 'rotate(-1deg)',
                  zIndex: 5
                }}
              >
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Seamless Payments</h3>
                <p style={{ opacity: 0.9, lineHeight: '1.6', fontSize: '1.05rem' }}>
                  To simplify digital transactions by providing a platform that allows users to send, receive, and manage money quickly and effortlessly.
                </p>
              </motion.div>

              {/* Goal 2 */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                style={{
                  background: '#4ADE80', // Green
                  color: 'white',
                  padding: '2rem 2.5rem',
                  borderRadius: '1rem',
                  width: '100%',
                  maxWidth: '700px',
                  boxShadow: '0 10px 25px rgba(74, 222, 128, 0.2)',
                  transform: 'rotate(1deg)',
                  marginTop: '-1rem',
                  zIndex: 4
                }}
              >
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>User Trust and Security</h3>
                <p style={{ opacity: 0.9, lineHeight: '1.6', fontSize: '1.05rem' }}>
                  To build a highly secure payment system that prioritizes user confidence through reliable technology and transparent financial processes.
                </p>
              </motion.div>

              {/* Goal 3 */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                style={{
                  background: '#FF5E00', // Orange
                  color: 'white',
                  padding: '2rem 2.5rem',
                  borderRadius: '1rem',
                  width: '100%',
                  maxWidth: '700px',
                  boxShadow: '0 10px 25px rgba(255, 94, 0, 0.2)',
                  transform: 'rotate(-1.5deg)',
                  marginTop: '-1rem',
                  zIndex: 3
                }}
              >
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Wide Accessibility</h3>
                <p style={{ opacity: 0.9, lineHeight: '1.6', fontSize: '1.05rem' }}>
                  To make digital payments accessible to individuals and businesses across different regions by delivering an easy to use and dependable financial platform.
                </p>
              </motion.div>

              {/* Goal 4 */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                style={{
                  background: '#1E1B4B', // Dark Blue
                  color: 'white',
                  padding: '2rem 2.5rem',
                  borderRadius: '1rem',
                  width: '100%',
                  maxWidth: '700px',
                  boxShadow: '0 10px 25px rgba(30, 27, 75, 0.2)',
                  transform: 'rotate(0.5deg)',
                  marginTop: '-1rem',
                  zIndex: 2
                }}
              >
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Continuous Innovation</h3>
                <p style={{ opacity: 0.9, lineHeight: '1.6', fontSize: '1.05rem' }}>
                  To constantly improve the platform by introducing smarter payment solutions that meet the evolving needs of modern users.
                </p>
              </motion.div>

              {/* Goal 5 */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                style={{
                  background: '#A3E635', // Lime Green
                  color: 'var(--charcoal)',
                  padding: '2rem 2.5rem',
                  borderRadius: '1rem',
                  width: '100%',
                  maxWidth: '700px',
                  boxShadow: '0 10px 25px rgba(163, 230, 53, 0.2)',
                  transform: 'rotate(-0.5deg)',
                  marginTop: '-1rem',
                  zIndex: 1
                }}
              >
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Global Growth</h3>
                <p style={{ opacity: 0.9, lineHeight: '1.6', fontSize: '1.05rem' }}>
                  To expand ServaPay into a recognized digital payment brand that can compete confidently on both regional and global stages.
                </p>
              </motion.div>

            </div>
          </div>

          {/* Vision Section */}
          <div className="card-padding mb-lg" style={{ background: 'var(--primary)', color: 'white', borderRadius: '1.5rem', textAlign: 'left', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <span style={{ 
                background: 'rgba(255, 255, 255, 0.1)', 
                color: 'var(--white)', 
                padding: '0.5rem 1.25rem', 
                borderRadius: '99px', 
                fontSize: '0.875rem', 
                fontWeight: 600,
                display: 'inline-block',
                marginBottom: '1.5rem',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                Our Vision
              </span>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: '1.5rem', lineHeight: '1.3' }}>
                To become the most <span style={{ color: 'var(--primary-light)' }}>trusted</span> digital payment brand for African commerce.
              </h2>
              <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', maxWidth: '700px', lineHeight: '1.8', fontWeight: 500, marginBottom: '3rem' }}>
                To become a trusted global benchmark for digital payments ensuring money moves securely, instantly, and seamlessly without stress, delays, or uncertainty.
              </p>
              
              <div style={{ background: 'white', borderRadius: '1rem', overflow: 'hidden', padding: '1rem' }}>
                <img src={visionImage} alt="ServaPay Vision Network" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
            </div>
            {/* Decorative background circle */}
            <div style={{ 
              position: 'absolute', 
              top: '-50%', 
              right: '-10%', 
              width: '400px', 
              height: '400px', 
              background: 'radial-gradient(circle, var(--primary-light) 0%, transparent 70%)', 
              opacity: 0.3,
              zIndex: 0
            }}></div>
          </div>

          {/* Mission Section */}
          <div className="card-padding" style={{ background: '#FFA833', borderRadius: '1.5rem', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', textAlign: 'left', border: '1px solid rgba(0,0,0,0.05)', marginBottom: '4rem' }}>
            <span style={{ 
              background: 'rgba(255, 255, 255, 0.3)', 
              color: 'var(--dark)', 
              padding: '0.5rem 1.25rem', 
              borderRadius: '99px', 
              fontSize: '0.875rem', 
              fontWeight: 600,
              display: 'inline-block',
              marginBottom: '1.5rem'
            }}>
              Our Mission
            </span>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: '1.4', color: 'var(--dark)', marginBottom: '3rem' }}>
              To empower individuals and businesses with fast, secure, and seamless payment solutions supported by reliable technology and transparent transaction systems.
            </h2>
            
            <div style={{ background: '#F8FAEC', borderRadius: '1rem', overflow: 'hidden', padding: '1rem' }}>
               <img src={missionImage} alt="ServaPay Market Reach" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
