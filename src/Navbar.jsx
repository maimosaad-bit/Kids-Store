import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="py-3" style={{ backgroundColor: "#ff7bac" }}>
      <Container>
        <Row className="align-items-center">
          
         
          <Col md={4}>
            <Link className="navbar-brand fw-bold fs-2 text-dark" to="/">
              Kids Store
            </Link>
          </Col>

          
          <Col className="d-flex justify-content-end">
            <ul className="d-flex list-unstyled gap-4 m-0">
              <li>
                <Link className="nav-link fs-5  mylink" to="/Categories">
                Categories
                </Link>
              </li>
              <li>
                <Link className="nav-link fs-5 mylink" to="/cart">
                  Cart
                </Link>
              </li>
            </ul>
          </Col>

        </Row>
      </Container>
    </nav>
  );
}

export default Navbar;
