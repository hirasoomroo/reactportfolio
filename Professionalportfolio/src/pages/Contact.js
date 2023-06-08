import React from 'react';
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactForm from '../components/Contactform';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import '../styles/contact.css'

function Contact() {
  return (
    <div className='container'>
      
        <Container className="text-center">
          <div className="p-md-5">
            <h1>Get in Touch</h1>
          </div>
        </Container>
      

      <Container fluid className="shadow bg-light mb-5">
        <Container className="p-4">
          <Row>
            <Col>
              <Container>
                <h4>Contact Info</h4>
                <p>
                  <a href="mailto:Hiraasoomro@gmail.com">
                    <span className="pr-3">
                      <FaEnvelope />
                    </span>
                    hiraasoomro@gmail.com
                  </a>
                </p>

                <p>
                  <a
                    href="https://github.com/hirasoomroo?tab=repositories"
                    target="_blank"
                  >
                    <span className="pr-3">
                      <FaGithub />
                    </span>
                    HiraSoomro
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.linkedin.com/in/hira-soomro-3b9669249/"
                    target="_blank"
                  >
                    <span className="pr-3">
                      <FaLinkedin />
                    </span>
                    LinkedIn Profile
                  </a>
                </p>
              </Container>
            </Col>

            <Col sm={12} md={6} lg={8} className="pt-sm-4 pt-lg-0">
              <Container>
                <h4>Send a Message</h4>
                <ContactForm />
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Contact;
