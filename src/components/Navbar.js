import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 2rem;
  background: rgba(15, 15, 15, 0.9);
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-gray);
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${props => props.isOpen ? '0' : '-100%'};
    width: 70%;
    height: 100vh;
    background: rgba(15, 15, 15, 0.95);
    backdrop-filter: blur(10px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: right 0.3s ease;
    gap: 3rem;
  }
`;

const NavLink = styled(motion.a)`
  color: #ffffff;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;
  position: relative;

  &:hover {
    color: var(--primary-gray);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary-gray);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const MenuToggle = styled.div`
  display: none;
  font-size: 1.5rem;
  color: #ffffff;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <Nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        background: scrolled 
          ? 'rgba(12, 12, 12, 0.95)' 
          : 'rgba(12, 12, 12, 0.7)'
      }}
    >
      <NavContainer>
        <Logo
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection('hero')}
        >
          Portfolio
        </Logo>

        <NavLinks isOpen={isOpen}>
          <NavLink
            whileHover={{ y: -2 }}
            onClick={() => scrollToSection('hero')}
          >
            Home
          </NavLink>
          <NavLink
            whileHover={{ y: -2 }}
            onClick={() => scrollToSection('about')}
          >
            About
          </NavLink>
          <NavLink
            whileHover={{ y: -2 }}
            onClick={() => scrollToSection('skills')}
          >
            Skills
          </NavLink>
          <NavLink
            whileHover={{ y: -2 }}
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </NavLink>
          <NavLink
            whileHover={{ y: -2 }}
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </NavLink>
        </NavLinks>

        <MenuToggle onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MenuToggle>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
