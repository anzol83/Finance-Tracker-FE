import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { toast } from "react-toastify";


const Footer = () => {
  const [email,setEmail]=useState("")
  const handleOnChange =(e)=>{
    setEmail(e.target.value)
  }

  const handleOnSuscribe = (e)=>{
    e.preventDefault();
    toast.success("Thank you for subscribing us 🎉✨ , Stay updated for more news and features..")
    setEmail("");

  }
  return (
    <Container fluid className=" p-5 ">
      <Row className="text-center mb-4">
        <Col md={6}>
          <div>
            <h5 className="text-white ">SUBSCRIBE OUR NEWSLETTERS NOW</h5>
            <form
              action=""
              className="d-flex justify-content-center" onSubmit={handleOnSuscribe}
            >
              <input
                type="email"
                name="emailId"
                placeholder="Enter Your Email Id"
                className="p-2 mx-2 rounded"
                value={email}
                onChange={handleOnChange}
                required
              />
              <button className="btn btn-default bg-primary " >
                Subscribe<i className="fa fa-envelope"></i>
              </button>
            </form>
          </div>
        </Col>
        <Col className="fs-4">
          <div>Follow us</div>
          <div>
            <a
              className="https://www.linkedin.com/in/anzol-neupane-276894250/"
              href=""
              target="_blank"
            >
              <FaFacebookF />
            </a>

            <a
              href="www.facebook.com"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </div>
        </Col>
      </Row>
      <Row className="text-center">
        <hr />
        <Col>
          Copyright &copy; Finance Tracker All reserved 2025. Made by{" "}
          <a
            href="https://www.linkedin.com/in/anzol-neupane-276894250/"
            target="_blank"
          >
            Angel Neupane
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
