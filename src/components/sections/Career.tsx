import { Container, Row, Col } from 'react-bootstrap';
import { Briefcase, Star, Zap, BookOpen, Award } from 'lucide-react';

const Career: React.FC = () => (
  <section className="section-padding fade-in-up animate-on-scroll position-relative" style={{ minHeight: '80vh', overflow: 'hidden' }}>
    {/* Floating Animated Icons */}
    <div className="floating-character" style={{ position: 'absolute', top: '10%', left: '8%', animationDelay: '0s', zIndex: 1 }}>
      <div style={{ background: 'linear-gradient(135deg, var(--accent-pink), var(--primary-peach))', borderRadius: '50%', width: 50, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 5px 15px rgba(255,182,193,0.33)' }} className="interactive-logo glow-effect">
        <Briefcase color="white" size={24} />
      </div>
    </div>
    <div className="floating-character parallax-element" data-speed="0.3" style={{ position: 'absolute', top: '20%', right: '10%', animationDelay: '1s', zIndex: 1 }}>
      <div style={{ background: 'linear-gradient(135deg, var(--accent-lavender), var(--secondary-peach))', borderRadius: '50%', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 5px 15px rgba(230,230,250,0.3)' }} className="interactive-logo">
        <Star color="white" size={20} />
      </div>
    </div>
    <div className="floating-character parallax-element" data-speed="0.4" style={{ position: 'absolute', bottom: '18%', left: '12%', animationDelay: '2s', zIndex: 1 }}>
      <div style={{ background: 'linear-gradient(135deg, var(--primary-peach), var(--accent-coral))', borderRadius: '50%', width: 60, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 5px 15px rgba(255,207,158,0.3)' }} className="interactive-logo morphing-shape">
        <Zap color="white" size={28} />
      </div>
    </div>
    <div className="floating-character parallax-element" data-speed="0.2" style={{ position: 'absolute', bottom: '10%', right: '8%', animationDelay: '1.5s', zIndex: 1 }}>
      <div style={{ background: 'linear-gradient(135deg, var(--accent-coral), var(--accent-pink))', borderRadius: '50%', width: 45, height: 45, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 5px 15px rgba(255,154,139,0.3)' }} className="interactive-logo glow-effect">
        <BookOpen color="white" size={20} />
      </div>
    </div>
    <div className="floating-character parallax-element" data-speed="0.5" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', animationDelay: '2.5s', zIndex: 1 }}>
      <div style={{ background: 'linear-gradient(135deg, var(--accent-pink), var(--accent-lavender))', borderRadius: '50%', width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 5px 15px rgba(255,182,193,0.3)' }} className="interactive-logo">
        <Award color="white" size={18} />
      </div>
    </div>
    <Container>
      <Row className="justify-content-center align-items-center">
        <Col md={8} className="text-center">
          <h2 className="gradient-text mb-4 fade-in-left animate-on-scroll" style={{ fontWeight: 700, fontSize: '2.5rem' }}>Careers at FunEdu</h2>
          <p className="lead mb-4 fade-in-up animate-on-scroll" style={{ color: 'var(--text-light)', fontSize: '1.2rem' }}>
            Join our mission to make learning magical!<br />
            We are always looking for creative, passionate individuals who want to make a difference in education.
          </p>
          <div className="d-flex justify-content-center gap-4 mt-5">
            <div className="glow-effect hover-lift p-4 rounded-4 gradient-bg fade-in-right animate-on-scroll">
              <span role="img" aria-label="Openings" style={{ fontSize: '2.5rem' }}>💼</span>
              <h5 className="mt-3 mb-2">Open Positions</h5>
              <p className="mb-0" style={{ color: 'var(--text-light)' }}>
                Explore roles in teaching, tech, design, and more. Your dream job could be here!
              </p>
            </div>
            <div className="glow-effect hover-lift p-4 rounded-4 gradient-bg fade-in-left animate-on-scroll">
              <span role="img" aria-label="Culture" style={{ fontSize: '2.5rem' }}>🤝</span>
              <h5 className="mt-3 mb-2">Our Culture</h5>
              <p className="mb-0" style={{ color: 'var(--text-light)' }}>
                We value creativity, collaboration, and a love for learning. Grow with us!
              </p>
            </div>
          </div>
          <div className="mt-5 fade-in-up animate-on-scroll">
            <div className="glow-effect hover-lift p-4 rounded-4 gradient-bg d-inline-block">
              <span role="img" aria-label="Team" style={{ fontSize: '2.5rem' }}>👩‍💻👨‍💻</span>
              <h5 className="mt-3 mb-2">Meet the Team</h5>
              <p className="mb-0" style={{ color: 'var(--text-light)' }}>
                Work alongside passionate educators, technologists, and innovators.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Career;
