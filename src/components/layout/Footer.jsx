import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { toast } from "react-toastify";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOnSubscribe = (e) => {
    e.preventDefault();
    toast.success("🎉 Thank you for subscribing. Stay updated!");
    setEmail("");
  };

  return (
    <Container fluid className="bg-dark text-white p-5 mt-5">
      <Row className="text-center text-md-start">
        {/* Newsletter */}
        <Col md={4} className="mb-4">
          <h5 className="text-uppercase">Newsletter</h5>
          <form onSubmit={handleOnSubscribe} className="d-flex mt-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="form-control me-2 rounded"
              value={email}
              onChange={handleOnChange}
              required
            />
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </form>
        </Col>

        {/* Quick Links */}
        <Col md={4} className="mb-4">
          <h5 className="text-uppercase">Quick Links</h5>
          <ul className="list-unstyled mt-3">
            <li><a href="#home" className="text-white text-decoration-none">Home</a></li>
            <li><a href="#dashboard" className="text-white text-decoration-none">Dashboard</a></li>
            <li><a href="#features" className="text-white text-decoration-none">Features</a></li>
            <li><a href="#contact" className="text-white text-decoration-none">Contact</a></li>
          </ul>
        </Col>

        {/* Socials */}
        <Col md={4} className="mb-4 text-center text-md-start">
          <h5 className="text-uppercase">Follow Us</h5>
          <div className="d-flex gap-3 fs-4 mt-3 justify-content-center justify-content-md-start">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/in/anzol-neupane-276894250/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaLinkedin />
            </a>
          </div>
        </Col>
      </Row>

      <hr className="border-light" />

      <Row>
        <Col className="text-center py-2">
          <small>
            &copy; 2025 <strong>Finance Tracker</strong>. All rights reserved. <br />
            Made with ❤️ by{" "}
            <a
              href="https://www.linkedin.com/in/anzol-neupane-276894250/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-underline text-primary"
            >
              Angel Neupane
            </a>
          </small>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
