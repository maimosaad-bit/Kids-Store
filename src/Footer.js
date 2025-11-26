import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white" style={{ backgroundColor: "#ff7bac" }}>
      <Container className="py-5 text-center">

        {/* ===== LOGO & DESCRIPTION ===== */}
        <Row className="mb-4">
          <Col>
            <h4 className="mb-2">Kids Store</h4>
            <p className="mb-0">Bringing fun and colorful clothes for kids!</p>
          </Col>
        </Row>

        {/* ===== LINKS ===== */}
        <Row className="mb-4">
          <Col className="d-flex justify-content-center gap-4 flex-wrap">

            <Link to="/" className="footer-link text-white">Home</Link>
            <Link to="/Categories" className="footer-link text-white">Categories</Link>
            <Link to="/cart" className="footer-link text-white">Cart</Link>
            <Link to="/contact" className="footer-link text-white">Contact</Link>

          </Col>
        </Row>

        {/* ===== SOCIAL ICONS ===== */}
        <Row className="mb-3">
          <Col className="d-flex justify-content-center gap-3">

            <button className="social-icon text-white fs-4 bg-transparent border-0">🐦</button>
            <button className="social-icon text-white fs-4 bg-transparent border-0">📘</button>
            <button className="social-icon text-white fs-4 bg-transparent border-0">📸</button>

          </Col>
        </Row>

        {/* ===== COPYRIGHT ===== */}
        <Row>
          <Col>
            <p className="mb-0">&copy; 2025 Kids Store. All rights reserved.</p>
          </Col>
        </Row>

      </Container>
    </footer>
  );
};

export default Footer;



