import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <main>

      {/* ====== HERO SECTION ====== */}
      <Container className="text-center py-5">
        <Row>
          <Col>
            <h1 className="hero-title">Welcome to Kids Store!</h1>
            <p className="hero-subtitle">
              Find the cutest clothes and toys for your little ones.
            </p>

            <Link to="/products" className="btn btn-hero">
              Shop Now
            </Link>
          </Col>
        </Row>
      </Container>

      {/* ====== FEATURES SECTION ====== */}
      <Container className="mt-5">
        <Row className="text-center">

          <Col md={4} className="mb-4">
            <div className="feature-card">
              <h4>🎨 Colorful Products</h4>
              <p>Bright and fun clothes for happy kids of all ages.</p>
            </div>
          </Col>

          <Col md={4} className="mb-4">
            <div className="feature-card">
              <h4>🚚 Fast Delivery</h4>
              <p>Get your orders delivered to your doorstep quickly.</p>
            </div>
          </Col>

          <Col md={4} className="mb-4">
            <div className="feature-card">
              <h4>💖 Quality Guaranteed</h4>
              <p>High-quality fabrics and durable products for kids.</p>
            </div>
          </Col>

        </Row>
      </Container>
    </main>
  );
};

export default Home;
