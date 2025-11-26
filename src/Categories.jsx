// Categories.jsx
import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const categories = [
  { name: "Baby (0-2 years)", img: "/images/istockphoto-1281240685-612x612.jpg", color: "#FFB6C1", path: "/Products" },
  { name: "Toddler (2-4 years)", img: "/images/istockphoto-1355724972-612x612.jpg", color: "#FFD700", path: "/Products" },
  { name: "Kids (5-8 years)", img: "/images/istockphoto-471218522-612x612.jpg", color: "#87CEFA", path: "/Products" },
  { name: "Pre-Teens (9-12 years)", img: "/images/istockphoto-1219814420-612x612.jpg", color: "#98FB98", path: "/Products" },
];

const Categories = () => {
  return (
    <section className="categories-container" style={{ padding: "30px" }}>
      <h2 className="text-center mb-5" >
        Categories by Age
      </h2>

      <Row className="g-4  categories">
        {categories.map((cat, index) => (
          <Col key={index} xs={6} md={3}>
            <Link to={cat.path} style={{ textDecoration: "none" }}>
              <div
                style={{
                  backgroundColor: cat.color,
                  height: "400px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "25px",
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                  color: "#fff",
                  textAlign: "center",
                  cursor: "pointer",
                  boxShadow: "0 6px 15px rgba(0,0,0,0.3)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  padding: "20px",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.07)";
                  e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 6px 15px rgba(0,0,0,0.3)";
                }}
              >
                <img
                  src={cat.img}
                  alt={cat.name}
                  style={{
                    width: "200px",
                    height: "200px",
                    marginBottom: "20px",
                    transition: "transform 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px) scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                  }}
                />
                {cat.name}
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Categories;
