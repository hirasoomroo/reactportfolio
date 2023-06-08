import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { validateEmail } from '../utils/helper';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../App.css';
import '../styles/contactform.css';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [formMessage, setFormMessage] = useState('');

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setFormMessage('Your email is invalid.');
      } else {
        setFormMessage('');
      }
    } else {
      if (!e.target.value.length) {
        const name = e.target.name;
        setFormMessage(`${name.charAt(0).toUpperCase() + name.slice(1)} is required.`);
      } else {
        setFormMessage('');
      }
    }

    if (!formMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm('gmail', 'template_7pi3req', '#contactForm', 'user_2ClFT2CBVbPN3tPCiXsd0')
      .then(
        function (response) {
          console.log(response.text);
          setFormMessage('Message sent!');
        },
        function (error) {
          console.log(error.text);
          setFormMessage(
            "Your message couldn't be sent. Please email Hira directly at hiraasoomro@gmail.com"
          );
        }
      );
  }

  return (
    <Form onSubmit={sendEmail} className="contact-form">
      <Form.Group controlId="name">
        <Form.Label className="contact-form-label">Your Name</Form.Label>
        <Form.Control
          required
          name="name"
          placeholder="Jane Doe"
          onBlur={handleChange}
          className="contact-form-input"
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label className="contact-form-label">Your Email</Form.Label>
        <Form.Control
          required
          name="email"
          type="email"
          placeholder="jdoe@gmail.com"
          onBlur={handleChange}
          className="contact-form-input"
        />
      </Form.Group>

      <Form.Group controlId="subject">
        <Form.Label className="contact-form-label">Subject</Form.Label>
        <Form.Control
          required
          name="subject"
          placeholder="Subject"
          onBlur={handleChange}
          className="contact-form-input"
        />
      </Form.Group>

      <Form.Group controlId="message">
        <Form.Label className="contact-form-label">Message</Form.Label>
        <Form.Control
          required
          name="message"
          as="textarea"
          rows="5"
          placeholder="Message"
          onBlur={handleChange}
          className="contact-form-textarea"
        />
      </Form.Group>

      {formMessage && <p className="contact-form-message">{formMessage}</p>}

      <Button type="submit" className="contact-form-submit">
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm;
