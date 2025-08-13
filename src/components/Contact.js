import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const ContactSection = styled.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background: linear-gradient(135deg, rgba(107, 114, 128, 0.03) 0%, rgba(31, 41, 55, 0.03) 100%);

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  background: var(--gradient-hero);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(107, 114, 128, 0.08) 0%, rgba(31, 41, 55, 0.08) 100%);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(107, 114, 128, 0.25);
  border-radius: 15px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(10px);
    border-color: rgba(107, 114, 128, 0.5);
    background: linear-gradient(135deg, rgba(107, 114, 128, 0.12) 0%, rgba(31, 41, 55, 0.12) 100%);
  }
`;

const ContactIcon = styled.div`
  font-size: 1.5rem;
  color: var(--primary-gray);
  min-width: 24px;
`;

const ContactText = styled.div`
  h4 {
    color: #ffffff;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--text-muted);
    font-size: 1rem;
  }
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: #ffffff;
  font-weight: 500;
  font-size: 1rem;
`;

const Input = styled.input`
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(6, 182, 212, 0.2);
  border-radius: 10px;
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary-cyan);
    box-shadow: 0 0 10px rgba(6, 182, 212, 0.3);
  }

  &::placeholder {
    color: #888888;
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(6, 182, 212, 0.2);
  border-radius: 10px;
  color: #ffffff;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary-cyan);
    box-shadow: 0 0 10px rgba(6, 182, 212, 0.3);
  }

  &::placeholder {
    color: #888888;
  }
`;

const SubmitButton = styled(motion.button)`
  background: var(--gradient-primary);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(6, 182, 212, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(6, 182, 212, 0.2);
  border-radius: 50%;
  color: var(--primary-cyan);
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(6, 182, 212, 0.12);
    border-color: var(--primary-cyan);
    transform: translateY(-3px);
  }
`;

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <ContactSection id="contact" ref={ref}>
      <SectionTitle
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        Get In Touch
      </SectionTitle>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <ContactContent>
          <ContactInfo variants={itemVariants}>
            <ContactItem
              whileHover={{ scale: 1.02 }}
            >
              <ContactIcon>
                <FaEnvelope />
              </ContactIcon>
              <ContactText>
                <h4>Email</h4>
                <p>rahul@example.com</p>
              </ContactText>
            </ContactItem>

            <ContactItem
              whileHover={{ scale: 1.02 }}
            >
              <ContactIcon>
                <FaPhone />
              </ContactIcon>
              <ContactText>
                <h4>Phone</h4>
                <p>+91 12345 67890</p>
              </ContactText>
            </ContactItem>

            <ContactItem
              whileHover={{ scale: 1.02 }}
            >
              <ContactIcon>
                <FaMapMarkerAlt />
              </ContactIcon>
              <ContactText>
                <h4>Location</h4>
                <p>India</p>
              </ContactText>
            </ContactItem>
          </ContactInfo>

          <ContactForm
            variants={itemVariants}
            onSubmit={handleSubmit}
          >
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="subject">Subject</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                required
              />
            </FormGroup>

            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </SubmitButton>
          </ContactForm>
        </ContactContent>

        <SocialLinks>
          <SocialLink
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </SocialLink>
          <SocialLink
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </SocialLink>
          <SocialLink
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaTwitter />
          </SocialLink>
        </SocialLinks>
      </motion.div>
    </ContactSection>
  );
};

export default Contact;
