import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { ShoppingBag, Star, Zap, BookOpen, Award, Gift } from 'lucide-react';

const Store: React.FC = () => (
  <section className="section-padding fade-in-up animate-on-scroll position-relative" style={{ minHeight: '80vh', overflow: 'hidden' }}>
    {/* Floating Animated Icons */}
    <div className="floating-character" style={{ position: 'absolute', top: '10%', left: '8%', animationDelay: '0s', zIndex: 1 }}>
      <div style={{ background: 'linear-gradient(135deg, var(--accent-pink), var(--primary-peach))', borderRadius: '50%', width: 50, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 5px 15px rgba(255,182,193,0.33)' }} className="interactive-logo glow-effect">
        <ShoppingBag color="white" size={24} />
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
      <Row className="justify-content-center align-items-center mb-5">
        <Col md={8} className="text-center">
          <h2 className="gradient-text mb-4 fade-in-left animate-on-scroll" style={{ fontWeight: 700, fontSize: '2.5rem' }}>FunEdu Store</h2>
          <p className="lead mb-4 fade-in-up animate-on-scroll" style={{ color: 'var(--text-light)', fontSize: '1.2rem' }}>
            Discover unique educational resources, games, and gifts to make learning even more fun!
          </p>
        </Col>
      </Row>
      <Row className="g-4">
        {/* Example Store Items */}
        <Col md={4} className="fade-in-up animate-on-scroll">
          <Card className="gradient-bg hover-lift glow-effect border-0">
            <Card.Body className="text-center">
              <Gift size={40} className="mb-3" />
              <h5 className="fw-bold mb-2">Mystery Learning Box</h5>
              <p className="mb-3" style={{ color: 'var(--text-light)' }}>
                A surprise box filled with fun educational tools and games for all ages.
              </p>
              <Button className="custom-btn">Buy Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="fade-in-up animate-on-scroll">
          <Card className="gradient-bg hover-lift glow-effect border-0">
            <Card.Body className="text-center">
              <BookOpen size={40} className="mb-3" />
              <h5 className="fw-bold mb-2">Interactive Storybooks</h5>
              <p className="mb-3" style={{ color: 'var(--text-light)' }}>
                Engaging storybooks with activities and AR features to spark imagination.
              </p>
              <Button className="custom-btn">Shop Stories</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="fade-in-up animate-on-scroll">
          <Card className="gradient-bg hover-lift glow-effect border-0">
            <Card.Body className="text-center">
              <Zap size={40} className="mb-3" />
              <h5 className="fw-bold mb-2">STEM Activity Kits</h5>
              <p className="mb-3" style={{ color: 'var(--text-light)' }}>
                Hands-on kits for science, tech, engineering, and math fun at home.
              </p>
              <Button className="custom-btn">Explore Kits</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Store;
