import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
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
    <Container fluid className="bg-dark text-white pt-5 px-4 px-md-5 mt-5">
      <Row className="gy-4">
        {/* Socials */}
        <Col md={3}>
          <h5 className="text-uppercase mb-3">Follow Us</h5>
          <div className="d-flex gap-3 fs-4">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="text-white">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/in/anzol-neupane-276894250/" target="_blank" rel="noreferrer" className="text-white">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/ig_anzol?igsh=cmU2M3NibHpnY2N3&utm_source=qr" target="_blank" rel="noreferrer" className="text-white">
              <FaInstagram />
            </a>
            <a href="https://www.twitter.com/az_anzol83" target="_blank" rel="noreferrer" className="text-white">
              <FaXTwitter />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white">
              <FaGithub />
            </a>
          </div>
        </Col>

        {/* Quick Links */}
        <Col md={3}>
          <h5 className="text-uppercase mb-3">Quick Links</h5>
          <ul className="list-unstyled d-flex flex-column gap-2">
            <li><a href="/" className="text-white text-decoration-none">🏠 Home</a></li>
            <li><a href="/" className="text-white text-decoration-none">📊 Dashboard</a></li>
            <li><a href="#features" className="text-white text-decoration-none">✨ Features</a></li>
            <li><a href="#contact" className="text-white text-decoration-none">📞 Contact</a></li>
          </ul>
        </Col>

        {/* Resources */}
        <Col md={3}>
          <h5 className="text-uppercase mb-3">Resources</h5>
          <ul className="list-unstyled d-flex flex-column gap-2">
            <li><a href="#" className="text-white text-decoration-none">📝 Blog</a></li>
            <li><a href="#" className="text-white text-decoration-none">📚 Documentation</a></li>
            <li><a href="#" className="text-white text-decoration-none">❓ FAQs</a></li>
            <li><a href="#" className="text-white text-decoration-none">🛠️ Support</a></li>
          </ul>
        </Col>

        {/* Newsletter */}
        <Col md={3}>
          <h5 className="text-uppercase mb-3">Subscribe</h5>
          <form onSubmit={handleOnSubscribe} className="d-flex">
            <input
              type="email"
              placeholder="Your email"
              className="form-control rounded-start"
              value={email}
              onChange={handleOnChange}
              required
            />
            <button type="submit" className="btn btn-primary rounded-end">
              Go
            </button>
          </form>
        </Col>
      </Row>

      <hr className="border-light my-4" />

      <Row>
        <Col className="text-center pb-3">
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
